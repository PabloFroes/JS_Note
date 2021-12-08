import React from "react";
import "../../styles/header.scss"
import HeaderLogged from "./logged";
import HeaderLogin from "./login";

function Header(props){
    if( localStorage.getItem('user')){
        return (
            <HeaderLogged menu={props}/>
        )
    } else return(
        <HeaderLogin/>
    )
}


export default Header