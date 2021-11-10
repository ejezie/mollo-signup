import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { LoginData } from '../Helpers/Context'
import bsman from '../assets/bm.png'
import fb from '../assets/fb.png'
import tree from '../assets/tree.png'
import ggle from '../assets/ggle.svg'

function SignIn() {
    let [name, setName] = useState(null);
    let [email, setEmail] = useState(null);
    let [username, setUsername] = useState(null);
    let [phone, setPhone] = useState(null);
    let [password, setPassword] = useState(null);
    let [gender, setGender] = useState(null);
    let [date, setDate] = useState(null);
    let [error, setError] = useState(null);
    let [user, setUser] = useState(false);

    const onChangeEmail = (e) =>{
        setEmail(e.target.value)
      }

    const onChangePassword = (e) =>{
        setPassword(e.target.value)
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        let existData = localStorage.getItem('data')
        let existArray = JSON.parse(existData)
        existArray.map(array => 
          {
            if(email.length > 0 && password.length > 0){
              if (array.email === email && (array.password === password)) {
                name = setName(array.name)
                username = setUsername(array.username)
                phone = setPhone(array.phone)
                gender = setGender(array.gender)
                date = setDate(array.date)
                user = setUser(true)
                console.log(phone)
              }else{
                error = setError('Please check your email or password')
              }
            }
          }
          )
      }
    return (
        <div className="container">
        <div className="form-left">
            <form action="" className="form">
                <h2 className= "form-heading">Welcome Back</h2>
                <p className= "form-text"> Please provide the following information to  Login</p>
                <div className="input-wrap">
                    <label htmlFor="email">Email</label> <br/>
                    <input type="email" placeholder="eg. johndoe@example.com"  id="email" onChange={onChangeEmail}/>
                </div>
                <div className="input-wrap">
                    <label htmlFor="password">Password</label> <br/>
                    <input type="password" 
                     placeholder="*******"  id="password" onChange={onChangePassword}/>
                </div>
                <button className="btn" onClick={onSubmit}>
                    Sign In
                </button>
                <p className="text">Don't have an account? <Link className="link" to="/Signup">Create Account</Link></p>
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

export default SignIn

