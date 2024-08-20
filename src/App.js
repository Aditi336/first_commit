import React from "react";
import Navbar from "./Navbar";
import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Signin from "./Signin"
import Custom from "./Custom";
import Orders from './Orders'
import Login from "./Login";
export default function App()
{
  return(
    <>
    <Routes>
      <Route path="/" element={<Navbar/>}></Route>
      <Route path="/signup" element={<Signin/>}></Route>
      <Route path="/maker_icecream" element={<Custom/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/orders/:val" element={<Orders/>}></Route>

    </Routes>
    
    </>
  )
}