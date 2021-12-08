import React from 'react'
import {Navigate} from 'react-router-dom'


const PrivateRouter = ( {param,paramScreen,invalid,invalidScreen} )=>{
    if(paramScreen){
        if(invalidScreen){
            if (localStorage.getItem('user')) {return (<Navigate to = {paramScreen}/>)} else  {return (invalidScreen);}
            
        }else  {
            if (localStorage.getItem('user')) {return (<Navigate to = {paramScreen}/>)} else  {return (<Navigate to = {invalid}/>)}
        }
    }else{
        if(invalidScreen){
            if (localStorage.getItem('user')) {return(param)} else  {return (invalidScreen);}
            
        }else  {
            if (localStorage.getItem('user')) {return(param)} else  {return (<Navigate to = {invalid}/>)}
        }
    }
   
}

export default PrivateRouter