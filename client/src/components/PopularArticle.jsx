import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {connect} from 'react-redux';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './PopularArticle.css';

const baseUrl = 'https://team11final.s3-us-west-1.amazonaws.com/';
const lasturl = '.jpeg';

class PopularArticle extends React.Component {
    static propTypes = {
        p: PropTypes.object
    };

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Link className='pop home-article-link' to='/article' >
                <div className='popular-content' >
                    <img className='component-img' src={baseUrl + this.props.p.fileurl + lasturl}  alt=""/>
                    {/* <div className='location'><LocationOnIcon/> Delta 105</div> */}
                        <div className='popular-title'>{this.props.p.title}</div>
                    {/* <div className='datetime'> 2020/6/30 10:00</div> */}
                </div>
            </Link>
            
        )
    }
}

export default connect(state => ({
	...state.page
}))(PopularArticle);