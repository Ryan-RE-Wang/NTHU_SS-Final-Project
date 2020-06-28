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
import LinesEllipsis from 'react-lines-ellipsis';
import HTMLEllipsis from 'react-lines-ellipsis/lib/html'
import {getPage} from 'states/clickPage-action.js';

import './SearchPost.css'

const baseUrl = 'https://team11final.s3-us-west-1.amazonaws.com/';
const lasturl = '.jpeg';

export default class SearchPost extends React.Component {
    static propTypes = {
        // intro: PropTypes.string,
        // dates: PropTypes.bool,
        // place: propTypes.string,
        p: PropTypes.object
    };

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    render() {
        const text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,'
        return(       
            <Container className='container'>
                <div className='search-post d-flex row'> 
                    <div className='poster col'>
                        <img src={baseUrl + this.props.p.fileurl + lasturl} className='img-fluid'/>
                    </div>
                    <div className='col'>
                        <div className='content d-flex row justify-content-start align-items-center'>
                        <div className='p-2 title'>
                            {this.props.p.title}
                        </div>
                        <div className='p-2'>
                            <div className='d-flex row justify-content-start align-items-center'>
                                <div className='p-2'> 
                                    <EventIcon/>
                                </div> 
                                <div className='p-2'>  
                                    <TextField
                                        id="datetime-local"
                                        label="Start Date and Time"
                                        type="datetime-local"
                                        defaultValue={this.props.p.startdatetime}
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    /> 
                                </div> 
                            </div>
                            <div className='d-flex row justify-content-start align-items-center'>
                                <div className='p-2'> 
                                    <PlaceIcon/>
                                </div> 
                                <div className='p-2'> 
                                    {this.props.p.location}
                                </div>
                            </div>

                            <div className='introduction'>
                                    <HTMLEllipsis
                                        unsafeHTML={text}
                                        maxline={5}
                                        basedOn='letters'
                                    />
                            </div>
                            <div className='link'> 
                                <Link to="/article" className="btn btn-secondary" onClick={this.handleClick}>
                                    More Info
                                </Link>
                            </div>

                        </div>
                        </div>
                    </div>
                    
                </div>
            </Container>
        )
    }

    handleClick() {
        this.props.dispatch(getPage(this.props.p));  
    }
}