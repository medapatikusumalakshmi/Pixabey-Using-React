import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Final from "./Components/Final";
import './App.css'
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Error from "./Pages/Error";
import Redirect from "./Components/redirect";
export default function App(){
    return(
        <>
        <BrowserRouter>
    <Routes>
        <Route path="/" element={<Final/>}></Route>
        <Route path="/registerss" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/home" element={<Final/>}></Route>
        <Route path="*" element={<Error/>}></Route>
        <Route path="/redirect" element={<Redirect/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
    )
}