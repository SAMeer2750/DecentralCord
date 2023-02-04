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
    mapping(address => Server[]) public UserServers;//user Address to servers
    mapping(uint256 => address[]) public moderators;//Server ID to moderators
    mapping(uint256 => Message[]) public channelMessages;//channel Id to Messages


    Server[] allServers;
    Profile[] Users;
    uint256 serverCount = 1;
    uint256 channelCount = 1;

    function checkAddressExist(address _add)public view returns(bool){
        return(bytes(user[_add].userName).length > 0);
    }

    function createAccount(string memory _userName) public {
        require(!checkAddressExist(msg.sender) , "User Already Exist");
        require(bytes(_userName).length > 8 , "User name must have more than 8 characters");
        user[msg.sender] = Profile(msg.sender, _userName);
        Users.push(Profile(msg.sender, _userName));
    }

    function createServer(string memory _serverName)public{
        address owner = msg.sender;
        uint256 serverId = serverCount;
        Server memory server = Server(serverId, _serverName, owner); 
        servers[serverId] = server;
        allServers.push(server);
        serverCount++;
    }

    function addModerators(address _mod, uint256 _serverId) public {
        require(msg.sender == servers[_serverId].Owner , "You do not have the access to create channel");
        moderators[_serverId].push(_mod);
    }
    
    function createChannel(string memory _channelName, uint256 _serverId) public {
        for(uint256 i = 0 ; i < moderators[_serverId].length ; i++){
            if(msg.sender == servers[_serverId].Owner ||msg.sender == moderators[_serverId][i]){
                uint256 channelId = channelCount;
                Channel memory channel = Channel(channelId, _channelName);
                channels[channelId] = channel;
                ServerChannels[_serverId].push(channel);
                channelCount++;
            }
        }    
    }

    function sendMessage(string memory _message, uint256 _channelId) public{
        require(checkAddressExist(msg.sender) , "User doesnot exist Exist");
        Message memory message = Message(msg.sender, user[msg.sender].userName, _message, block.timestamp);
        channelMessages[_channelId].push(message);
    }

    function enterServer(uint256 _serverId) public {
        uint256 ServerID = _serverId;
        UserServers[msg.sender].push(servers[ServerID]);
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

    function getChannelMessages(uint256 _channelId) public view returns(Message[] memory) {
        return(channelMessages[_channelId]);
    }
}
