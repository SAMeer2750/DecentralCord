// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

contract DecentralCord{

    error DecentralCord__NoAccess();

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
        uint256 noOfReports;
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

    mapping(address => Profile) public user;//user address to profiles
    mapping(uint256 => Server) public servers;//server Id to Servers
    mapping(uint256 => Channel) public channels;//channel Id to Channels
    mapping(uint256 => Channel[]) public ServerChannels;//server Id to Channel
    mapping(uint256 => uint256) public ChannelServer;//channel Id to Server
    mapping(address => Server[]) public UserServers;//user Address to servers
    mapping(uint256 => address[]) public moderators;//Server ID to moderators
    mapping(uint256 => Message[]) public channelMessages;//channel Id to Messages
    mapping(uint256 => Profile[]) public serverMembers;//serverID to Profiles
    mapping(uint256 => Message) public message;//msg Id to Message
    mapping(uint256 => uint256) public messageChannel;//msg Id to channel ID;
    mapping(address => mapping(uint256 => bool)) public ifAddReported;//Address to msgId to Bool(if reported)


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
        enterServer(serverId);
        allServers.push(server);
        serverCount++;
    }

    function addModerators(address _mod, uint256 _serverId) public {
        require(msg.sender == servers[_serverId].Owner , "You do not have the access to create channel");
        UserServers[_mod].push(servers[_serverId]);
        moderators[_serverId].push(_mod);
        enterServer(_serverId);
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
        revert DecentralCord__NoAccess();    
    }

    function sendMessage(string memory _message, uint256 _channelId) public{
        require(checkAddressAlreadyExist(msg.sender) , "User doesnot exist Exist");
        require(isInServer(_channelId), "your not in the server");
        uint256 _msgId = channelMessages[_channelId].length + 1;
        Message memory Msg = Message(msg.sender, user[msg.sender].userName, _message, block.timestamp, _msgId,false,0);
        channelMessages[_channelId].push(Msg);
        messageChannel[_msgId] = (_channelId);
        message[_msgId] = Msg;
    }

    function deleteMessage(uint256 _msgId) internal {
        message[_msgId].message="This Message has been removed by admin";
        message[_msgId].deleted = true;
    }

    function ReportMessage(uint256 _msgId) public{
         uint256 channelId = messageChannel[_msgId];
         uint256 serverId = ChannelServer[channelId];
        for(uint256 i = 0 ; i < moderators[serverId].length ; i++){
            if((msg.sender == servers[serverId].Owner || msg.sender == moderators[serverId][i]) && (ifAddReported[msg.sender][_msgId] = false)){
                message[_msgId].noOfReports++; 
                ifAddReported[msg.sender][_msgId] = true;
                if(message[_msgId].noOfReports >= ((moderators[serverId].length + 1)*8)/10){
                    deleteMessage(_msgId);
                }
            }
        }
        revert DecentralCord__NoAccess();    
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
