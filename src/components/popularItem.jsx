import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Carousel from 'react-bootstrap/Carousel';


import './PopularItem.css'

export default class PopularItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className='item'>
                <img className='img-fluid' src={this.props.p.image} alt=""/>
                <div className='content'>
                    <h1 id='title'>{this.props.p.title}</h1>
                    <h2 className='date'>{this.props.p.date}</h2>
                    <h2 className='location'>{this.props.p.location}</h2>
                </div>
            </div>
        )
    }

}