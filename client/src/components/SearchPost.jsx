import React from 'react';
import PropTypes from 'prop-types';
import { 
    Container
} from 'reactstrap';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'
import PlaceIcon from '@material-ui/icons/Place';
import TextField from '@material-ui/core/TextField';
import EventIcon from '@material-ui/icons/Event';
import HTMLEllipsis from 'react-lines-ellipsis/lib/html'
import {getPage} from 'states/clickPage-action.js';
import {connect} from 'react-redux';

import './SearchPost.css'

const baseUrl = 'https://team11final.s3-us-west-1.amazonaws.com/';
const lasturl = '.jpeg';

class SearchPost extends React.Component {
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
        const text = this.props.p.content;

        return(       
            <Container className='container'>
                <div className='search-post d-flex row'> 
                    <div className='poster col'>
                        <img src={baseUrl + this.props.p.fileurl + lasturl} className='img-fluid'/>
                    </div>
                    <div className='col'>
                        <div className='content d-flex row justify-content-start align-items-center'>
                        <div className='p-2 searchpost-title'>
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
export default connect(state => ({
	...state.page
}))(SearchPost);
