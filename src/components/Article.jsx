import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Label, Button } from 'reactstrap';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PlaceIcon from '@material-ui/icons/Place';
import PaymentIcon from '@material-ui/icons/Payment';
import EventIcon from '@material-ui/icons/Event';
import './Article.css';

export default class Article extends React.Component {
    static propTypes = {

    }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container className='article'>
                
                <h1 className='title'>This is an article</h1>

                <Row xs="2" align="center"> 
                    <Col xs="auto"> 
                        <EventIcon/>
                    </Col>
                    <Col xs="auto"> 
                        <p>Date</p>
                    </Col>
                </Row>
                <Row xs="2" align="center"> 
                    <Col xs="auto"> 
                        <AccessTimeIcon/>
                    </Col>
                    <Col xs="auto"> 
                        <p>Time</p>
                    </Col>
                </Row>
                <Row xs="2" align="center"> 
                    <Col xs="auto"> 
                        <PlaceIcon/>
                    </Col>
                    <Col xs="auto"> 
                        <p>Location</p>
                    </Col>
                </Row>
                <Row xs="2" align="center"> 
                    <Col xs="auto"> 
                        <PaymentIcon/>
                    </Col>
                    <Col xs="auto"> 
                        <p>Ticket info.</p>
                    </Col>
                </Row>
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
                </p>
                <div className='poster-container'>
                    <a href="#"><img class='poster' src="images/烤魷魚.jpg" alt="grilled squid" width="400rem" margin="0 auto"/></a>
                </div>
            </Container>
            
            
        );
    }
}