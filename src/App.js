import './App.scss';
import Form from './components/Form';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import LoggedIn from './components/LoggedIn';


function App() {
  let existData = localStorage.getItem('LoginData')
  return (
    <Router>
      <Navbar/>
      {!existData && <SignUp/>}
      <main>
        <Routes>
          {existData && <Route path="/" element={<LoggedIn/>} />}
          <Route path="/Signin" element={<SignIn/>} />
          <Route path="/Signup" element={<SignUp/>} />
          <Route path="/Loggedin" element={<LoggedIn/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
