import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function Login()
{
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")

    const deletData=()=>{
        setname("")
        setemail("")
        setpassword("")
    }
    const history=useNavigate


    async function collectData(e){
        e.preventDefault();
        try{
            await axios.post("http://10.0.2.2:8000/",{
              name,email,password  
            })
            .then(res=>{
                if(res.data=="exist")
                {
                    history("/",{state:{id:name}})
                }
                else if(res.data=="notexist")
                {
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e)
            })
        }
        catch(e){
            console.log(e)
        }
        
         }
    return(
        <>
        <div id="container">
        <form action="POST" >
        <center id="login-heading">LOGIN</center>

            <label id="lab_name">
            Name:&nbsp;&nbsp;</label><input type="text" id="name" name="name" required placeholder="enter your name"
            value={name}
            onChange={(e)=>{setname(e.target.value)}}></input>
            <br></br><br></br>
            

            <label id="lab_email"> Email:&nbsp;&nbsp;</label><input type="email" name="email" id="email" required placeholder="username@gmail.com"
            value={email}
            onChange={(e)=>{setemail(e.target.value)}}/>
            <br></br><br></br>
            
            <label id="lab_password"> Password:&nbsp;&nbsp;</label><input type="password" name="password" id="password" required
            value={password}
            onChange={(e)=>{setpassword(e.target.value)}}/>
            <br></br><br></br>
            <input type="submit" id="sumit" onClick={collectData}></input>&nbsp;&nbsp;
            <input type="reset" id="reset" onClick={deletData}></input>
        </form>
        </div>
        </>
    )
}