import React from 'react';
import PropTypes from 'prop-types';
import { 
    InputGroup, 
    InputGroupAddon, 
    Input,
    Button, 
    Jumbotron, 
    Container, 
    Row,
    Col
} from 'reactstrap';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import './SearchPost.css'

export default class SearchPost extends React.Component {
    static propTypes = {
        // intro: PropTypes.string,
        // dates: PropTypes.bool,
        // place: propTypes.string
    };

    constructor(props){
        super(props);
    }
    
    render() {
        return(       
            <div className='search-post'>
                <Container fluid='lg'>
                    <Row xs={1} sm={1} md={2} lg={2}>
                        <Col>
                            <div class='image d-flex justify-content-start'> 
                                <img src='./images/烤魷魚.jpg'/>
                            </div> 
                        </Col>
                        <Col> 
                            <div className='info'>
                                <Row>
                                    <div class='title d-flex align-content-start'> 
                                        Welcome
                                    </div>
                                </Row>
                                <Row>
                                    <div class='date d-flex align-content-start'> 
                                        Date: 2020/05/22
                                    </div>
                                </Row>
                                <Row>
                                    <div class='time d-flex align-content-start'> 
                                        Time: 17:00
                                    </div>
                                </Row>
                                <Row>
                                    <div class='location d-flex align-content-start'> 
                                        Location: 野台
                                    </div>
                                </Row>
                                <Row> 
                                    <div class='introduction d-flex align-content-start'> 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labinim veniam, quis nostrud e...       
                                    </div>
                                </Row>
                                <Row> 
                                    <Col/>
                                    <Col/>
                                    <Col/>
                                    <Col/>
                                    <div className='link d-flex flex-row-reverse'> 
                                        <Link to="/article" className="btn btn-secondary">
                                            More Info
                                        </Link>
                                    </div>
                                </Row>
                            </div>
                        </Col>
                        
                        
                    </Row>
                </Container>
            </div>
        )
    }
}