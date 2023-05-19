import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from "./pages/SignUp"
import JoinServer from "./pages/JoinServer"
import Chat from "./pages/Chat"
import Profile from "./pages/Profile"
import { ethers } from "ethers"
import { useState, useEffect } from "react"
import { contractABI, contractAddress } from "./utils/metadata"


function App() {
    const [provider, setProvider] = useState(null)
    const [account, setAccount] = useState(null)
    const [contract, setContract]  = useState(null)
    const [user, setUser] = useState(null)
    const [userServers, setUserServers] = useState(null)

    const LoadBlockchainData = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        setProvider(provider)
        const network = await provider.getNetwork()
		const signer = provider.getSigner()
        window.ethereum.on("accountChanged", async () => {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            })
            const account = ethers.utils.getAddress(accounts[0])
            setAccount(account)
        })

		const Contract = new ethers.Contract(contractAddress, contractABI, signer)
		setContract(Contract);
    }

    const getUserData = async () => {
        const tx = await contract.getUser();
        setUser(tx);
    }

    const getUserServers = async () => {
        const getUserServerTx = await contract.getUserServers()
        setUserServers(getUserServerTx)
        console.log(userServers)
    }

    useEffect(()=>{
        LoadBlockchainData()
        // getUserData()
    },[])

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <SignUp account={account} setAccount={setAccount} contract={contract} />
                        }
                    />
                    <Route
                        path="Chat"
                        element={
                            <Chat
                                account={account}
                                contract={contract}
                                user={user}
                                setUSer={setUser}
                                getUserData={getUserData}
                                getUserServers={getUserServers}
                            />
                        }
                    />
                    <Route
                        path="JoinServer"
                        element={<JoinServer account={account} contract={contract} user={user} />}
                    />
                    <Route path="Profile" element={<Profile account={account} user={user} />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
