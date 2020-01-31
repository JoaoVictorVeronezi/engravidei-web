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


const RegistScreen = () => {
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
        <Container className="geral p-0 mt-xl-5 mt-xs-0 ml-5">
            <Row>
                <Col name="Esquerda" xs={12} xl={8} sm={12} md={8} lg={8} className="justify-content-center">
                    <Col>
                        <h3>Faça seu Cadastro!</h3>
                    </Col>
                    <Col className="mt-5">
                        <Form validated={validated} onSubmit={handleSubmit}>
                            <Form.Label>Nome</Form.Label>
                            <Form.Group controlId="CadastroNome">
                                <Form.Control
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
                                    <Form.Check inline label="Masculino" type={type} id={`masc-${type}-1`}  required/>
                                    <Form.Check inline label="Feminino" type={type} id={`fem-${type}-2`}  required/>
                                   
                                   
                                </div>
                            ))}
                            <Form.Label>CPF</Form.Label>
                            <Form.Group controlId="CPF">
                                <Form.Control
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
                                    placeholder="*******"
                                    className="cadastroCamp"
                                    type="password"
                                    required
                                />
                                <Form.Control.Feedback>Perfeito!</Form.Control.Feedback>
                            </Form.Group>
                            <Button type="submit" m-0 className="buttonCadastrar">Cadastrar</Button>
                            <p>Ja possui Conta? Faça Seu login</p>
                        </Form>
                    </Col>
                </Col>
                <Col name="Direita" xl={4} md={4} lg={4} >
                    <Row>
                        <Col name="Logo"> <h1>teste2</h1></Col>
                        <Col name="SegundoEsc"><h1>teste3</h1></Col>
                        <Col name="TerceiroEsc"><h1>teste4</h1></Col>
                        <Col name="QuartoEsc"><h1>teste5</h1></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default RegistScreen;