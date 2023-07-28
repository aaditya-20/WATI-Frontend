import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

let new_friends = [];
// if(window.localStorage.getItem('UserData'))


export default function LandingPage() {
new_friends = JSON.parse(window.localStorage.getItem('UserData')).friends;
if(new_friends==null){
  new_friends = [];
}
  console.log(new_friends,'prev_freinds1');
    const navigate = useNavigate();
    const user =  JSON.parse(window.localStorage.getItem('UserData'));
    const name = JSON.parse(window.localStorage.getItem('UserData')).name;
    const [friendName,setfriendName] = useState('')
    const [PhoneNumber,setPhoneNumber] = useState('')
    const [friends,setfriends] = useState(JSON.parse(window.localStorage.getItem('UserData')).friends);
    function addFriends(){
      console.log(new_friends,'prev_freinds2');
      console.log(friendName,PhoneNumber);
      if(new_friends==null){
        // new_friends = [];
      }
          new_friends?.push({
            Name:friendName,
            PhoneNumber:PhoneNumber
          });
          console.log(new_friends,'new_freinds after push locally');
          user.friends = new_friends;
          console.log(user.friends,'freind to be posted');
          // setfriends(new_friends);
        axios.post('https://localhost:7126/api/addFreind',user)
        .then(async (res)=>{
            console.log('updated response',res.data);
           await window.localStorage.setItem("UserData",JSON.stringify(res.data));
            // navigate(`/landingPage`);
        })
        .catch((err)=>{

            console.log("error in posting",err);
            window.alert('Error in adding');
            // navigate(`/login`);
        })

    }

  return (
    <>
    <div className='flex flex-col'>
      <div className='flex' >
           <div className='text-[50px]'>Landing page</div>  
              <div className='mr-[10px]'>

                  <button id='logOut' className=' text-[20px] absolute mt-[40px] ml-[800px] border-[2px] border-[black] bg-[red]' onClick={()=>{navigate('/')}}>Log Out</button>
                      
              </div>
      </div>
      <div className='mt-10 text-[30px]' >
                <label>Student Name</label>
               <input 
                 id='studentName'
                 type="text" 
                  className='ml-[2px] border-[2px] border-[black]'
                  value={friendName}
                  onChange={(e) => setfriendName(e.target.value)}
              />  
              <div className='mt-10'>

              </div>
              <label>Phone Number</label>
               <input 
                  id='studentPhoneNumber'
                  type="text" 
                  className='ml-[2px] border-[2px] border-[black]'
                  value={PhoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
              />  
              <div className='ml-[10px]'>

                  <button id='addStudent' className=' text-[20px]  border-[2px] border-[black] bg-[red]' onClick={()=>{addFriends()}}>Add Friends</button>
                      
              </div>
      </div>
      <div className='flex flex-col'>
      <button id='viewList' className=' text-[20px] absolute  border-[2px] border-[black] bg-[red]' onClick={()=>{navigate('/viewlist')}}>ViewList</button>
      </div>
    </div>
    
    </>
    
  )
}
