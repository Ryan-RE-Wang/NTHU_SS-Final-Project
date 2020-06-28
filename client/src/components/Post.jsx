import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, InputGroupAddon, Button, Jumbotron, Container ,Row} from 'reactstrap';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import './Post.css'

const baseUrl = 'https://team11final.s3-us-west-1.amazonaws.com/';
const lasturl = '.jpeg';

export default class Post extends React.Component{
    static propTypes = {
        intro: PropTypes.string,
        dates: PropTypes.string,
        place: PropTypes.string,
        holder: PropTypes.string,
        imageurl: PropTypes.string
    };

    constructor(props){
        super(props);

    }
    render(){
        console.log(this.props.imageurl);
        return(       
            <div className='AD-Post'>
                    <Row>
                    <div className='col-3 post-left'>
                        <img src={baseUrl + this.props.imageurl + lasturl} className='img-fluid'/>
                    </div>
                    <div className='col-9 post-right'>
                        <span className='post-title'>{this.props.intro}</span><br/>
                        <span className='post-body'>{this.props.date}</span><br/>
                        <span className='post-body'>{this.props.place}</span><br/>
                        <span className='post-body'>{this.props.holder}</span><br/>
                        <Link to="/article" className="">
                            <button className=' d-none d-md-block moreInfoBtn'>More Info</button>
                        </Link>
                        
                    </div>
                    </Row>
            </div>
        )
    }
}
