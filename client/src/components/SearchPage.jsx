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

import SearchPost from 'components/SearchPost.jsx';
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
            <div className='search-page'>
                <Container>
                    <Row className='d-flex justify-content-center'>
                    <div className='post-item'>
                        <SearchPost/>
                    </div>
                    <div className='post-item'>
                        <SearchPost/>
                    </div>
                    <div className='post-item'>
                        <SearchPost/>
                    </div>
                    </Row>
                </Container>
            </div>
           
                
            
        )
    }
    
}