import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, InputGroupAddon, Button, Jumbotron, Container } from 'reactstrap';
import './Post.css'

export default class Post extends React.Component{
    static propTypes = {

    };

    constructor(props){
        super(props);

    }
    render(){
        return(       
            <div>
                <Container className='Post col'>
                    <img src='./images/w-clear-bg.jpg' className='row'/>
                    <div className='container row'>
                        <h5 className='introduction col-4 '> 4/10 </h5>
                        <h5 className='introduction col-8 '> nthu </h5>
                    </div>
                    <h5 className='introduction row justify-content-center'> the activity </h5>
                </Container>
            </div>
        )
    }
}