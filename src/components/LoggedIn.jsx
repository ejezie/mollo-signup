import React from 'react';
import tree from '../assets/tree.png';
import { Link} from 'react-router-dom'

function LoggedIn() {
    let existData = localStorage.getItem('LoginData')
    const handleClick = () => {
        localStorage.removeItem('LoginData')
    }
    if (existData) existData = JSON.parse(existData)
    return (
        <div className="loggedin">
            <h2>WELCOME <span className="color">'{existData && existData.name}'</span></h2>
            <p>Email: {existData && existData.email}</p>
            <p>User Name: {existData && existData.username}</p>
            <p>Phone: {existData && existData.phone}</p>
            <p>Date Chosen: {existData && existData.date}</p>
            <p>Gender: {existData && existData.gender}</p>
            <img src={tree} alt="" />
            <Link to="/Signin">Log Out</Link>
            {/* <button onClick={handleClick}><Link to="/Signup">Delete Account</Link></button> */}
        </div>

    )
}

export default LoggedIn
