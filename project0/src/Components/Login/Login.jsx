import React, { Component } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';


    
function Login(){
 

    return(
        <div className='k'>
            <Navbar/>
        <div   className='loginsignup'>
            
            <form >
        <div className="loginsignup-container-e">
            <h2>LOGIN</h2>
            <div className="loginsignup-fields">
                <input type='text' placeholder='Your Name' 
                onChange={e =>this.setState({fname:e.target.value})}/>
                <input type='password' placeholder='Password' 
                onChange={e =>this.setState({password:e.target.value})}/>
                
                <button className='bt' type="submit">Continue</button>
            </div>
           
        <p className="loginsignup-login">Not a member? <Link to='/Signup'><span>signup</span></Link></p>
        <div className="loginsignup-agree">
            <input type='checkbox' name='' id=''/>
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        </div>
        </form>
        </div>
        <Footer/>
        </div>
    )
}
export default Login;
