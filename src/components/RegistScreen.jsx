import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Media from 'react-bootstrap/Media'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Redirect} from "react-router-dom";
//importações remotas

import '../fonts/AvenirBook.otf';
import Logo from "../assets/logo.png";
import CalenderLogo from "../assets/calendar.png";
import PregnantLogo from "../assets/pregnant.png";
import ChecklistLogo from "../assets/checklist.png";
import Container from 'react-bootstrap/Container';
import '../assets/App.css';
import {cadastro, SigIn} from '../services/auth';
import {setCookie} from '../utils/cookieUtil';
//importações locais


const RegistScreen = () => {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const redirect = () => {
        return (<Redirect to={"/home"} />);
        
    }
    const handleSubmit = event => {
        event.preventDefault();
        const form = {
            name: name,
            email: email, 
            senha: senha
        }
        console.log(form);
        
        cadastro(form).then(resp => {
           // SigIn(form.email, form.senha).then(resp => {
                console.log(resp);
                setCookie("token", resp.data.sessao.token, {expires: Number.parseInt(resp.data.sessao.duracao)} )
                setCookie("userID", resp.data.usuario.id)
                redirect();
          //  }).catch(error => {
               // console.log(error);
         //   })
        }).catch(error =>{
            console.log(error);
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
                        <Form onSubmit={handleSubmit}>
                            <Form.Label>Nome</Form.Label>
                            <Form.Group controlId="nome">
                                <Form.Control 
                                    onChange={name => {setName(name.target.value)}}
                                    name="nome"
                                    placeholder="Seu Nome"
                                    className="cadastroCamp"
                                    type="text"
                                    required
                                />
                                <Form.Control.Feedback>Perfeito!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Group controlId="email">
                                <Form.Control
                                    onChange={email => {setEmail(email.target.value)}}
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
                            <Form.Group controlId="cpf">
                                <Form.Control
                                    
                                    name="cpf"
                                    placeholder="Somente Numeros"
                                    className="cadastroCamp"
                                    type="number"
                                    required
                                />
                                <Form.Control.Feedback>Perfeito!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Label>Senha</Form.Label>
                            <Form.Group controlId="senha">
                                <Form.Control
                                    onChange={senha => {setSenha(senha.target.value)}}
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
                                    <p className="mt-1"> O Engravidei, Proporciona um ótimo calendario, integrado entre o médico e sua paciente
                                    para anotações de consultas e retornos. 
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
                                <p> Temos como uma das principais funcionalidades, nosso checklist. Onde tanto o médico pode adicionar e remover 
                                    itens como a gestante.
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
                                <p> Nosso objetivo é garantir, por meio de nossas funcionalidades e forma unificada de informação,
                                    a saúde tanto da gestante quanto do Bebê.
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