import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Label } from 'reactstrap';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PlaceIcon from '@material-ui/icons/Place';
import PaymentIcon from '@material-ui/icons/Payment';
import EventIcon from '@material-ui/icons/Event';
import './Article.css';

export default class Article extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        content: PropTypes.string,
        startDate: PropTypes.number,
        endDate: PropTypes.number,
        startTime: PropTypes.number,
        endTime: PropTypes.number,
        ticket: PropTypes.string,
        image: PropTypes.string,
        location: PropTypes.string,
        tags: PropTypes.array
    }
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const _tags = ['nthu', 'kaohsiung', 'food'];
        let tagItems = '';
        if (_tags !== []) {
            tagItems = _tags.map((_tags) =>
                <Link key={_tags} to='/category'>
                    #{_tags} &nbsp;
                </Link>
            )
        } 
        
        const handleCalender = () => {
            
            var gapi = window.gapi;
            var CLIENT_ID = '413577164940-kdvthgkkl95a3873sdbmm42rri7f0db1.apps.googleusercontent.com';
            var API_KEY = 'AIzaSyBk04ooViicGs8OwE-jB-4_Z7FhkRN7-LA'
            var DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
            var SCOPES = 'https://www.googleapis.com/auth/calendar.events';
            gapi.load('client:auth2', () => {
                console.log('loaded client');
                gapi.client.init({
                    apiKey: API_KEY,
                    clientId: CLIENT_ID,
                    discoveryDOCS: DISCOVERY_DOCS,
                    scope: SCOPES
                })

                gapi.client.load('calendar', 'v3', () => console.log('bam!'));
    
                gapi.auth2.getAuthInstance().signIn().then(() => {
                    console.log('Hello')
                    var event = {
                        'summary': 'Google I/O 2015',
                        'location': '800 Howard St., San Francisco, CA 94103',
                        'description': 'A chance to hear more about Google\'s developer products.',
                        'start': {
                        'dateTime': '2015-05-28T09:00:00-07:00',
                        'timeZone': 'America/Los_Angeles'
                        },
                        'end': {
                        'dateTime': '2015-05-28T17:00:00-07:00',
                        'timeZone': 'America/Los_Angeles'
                        }
                    };
                        
                    var request = gapi.client.calendar.events.insert({
                        'calendarId': 'primary',
                        'resource': event
                    });
                    
                    request.execute(event => {
                        window.open(event.htmlLink)
                        console.log(event.data.htmlLink)
                    });
                        
                });
            });
        
            
        }
        
        return (
            <Container className='article'>
                
                <div className='d-flex row content justify-content-center align-items-center'>
                    <div className='col-4 poster'>
                        <img className='img-fluid' src="images/烤魷魚.jpg" alt="grilled squid" width="240rem" margin="0 auto"/>
                    </div>
                    <div className='col-6 info align-items-center justify-content-center'>
                        <div className='p-2 title' fontWeight='bold'>
                                This is an article
                        </div>
                        <div className='p-2' >
                            <PlaceIcon/>
                            Location &nbsp; 蒙民偉樓
                        </div>
                    </div>
                </div>    
                <hr></hr>
                <div className='d-flex info2 row justify-content-center align-items-center'>
                        <div className='col-1'>
                            <div className='p-1'> 
                                <EventIcon/>
                            </div> 
                        </div>
                        <div className='datetime col-3'>
                            <div className='p-1 ' >
                                Start 2020/06/22 17:00
                            </div>
                            <div className='p-1 '>
                                End 2020/06/22 17:00
                            </div>
                        </div>
                        <div className='p-1 col-3'>
                                <Button color="primary" variant="contained" onClick={handleCalender}> ADD TO CALENDAR</Button> 
                        </div>
                        <div className='d-flex row justify-content-center align-items-center '>
                            <div className='p-2'> 
                                <PaymentIcon/> Ticket &nbsp; $0
                            </div> 
                        </div>
                </div>
                <div className='d-flex row content justify-content-center align-items-center'>
                    <div className='col-2 contact align-items-center'> 
                        <div className='p-1 row'> 
                            Contact 
                        </div> 
                        <div className='p-1 row'>
                            <img className='' src="images/rsz_1corgi.jpg" alt="" height="100rem" margin="0 auto"/>
                        </div>
                        <div className='p-1 row' >
                            0912-345-789
                        </div>
                        <div className='p-1 row'>
                            corgithedog@gmail.com
                        </div>
                    </div>
                    <div className='col-8 paragraph'> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
                    </div>                    
                </div>
                <div className='tags d-flex row justify-content-center'>
                    {tagItems}
                </div>
                <hr></hr>
                <div className='related-articles d-flex row justify-content-center'>
                    <div className='p-2'>
                        <a href="/#/article"><img className='' src="images/烤魷魚.jpg" alt="" height="200rem" margin="0 auto"/></a>
                    </div>
                    <div className='p-2'>
                        <a href="/#/article"><img className='' src="images/烤魷魚.jpg" alt="" height="200rem" margin="0 auto"/></a>
                    </div>
                </div>
            </Container>
        );
    }

    
    
}
// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg, #f7a73e 30%, #f75a3e 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   },
// });

// function Hook() {
//   const classes = useStyles();
//   return <Button className={classes.root}>Save to Calendar</Button>;
// }