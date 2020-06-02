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


import './Homepage.css'

export default class Homepage extends React.Component {
    state = {
        date: new Date(),
    }

    constructor(props) {
        super(props);
    }

    onChange = date => this.setState({ date })

    render() {
        return (
            <div>
                <div className='bg'>
                    <TextField label="Search..." margin="normal" variant="outlined" />
                </div>
   

            </div>
        )
    }
}