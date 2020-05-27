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
            <div className='container'>
                <div className='search-post d-flex row'> 
                    <div className='poster col-4 '>
                        <img src='./images/烤魷魚.jpg' className='img-fluid'/>
                    </div>
                    <div className='content col-6 '>
                        <div className=' title'>
                            Welcome
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <div className='row'>
                                    <EventIcon className='icon' fontSize='default' />
                                    <div className='date'>
                                        Date: 2020/05/22
                                    </div>
                                </div>
                                <div className='row'>
                                    <AccessTimeIcon className='icon' fontSize='default' />
                                    <div className='time'>
                                        Time: 17:00
                                    </div>
                                </div>
                                <div className='row'>
                                    <PlaceIcon className='icon' fontSize='default' />
                                    <div className='location'>
                                        Location: 野台
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='introduction'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labinim veniam, quis nostrud e...       
                                </div>
                            </div>
                        </div>
                        
                        <div className='row link d-flex'> 
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