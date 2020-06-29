import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, InputGroupAddon, Button, Jumbotron, Container ,Row} from 'reactstrap';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import {getPage} from 'states/clickPage-action.js';
import {createTouch} from 'api/posts.js';
import './Post.css'

const baseUrl = 'https://team11final.s3-us-west-1.amazonaws.com/';
const lasturl = '.jpeg';

class Post extends React.Component{
    static propTypes = {
        p: PropTypes.object
    };

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);

    }
    render(){
        const {masking} = this.props;
        return(       
            <div className={`AD-Post  ${masking ? 'masking' : ''}`}>
                    <Row>
                    <div className='col-3 post-left'>
                        <img src={baseUrl + this.props.p.fileurl + lasturl} className='img-fluid'/>
                    </div>
                    <div className='col-9 post-right'>
                        <span className='post-title'>{this.props.p.title}</span><br/>
                        <span className='post-body'>{this.props.p.startdatetime}</span><br/>
                        <span className='post-body'>{this.props.p.location}</span><br/>
                        <span className='post-body'>{this.props.p.club}</span><br/>
                        <Link to="/article" className="">
                            <button className=' d-none d-md-block moreInfoBtn' onClick={this.handleClick}>More Info</button>
                        </Link>
                        
                    </div>
                    </Row>
            </div>
        )
    }

    handleClick() {
        this.props.dispatch(getPage(this.props.p));  
        createTouch(this.props.p.id);
    }
}

export default connect(state => ({
	...state.page
}))(Post);
