// import NavigationBar from "./components/navigation";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import IndividualSong from "./components/individualSong";
import Redirect from "./components/error";
function App() {
  const [isLoggedin, setLoggedin] = useState(false);
  const [username, setUsername] = useState("");
  const [tokken, setTokken] = useState();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home isLoggedin = {isLoggedin} username = {username} tokken = {tokken} setLoggedin = {setLoggedin} setUsername = {setUsername} setTokken = {setTokken}/>} />
        <Route path="/signin" element={<SignIn setLoggedin = {setLoggedin} setUsername = {setUsername} setTokken = {setTokken}/>} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/song/:id" element={<IndividualSong tokken = {tokken} isLoggedin = {isLoggedin}/>}/>
        <Route path="*" element={<Redirect/>}/>
      </Routes>
    </Router>
  );
}

export default App;
