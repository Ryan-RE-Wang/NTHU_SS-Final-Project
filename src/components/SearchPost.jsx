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
        const text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,'
        return(       
            <div className='container'>
                <div className='search-post d-flex row'> 
                    <div className='poster col'>
                        <img src='./images/烤魷魚.jpg' className='img-fluid'/>
                    </div>
                    <div className='col'>
                        <div className='content d-flex row justify-content-start align-items-center'>
                        <div className='p-2 title'>
                            Welcome
                        </div>
                        <div className='p-2'>
                            <div className='d-flex row justify-content-start align-items-center'>
                                <div className='p-2'> 
                                    <EventIcon/>
                                </div> 
                                <div className='p-2'>  
                                    Date &nbsp; 2020/06/22
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

                            <div className='introduction'>
                                    <HTMLEllipsis
                                        unsafeHTML={text}
                                        maxline={5}
                                        basedOn='letters'
                                    />
                            </div>
                            <div className='link'> 
                                <Link to="/article" className="btn btn-secondary">
                                    More Info
                                </Link>
                            </div>

                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}