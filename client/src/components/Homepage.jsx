import React from 'react';
import { InputGroup, InputGroupAddon, Input,FormGroup } from 'reactstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Carousel from 'react-bootstrap/Carousel';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import {Alert} from 'reactstrap';
import PopularArticle from 'components/PopularArticle.jsx';
import ColumnPost from 'components/ColumnPost.jsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {listPosts} from 'api/posts.js';

import './Homepage.css'

export default class Homepage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            masking: false,
            postLoading: false,
            searchText: '',
            category: '',
            start:'',
            mode: false,
            club: '',
            order: 'id',
            userid: '',
            startofPost: '',
            posts: [], 
            hasMore: true
        }

        this.listPosts = this.listPosts.bind(this);
        this.handleHasMore = this.handleHasMore.bind(this);
    }

    componentDidMount() {
        this.listPosts(this.state.searchText, this.state.category, this.state.start, this.state.mode, this.state.club, this.state.order, this.state.userid, this.state.startofPost);
    }

    render() {

        const {masking, postLoading} = this.state;
        let children = (<div>There are no posts</div>);
        if (this.state.posts.length) {
            children = this.state.posts.map(p => (
                <div className='col-6 col-md-3 col-lg-2  grid-item'>
                    <div className='grid-item-padding'>
                    <div key={p.id}><PopularArticle p={p}/></div>
                    </div>
                </div>
            ))
        }

        // const p = {
        //     image: 'images/poster.jpg',
        //     title: 'Final demo',
        //     location: 'Delta Building',
        //     date: '2020/6/30'
        // }

        return (
            <div className='homepage'>
                <img className='image-fluid homepage-image' src="/images/02.png" alt=""/>
                <form className='form'>
                    <div className="form-row justify-content-center input-wrapper">
                        <div className="col-12 col-sm-12 col-lg-5">
                        <input className='input'type="text"  placeholder="Search for event"/>
                        </div>
                        <div className="col-12 col-sm-12 col-lg-2">
                        <input className='input'type="date"  placeholder="Start"/>
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
                                {postLoading && <Alert color='warning' className='loading'>Loading...</Alert>}
                                {children}                                
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
                            {postLoading && <Alert color='warning' className='loading'>Loading...</Alert>}
                                {children}
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

    listPosts(searchText, category, start, mode, club, order, userid) {
        console.log("1");
        this.setState({
            postLoading: true,
            masking: true,
        }, () => {
            listPosts(searchText, category, start, mode, club, order, userid).then(posts => {
                console.log(posts);
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

        setTimeout(() => {
            this.setState({
                masking: false
            });
        }, 600);
        
    }

    listMorePosts() {
        if (this.state.posts.length < 1) {
            return;
        }
        this.setState({
            postLoading: true
        });
        listPosts(this.state.searchText, this.state.category, this.state.start, this.state.mode, this.state.club, this.state.order, this.state.userid, this.state.posts[this.state.posts.length - 1].id)
        .then(posts => {
            this.setState({
                ...this.state,
                posts: [...this.state.posts, ...posts], 
                hasMore: posts.length > 0
            });
        }).catch(err => {
            console.error('Error listing posts', err);
        }).then(() => this.setState({
            postLoading: false
        }))

    }

    handleHasMore() {
        this.setState((prevState) => ({
            hasMore: !prevState.hasMore
        }));
    }
}



