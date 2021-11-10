import React from 'react'
import { Link } from 'react-router-dom'
// import bsman from '../assets/bm.png'
// import fb from '../assets/fb.png'
// import tree from '../assets/tree.png'
// import ggle from '../assets/ggle.svg'

function Form() {
    return (
        <div className="form">
           <Link to="/Signup">
            <h3>sign up</h3>
          </Link>
           <Link to="/Signin">
            <h3>sign in</h3>
          </Link>
        </div>
    )
}

export default Form
