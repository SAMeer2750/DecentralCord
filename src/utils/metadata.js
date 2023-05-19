const contractAddress = "0xAB1F03301987C0CDf8b55BBf424aE10656ca34e4"
const contractABI = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "ChannelServer",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_msgId",
                type: "uint256",
            },
        ],
        name: "ReportMessage",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "ServerChannels",
        outputs: [
            {
                internalType: "uint256",
                name: "channelId",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "channelName",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "UserServers",
        outputs: [
            {
                internalType: "uint256",
                name: "serverId",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "serverName",
                type: "string",
            },
            {
                internalType: "address",
                name: "Owner",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_mod",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_serverId",
                type: "uint256",
            },
        ],
        name: "addModerators",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "channelMessages",
        outputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "string",
                name: "userName",
                type: "string",
            },
            {
                internalType: "string",
                name: "message",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "timeStamp",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "msgId",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "deleted",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "channels",
        outputs: [
            {
                internalType: "uint256",
                name: "channelId",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "channelName",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_add",
                type: "address",
            },
        ],
        name: "checkAddressAlreadyExist",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_userName",
                type: "string",
            },
        ],
        name: "createAccount",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_channelName",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "_serverId",
                type: "uint256",
            },
        ],
        name: "createChannel",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_serverName",
                type: "string",
            },
        ],
        name: "createServer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_serverId",
                type: "uint256",
            },
        ],
        name: "enterServer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getAllServers",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "serverId",
                        type: "uint256",
                    },
                    {
                        internalType: "string",
                        name: "serverName",
                        type: "string",
                    },
                    {
                        internalType: "address",
                        name: "Owner",
                        type: "address",
                    },
                ],
                internalType: "struct DecentralCord.Server[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_channelId",
                type: "uint256",
            },
        ],
        name: "getChannelMessages",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address",
                    },
                    {
                        internalType: "string",
                        name: "userName",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "message",
                        type: "string",
                    },
                    {
                        internalType: "uint256",
                        name: "timeStamp",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "msgId",
                        type: "uint256",
                    },
                    {
                        internalType: "bool",
                        name: "deleted",
                        type: "bool",
                    },
                ],
                internalType: "struct DecentralCord.Message[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_serverId",
                type: "uint256",
            },
        ],
        name: "getChannels",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "channelId",
                        type: "uint256",
                    },
                    {
                        internalType: "string",
                        name: "channelName",
                        type: "string",
                    },
                ],
                internalType: "struct DecentralCord.Channel[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_serverId",
                type: "uint256",
            },
        ],
        name: "getServerMembers",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "profileAdd",
                        type: "address",
                    },
                    {
                        internalType: "string",
                        name: "userName",
                        type: "string",
                    },
                ],
                internalType: "struct DecentralCord.Profile[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_serverId",
                type: "uint256",
            },
        ],
        name: "getServerMods",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getUser",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getUserServers",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "serverId",
                        type: "uint256",
                    },
                    {
                        internalType: "string",
                        name: "serverName",
                        type: "string",
                    },
                    {
                        internalType: "address",
                        name: "Owner",
                        type: "address",
                    },
                ],
                internalType: "struct DecentralCord.Server[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "ifAddReported",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_channelId",
                type: "uint256",
            },
        ],
        name: "isInServer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "message",
        outputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "string",
                name: "userName",
                type: "string",
            },
            {
                internalType: "string",
                name: "message",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "timeStamp",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "msgId",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "deleted",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "messageChannel",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "moderators",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "msgReports",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_message",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "_channelId",
                type: "uint256",
            },
        ],
        name: "sendMessage",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "serverMembers",
        outputs: [
            {
                internalType: "address",
                name: "profileAdd",
                type: "address",
            },
            {
                internalType: "string",
                name: "userName",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "servers",
        outputs: [
            {
                internalType: "uint256",
                name: "serverId",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "serverName",
                type: "string",
            },
            {
                internalType: "address",
                name: "Owner",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "user",
        outputs: [
            {
                internalType: "address",
                name: "profileAdd",
                type: "address",
            },
            {
                internalType: "string",
                name: "userName",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
]

export {contractABI, contractAddress}