import React from "react"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
export default function Navbar()
{

    const navigate=useNavigate()
    const location=useLocation()
    function signing(){
        navigate("/signup")
    }
    function maker(){
        navigate("/maker_icecream")
    }
    function logging(){
        navigate("/login")
    }
    return(
        <>
        <div id="navbar">
        <p id="heading">ibar</p>
        <img id="logo" src="https://cdn.vectorstock.com/i/preview-1x/99/94/default-avatar-placeholder-profile-icon-male-vector-23889994.jpg" ></img>
        <button id="sign-in" onClick={signing}>Sign-in</button>
        <button id="login-in" onClick={logging}>Login</button>

        </div>
        <div id="bottom_navbar">
        {/* Hi {location.state.id} welcome to <b>ibar online website</b>.This is the only website which helps  to customize your ice cream at our comfy zone.<br></br><br></br> */}
        Ice cream is a popular frozen dessert enjoyed worldwide. 
        It is typically made from dairy products, such as milk and cream, combined with sugar or sweeteners, and flavored with various ingredients like fruits, chocolate, vanilla, or nuts. The mixture is then churned and frozen to create a creamy and delicious treat.
        The history of ice cream dates back centuries, with various cultures contributing to its development.<br></br><br></br><br></br> Today, it remains a popular and versatile dessert enjoyed by people of all ages. Whether you prefer classic flavors or unique combinations, ice cream is a delightful indulgence for many.

        <p id="cust-text">click here <span class="white-hand">👇</span>to cutomize ur ice cream  </p>
        <button id="custom" onClick={maker}>Customize your icream</button>
        </div>
        </>
    )
}