import React from 'react';
import PropTypes from 'prop-types';
import { 
    InputGroup,
    InputGroupAddon, 
    Button, 
    Jumbotron, 
    Container, 
    NavLink } from 'reactstrap';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import './Post.css'
import Article from './Article.jsx';
export default class Post extends React.Component{
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
            <div className='Post'>

                <Container className=' col'>
                        <img src='./images/w-clear-bg.jpg' className='row-12'/>
                        <div className='introduction'>
                            <h5 className=''> Apr 10 / nthu  </h5>
                            <h5 className='row-12 justify-content-center'> the activity </h5>
                        </div>
                            <Link to="/article" className="btn btn-secondary">
                                More Info
                            </Link>
                </Container>
            </div>
        )
    }
    
}