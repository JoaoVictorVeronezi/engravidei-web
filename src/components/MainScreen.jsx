import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Media from 'react-bootstrap/Media'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {SigIn, cadastro} from '../services/auth';
import {setCookie} from '../utils/cookieUtil';

import '../fonts/AvenirBook.otf';

import '../assets/App.css';

import { Link } from 'react-router-dom';

const MainScreen = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        const form = {
            email: email, 
            senha: senha
        }
        console.log(form);

            SigIn(form.email, form.senha).then(resp => {
                console.log(resp);
                setCookie("token", resp.data.sessao.token, {expires: Number.parseInt(resp.data.sessao.duracao)} )
                setCookie("userID", resp.data.usuario.id)
                //location.assignment, para redirecionar para a pagina home
            }).catch(error => {
                console.log(error);
            })
        
    };

    return (
        <Container fluid className="geral p-0 pt-xl-5 pt-xs-0">
            <Container>
                <Row>
                    <Col xs={12} xl={8} sm={12} md={8} lg={8} className="pinkContainer align-items-center">
                        <Container className="mainContainer" >
                            <h3 className="tituloInicial ">Bem Vindo ao<br /> Engravidei :)</h3>
                            <Link to="/cadastro">
                            <Button  variant="outline-light" className="mainButton">Faça Seu Cadastro!</Button>
                            </Link>
                            
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
                                    <Form onSubmit={ handleSubmit }>
                                        <Form.Group controlId="EmailLogin">
                                            <Form.Control 
                                                onChange={email => {setEmail(email.target.value)}}
                                                placeholder="Email"
                                                className="loginCamp"
                                                type="email"
                                                required
                                            />
                                            <Form.Control.Feedback>Perfeito!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group controlId="PasswordLogin">
                                                <Form.Control
                                                    onChange={senha => {setSenha(senha.target.value)}}
                                                    placeholder="Senha"
                                                    className="loginCamp"
                                                    type="password"
                                                    required
                                                />
                                                <Form.Control.Feedback>Perfeito!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Button type="submit" className="buttonEntrar">Entrar</Button>
                                    </Form>
                                </Col>
                                <Col xs={12} className="d-flex justify-content-center mt-4">
                                    <p className="textoLogin"><a href="/">Problemas com o login? Esqueceu sua Senha?</a></p>
                                </Col>
                            </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}


export default MainScreen;