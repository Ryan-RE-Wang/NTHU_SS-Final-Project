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
import DatePicker from 'react-date-picker';

import Post from 'components/SearchPost.jsx';
import './SearchPage.css'

export default class DateSelectedPage extends React.Component {
    static propTypes = {
        date: PropTypes.number
    }
    state = {
        date: new Date(),
    }

    constructor(props) {
        super(props);
    }
    onChange = date => this.setState({ date })
    
    componentDidUpdate(prevProps) {
        if (this.props.date !== prevProps.date) {
            this.setState({
                date: this.props.date
            });
        }
    }
    render() {
        return (
            <div>
                
                <Container className='SearchPage w-75'>
                    <h3 className="display-3">Searching result</h3>
                    <div className='d-flex flex-column justify-content-center'>
                        <Post className='d-flex'></Post>
                        <Post className='d-flex'></Post>
                        <Post className='d-flex'></Post>
                        <Post className='d-flex'></Post>
                    </div>

                </Container>
            </div>
        )
    }
    
}