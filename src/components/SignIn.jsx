import React, {useState, useEffect} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import bsman from '../assets/bm.png'
import fb from '../assets/fb.png'
import tree from '../assets/tree.png'
import ggle from '../assets/ggle.svg'

function SignIn() {
    let navigate = useNavigate()
    const [error, setError] = useState(false);
   const [inputValues, setInputValues] = useState({
       email: "",
       password: "",
   })

   const handleChange = (e) => {
       setInputValues({...inputValues, [e.target.name]: e.target.value})
   }

    const onSubmit = (e) => {
        e.preventDefault()
        checkExistingUser()
        setThError()
      }

      const checkExistingUser = () => {
        let existData = localStorage.getItem('LoginData')
        if (existData) existData = JSON.parse(existData)
        console.log(existData, "<New exist Data", inputValues, "<inputvalues")
        if(existData && (existData.email === inputValues.email && existData.password === inputValues.password)){
            navigate("/Loggedin")
        }  else console.log("error")
      }
      const setThError = () => {
        setError(true)
      }
      useEffect(() => {
       checkExistingUser()
        // eslint-disable-next-line
      }, [])

    return (
        <div className="container">
        <div className="form-left">
            <form action="" className="form">
                <h2 className= "form-heading">Welcome Back</h2>
                <p className= "form-text"> Please provide the following information to  Login</p>
                <div className="input-wrap">
                    <label htmlFor="email">Email</label> <br/>
                    <input 
                        type="email" 
                        placeholder="eg. johndoe@example.com"  
                        id="email" 
                        name="email"
                        onChange={(e) => handleChange(e) }/>
                </div>
                <div className="input-wrap">
                    <label htmlFor="password">Password</label> <br/>
                    <input 
                        type="password" 
                        placeholder="*******"  
                        id="password" 
                        name="password"
                        onChange={(e) => handleChange(e) }/>
                </div>
                <p>{error && "Account not found"}</p>
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

