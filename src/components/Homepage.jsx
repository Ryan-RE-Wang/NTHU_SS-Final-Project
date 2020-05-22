import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import DatePicker from 'react-date-picker';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'


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
                    <Row className='d-flex justify-content-center'>
                        <Col md={1}/>
                        <Col md={10}>
                            <Carousel interval='5000' controls={false}>
                                <Carousel.Item>
                                    <img width={500} height={700}
                                    className='d-block w-100'
                                    src='./images/w-clear-bg.jpg'
                                    alt='First slide'
                                    />
                                    <Carousel.Caption>
                                    <h3>雄友熟食展</h3>
                                    <p>野台打卡預購 趕快來喔!!!</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img width={500} height={700}
                                    className='d-block w-100'
                                    src='./images/w-snow-bg.jpg'
                                    alt='Third slide'
                                    />
                                    <Carousel.Caption>
                                    <h3>清大熱舞成發 第舞元素</h3>
                                    <p>清大桌球館 一定要來喔</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img width={500} height={700}
                                    className='d-block w-100'
                                    src='./images/w-rain-bg.jpg'
                                    alt='Third slide'
                                    />
                                    <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col md={1}/>
                    </Row>
                </Container>
                
                <Container>
                    <Row className='d-flex justify-content-md-center'>
                        <Col md={2}/>
                        <Col md={8}>
                            <div className="image"><img src="images/homepagelogo.jpg" alt="logo" /></div>
                            <div className='search'>
                                <InputGroup>
                                    <Input />
                                    <InputGroupAddon addonType='prepend'>
                                        <DatePicker
                                        onChange={this.onChange}
                                        value={this.state.date}
                                        />
                                    </InputGroupAddon>
                                    <InputGroupAddon addonType='prepend'>
                                        <Link to='/search' className='btn btn-info'>Search</Link>
                                    </InputGroupAddon>
                                </InputGroup>
                            </div>
                        </Col>
                        <Col md={2}/>
                    </Row> 
                </Container>
                    <Row className='d-flex'>
                        <Col md={3}></Col>
                        <Col md={2}><h1>Most Popular</h1></Col>
                        <Col md={7}></Col>
                    </Row>

            </div>
        )
    }
}