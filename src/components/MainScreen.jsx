import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Media from 'react-bootstrap/Media'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { InputGroup } from "react-bootstrap";

import '../assets/App.css';



const MainScreen = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <Container fluid className="geral p-0 mt-xl-5 mt-xs-0">
            <Container>
                <Row>
                    <Col xs={12} xl={8} sm={12} md={8} lg={8} className="pinkContainer align-items-center">
                        <Container className="mainContainer" >
                            <h3 className="tituloInicial ">Bem Vindo ao<br /> Engravidei :)</h3>
                            <Button variant="outline-light" className="mainButton">Faça Seu Cadastro!</Button>
                        </Container>
                    </Col>
                    <Col xl={4} md={4} lg={4} >
                            <Row className="loginContainer">
                                <Col xs={12} className="d-flex justify-content-center mb-5">
                                    <Media>
                                        <img width={130} height={130} src={Logo} alt="Logo" />
                                    </Media>
                                </Col>
                                <Col xs={12} className="d-flex justify-content-center mb-5 mt-5">
                                    <Form validated={validated} onSubmit={handleSubmit}>
                                        <Form.Group controlId="EmailLogin">
                                            <Form.Control 
                                            placeholder="Email"
                                                className="loginCamp"
                                                type="email"
                                                required
                                            />
                                            <Form.Control.Feedback>Perfeito!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group controlId="PasswordLogin">
                                            <InputGroup>
                                                <Form.Control
                                                placeholder="Senha"
                                                    className="loginCamp"
                                                    type="password"
                                                    required
                                                />
                                                <Form.Control.Feedback>Perfeito!</Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                        <Button type="submit" className="buttonEntrar">Entrar</Button>
                                    </Form>
                                </Col>
                                <Col xs={12} className="d-flex justify-content-center mt-4">
                                    <p className="textoLogin">Problemas com o login? Esqueceu sua Senha?</p>
                                </Col>
                            </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}


export default MainScreen;