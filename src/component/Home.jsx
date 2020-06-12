import React from 'react'
import NavBar from './NavBar'
import { Container, Row } from 'react-bootstrap';
import Footer from './Footer'

class Home extends React.Component {
    render() {
        return (
            <Container fluid className=" home-content body">
                <Row container-fluid className=" w-100 ml-0 mr-0">
                    <NavBar />
                    <Footer />
                </Row>
            </Container>


        )
    }
}

export default Home 