import React, { useState } from "react";
import ProfilePic from "../assets/user.png";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Media from 'react-bootstrap/Media'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



import '../assets/App.css';

const HomeScreen = () => {
    return (
        <Container fluid>
            <Row>
                <Col name="Esquerda" xs={12} xl={2} sm={12} md={8} lg={8} className="justify-content-center menu">
                    <Media className="justify-content-center banana mt-5">
                        <figure>
                            <img width={120} height={120} src={ProfilePic} className="mb-2" />
                            <figcaption><p>Dr. João Victor Veronezi</p></figcaption>
                        </figure>
                    </Media>
                    <Container name="Menu">
                        <p>Pacientes</p>
                        <p>Consultas</p>
                        
                    </Container>
                </Col>
                <Col xl={10} name="Direita">

                </Col>
            </Row>
        </Container>
    );
}

export default HomeScreen;