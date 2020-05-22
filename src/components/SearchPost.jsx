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
                            <div class='d-flex justify-content-start'> 
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
                                    <div class='introduction d-flex align-content-start'> 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </div>
                                </Row>
                                <Row> 
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