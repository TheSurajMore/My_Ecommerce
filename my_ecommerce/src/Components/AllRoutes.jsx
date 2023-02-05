import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Login from "./Login";

const AllRoutes = () =>{
    return<Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/About" element={<About/>} ></Route>
        <Route path="/Login" element={<Login/>} ></Route>
    </Routes>
}

export default AllRoutes;