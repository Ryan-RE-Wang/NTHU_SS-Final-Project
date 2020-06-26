import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './contact_us_information.css'
export default class Contact_Us_information extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                    <Row className='d-flex justify-content-center'>
                            <div className="CS_box">
                                <div className="background-img">
                                <div className="box">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <div className="content1">
                                    <h2>Our Team</h2>
                                    <p><a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=buithuyvan100@gmail.com" className="temp" target="_blank">buithuyvan100@gmail.com</a></p>
                                    </div>
                                    
                                </div>
                                </div>
                            </div>
                    </Row>
            </Container>
        )
    }
}