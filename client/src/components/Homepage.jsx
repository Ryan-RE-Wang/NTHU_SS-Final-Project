import React from 'react';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from 'react-router-dom';
import {Alert} from 'reactstrap';
import { listPostsBySearch as listPostsByDate} from 'api/posts.js';
import PopularArticle from 'components/PopularArticle.jsx';
import ColumnPost from 'components/ColumnPost.jsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import {setSearchText, setSearchStartDate, setSearchEndDate} from 'states/post-actions.js';

import './Homepage.css'
import {listPostsbyclub} from 'api/posts.js';
import {listPostsByTouch} from 'api/posts.js';

class Homepage extends React.Component {

    static propTypes = {
        dispatch: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            masking: false,
            postLoading: false,
            searchText: '',
            category: '',
            start:'',
            end:'',
            mode: false,
            club: '',
            order: 'id',
            userid: '',
            startofpost: null,
            postsRecent: [],
            postsPop:[], 
            hasMore: true,
            redirect: false
        }

        this.listPostsByDate = this.listPostsByDate.bind(this);
        this.listMorePosts = this.listMorePosts.bind(this);
        this.handleSearchKeyPress = this.handleSearchKeyPress.bind(this);
        this.handleClearSearch = this.handleClearSearch.bind(this);
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.listPostsByTouch = this.listPostsByTouch.bind(this);
    }

   
    componentDidMount() {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        this.setState({
                date: date
        })
        this.listPostsByDate(null, this.state.date, null);
        this.listPostsByTouch();
        // this.listPosts(this.state.searchText, this.state.category, this.state.start, this.state.mode, this.state.club, 'touch', this.state.userid, this.state.startofpost);
    }
        
    render() {

        const {postLoading} = this.state;

        let childrenRecent = (<div>There are no posts</div>);
        if (this.state.postsRecent.length) {
            childrenRecent = this.state.postsRecent.map(p => (
                <div className='col-6 col-md-3 col-lg-2  grid-item'>
                    <div className='grid-item-padding'>
                    <div key={p.id}><PopularArticle p={p}/></div>
                    </div>
                </div>
            ))
        }

        let childrenPop = (<div>There are no posts</div>);
        if (this.state.postsPop.length) {
            childrenPop = this.state.postsPop.map(p => (
                <div className='col-6 col-md-3 col-lg-2  grid-item'>
                    <div className='grid-item-padding'>
                    <div key={p.id}><PopularArticle p={p}/></div>
                    </div>
                </div>
            ))
        }
        let mostRecent = {
            id:'-1',
            title:'na',
            content:'',
            fileurl:''
        }
        if (this.state.postsRecent.length) {
            mostRecent = this.state.postsRecent[0]
        }
        let mostPop = {
            id:'-1',
            title:'na',
            content:'',
            fileurl:''
        }
        if (this.state.postsPop.length) {
            mostPop = this.state.postsPop[0]
        }

        if (this.state.redirect) {
            return <Route render={() => (
                    <Redirect to={{
                        pathname: '/search',
                        props: {
                            searchText: this.state.searchText, 
                            searchStartDate: this.state.searchStartDate, 
                            searchEndDate: this.state.searchEndDate}
                    }} 
                />)}  
            /> ;
        }
        const {postsRecent,postsPop} = this.state;
        return (
            
            <div className='homepage'>
                <img className='image-fluid homepage-image' src="/images/02.png" alt=""/>
                <Form className='form'>
                    <div className="form-row justify-content-center input-wrapper">
                        <div className="col-12 col-sm-12 col-lg-5">
                        <FormGroup>
                            <Input type="text" name="input" id="searchText" placeholder="looking for events..." onKeyPress={this.handleSearchKeyPress} />
                        </FormGroup>
                        </div>
                        <div className="col-12 col-sm-12 col-lg-2">
                            <FormGroup>
                                <Input
                                    type="date"
                                    name="date"
                                    id="startDate"
                                    placeholder="date placeholder"
                                    onChange={this.handleStartDateChange}
                                />
                            </FormGroup>
                        </div>
                        <div className="col-12 col-sm-12 col-lg-2">
                            <FormGroup>
                                <Input
                                    type="date"
                                    name="date"
                                    id="endDate"
                                    placeholder="date placeholder"
                                    onChange={this.handleEndDateChange}
                                />
                            </FormGroup>
                        </div>
                    </div>
                </Form>
                {/* recent event */}
                <div className='d-flex homepage-margin justify-content-center'>
                    <div className='homepage-content '>
                        
                        <div className='recent-event'> Recent Events
                            <img id='most-popular-img' src='./images/bd5.png'/>
                        </div>
                        
                        <div className='grid-container d-flex justify-content-center'>                 
                            <div className='row px-0 mx-0'>
                                {postLoading && <Alert color='warning' className='loading'>Loading...</Alert>}
                                {childrenRecent}                                
                            </div>
                        </div>

                        <div>
                            <button id='seeMore-btn' value='startdatetime' onClick={this.listMorePosts}>See more<ExpandMoreIcon/></button>
                        </div>
                    </div>
        
                </div>
                

                {/* column\ */}
                <div className={`homepage-column justify-content-center${postsRecent.length<=0 && postsPop.length<=0 ?"d-none":"d-none"}`}>
                    <Row>
    
                        <div className='col-12 col-lg-6 d-block'> 
                            <ColumnPost reverse={false} postId = {mostRecent.id} postname={mostRecent.title} 
                            postContent={mostRecent.content} fileUrl={mostRecent.fileurl}/>
                        </div>    
                        <div className='col-6 d-none d-lg-block'> 
                            <ColumnPost reverse={false} postId = {mostPop.id} postname={mostPop.title} 
                            postContent={mostPop.content} fileUrl={mostPop.fileurl}/></div>   
                        <div className='col-12 d-block d-lg-none'> 
                            <ColumnPost reverse={true} postId = {mostPop.id} postname={mostPop.title} 
                            postContent={mostPop.content} fileUrl={mostPop.fileurl}/>
                        </div> 
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
                            {postLoading && <Alert color='warning' className='loading'>Loading...</Alert>}
                                {childrenPop}
                            </div>
                        </div>
                        <div>
                            <button id='seeMore-btn' value='touch' onClick={this.listMorePosts}>See more<ExpandMoreIcon/></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    handleStartDateChange(e) {
        const date = e.target.value;
        console.log(date)
        if (date) {
            this.props.dispatch(setSearchStartDate(date));
        }
    }

    handleEndDateChange(e) {
        const date = e.target.value;
        if (date) {
            this.props.dispatch(setSearchEndDate(date));
        }
    }

    listPostsByDate(searchText, start, end) {
        this.setState({
            postLoading: true,
            masking: true,
        }, () => {
            listPostsByDate(searchText, start, end).then(posts => {
                    this.setState({
                        postsRecent: posts, 
                        postLoading: false
                    });
                
            }).catch(err => {
                console.error('Error listing posts', err);
                this.setState({
                    postsRecent: [],
                    postLoading: false
                })
            })
        })

        setTimeout(() => {
            this.setState({
                masking: false
            });
        }, 600);   
    }
    listPostsByTouch() {
        this.setState({
            postLoading: true,
            masking: true,
        }, () => {
            listPostsByTouch().then(posts => {
                    this.setState({
                        postsPop: posts, 
                        postLoading: false
                    });
                
            }).catch(err => {
                console.error('Error listing posts', err);
                this.setState({
                    postsPop: [],
                    postLoading: false
                })
            })
        })

        setTimeout(() => {
            this.setState({
                masking: false
            });
        }, 600);   
    }
    listMorePosts(e) {
        
        const order = e.target.value;
        const posts = (order === 'startdatetime') ? this.state.postsRecent : this.state.postsPop;

        if (posts.length < 1) {
            return;
        }
        this.setState({
            postLoading: true
        });

        let startpoint;
        if (order === 'touch') {
            startpoint = posts[posts.length - 1].touch;
        }

        listPosts(this.state.searchText, this.state.category, this.state.start, this.state.end, this.state.mode, this.state.club, order, this.state.userid, startpoint)
        .then(posts => {
            if (order === 'startdatetime')
                this.setState({
                    ...this.state,
                    postsRecent: [...this.state.postsRecent, ...posts], 
                    hasMore: posts.length > 0
                });
            else {
                console.log("pop");

                this.setState({
                    ...this.state,
                    postsPop: [...this.state.postsPop, ...posts], 
                    hasMore: posts.length > 0
                });
            }
        }).catch(err => {
            console.error('Error listing posts', err);
        }).then(() => this.setState({
            postLoading: false
        }))

    }


    handleSearchKeyPress(e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode === 13){
            this.props.dispatch(setSearchText(e.target.value))
            this.setState({
                searchText: e.target.value,
                redirect: true 
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
    searchStartDate: state.searchStartDate,
    searchEndDate: state.searchEndDate,
    ...state.category
}))(Homepage);


