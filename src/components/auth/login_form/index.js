import React, {Fragment, useState} from "react";
import { Button, Field, Control, Input, Column, Help, Label } from "rbx";
import { Navigate } from 'react-router-dom'
import UsersServices from "../../../services/users";

    function RegisterForm() {
        const[email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const [redirectToRegister, setRedirectToRegister] = useState(false)
        const [redirectToNotes, setRedirectToNotes] = useState(false)
        const [error, setError] = useState(false)

        const HandleSubmit = async (evt) => {
            evt.preventDefault()
            try {
                await UsersServices.login({email: email, password: password})
                setRedirectToNotes(true)
            } catch (error) {
                setError(true)
            }
        }

        if(redirectToRegister){
            return <Navigate to="/register"/>
        }

        if(redirectToNotes){
            return <Navigate to="/notes"/>
        }

        return (
            <Fragment> 
                <Column.Group centered>
                    <form onSubmit={HandleSubmit}>
                        <Column size={12}>
                            <Field>
                                <Label size="small">Email:</Label>
                                <Control>
                                    <Input type="email" required name="email" value={email} onChange={e => setEmail(e.target.value)}></Input>
                                </Control>
                            </Field>
                            <Field>
                                <Label size="small">Password:</Label>
                                <Control>
                                    <Input type="password" required name="password" value={password} onChange={e => setPassword(e.target.value)}></Input>
                                </Control>
                            </Field>
                            <Field>
                                <Control>
                                    <Column.Group breakpoint="mobile">
                                        <Column>
                                        <a className="button is-white has-text-custom-purple" onClick={e => setRedirectToRegister(true)}>Register or</a>
                                        </Column>
                                        <Column>
                                        <Button color="custom-purple" outlined>Login</Button>
                                        </Column>
                                    </Column.Group>
                                </Control>
                            </Field>
                            { error && <Help color="danger">Email or Password invalid</Help>}
                        </Column>
                    </form>
                </Column.Group>
            </Fragment>
        )
    }

    export default RegisterForm