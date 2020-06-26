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
            <div className='homepage'>
                <img className='image-fluid homepage-image' src="images/homeBg.jpg" alt=""/>
                <form className="form">
                    <div className="input-wrapper">
                        <input className="input" type="text" placeholder=" " data-placeholder="E-mail" required/>
                        <span className="placeholder">Search...</span>
                    </div>
                </form>
                <div className='recent-event'> Recent Events</div>
                <hr width='70%'/>
                <div className='grid-container row d-flex justify-content-center align-items-center'>
                    <div className='p-4 m-4 grid-item'>
                        <PopularArticle/>
                    </div>
                    <div className='p-4 m-4 grid-item'>
                        <PopularArticle/>
                    </div>
                    <div className='p-4 m-4 grid-item'>
                        <PopularArticle/>
                    </div>
                    <div className='p-4 m-4 grid-item'>
                        <PopularArticle/>
                    </div>
                    <div className='p-4 m-4 grid-item'>
                        <PopularArticle/>
                    </div>
                    <div className='p-4 m-4 grid-item'>
                        <PopularArticle/>
                    </div>
                    <div className='p-4 m-4 grid-item'>
                        <PopularArticle/>
                    </div>
                    
                    <div className='p-4 m-4 grid-item'>
                        <PopularArticle/>
                    </div>
                    
                    
                </div>
                

                
                <Button id='seeMore' onClick={this.handleHasMore}>See more</Button>
      
            </div>
        );

        

    }
    handleHasMore() {
        this.setState((prevState) => ({
            hasMore: !prevState.hasMore
        }));
    }
}