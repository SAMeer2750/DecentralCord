// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

contract DecentralCord{

    struct Profile{
        address profileAdd;
        string userName;
    }

    struct Message{
        address sender;
        string userName;
        string message;
        uint256 timeStamp;
        uint256 msgId;
        bool deleted;
    }
    
    struct Channel{
        uint256 channelId;
        string channelName;
    }

    struct Server{
        uint256 serverId;
        string serverName;
        address Owner;
    }

    mapping(address => Profile) public user; // user address to profiles
    mapping(uint256 => Server) public servers; // server Id to Servers
    mapping(uint256 => Channel) public channels; // channel Id to Channels
    mapping(uint256 => Channel[]) public ServerChannels; // server Id to Channel
    mapping(uint256 => uint256) public ChannelServer; // channel Id to Server
    mapping(address => Server[]) public UserServers; // user Address to servers
    mapping(uint256 => address[]) public moderators; // Server ID to moderators
    mapping(uint256 => Message[]) public channelMessages; // channel Id to Messages
    mapping(uint256 => Profile[]) public serverMembers; // serverID to Profiles
    mapping(uint256 => Message) public message; // msg Id to Message
    mapping(uint256 => uint256) public msgReports; // msg Id to no. of reports
    mapping(uint256 => uint256) public messageChannel; // msg Id to channel ID;


    Server[] allServers;
    Profile[] Users;
    uint256 serverCount = 1;
    uint256 channelCount = 1;

    function checkAddressAlreadyExist(address _add)public view returns(bool){
        return(bytes(user[_add].userName).length > 0);
    }

    function isInServer(uint256 _channelId) public view returns (bool) {
        uint256 serverId =  ChannelServer[_channelId];
        Profile[] memory members = serverMembers[serverId];
        for (uint256 i = 0; i < members.length; i++) {
            if (members[i].profileAdd == msg.sender) {
                return true;
            }
        }
        return false;
   }


    function createAccount(string memory _userName) public {
        require(!checkAddressAlreadyExist(msg.sender) , "User Already Exist");
        require(bytes(_userName).length > 8 , "User name must have more than 8 characters");
        user[msg.sender] = Profile(msg.sender, _userName);
        Users.push(Profile(msg.sender, _userName));
    }

    function createServer(string memory _serverName)public{
        address owner = msg.sender;
        uint256 serverId = serverCount;
        Server memory server = Server(serverId, _serverName, owner); 
        servers[serverId] = server;
        addModerators(msg.sender,serverId);
        allServers.push(server);
        serverCount++;
    }

    function addModerators(address _mod, uint256 _serverId) public {
        require(msg.sender == servers[_serverId].Owner , "You do not have the access");
        UserServers[_mod].push(servers[_serverId]);
        moderators[_serverId].push(_mod);
        uint256 ServerID = _serverId;
        UserServers[_mod].push(servers[ServerID]);
        serverMembers[_serverId].push(user[_mod]);
    }
    
    function createChannel(string memory _channelName, uint256 _serverId) public {
        for(uint256 i = 0 ; i < moderators[_serverId].length ; i++){
            if((msg.sender == servers[_serverId].Owner) || (msg.sender == moderators[_serverId][i])){
                uint256 channelId = channelCount;
                Channel memory channel = Channel(channelId, _channelName);
                channels[channelId] = channel;
                ServerChannels[_serverId].push(channel);
                ChannelServer[channelId] = _serverId;
                channelCount++;
            }
        }  
    }

    function sendMessage(string memory _message, uint256 _channelId) public{
        require(checkAddressAlreadyExist(msg.sender) , "User doesnot exist Exist");
        require(isInServer(_channelId), "your not in the server");
        uint256 _msgId = channelMessages[_channelId].length + 1;
        Message memory Msg = Message(msg.sender, user[msg.sender].userName, _message, block.timestamp, _msgId,false);
        channelMessages[_channelId].push(Msg);
        message[_msgId] = Msg;
        messageChannel[_msgId] = _channelId;
    }

    function deleteMessage(uint256 _msgId) internal {
        address Sender = message[_msgId].sender;
        string memory _message = "This Message has been removed by admin";
        uint256 time = message[_msgId].timeStamp;
        Message memory Msg = Message(Sender, user[Sender].userName, _message, time, _msgId,true);
        message[_msgId] = Msg;
        channelMessages[messageChannel[_msgId]][_msgId-1] = Msg;
    }

    function ReportMessage(uint256 _msgId) public{
        for (uint256 i = 0 ; i < moderators[ChannelServer[messageChannel[_msgId]]].length ; i++) {
            if(msg.sender == moderators[ChannelServer[messageChannel[_msgId]]][i]){
                msgReports[_msgId] = msgReports[_msgId] + 1;
                if(msgReports[_msgId] > ((moderators[ChannelServer[messageChannel[_msgId]]].length*8)/10)){
                    deleteMessage(_msgId);
                }
            }
        }
    }

    function enterServer(uint256 _serverId) public {
        uint256 ServerID = _serverId;
        UserServers[msg.sender].push(servers[ServerID]);
        serverMembers[_serverId].push(user[msg.sender]);
    }

    function getAllServers() public view returns(Server[] memory){
        return(allServers);
    }
    
    function getChannels(uint256 _serverId) public view returns(Channel[] memory) {
        return(ServerChannels[_serverId]);
    }

    function getServerMods(uint256 _serverId) public view returns(address[] memory){
        return(moderators[_serverId]);
    }

    function getServerMembers(uint256 _serverId) public view returns(Profile[] memory){
        return(serverMembers[_serverId]);
    }

    function getChannelMessages(uint256 _channelId) public view returns(Message[] memory) {
        return(channelMessages[_channelId]);
    }
}
