import React from 'react';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from 'react-router-dom';
import PopularArticle from 'components/PopularArticle.jsx';
import ColumnPost from 'components/ColumnPost.jsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {connect} from 'react-redux';
import {setSearchText, setSearchDate} from 'states/post-actions.js';

import './Homepage.css'

class Homepage extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func
    };
    constructor(props) {
        super(props);

        this.state= {
            hasMore: false, 
            redirect: false
        }


        this.handleHasMore = this.handleHasMore.bind(this);
        this.handleSearchKeyPress = this.handleSearchKeyPress.bind(this);
        this.handleClearSearch = this.handleClearSearch.bind(this);
        this.handleSearchDateInput = this.handleSearchDateInput.bind(this);
    }
    render() {

        const p = {
            image: 'images/poster.jpg',
            title: 'Final demo',
            location: 'Delta Building',
            date: '2020/6/30'
        }

        if (this.state.redirect) {
            return <Route render={() => (
                    <Redirect to={{
                        pathname: '/search',
                        props: {searchText: this.state.searchText, searchDate: this.state.searchDate}
                    }} 
                />)}  
            /> ;
        }

        return (
            <div className='homepage'>
                <img className='image-fluid homepage-image' src="/images/02.png" alt=""/>
                <form className='form'>
                    <div className="form-row justify-content-center input-wrapper">
                        <div className="col-12 col-sm-12 col-lg-5">
                        <input className='input'type="text"  placeholder="Search for event" onKeyPress={this.handleSearchKeyPress} />
                        </div>
                        <div className="col-12 col-sm-12 col-lg-2">
                        <input className='input'type="date"  placeholder="Start" onChange={this.handleSearchDateInput} />
                        </div>
                        <div className="col-12 col-sm-12 col-lg-2">
                        <input className='input'type="date"  placeholder="End"/>
                        </div>
                    </div>
                </form>
                {/* recent event */}
                <div className='d-flex homepage-margin justify-content-center'>
                    <div className='homepage-content '>
                        
                        <div className='recent-event'> Recent Events
                            <img id='most-popular-img' src='./images/bd5.png'/>
                        </div>
                        
                        <div className='grid-container d-flex justify-content-center'>                 
                            <div className='row px-0 mx-0'>

                                <div className='col-6 col-md-3 col-lg-2  grid-item'>
                                    <div className='grid-item-padding'>
                                    <PopularArticle/>
                                    </div>
                                </div>                            
                                <div className='col-6 col-md-3 col-lg-2  grid-item'>
                                    <div className='grid-item-padding'>
                                    <PopularArticle/>
                                    </div>
                                </div>
                                <div className='col-6 col-md-3 col-lg-2  grid-item'>
                                    <div className='grid-item-padding'>
                                    <PopularArticle/>
                                    </div>
                                </div>
                                <div className='col-6 col-md-3 col-lg-2  grid-item'>
                                    <div className='grid-item-padding'>
                                    <PopularArticle/>
                                    </div>
                                </div>
                                <div className='col-6 col-md-3 col-lg-2  grid-item'>
                                    <div className='grid-item-padding'>
                                    <PopularArticle/>
                                    </div>
                                </div>
                                <div className='col-6 col-md-3 col-lg-2  grid-item'>
                                    <div className='grid-item-padding'>
                                    <PopularArticle/>
                                    </div>
                                </div>
                                <div className='col-6 col-md-3 col-lg-2  grid-item'>
                                    <div className='grid-item-padding'>
                                    <PopularArticle/>
                                    </div>
                                </div>
                                <div className='col-6 col-md-3 col-lg-2  grid-item'>
                                    <div className='grid-item-padding'>
                                    <PopularArticle/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button id='seeMore-btn' onClick={this.handleHasMore}>See more<ExpandMoreIcon/></button>
                        </div>
                    </div>
        
                </div>
                
                
                {/* column\ */}
                <div className='homepage-column justify-content-center'>
                    <Row>
                    <div className='col-12 col-lg-6 d-block'> <ColumnPost reverse={false}/></div>    
                    <div className='col-6 d-none d-lg-block'> <ColumnPost reverse={false}/></div>   
                    <div className='col-12 d-block d-lg-none'> <ColumnPost reverse={true}/></div> 
                    </Row>  
                </div>
                {/* pupular event */}
                <div className='d-flex homepage-margin justify-content-center'>
                    <div className='homepage-content '>
                        <div className='recent-event'> Popular Events 
                            <img id='most-popular-img' src='./images/bd2.jpg'/>
                        </div>
                        <div className='grid-container d-flex justify-content-center'>                 
                            <div className='row px-0 mx-0'>

                                <div className='col-6 col-md-3 col-lg-2  grid-item'>
                                    <div className='grid-item-padding'>
                                    <PopularArticle/>
                                    </div>
                                </div>                            
                                <div className='col-6 col-md-3 col-lg-2  grid-item'>
                                    <div className='grid-item-padding'>
                                    <PopularArticle/>
                                    </div>
                                </div>
                                <div className='col-6 col-md-3 col-lg-2  grid-item'>
                                    <div className='grid-item-padding'>
                                    <PopularArticle/>
                                    </div>
                                </div>
                                <div className='col-6 col-md-3 col-lg-2  grid-item'>
                                    <div className='grid-item-padding'>
                                    <PopularArticle/>
                                    </div>
                                </div>
                                <div className='col-6 col-md-3 col-lg-2  grid-item'>
                                    <div className='grid-item-padding'>
                                    <PopularArticle/>
                                    </div>
                                </div>
                                <div className='col-6 col-md-3 col-lg-2  grid-item'>
                                    <div className='grid-item-padding'>
                                    <PopularArticle/>
                                    </div>
                                </div>
                                <div className='col-6 col-md-3 col-lg-2  grid-item'>
                                    <div className='grid-item-padding'>
                                    <PopularArticle/>
                                    </div>
                                </div>
                                <div className='col-6 col-md-3 col-lg-2  grid-item'>
                                    <div className='grid-item-padding'>
                                    <PopularArticle/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button id='seeMore-btn' onClick={this.handleHasMore}>See more<ExpandMoreIcon/></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    handleHasMore() {
        this.setState((prevState) => ({
            hasMore: !prevState.hasMore
        }));
    }

    handleSearchDateInput(e) {
        var date = e.target.value;
        if (date) {
            this.props.dispatch(setSearchDate(date));
        }
    }

    handleSearchKeyPress(e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode === 13){
            this.props.dispatch(setSearchText(e.target.value))
            this.setState({
                redirect: (e.target.value !== '')? true : false
            });
        }
    }

    handleClearSearch() {
        this.props.dispatch(setSearchText())
    }
}
export default connect(state => ({
    ...state.post,
    postLoading: state.post.postLoading,
    searchText: state.searchText,
    searchDate: state.searchDate
}))(Homepage);


