import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
export default function Sign_in()
{
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [address,setaddress]=useState("")
    const [mobile,setmobile]=useState("")
    const [gender,setgender]=useState(" ")
    const [password,setpassword]=useState("")


    const deleteData=()=>{
        setname("")
        setemail("")
        setaddress("")
        setmobile("")
        setgender("")
        setpassword("")
    }
    const history =useNavigate
    async function collectData(e){
        e.preventDefault();
        try{
            await axios.post("http://10.0.2.2:8000/signup",{
              name,email,address,mobile,gender,password  
            })
            .then(res=>{
                if(res.data=="exist")
                {
                   alert("User already exists")
                }
                else if(res.data=="notexist")
                {
                    history("/",{state:{id:name}})
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
        <center id="login-heading">SIGN-IN</center>

            <label id="lab_name">
            Name:&nbsp;&nbsp;</label><input type="text" id="name" name="name" required placeholder="enter your name"
            value={name}
            onChange={(e)=>{setname(e.target.value)}}></input>
            <br></br><br></br>
            <label id="lab_add"> Address:&nbsp;&nbsp;</label><textarea row="1" col="5" id="address" name="address"
            value={address}
            onChange={(e)=>{setaddress(e.target.value)}}></textarea>
            <br></br><br></br>

            <label id="lab_email"> Email:&nbsp;&nbsp;</label><input type="email" name="email" id="email" required placeholder="username@gmail.com"
            value={email}
            onChange={(e)=>{setemail(e.target.value)}}/>
            <br></br><br></br>
            <label id="lab_mobile"> Mobile:&nbsp;&nbsp;</label><input type="tel" id="mobile" name="mobile" required
            value={mobile}
            onChange={(e)=>{setmobile(e.target.value)}}></input>
            <br></br><br></br>

            <label id="lab_gender"> Gender:&nbsp;</label>
            <label id="lab_male"> Male&nbsp;</label><input type="radio" id="M" name="gender" 
            value={gender}
            onChange={(e)=>{setgender(e.target.value)}}></input>
            <label id="lab_female"> Female&nbsp;</label><input type="radio" id="F" name="gender"
            value={gender}
            onChange={(e)=>{setgender(e.target.value)}}></input>
            <br></br><br></br>
            <label id="lab_password"> Password:&nbsp;&nbsp;</label><input type="password" name="password" id="password" required
            value={password}
            onChange={(e)=>{setpassword(e.target.value)}}/>
            <br></br><br></br>
            <input type="submit" id="sumit" onClick={collectData}></input>&nbsp;&nbsp;
            <input type="reset" id="reset" onClick={deleteData}></input>
        </form>
        </div>
        </>
    )
}