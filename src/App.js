import './App.scss';
import Form from './components/Form';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


function App() {
  return (
    <Router>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Form/>} />
          <Route path="/Signin" element={<SignIn/>} />
          <Route path="/Signup" element={<SignUp/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
