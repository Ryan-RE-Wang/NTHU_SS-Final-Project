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
import TextField from '@material-ui/core/TextField';
import './Article.css';

export default class Article extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        content: PropTypes.string,
        startDateTime: PropTypes.number,
        endDateTime: PropTypes.number,
        ticket: PropTypes.string,
        fileurl: PropTypes.string,
        location: PropTypes.string,
        tags: PropTypes.array,
        club: PropTypes.string
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
                    var event = {
                        'summary': 'Desserts Festival',
                        // this.props.title,
                        'location': 'Mong Ning Wei',
                        // this.props.location,
                        'start': {
                        'dateTime': '2017-05-24T10:30',
                        // this.props.startDateTime + '-07:00',
                        'timeZone': 'Taipei/Taiwan'
                        },
                        'end': {
                        'dateTime': '2017-05-24T10:30',
                        // this.props.endDateTime + '-07:00',
                        'timeZone': 'Taipei/Taiwan'
                        }
                    };
                        
                    var request = gapi.client.calendar.events.insert({
                        'calendarId': 'primary',
                        'resource': event
                    });
                    
                    request.execute(event => {
                        window.open(event.htmlLink)
                    });
                        
                });
            });
        
            
        }
        
        const imageSrc = 'https://team11final.s3-us-west-1.amazonaws.com/1681ca51-9b78-4dcd-a319-1512215c2adf.jpeg?fbclid=IwAR1oVg0DWbh7Vw8nxD0-ZXNZkZs7NENoKO9Zk_VdQo81EhZPyx_wn3Otujc';
        return (
            <Container className='article'>
                
                <div className='d-flex row content justify-content-center align-items-center'>
                    <div className='col-4 poster'>
                        <img className='img-fluid' src= {imageSrc} width="240rem" margin="0 auto"/>
                    </div>
                    <div className='col-6 info align-items-center justify-content-center'>
                        <div className='p-2 title' fontWeight='bold'>
                                Dessert Festival
                                {/* {this.props.title} */}
                        </div>
                        <div className='p-2 row location align-items-center justify-content-center' >
                           <div className='p-2' >
                                <PlaceIcon/> Location
                            </div>
                            <div>
                                 &nbsp; Mong Ming Wei
                                 {/* {this.props.location} */}
                            </div> 
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
                            <form noValidate>
                                <TextField
                                    id="datetime-local"
                                    label="Start Date and Time"
                                    type="datetime-local"
                                    defaultValue='2017-05-24T10:30'
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    InputProps={{
                                        readOnly: true,
                                      }}
                                />
                            </form>
                            </div>
                            <div className='p-1 '>
                                <form noValidate>
                                <TextField
                                    id="datetime-local"
                                    label="End Date and Time"
                                    type="datetime-local"
                                    defaultValue='2017-05-24T10:30'
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    InputProps={{
                                        readOnly: true,
                                      }}
                                />
                            </form>
                            </div>
                        </div>
                        <div className='p-1 col-3'>
                                <Button color="primary" variant="contained" onClick={handleCalender}> ADD TO CALENDAR</Button> 
                        </div>
                        <div className='d-flex row justify-content-center align-items-center '>
                            <div className='p-2'> 
                                <PaymentIcon/> Ticket &nbsp; $0
                                {/* {this.props.ticket} */}
                            </div> 
                        </div>
                </div>
                <div className='d-flex row content justify-content-center align-items-center'>
                    <div className='col-3 col contact align-items-center justify-content-center'> 
                        <div className='p-1 '> 
                            Contact 
                        </div> 
                        <div className='p-1 '>
                            <img className='' src="images/rsz_1corgi.jpg" alt="" height="100rem" margin="0 auto"/>
                        </div>
                        <div className='p-1 ' >
                            0912-345-789
                        </div>
                        <div className='p-1'>
                            corgithedog@gmail.com
                        </div>
                    </div>
                    <div className='col-8 paragraph'> 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        {/* {this.props.content} */}
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
