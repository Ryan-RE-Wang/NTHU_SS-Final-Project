import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, InputGroupAddon, Button, Jumbotron, Container ,Row} from 'reactstrap';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import './Post.css'

export default class Post extends React.Component{
    static propTypes = {
        // intro: PropTypes.string,
        // dates: PropTypes.bool,
        // place: propTypes.string,
        masking: PropTypes.bool
    };

    constructor(props){
        super(props);

    }
    render(){
        const {masking} = this.props;
        return(       
            <div className={`AD-Post  ${masking ? 'masking' : ''}`}>
                    <Row>
                    <div className='col-3 post-left'>
                        <img src='./images/mac-d.png' className='img-fluid'/>
                    </div>
                    <div className='col-9 post-right'>
                        <span className='post-title'> Badminton compitition</span><br/>
                        <span className='post-body'> April 27</span><br/>
                        <span className='post-body'> National Tsin Hua University</span><br/>
                        <span className='post-body'> Hold by badminton club</span><br/>
                        <Link to="/article" className="">
                            <button className=' d-none d-md-block moreInfoBtn'> More Info</button>
                        </Link>
                        
                    </div>
                    </Row>
            </div>
        )
    }
}
