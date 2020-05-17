import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, InputGroupAddon, Button, Jumbotron, Container } from 'reactstrap';

import Post from 'components/Post.jsx';
import './CatalogPage.css'

export default class CatalogPage extends React.Component{
    static propTypes = {
        topicName: PropTypes.string,
        description: PropTypes.string
    };

    constructor(props){
        super(props);

    }
    render(){
        
        return(       
            <div>
                <Container className='CatalogPage w-75'>
                    <h2 className="display-3">food</h2>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-2" />

                    <dev className='posts d-flex row justify-content-center'>
                        <Post className='d-flex col-12 col-sm-3'></Post>
                        <Post className='d-flex col-12 col-sm-3'></Post>
                        <Post className='d-flex col-12 col-sm-3'></Post>
                        <Post className='d-flex col-12 col-sm-3'></Post>
                        <Post className='d-flex col-12 col-sm-3'></Post>
                        <Post className='d-flex col-12 col-sm-3'></Post>                        
                        <Post className='d-flex col-12 col-sm-3'></Post>
                        <Post className='d-flex col-12 col-sm-3'></Post>
                        <Post className='d-flex col-12 col-sm-3'></Post>
                    </dev>
                </Container>
            </div>
        )
    }
}