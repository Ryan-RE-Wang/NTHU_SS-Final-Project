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
        
    }
    componentDidUpdate(prevProps) {
        if (this.props.searchStartDate !== prevProps.searchStartDate || this.props.searchEndDate !== prevProps.searchEndDate || this.props.searchText !== prevProps.searchText) {
            this.props.dispatch(listPosts(this.props.searchText, this.props.searchStartDate, this.props.searchEndDate));
        }
    }

    componentDidMount() {
        this.props.dispatch(listPosts(this.props.searchText, category, this.props.searchStartDate, this.props.searchEndDate));
    }

    render() {

        let children = 
        <div>
            <div id='blankSpace'></div>
            No post here. Use another key word.
        </div>;
        if (this.props.posts.length) {
            console.log(this.props.posts)
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
                </Container>
            </div>
        )
    }
}
export default connect(state => ({
    ...state.post,
    postLoading: state.post.postLoading,
    searchText: state.searchText,
    searchStartDate: state.searchStartDate,
    searchEndDate: state.searchEndDate
}))(SearchPage);
