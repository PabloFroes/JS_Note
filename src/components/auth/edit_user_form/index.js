import React, { Fragment, useEffect, useState, Navigate } from "react";
import { Column } from "rbx";
import { ColumnGroup } from "rbx/grid/columns/column-group";
import '../../../styles/user.scss'
import GetUser from "../get_user";
import { Link } from "react-router-dom";
import UsersServices from "../../../services/users";

function EditUserForm (){

    const [userName, setUserName] = useState(GetUser().name)
    const [userEmail, setUserEmail] = useState(GetUser().email)

    useEffect(()=>{
        setUserName(GetUser().name)
        setUserEmail(GetUser().email) 
    },[])

    const updateUser = async () => {
        console.log({name: userName, email: userEmail})
        await UsersServices.update({name: userName, email: userEmail} )
    }
    
return (

<ColumnGroup className="is-centered form-user">
        <Column size={4} >
        <div className="field">
            <label className="label">Name</label>
            <div className="control has-icons-left has-icons-right">
                <input name='name' className="input" type="text" placeholder="Text input" onChange={(e) => setUserName(e.target.value)} value={userName}/>
                <span className ="icon is-small is-left"></span>
            </div>
        </div>

        <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
                <input className="input" type="email" placeholder="Email input"  onChange={(e) => setUserEmail(e.target.value)} value={userEmail}/>
                <span className ="icon is-small is-left">
                <i className ="fas fa-envelope"></i>
                </span>
                <span className ="icon is-small is-right">
                <i className ="fas fa-exclamation-triangle"></i>
                </span>
            </div>
        </div>

        <div className="field is-grouped">
            <div className="control">
                <button className="button is-link" onClick={updateUser}>Submit</button>
            </div>
            <div className="control">
                <Link to='/notes'>
                <button className="button is-link is-light">Cancel</button>
                </Link>
            </div>
        </div>
        </Column>
        </ColumnGroup>
)
}

export default EditUserForm