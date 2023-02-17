import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from "./pages/SignUp"
import JoinServer from "./pages/JoinServer"
import Chat from "./pages/Chat"
import { ethers } from "ethers"
import { useState, useEffect } from "react"

function App() {
    const [provider, setProvider] = useState(null)
    const [account, setAccount] = useState(null)

    const LoadBlockchainData = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        setProvider(provider)
        const network = await provider.getNetwork()
        window.ethereum.on("accountChanged", async () => {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            })
            const account = ethers.utils.getAddress(accounts[0])
            setAccount(account)
        })
    }

    useEffect(()=>{
      LoadBlockchainData()
    },[])

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<SignUp account={account} setAccount={setAccount} />}
                    />
                    <Route path="Chat" element={<Chat />} />
                    <Route path="JoinServer" element={<JoinServer />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
