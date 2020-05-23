import React from 'react';
import PropTypes from 'prop-types';
import { 
    InputGroup, 
    InputGroupAddon, 
    Input,
    Button, 
    Jumbotron, 
    Container, 
    Row,
    Col
} from 'reactstrap';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PlaceIcon from '@material-ui/icons/Place';
import PaymentIcon from '@material-ui/icons/Payment';
import EventIcon from '@material-ui/icons/Event';
import './SearchPost.css'

export default class SearchPost extends React.Component {
    static propTypes = {
        // intro: PropTypes.string,
        // dates: PropTypes.bool,
        // place: propTypes.string
    };

    constructor(props){
        super(props);
    }
    
    render() {
        return(       
            <div className='search-post container'>
                <div className='d-flex row'> 
                    <div className='col d-flex justify-content-start'>
                        <div className='image'> 
                                <img src='./images/烤魷魚.jpg'/>
                        </div> 
                    </div>
                    <div className='col'>
                        <div className='row title d-flex justify-content-start'>
                            Welcome
                        </div>
                        <div className='row date d-flex justify-content-start'>
                            <div className='col'>
                                <EventIcon/>
                            </div>
                            <div className='col'>
                                Date: 2020/05/22
                            </div>
                        </div>
                        <div className='row time d-flex align-item-start'>
                            <div className='col'>
                                <AccessTimeIcon/>
                            </div>
                            <div className='col'>
                                Time: 17:00
                            </div>
                        </div>
                        <div className='row location d-flex align-content-start'>
                            <div className='col'>
                                <PlaceIcon/>
                            </div>
                            <div className='col'>
                                Location: 野台
                            </div>
                        </div>
                        <div className='row introduction d-flex align-content-lg-start'>
                            <div className='col introduction d-flex align-content-start'> 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labinim veniam, quis nostrud e...       
                            </div>
                        </div>
                        <div className='row link d-flex flex-row-reverse'> 
                            <Link to="/article" className="btn btn-secondary">
                                More Info
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}