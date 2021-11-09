import React from 'react'
// import logo from '../assets/logo.svg'
import bsman from '../assets/bm.png'
import fb from '../assets/fb.png'
import tree from '../assets/tree.png'
import ggle from '../assets/ggle.svg'
// import SignIn from './SignIn'
// import SignUp from './SignUp'

function Form() {
    return (
        <div className="container">
            {/* <div className="navbar">
                <img src={logo} alt="logo" />
                <p>Relate</p>
            </div> */}
            <div className="form-left">
                <form action=""            className="form">
                    <h2 className= "form-heading">Join us Now</h2>
                    <p className= "form-text"> Please provide the following information to  signup</p>
                    <div className="input-wrap">
                        <label htmlFor="name">Full Name</label> <br/>
                        <input type="text" placeholder="eg. John Doe" id="name" />
                    </div>
                    <div className="input-wrap">
                        <label htmlFor="email">Email</label> <br/>
                        <input type="email" placeholder="eg. johndoe@example.com"  id="email" />
                    </div>
                    <div className="input-wrap">
                        <label htmlFor="username">User Name</label> <br/>
                        <input type="text" 
                        placeholder="eg. Johndoe123"  id="username"/>
                    </div>
                    <div className="input-wrap">
                        <label htmlFor="phone">Phone Number</label> <br/>
                        <input type="text" 
                        placeholder="eg. 10827994090"  id="phone" />
                    </div>
                    <div className="input-wrap">
                        <label htmlFor="password">Password</label> <br/>
                        <input type="password" 
                         placeholder="*******"  id="password" />
                    </div>
                    <div className="input-wrap-two">
                        <div className="input-wrap">
                            <label htmlFor="gender">Gender</label> <br/>
                            <select name="gender" id="gender">
                                <option value="">MALE</option>
                                <option value="">FEMALE</option>
                            </select>
                        </div>
                        <div className="input-wrap">
                            <label htmlFor="date">Date Of Birth</label> <br/>
                            <input type="date" id="date" style={{textTransform: "uppercase"}}/>
                        </div>
                    </div>
                    <button className="btn">
                        Sign Up
                    </button>
                    <p className="text">Already have an account? <a className="link" href="">Login</a></p>
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
                    <img src={bsman} alt="man" />
                    <img src={tree} alt="tree" className="tree" />
                </div>
            </div>
        </div>
    )
}

export default Form
