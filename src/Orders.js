import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'; 

function Orders() {
  
  const {val}=useParams();
  const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [address,setaddress]=useState("")
    const [mobile,setmobile]=useState("")
    const [gender,setgender]=useState(" ")
    const [ordered,setordered]=useState([])

    useEffect(()=>{
      const ordered_list=val.split(',')
      setordered(ordered_list)
    },[val])

    console.log(ordered)

    const deleteData=()=>{
        setname("")
        setemail("")
        setaddress("")
        setmobile("")
        setgender("")
        setordered("")
    }
  return (
    <div>
      <div id="making">
        <div id="navbar_maker">
            <p id="heading">ibar</p>
        </div>
            <div id="order_data">
                <form>
                
                <center id="login-heading">ORDERS</center>

            <label id="lab_name">
            Name:&nbsp;&nbsp;</label><input type="text" id="name" name="name" required placeholder="enter your name"
            value={name}
            onChange={(e)=>{setname(e.target.value)}}></input>
            <br></br><br></br>
            <label id="lab_add"> Address:&nbsp;&nbsp;</label><textarea row="1" col="1" id="address" name="address"
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
            <label>Your Order:&nbsp;&nbsp;</label>
            <ul>
              {ordered.map((item,index)=>(
                <li key={index}>{item}</li>
              ))}
            </ul>
            <br></br><br></br>
            <input type="submit" id="sumit" ></input>&nbsp;&nbsp;
            <input type="reset" id="reset" onClick={deleteData}></input>
        </form>
            </div>
        </div>

    </div>
  );
}

export default Orders;
