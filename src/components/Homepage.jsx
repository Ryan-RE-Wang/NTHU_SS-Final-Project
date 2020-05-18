import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import DatePicker from 'react-date-picker';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Homepage.css'

export default class Homepage extends React.Component {
    state = {
        date: new Date(),
    }

    constructor(props) {
        super(props);
    }

    onChange = date => this.setState({ date })

    render() {
        return (
            <div className='bg'>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md={2}/>
                        <Col md={8}>
                            <div className="image"><img src="images/homepagelogo.jpg" alt="logo" /></div>
                            <div className='search'>
                                <InputGroup >
                                    <Input />
                                    <InputGroupAddon addonType="prepend">
                                        <Button color='info'>Search</Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </div>
                        </Col>
                        <Col md={2}></Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md={5}></Col>
                        <Col md={4}>
                            <div className='calendar'>
                                <DatePicker
                                onChange={this.onChange}
                                value={this.state.date}
                                />
                            </div>
                        </Col>
                        <Col md={3}></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}