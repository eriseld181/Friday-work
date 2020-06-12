import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { Component } from 'react'
import menu from './NavBar'
import Footer from './Footer'
export default class MainPage extends Component {

    render() {
        return (
            <Container fluid>
                <Row fluid style={{ height: "92vh" }}>
                    <Col xs={3} md={3} style={{ backgroundColor: 'black', color: 'white' }}>
                        <menu />
                    </Col>
                    <Col xs={7} md={7} style={{ backgroundColor: 'yellow', color: 'white' }}>2</Col>
                    <Col xs md style={{ backgroundColor: 'green', color: 'white' }}>3</Col>
                </Row >
                <Row>

                    <Footer />

                </Row>
            </Container>
        )

    }
}