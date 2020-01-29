import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Media from 'react-bootstrap/Media'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import FormCheck from 'react-bootstrap/FormCheck'

import '../assets/App.css';
import { InputGroup } from "react-bootstrap";

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
                        <Container>
                            <Row>
                                <Col xs={12} className="d-flex justify-content-center">
                                    <Media>
                                        <img width={128} height={128} src={Logo} />
                                    </Media>
                                </Col>
                                <Col className="d-flex justify-content-center">
                                    <Container>
                                        <Form  validated={validated} onSubmit={handleSubmit}>
                                            <Form.Group controlId="EmailLogin">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Entre com Email"
                                                    required
                                                />
                                                <Form.Control.Feedback>Perfeito!</Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group controlId="PasswordLogin">
                                                <Form.Label>Senha</Form.Label>
                                                <InputGroup>
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text id="">Icon</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <Form.Control
                                                        type="password"
                                                        placeholder="Password"
                                                        required
                                                    />
                                                    <Form.Control.Feedback>Perfeito!</Form.Control.Feedback>
                                                </InputGroup>
                                            </Form.Group>
                                                <Button type="submit">Submit form</Button>
                                        </Form>
                                    </Container>
                                </Col>
                                <Col>
                                    <Container>
                                        <h1>Escrito embaixo</h1>
                                    </Container>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
            </Container>
            );
        }
        
        
export default MainScreen;