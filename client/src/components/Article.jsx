import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Label } from 'reactstrap';
import Button from '@material-ui/core/Button'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
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
import MyLoader from 'components/MyLoader.jsx';
import {listPostsbyclub} from 'api/posts.js';
import {getPage,getArticleFromDB} from 'states/clickPage-action.js';
import {getClub} from 'states/clickClub-actions.js';
import {createTouch} from 'api/posts.js';
import {connect} from 'react-redux';
import './Article.css';



class Article extends React.Component {
    static propTypes = {
    }
    constructor(props) {
        super(props);

        this.state = {
            related: [],
            post: {}
        }

        this.handleClickImg = this.handleClickImg.bind(this);

    }

    componentDidMount() {
        window.scrollTo(0, 0);
        listPostsbyclub(this.props.club, null).then((related) => {
            this.setState({
                related: related,
                post: {
                    id: this.props.id,
                    title: this.props.title,
                    content: this.props.content,
                    startdatetime: this.props.startdatetime,
                    enddatetime: this.props.enddatetime,
                    ticket: this.props.ticket,
                    fileurl: this.props.fileurl,
                    location: this.props.location,
                    tags: this.props.tags,
                    club: this.props.club
                }
            })
        }).catch(err => {
            console.error('Error creating posts', err);
        });
    }


    render() {

        let tagItems = '';
        if (this.props.tags !== []) {
            tagItems = this.props.tags.map(tags =>
                <Link key={tags} to='/category'>
                    #{tags} &nbsp;
                </Link>
            )
        } 

        let children = (<div></div> );
        if (this.state.related.length) {
            children = this.state.related.map(p => (
                <div key={p.id} className='p-2'>
                        <Link to='/article' onClick={() => this.handleClickImg(p.id)}><img className='' src={'https://team11final.s3-us-west-1.amazonaws.com/'+ p.fileurl+'.jpeg'} alt="" height="200rem" margin="0 auto"/></Link>
                    </div>
            ))
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
                        'summary': this.props.title,
                        'location': this.props.location,
                        'start': {
                        'dateTime': this.props.startdatetime + '-07:00',
                        'timeZone': 'Taipei/Taiwan'
                        },
                        'end': {
                        'dateTime': this.props.enddatetime + '-07:00',
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
        
        const imageSrc = 'https://team11final.s3-us-west-1.amazonaws.com/'+this.props.fileurl+'.jpeg';
        const imageSrcClub = 'https://team11final.s3-us-west-1.amazonaws.com/'+this.props.clubpic+'.jpeg';

        return (
            <Container className='article'>
            <div className= {`${this.props.fetching? 'd-block':'d-none'}`}><MyLoader/></div>
            <div className= {`${this.props.fetching? 'd-none':'d-block'}`}>
                <div className='d-flex row content justify-content-center align-items-center'>
                    <div className='col-4 poster'>
                        <img className='img-fluid' src= {imageSrc} width="240rem" margin="0 auto"/>
                    </div>
                    <div className='col-6 info align-items-center justify-content-center'>
                        <div className='p-2 article-title' fontWeight='bold'>
                            {this.props.title}
                        </div>
                        <div className='p-2 row location align-items-center justify-content-center' >
                           <div className='p-2' >
                                <PlaceIcon/> Location
                            </div>
                            <div>
                                 &nbsp; 
                                 {this.props.location}
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
                                    defaultValue={this.props.startdatetime}
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
                                    defaultValue={this.props.enddatetime}
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
                                <PaymentIcon/> Ticket &nbsp;
                                {this.props.ticket}
                            </div> 
                        </div>
                </div>
                <div className='d-flex row content justify-content-center align-items-center'>
                    <div className='col-3 col contact align-items-center justify-content-center'> 
                        <div className='p-1 '> 
                            Contact 
                        </div> 
                        <div className='p-1 '>
                            <img className='' src={imageSrcClub} alt="" height="100rem" margin="0 auto"/>
                        </div>
                        <div className='p-1'>
                            {this.props.useremail.email}
                        </div>
                    </div>
                    <div className='col-8 paragraph'> 
                        {this.props.content}
                    </div>                    
                </div>
                <div className='tags d-flex row justify-content-center'>
                    {tagItems}
                </div>
                <hr></hr>
                <div className='related-articles d-flex row justify-content-center'>
                    {children}
                </div>
            </div>
            </Container>
        );
    }  


    handleClickImg(pid) {
        this.props.dispatch(getPage(pid));
        this.props.dispatch(getClub(this.state.post.club));
        createTouch(this.state.post.id);
        
        
    }
}

export default connect(state => ({
    ...state.page,
    ...state.club
}))(Article);
