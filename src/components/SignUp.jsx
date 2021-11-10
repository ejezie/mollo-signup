import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import bsman from '../assets/bm.png'
import fb from '../assets/fb.png'
import tree from '../assets/tree.png'
import ggle from '../assets/ggle.svg'

function SignUp() {
    const [inputItems, setInputItems] = useState({
            name : "",
            email: "",
            username: "",
            phone: "",
            password: "",
            gender: "",
            date: "",
    })

    const handleChange = (e) => {
        setInputItems({...inputItems, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const object = 
        {
            email: inputItems.email, 
            name: inputItems.name,
            username: inputItems.username,
            password: inputItems.password,
            phone: inputItems.phone,
            gender: inputItems.gender,
            date: inputItems.date
        }
        localStorage.setItem("LoginData", JSON.stringify(object))
        console.log(object)
      }

    return (
        <div className="container">
            <div className="form-left">
                <form action=""            className="form">
                    <h2 className= "form-heading">Join us Now</h2>
                    <p className= "form-text"> Please provide the following information to  signup</p>
                    <div className="input-wrap">
                        <label htmlFor="name">Full Name</label> <br/>
                        <input type="text" placeholder="eg. John Doe" id="name" name="name" onChange={(e) => handleChange(e) }/>
                    </div>
                    <div className="input-wrap">
                        <label htmlFor="email">Email</label> <br/>
                        <input type="email" placeholder="eg. johndoe@example.com" name="email" id="email" onChange={(e) => handleChange(e) }/>
                    </div>
                    <div className="input-wrap">
                        <label htmlFor="username">User Name</label> <br/>
                        <input type="text" 
                        placeholder="eg. Johndoe123"  id="username" name="username" onChange={(e) => handleChange(e) }/>
                    </div>
                    <div className="input-wrap">
                        <label htmlFor="phone">Phone Number</label> <br/>
                        <input type="text" 
                        placeholder="eg. 10827994090"  id="phone" name="phone" onChange={(e) => handleChange(e) }/>
                    </div>
                    <div className="input-wrap">
                        <label htmlFor="password">Password</label> <br/>
                        <input type="password" 
                         placeholder="*******"  id="password" name="password" onChange={(e) => handleChange(e) }/>
                    </div>
                    <div className="input-wrap-two">
                        <div className="input-wrap">
                            <label htmlFor="gender">Gender</label> <br/>
                            <select name="gender" id="gender" name="gender" onChange={(e) => handleChange(e) }>
                                <option value="male">MALE</option>
                                <option value="female">FEMALE</option>
                            </select>
                        </div>
                        <div className="input-wrap">
                            <label htmlFor="date">Date Of Birth</label> <br/>
                            <input type="date" id="date" name="date" style={{textTransform: "uppercase"}} onChange={(e) => handleChange(e) }/>
                        </div>
                    </div>
                    <button className="btn" onClick={onSubmit}>
                    <Link className="link" to="/Signin">Sign Up</Link>
                    </button>
                    <p className="text">Already have an account? <Link className="link" to="/Signin">Login</Link></p>
                    <p className="text-two">Or</p>
                    <button className="btn-two mod-one">
                        <img src={fb} className="fb-img" alt="facebook-logo" /> 
                        <p className="btn-text">Continue with facebook</p>
                    </button>
                    <button className="btn-two mod-two">
                        <img src={ggle} className="google-img"  alt="google-logo" /> 
                        <p className="btn-text">Continue with Google</p>
                    </button>
                </form>
            </div>
            <div className="form-right">
                <div className="img-wrap">
                    <img src={bsman} alt="man" className="bman"/>
                    <img src={tree} alt="tree" className="tree" />
                </div>
            </div>
        </div>
    )
}

export default SignUp

