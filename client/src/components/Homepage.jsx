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
            startofpost: null,
            postsRecent: [],
            postsPop:[], 
            hasMore: true
        }

        this.listPosts = this.listPosts.bind(this);
        this.listMorePosts = this.listMorePosts.bind(this);
    }

    componentDidMount() {
        this.listPosts(this.state.searchText, this.state.category, this.state.start, this.state.mode, this.state.club, 'startdatetime', this.state.userid, this.state.startofpost);
        this.listPosts(this.state.searchText, this.state.category, this.state.start, this.state.mode, this.state.club, 'touch', this.state.userid, this.state.startofpost);
    }

    render() {

        const {masking, postLoading} = this.state;

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
                                {childrenRecent}                                
                            </div>
                        </div>

                        <div>
                            <button id='seeMore-btn' value='startdatetime' onClick={this.listMorePosts}>See more<ExpandMoreIcon/></button>
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

    listPosts(searchText, category, start, mode, club, order, userid, startofpost) {
        this.setState({
            postLoading: true,
            masking: true,
        }, () => {
            listPosts(searchText, category, start, mode, club, order, userid, startofpost).then(posts => {
                if (order === 'startdatetime')
                    this.setState({
                        postsRecent: posts, 
                        postLoading: false
                    });
                else  {
                    this.setState({
                        postsPop: posts, 
                        postLoading: false
                    });
                }
                    
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

        listPosts(this.state.searchText, this.state.category, this.state.start, this.state.mode, this.state.club, order, this.state.userid, startpoint)
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

}



