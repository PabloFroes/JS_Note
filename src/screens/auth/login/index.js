import { Card, Column, Container, Section, Title } from "rbx";
import React, {Fragment} from "react";
import Header from "../../../components/header";
import "../../../styles/auth.scss"
import logoImage from '../../../assets/images/logo.png'
import LoginForm from '../../../components/auth/login_form'

const LoginScreen = () => {
    return (
    <Fragment>
        <Header/>
        <Section size="medium" className="auth">
            <Container>
                <Column.Group centered>
                    <Column size={3}>
                        <Card>
                            <Card.Content>
                                <Section>
                                    <Column.Group centered>
                                        <Column size={12}>
                                            <img src={logoImage} alt="Javascript Notes Logo"></img>
                                        </Column>
                                    </Column.Group>
                                    <Column.Group>
                                        <Column size={12}>
                                            <Title size={6} className="has-text-grey has-text-centered">
                                                Your notes on the cloud
                                            </Title>
                                        </Column>
                                    </Column.Group>
                                <LoginForm/>
                                </Section>
                            </Card.Content>
                        </Card>
                    </Column>
                </Column.Group>
            </Container>
        </Section>
    </Fragment>
    )
}

export default LoginScreen