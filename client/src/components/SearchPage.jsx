import React from 'react';
import PropTypes from 'prop-types';
import { 
    Container, 
    Row
} from 'reactstrap';
import Button from '@material-ui/core/Button';
import {Alert} from 'reactstrap';
import {connect} from 'react-redux';
import {listPosts} from 'states/post-actions.js';
import {
    listPosts as listPostsFromApi,
} from 'api/posts.js';
import SearchPost from 'components/SearchPost.jsx';
import './SearchPage.css'

const category = null;

class SearchPage extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func,
        posts: PropTypes.array,
        searchText: PropTypes.string,
        searchStartDate: PropTypes.string,
        searchEndDate: PropTypes.string,
    }

    constructor(props) {
        super(props);

        this.listMorePosts = this.listMorePosts.bind(this);
        
    }
    componentDidUpdate(prevProps) {
        if (this.props.searchStartDate !== prevProps.searchStartDate || this.props.searchEndDate !== prevProps.searchEndDate || this.props.searchText !== prevProps.searchText) {
            this.props.dispatch(listPosts(this.props.searchText, this.props.searchStartDate, this.props.searchEndDate, null));
        }
    }

    componentDidMount() {
        this.props.dispatch(listPosts(this.props.searchText, category, this.props.searchStartDate, this.props.searchEndDate, null));
    }

    render() {

        let children = <div>No post here. Use another key word.</div>;
        if (this.props.posts.length) {
            children = this.props.posts.map(p => (
                <div key={p.id} className='post-item'>
                    <SearchPost p={p}/>
                </div>
            ))
        }
        return (
            <div className='search-page'>
                <div id='blankSpace'></div>
                <Container>
                    <div>
                        {this.props.postLoading && <Alert color='warning' className='loading'>Loading...</Alert>}
                    </div>
                    <Row className='d-flex justify-content-center'>
                        {children}
                    </Row>
                    <Row className='d-flex justify-content-center p-2'>
                        {
                            (this.props.posts.length)? <Button variant="contained" id='showMoreBtn' onClick={this.listMorePosts}>Show More</Button> : ''
                        }
                    </Row>
                </Container>
            </div>
        )
    }

    listMorePosts() {

        if (this.props.posts.length < 1) {
            return;
        }
        this.setState({
            postLoading: true
        });
        listPostsFromApi(this.props.searchText, this.props.searchStartDate, this.props.searchEndDate, this.props.posts[this.props.posts.length - 1].id)
        .then(posts => {
            console.log(posts)
            this.setState({
                posts: [...this.props.posts, posts],
                hasMore: (posts.length > 1)
            });
        }).catch(err => {
            console.error('Error listing posts', err);
        }).then(() => this.setState({
            postLoading: false
        }))
    }
}
export default connect(state => ({
    ...state.post,
    postLoading: state.post.postLoading,
    searchText: state.searchText,
    searchStartDate: state.searchStartDate,
    searchEndDate: state.searchEndDate
}))(SearchPage);
