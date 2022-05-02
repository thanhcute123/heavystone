import { Routes, Route } from "react-router-dom";
import HomIntro from "./Components/HomeIntro/HomIntro";
import Signin from "./Components/Signin/Signin";
import HomePage from "./Components/HomePage/HomePage";
import './App.css';
import Introduction from "./Components/HomePage/Body/Middle/Introduction/Introduction";
import Documents from "./Components/HomePage/Body/Middle/Documents/Documents";
import Exchange from "./Components/HomePage/Body/Middle/Exchange/Exchange";
import Scholarship from "./Components/HomePage/Body/Middle/Scholarship/Scholarship";
import Club from "./Components/HomePage/Body/Middle/Club/Club";
import Profile from "./Components/Profile/Profile";
// import React from "@types/react";



function App() {
    return (
        <div className="App">
            {/*<Routes>*/}
            {/*    <Route path="/" element={<HomIntro />} />*/}
            {/*    <Route path="/login" element={<Signin />} />*/}
            {/*    <Route path="/heavystone" element={<HomePage />}/>*/}
            {/*</Routes>*/}
            {/*<Signin/>*/}
            {/*<HomePage />*/}
            {/*<HomIntro/>*/}
            <Profile/>
        </div>
    );
}

export default App;
