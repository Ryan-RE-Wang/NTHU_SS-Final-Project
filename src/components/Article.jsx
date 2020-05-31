import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Label } from 'reactstrap';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
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
                <div className='title' font-weight='bold'>This is an article</div>
                <div className='d-flex row content justify-content-center'>
                    <div className='poster'>
                        <a href="#"><img className='img-fluid' src="images/烤魷魚.jpg" alt="grilled squid" width="320rem" margin="0 auto"/></a>
                    </div>
                    <div className='info align-item-center'>
                        <div className='d-flex row justify-content-start align-items-center'>
                            <div className='p-2'> 
                                <EventIcon/>
                            </div> 
                            <div className='p-2'>  
                                Date &nbsp; 2020/06/22
                            </div> 
                            <div className=' p-2'>
                                <Hook/> 
                            </div>
                        </div>
                        <div className= 'd-flex row justify-content-start align-items-center'>
                            <div className='p-2' > 
                                <AccessTimeIcon/>
                            </div> 
                            <div className='p-2' > 
                                Time &nbsp; 17:00
                            </div>
                        </div>
                        <div className='d-flex row justify-content-start align-items-center'>
                            <div className='p-2'> 
                                <PlaceIcon/>
                            </div> 
                            <div className='p-2'> 
                                Location &nbsp; 蒙民偉樓
                            </div>
                        </div>
                        <div className='d-flex row justify-content-start align-items-center '>
                            <div className='p-2'> 
                                <PaymentIcon/>
                            </div> 
                            <div className='p-2'> 
                                Ticket info. &nbsp; $0
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex row content justify-content-center'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
                </div>
                <div className='related-articles d-flex row justify-content-center'>
                    <div className='p-2'>
                        <a href="#"><img className='' src="images/烤魷魚.jpg" alt="" height="200rem" margin="0 auto"/></a>
                    </div>
                    <div className='p-2'>
                        <a href="#"><img className='' src="images/烤魷魚.jpg" alt="" height="200rem" margin="0 auto"/></a>
                    </div>
                </div>
            </Container>
        );
    }
}
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #f7a73e 30%, #f75a3e 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

function Hook() {
  const classes = useStyles();
  return <Button className={classes.root}>Save to Calendar</Button>;
}