import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Media from 'react-bootstrap/Media'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import axios from 'axios';
//importações remotas

import '../fonts/AvenirBook.otf';
import Logo from "../assets/logo.png";
import CalenderLogo from "../assets/calendar.png";
import PregnantLogo from "../assets/pregnant.png";
import ChecklistLogo from "../assets/checklist.png";
import Container from 'react-bootstrap/Container';
import '../assets/App.css';
//importações locais


const RegistScreen = () => {
    const [validated, setValidated] = useState(false);

    
    const handleSubmit = event => {
        const form = event.currentTarget;
        
    
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        const {
            nome,
            email,
            sexo,
            cpf,
            senha
        } = this.state;

        axios.post("url_da_requisição", {
            user: {
                nome: nome,
                email: email,
                sexo: sexo,
                cpf: cpf, 
                senha: senha
            }
        },
        { withCredentials: true }
        ).then(response => {
            console.log("registration res", response);
        }).catch(error => {
            console.log("registration error", error); 
        })
    };
    return (
        <Container className="geral pt-5">
            <Row>
                <Col name="Esquerda" xs={12} xl={6} sm={12} md={8} lg={8} className="justify-content-center">
                    <Col>
                        <h3>Faça seu Cadastro!</h3>
                    </Col>
                    <Col className="mt-5">
                        <Form validated={validated} onSubmit={handleSubmit}>
                            <Form.Label>Nome</Form.Label>
                            <Form.Group controlId="CadastroNome">
                                <Form.Control
                                    name="nome"
                                    placeholder="Seu Nome"
                                    className="cadastroCamp"
                                    type="text"
                                    required
                                />
                                <Form.Control.Feedback>Perfeito!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Group controlId="CadastroEmail">
                                <Form.Control
                                    nome="email"
                                    placeholder="Seu Email"
                                    className="cadastroCamp"
                                    type="email"
                                    required
                                />
                                <Form.Control.Feedback>Perfeito!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Label>Sexo</Form.Label>
                            {['radio'].map(type => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check 
                                        name="sexo"
                                        inline label="Masculino" 
                                        type={type} 
                                        id={`masc-${type}-1`} 
                                        required />
                                    <Form.Check
                                        name="sexo"
                                        inline label="Feminino" 
                                        type={type} 
                                        id={`fem-${type}-2`} 
                                        required />
                                </div>
                            ))}
                            <Form.Label>CPF</Form.Label>
                            <Form.Group controlId="CPF">
                                <Form.Control
                                    name="CPF"
                                    placeholder="Somente Numeros"
                                    className="cadastroCamp"
                                    type="number"
                                    required
                                />
                                <Form.Control.Feedback>Perfeito!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Label>Senha</Form.Label>
                            <Form.Group controlId="Senha">
                                <Form.Control
                                    name="senha"
                                    placeholder="*******"
                                    className="cadastroCamp"
                                    type="password"
                                    required
                                />
                                <Form.Control.Feedback>Perfeito!</Form.Control.Feedback>
                            </Form.Group>
                            
                            <Button type="submit" className="buttonCadastrar">Cadastrar</Button>
                          <p><Link to="/">Ja possui Conta? Faça Seu login!</Link></p>
                           
                        </Form>
                    </Col>
                </Col>
                <Col name="Direita" xl={6} md={4} lg={4} >
                    <Row>
                        <Col xs={12} className="d-flex justify-content-center ">
                            <Media>
                                <img width={110} height={110} src={Logo} alt="Logo" />
                            </Media>
                        </Col>
                        <Col name="SegundoEsc" xl={12} className="mt-5">
                            <Row>
                                <Col xl={2} >
                                    <Media>
                                        <img src={CalenderLogo} alt="calendario" width={70} height={70} />
                                    </Media>
                                </Col>
                                <Col xl={10}>
                                    <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={12} className="mt-5">
                        <Row>
                            <Col xl={2}>
                                <Media>
                                    <img src={ChecklistLogo} alt="checklist"  width={70} height={70} />
                                </Media>
                            </Col>
                            <Col xl={10}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore
                                </p>
                            </Col>
                        </Row>
                        </Col>
                        <Col xl={12} className="mt-5">
                        <Row>
                            <Col xl={2}>
                                <Media>
                                    <img src={PregnantLogo} alt="gravida" width={70} height={70} />
                                </Media>
                            </Col>
                            <Col xl={10}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore
                                </p>
                            </Col>
                        </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default RegistScreen;