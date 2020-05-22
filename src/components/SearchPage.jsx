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
            <div>
                <Container>
                    <Row className='d-flex justify-content-md-center'>
                        <Col md={2}/>
                        <Col md={8}>
                            <div className='search'>
                                <InputGroup>
                                    <Input />
                                    <InputGroupAddon addonType='prepend'>
                                        <DatePicker
                                        onChange={this.onChange}
                                        value={this.state.date}
                                        />
                                    </InputGroupAddon>
                                    <InputGroupAddon addonType='prepend'>
                                        <Link to='/search' className='btn btn-info'>Search</Link>
                                    </InputGroupAddon>
                                </InputGroup>
                            </div>
                        </Col>
                        <Col md={2}/>
                    </Row> 
                </Container>
                <Container className='search-page w-75'>
                    <div className='d-flex flex-column justify-content-center'>
                        <SearchPost className='d-flex'></SearchPost>
                        <SearchPost className='d-flex'></SearchPost>
                        <SearchPost className='d-flex'></SearchPost>
                        <SearchPost className='d-flex'></SearchPost>
                    </div>

                </Container>
            </div>
        )
    }
    
}