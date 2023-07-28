import React from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
export default function Register() {
    const navigate = useNavigate();
    const [Email, setEmail] = useState("");
    const [Id, setId] = useState("abc");
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
     
        axios.post('https://localhost:7126/api/register',{
            Name:Username,
            Email:Email,
            Password:Password,
            Id:Id
        })
        .then(async (res)=>{
            console.log(res.data);
           await window.localStorage.setItem("UserData",JSON.stringify(res.data));
            navigate(`/landingPage`);
        })
        .catch((err)=>{

            console.log("error in posting",err);
            window.alert('User Already Exists');
            navigate(`/login`);
        })
    //   alert(`The Username you entered was: ${Username}`)
    }
  
    return (
        <>
        <h1 className='text-[100px]'>Registration Page</h1>
      <form onSubmit={handleSubmit}>
        <div className='w-auto h-auto'>
            <div className='mt-[200px] mb-[50px]'>Enter Username:
            <input 
               id='name'
                type="text" 
                className='ml-[2px] border-[2px] border-[black]'
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
            />
            </div>
            <div className=' mb-[50px]'>Enter Email:
            <input 
                id='email'
                type="text" 
                className='ml-[40px] border-[2px] border-[black]'
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
      <div>Have an account? <Link className='text-[blue]' to="/login">LOGIN</Link></div>
      </>

    )
}
