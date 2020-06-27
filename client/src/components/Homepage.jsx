import React from 'react';
import { InputGroup, InputGroupAddon, Input,FormGroup } from 'reactstrap';
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
                <img className='image-fluid homepage-image' src="/images/02.png" alt=""/>
                {/* <form className="form d-inline">
                    <div className="input-wrapper">
                        <input className="input" type="text" placeholder=" " data-placeholder="E-mail" required/>
                        <input className="input" type="text" placeholder=" " data-placeholder="E-mail" required/>
                        {/* <span className="placeholder">Search...</span> */}
                        {/* <FormGroup> 
                            <Input
                                type="date"
                                name="date"
                                id="startDate"
                                value={"asd"}
                                placeholder="date placeholder" 
                                /> 
                        </FormGroup> */}
                    {/* </div> */}
                {/* </form> */}
                <form className='form'>
                    <div className="form-row justify-content-center input-wrapper">
                        <div className="col-12 col-sm-12 col-lg-5">
                        <input className='input'type="text"  placeholder="Search for event"/>
                        </div>
                        <div class="col-12 col-sm-12 col-lg-2">
                        <input className='input'type="date"  placeholder="Start"/>
                        </div>
                        <div class="col-12 col-sm-12 col-lg-2">
                        <input className='input'type="date"  placeholder="End"/>
                        </div>
                    </div>
                </form>
                {/* <div className='recent-event-content'>
                <div className='recent-event'> Recent Events</div>
                <hr width='76%'/> */}
                <div className='d-flex homepage-margin justify-content-center'>
                    <div className='homepage-content '>
                        
                        <div className='recent-event'> Recent Events</div>
                        <div className='grid-container d-flex justify-content-center'>                 
                            <div className='row px-0 mx-0'>

                                <div className='col-6 col-md-3 col-lg-2  grid-item'>
                                    <div className='grid-item-padding'>
                                    <PopularArticle/>
                                    </div>
                                </div>                            
                                <div className='col-6 col-md-3 col-lg-2  grid-item'>
                                    <div className='grid-item-padding'>
                                    <PopularArticle/>
                                    </div>
                                </div>
                                <div className='col-6 col-md-3 col-lg-2  grid-item'>
                                    <div className='grid-item-padding'>
                                    <PopularArticle/>
                                    </div>
                                </div>
                                <div className='col-6 col-md-3 col-lg-2  grid-item'>
                                    <div className='grid-item-padding'>
                                    <PopularArticle/>
                                    </div>
                                </div>
                                <div className='col-6 col-md-3 col-lg-2  grid-item'>
                                    <div className='grid-item-padding'>
                                    <PopularArticle/>
                                    </div>
                                </div>
                                <div className='col-6 col-md-3 col-lg-2  grid-item'>
                                    <div className='grid-item-padding'>
                                    <PopularArticle/>
                                    </div>
                                </div>
                                <div className='col-6 col-md-3 col-lg-2  grid-item'>
                                    <div className='grid-item-padding'>
                                    <PopularArticle/>
                                    </div>
                                </div>
                                <div className='col-6 col-md-3 col-lg-2  grid-item'>
                                    <div className='grid-item-padding'>
                                    <PopularArticle/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='recent-event'> Popular Events 
                        <img id='most-popular-img' src='./images/bd1.png'/>
                        <img id='most-popular-img' src='./images/bd2.jpg'/>
                        </div>
                        <div className='grid-container d-flex justify-content-center'>                 
                            <div className='row px-0 mx-0'>

                                <div className='col-6 col-md-3 col-lg-2  grid-item'>
                                    <div className='grid-item-padding'>
                                    <PopularArticle/>
                                    </div>
                                </div>                            
                                <div className='col-6 col-md-3 col-lg-2  grid-item'>
                                    <div className='grid-item-padding'>
                                    <PopularArticle/>
                                    </div>
                                </div>
                                <div className='col-6 col-md-3 col-lg-2  grid-item'>
                                    <div className='grid-item-padding'>
                                    <PopularArticle/>
                                    </div>
                                </div>
                                <div className='col-6 col-md-3 col-lg-2  grid-item'>
                                    <div className='grid-item-padding'>
                                    <PopularArticle/>
                                    </div>
                                </div>
                                <div className='col-6 col-md-3 col-lg-2  grid-item'>
                                    <div className='grid-item-padding'>
                                    <PopularArticle/>
                                    </div>
                                </div>
                                <div className='col-6 col-md-3 col-lg-2  grid-item'>
                                    <div className='grid-item-padding'>
                                    <PopularArticle/>
                                    </div>
                                </div>
                                <div className='col-6 col-md-3 col-lg-2  grid-item'>
                                    <div className='grid-item-padding'>
                                    <PopularArticle/>
                                    </div>
                                </div>
                                <div className='col-6 col-md-3 col-lg-2  grid-item'>
                                    <div className='grid-item-padding'>
                                    <PopularArticle/>
                                    </div>
                                </div>
                            </div>
                        </div>
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



