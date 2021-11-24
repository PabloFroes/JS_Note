import React from "react";
import "../../styles/header.scss"
import HeaderLogged from "./logged";
import HeaderLogin from "./login";

function Header(){
    if( localStorage.getItem('user')){
        return (
            <HeaderLogged/>
        )
    } else return(
        <HeaderLogin/>
    )
}


export default Header