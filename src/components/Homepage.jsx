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
import PopularItem from 'components/popularItem.jsx';


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
            <div>
                <div className='bg'>
                    <form className="form">
                        <div className="input-wrapper">
                            <input className="input" type="text" placeholder=" " data-placeholder="E-mail" required/>
                            <span className="placeholder">Search...</span>
                        </div>
                    </form>
                </div>
                <div className='row'>
                    <PopularItem className='col-md-2' id='pop' p={p}/>
                    <PopularItem className='col-md-2' id='pop' p={p}/>
                    <PopularItem className='col-md-2' id='pop' p={p}/>
                    <PopularItem className='col-md-2' id='pop' p={p}/>
                </div>
                <div className='row'>
                    <PopularItem className='col-sm-3' p={p}/>
                    <PopularItem className='col-sm-3' p={p}/>
                    <PopularItem className='col-sm-3' p={p}/>
                    <PopularItem className='col-sm-3' p={p}/>
                </div>
                <div className='row' style={{display: (this.state.hasMore) ? 'flex' : 'none'}}>
                    <PopularItem className='col-sm-3' p={p}/>
                    <PopularItem className='col-sm-3' p={p}/>
                    <PopularItem className='col-sm-3' p={p}/>
                    <PopularItem className='col-sm-3' p={p}/>
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