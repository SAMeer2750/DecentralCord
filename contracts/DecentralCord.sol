// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

contract discord {
    struct Message {
        address sender;
    }

    struct Channel {
        uint256 channelId;
        string channelName;
    }

    struct Server {
        uint256 serverId;
        string serverName;
        address Owner;
    }

    mapping(uint256 => Server) public servers;
    mapping(uint256 => Channel) public channels;
    mapping(uint256 => Channel[]) public ServerChannels;

    Server[] allServers;
    uint256 serverCount = 1;
    uint256 channelCount = 1;

    function createServer(string memory _serverName) public {
        address owner = msg.sender;
        uint256 serverId = serverCount;
        Server memory server = Server(serverId, _serverName, owner);
        servers[serverId] = server;
        allServers.push(server);
        serverCount++;
    }

    function createChannel(string memory _channelName, uint256 _serverId)
        public
    {
        uint256 channelId = channelCount;
        Channel memory channel = Channel(channelId, _channelName);
        channels[channelId] = channel;
        ServerChannels[_serverId].push(channel);
        channelCount++;
    }

    function getAllServers() public view returns (Server[] memory) {
        return (allServers);
    }

    function getChannels(uint256 _serverId)
        public
        view
        returns (Channel[] memory)
    {
        return (ServerChannels[_serverId]);
    }
}
