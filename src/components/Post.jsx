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

            <div className='Post '>
                <div className=' d-flex row'>
                    <div className='col-3 col-md-3 pr-2 pr-md-3 post-left'>
                        <img src='./images/mac-d.png' className='img-fluid'/>
                    </div>
                    <div className='col-9 col-md-9 pl-2 pl-md-3 post-right'>
                        <span className='post-title'> Badminton compitition</span><br/>
                        <span className='post-body'> April 27</span><br/>
                        <span className='post-body'> National Tsin Hua University</span><br/>
                        <span className='post-body'> Hold by badminton club</span><br/>
                        <Link to="/article" className="btn btn-secondary">
                            More Info
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
