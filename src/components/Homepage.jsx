import React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
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
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import PopularArticle from 'components/PopularArticle.jsx';


import './Homepage.css'

export default class Homepage extends React.Component {
    state= {
        hasMore: false
    }

    constructor(props) {
        super(props);

        this.handleHasMore = this.handleHasMore.bind(this);
    }

    render() {

        const p = {
            image: 'images/poster.jpg',
            title: 'Final demo',
            location: 'Delta Building',
            date: '2020/6/30'
        }

        return (
            <div className='bg'>
                    <form className="form">
                        <div className="input-wrapper">
                            <input className="input" type="text" placeholder=" " data-placeholder="E-mail" required/>
                            <span className="placeholder">Search...</span>
                        </div>
                    </form>
                    <PopularArticle/>
                    <Button id='seeMore' onClick={this.handleHasMore}>See more</Button>

                </div>                
        )
    }
}