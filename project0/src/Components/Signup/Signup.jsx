import React, { Component } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';



function Signup(){


    return(
        <div className='th'>
            <Navbar/>
        <div className='loginsignup'>
            <form >
        <div className="loginsignup-container">
            <h1>Sign Up</h1>
            <div className="loginsignup-fields-second">
                <input onChange={e=>this.setState({fname:e.target.value})} 
                 type='text' placeholder='Your Name'/>
                <input onChange={e=>this.setState({email:e.target.value})}
                type='email' placeholder='Email Address'/>
                <input onChange={e=>this.setState({password:e.target.value})}
                 type='password'placeholder='Password'/>
                <button type="submit">Continue</button>
            </div>
           
        <p className="loginsignup-login">Already have an account? <Link to='/Login'><span>Login here</span></Link></p>
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
    export default Signup;
