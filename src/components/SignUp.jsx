import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import bsman from '../assets/bm.png'
import fb from '../assets/fb.png'
import tree from '../assets/tree.png'
import ggle from '../assets/ggle.svg'

function SignUp() {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [username, setUsername] = useState(null);
    const [phone, setPhone] = useState(null);
    const [password, setPassword] = useState(null);
    const [gender, setGender] = useState(null);
    const [date, setDate] = useState(null);

    const onChangeName = (e) =>{
        setName(e.target.value)
      }
    const onChangeEmail = (e) =>{
        setEmail(e.target.value)
      }
    const onChangeUsername = (e) =>{
        setUsername(e.target.value)
      }
    const onChangePhone = (e) =>{
        setPhone(e.target.value)
      }
    const onChangePassword = (e) =>{
        setPassword(e.target.value)
      }
    const onChangeGender = (e) =>{
        setGender(e.target.value)
      }
    const onChangeDate = (e) =>{
        setDate(e.target.value)
      }

    function submitHandler(e) {
        e.preventDefault();
        let object = {
            name : name,
            email: email,
            username: username,
            phone: phone,
            password: password,
            gender: gender,
            date: date,
        }
        let existData = localStorage.getItem('data');
        if(existData==null){
            existData = []
            existData.push(object)
            localStorage.setItem('data', JSON.stringify(existData));
        }else{
            let existArray = JSON.parse(existData)
            existArray.push(object)
            localStorage.setItem("data", JSON.stringify(existArray))
            console.log(existArray,'hhg')
        }
        // console.log(object)
      }

    return (
        <div className="container">
            <div className="form-left">
                <form action=""            className="form">
                    <h2 className= "form-heading">Join us Now</h2>
                    <p className= "form-text"> Please provide the following information to  signup</p>
                    <div className="input-wrap">
                        <label htmlFor="name">Full Name</label> <br/>
                        <input type="text" placeholder="eg. John Doe" id="name" name="name" onChange={onChangeName}/>
                    </div>
                    <div className="input-wrap">
                        <label htmlFor="email">Email</label> <br/>
                        <input type="email" placeholder="eg. johndoe@example.com"  id="email" onChange={onChangeEmail}/>
                    </div>
                    <div className="input-wrap">
                        <label htmlFor="username">User Name</label> <br/>
                        <input type="text" 
                        placeholder="eg. Johndoe123"  id="username" onChange={onChangeUsername}/>
                    </div>
                    <div className="input-wrap">
                        <label htmlFor="phone">Phone Number</label> <br/>
                        <input type="text" 
                        placeholder="eg. 10827994090"  id="phone" onChange={onChangePhone}/>
                    </div>
                    <div className="input-wrap">
                        <label htmlFor="password">Password</label> <br/>
                        <input type="password" 
                         placeholder="*******"  id="password" onChange={onChangePassword}/>
                    </div>
                    <div className="input-wrap-two">
                        <div className="input-wrap">
                            <label htmlFor="gender">Gender</label> <br/>
                            <select name="gender" id="gender" onChange={onChangeGender}>
                                <option value="male">MALE</option>
                                <option value="female">FEMALE</option>
                            </select>
                        </div>
                        <div className="input-wrap">
                            <label htmlFor="date">Date Of Birth</label> <br/>
                            <input type="date" id="date" style={{textTransform: "uppercase"}} onChange={onChangeDate}/>
                        </div>
                    </div>
                    <button className="btn" onClick={submitHandler}>
                        Sign Up
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

