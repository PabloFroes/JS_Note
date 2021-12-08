import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeScreen from './screens/home'
import RegisterScreen from "./screens/auth/register";
import LoginScreen from "./screens/auth/login";
import NotesIndexScreen from "./screens/notes/index";
import UsersEditScreen from "./screens/users/edit";
import PrivateRouter from "./components/auth/private_router";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<PrivateRouter paramScreen={"/notes"} invalidScreen={<HomeScreen/>}/> }/>
            <Route path="/register" element={<RegisterScreen/>}/>
            <Route path="/login" element={<LoginScreen/>}/>
            <Route path="/users/edit" element={<UsersEditScreen/>}/>
            <Route path="/notes" element={<PrivateRouter param={<NotesIndexScreen/>} invalid={'/login'}/> }/>
        </Routes>
    </BrowserRouter>
) 

export default Router


