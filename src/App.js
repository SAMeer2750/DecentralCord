import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from './pages/SignUp';
import JoinServer from './pages/JoinServer';
import Chat from './pages/Chat';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp/>}/>
        <Route path="Chat" element={<Chat/>}/>
        <Route path="JoinServer" element={<JoinServer/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
