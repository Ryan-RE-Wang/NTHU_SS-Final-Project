import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PlaceIcon from '@material-ui/icons/Place';
import PaymentIcon from '@material-ui/icons/Payment';
import './Article.css';

export default class Article extends React.Component {
    static propTypes = {

    }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='article'>
                <h1>This is an article</h1>
                <div>
                <AccessTimeIcon/><p>Date and Time</p>
                <PlaceIcon/><p>Location</p>
                <PaymentIcon/><p>Ticket info.</p>
                <p>dummy dummy dummy</p>
                <a href="#"><img src="images/烤魷魚.jpg" alt="grilled squid" width="400rem"/></a>
            </div>
            </div>
        );
    }
}