import React from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {Link, useNavigate } from "react-router-dom";
import axios from 'axios';
export default function Login() {
    const navigate = useNavigate();
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      // console.log(Email,Password)
      axios.post('https://localhost:7126/api/login',{
            Email:Email,
            Password:Password,
          
        })
        .then(async (res)=>{
            console.log(res.data);
           await window.localStorage.setItem("UserData",JSON.stringify(res.data));
            navigate(`/landingPage`);
        })
        .catch((err)=>{

            console.log("error in logging",err);
            window.alert('Invalid Credential');
            // navigate(`/login`);
        })

      
        
  
    }
  
    return (
      <>
      <h1 className='text-[100px]'>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div className='w-auto h-auto'>
            <div className='mt-[200px] mb-[50px]'>Enter Email:
            <input 
                id='email'
                type="text" 
                className='border-[2px] border-[black]'
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div>Enter Password:
            <input 
                id='password'
                type="password" 
                value={Password}
                className='border-[2px] border-[black]'
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
        </div>
        
        <input 
        id='submit'
        className='border-[2px] m-10 w-[100px] bg-[yellow] border-[black]'
         type="submit" />
      </form>
      <div>Don't Have an account? <Link className='text-[blue]' to="/">Register</Link></div>
      </>

    )
}
