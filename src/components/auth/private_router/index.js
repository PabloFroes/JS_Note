import React from 'react'
import {Navigate} from 'react-router-dom'


const PrivateRouter = ( {param,invalid} )=>{
    if (localStorage.getItem('user')) {return(param)} else  {return (<Navigate to = {invalid}/>)}
}

export default PrivateRouter