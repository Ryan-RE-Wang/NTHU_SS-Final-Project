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
import {listPosts} from 'api/posts.js';

import SearchPost from 'components/SearchPost.jsx';
import './SearchPage.css'

export default class DateSelectedPage extends React.Component {
    static propTypes = {
        date: PropTypes.number, 
        searchText: PropTypes.string,
    }
    state = {
        // date: new Date(),
        postLoading: false,
        posts: [],
    }

    constructor(props) {
        super(props);

        this.listPosts = this.listPosts.bind(this);
    }

    // onChange = date => this.setState({ date })

    componentDidUpdate(prevProps) {
        if (this.props.date !== prevProps.date || this.props.searchText !== prevProps.searchText) {
            this.listPosts(ths.props.searchText, category='', this.props.date + 'T00:00');
        }
    }

    componentDidMount() {
        this.listPosts(this.props.searchText, category='', this.props.date + 'T00:00');
    }

    render() {
        const {postLoading} = this.state;
        let children = (<div>No post here. Use another key word.</div>);
        if (this.state.posts.length) {
            children = this.state.posts.map(p => (
                <div key={p.id} className='post-item'>
                    <SearchPost p={p}/>
                </div>
            ))
        }
        return (
            <div className='search-page'>
                <Container>
                    <div>
                        {postLoading && <Alert color='warning' className='loading'>Loading...</Alert>}
                    </div>
                    <Row className='d-flex justify-content-center'>
                        {children}
                    </Row>
                </Container>
            </div>
        )
    }
    listPosts(searchText, category='', start) {
        this.setState({
            postLoading: true,
        }, () => {
            listPosts(searchText, category='', start).then(posts => {
                this.setState({
                    posts, 
                    postLoading: false
                });
            }).catch(err => {
                console.error('Error listing posts', err);
                this.setState({
                    posts: [],
                    postLoading: false
                })
            })
        })
    }
    
}