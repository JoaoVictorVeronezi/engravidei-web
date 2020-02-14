import React, { useState, useEffect } from "react";
import ProfilePic from "../assets/user.png";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Media from 'react-bootstrap/Media'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import {getUserData} from '../services/user';
import {getCookie} from '../utils/cookieUtil';

import '../assets/App.css';

const HomeScreen = () => {
    const [userData, setUserData] = useState("");
    useEffect(() => {
        getUserData(getCookie("token"), getCookie("userID")).then(res => {
            setUserData(res.data);
        }).catch(error => {
            console.log(error);
        })
    }, [])

    return (
        <Container fluid className="geral">
            <Row className="geral">
                <Col name="Esquerda" xs={6} xl={2} sm={3} md={3} lg={3} className="justify-content-center menu">
                    <Media className="justify-content-center banana mt-5">
                        <figure>
                            <img width={120} height={120} alt="user" src={ProfilePic} className="mb-2" />
                            <figcaption><p>Dr. João Victor Veronezi</p></figcaption>
                        </figure>
                    </Media>
                        <Nav className="flex-column">
                            <Nav.Link href="/home"><p>Consultas</p></Nav.Link>
                            <Nav.Link href="/home"><p>Pacientes</p></Nav.Link>
                            
                        </Nav>
                        <Link to="/">
                        <Button variant="link"><span>Sair</span></Button>
                        </Link>
                </Col>
                <Col xl={10} xs={6} sm={9} md={9} lg={9} name="Direita">
                        <p>{userData.nome}</p>
                        <p>{userData.email}</p>
                        <p>{userData.telefone}</p>
                        <p>{userData.cpf}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default HomeScreen;