import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, InputGroupAddon, Button, Jumbotron, Container,Row } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem,UncontrolledDropdown } from 'reactstrap';
import {Alert} from 'reactstrap';
import 'pretty-checkbox/src/pretty-checkbox.scss';
import Carousel from 'react-bootstrap/Carousel'
import CheckIcon from '@material-ui/icons/Check';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Post from 'components/Post.jsx';
import Pop_Post from 'components/Pop_Post.jsx';
import './CatalogPage.css'
import Footer_Content from 'components/Footer_Content.jsx';
import {listPosts} from 'api/posts.js';

export default class CatalogPage extends React.Component{
    static propTypes = {
    
        topicName: PropTypes.string,
        description: PropTypes.string
    };

    constructor(props){
        super(props);
        this.state = {
            exploreClick: false,
            orderClick: false,
            masking: false,
            postLoading: false,
            searchText: '',
            category: '',
            start:'',
            mode: false,
            club: '',
            order: 'id',
            userid: '',
            posts: [], 
            hasMore: true
        };
        this.handleExplore = this.handleExplore.bind(this); 
        this.handleOrder = this.handleOrder.bind(this); 
        this.listPosts = this.listPosts.bind(this);
        this.listMorePosts = this.listMorePosts.bind(this);
    }

    componentDidMount() {
        this.listPosts(this.state.searchText, this.state.category, this.state.mode, this.state.club, this.state.order, this.state.userid);
    }

    static catagory = ['All','Food','PE','Music','Association','Art','Competition'];
    static order = ['A to Z','Popularity','Date'];

    render(){
        
        const {masking, postLoading} = this.state;
        let children = (<div>There are no posts</div>);
        if (this.state.posts.length) {
            children = this.state.posts.map(p => (
                <div key={p.id}><Post intro={p.title} dates={p.startdate} place={p.location} holder={p.club} imageurl={p.fileurl}/></div>
            ))
        }

        return(  
            <div>     
            <div className='catalogPage-wrapper'>
            {/* d-block d-lg-none */}
                <div className='left-wrapper '></div>
                {/* <div className='right-wrapper'></div> */}
                <Container id='catalogPage' >
                    <Row>
                        <div className='col-12 col-sm-12 col-lg-3 classes-table' >                          
                                {/* left menu order */}{/* left menu explore */}
                                <div id='left-menu'className='col-12 d-none d-lg-block' >
                                    <div id='exploreBy' className='classes-section'onClick={this.handleExplore}>
                                        <div className='classes-topic'>
                                            <span>EXPLORE BY</span>
                                        </div>
                                        <div className='classes-body'>
                                        {
                                            CatalogPage.catagory.map((e,i) =>(
                                                <div className='checkbox-element'key={i}>
                                                <div className="pretty p-icon p-plain ">
                                                    <input type="checkbox" />
                                                    <div className="state">
                                                        <CheckIcon className='icon checkIcon'/>
                                                        <label className='option'>{e}</label>
                                                    </div>
                                                </div></div>
                                            ))
                                        }
                                        </div>
                                    </div>
                                    <div id='orderBy' className='classes-section 'onClick={this.handleOrder}>
                                        <div className='classes-topic '>
                                            <span>ORDER BY</span>
                                        </div>
                                        <div className='classes-body'>
                                        {
                                            CatalogPage.order.map((e,i) =>( 
                                                <div className='checkbox-element'key={i}>
                                                <div className="pretty p-icon p-plain "key={i}>
                                                    <input type="checkbox" />
                                                    <div className="state">
                                                        <CheckIcon className='icon checkIcon'/>
                                                        <label className='option'>{e}</label>
                                                    </div>
                                                </div></div>
                                            ))
                                        }  
                                        </div>
                                    </div>
                                </div>
                                
                                {/* drop menu order */}{/* drop menu explore */}
                                <div className='col-12 d-block d-lg-none'>
                                <div id='drop-menu'>
                                <Row>
                                    <div id='exploreBy-wrapper' className='col-12 col-sm-6'>
                                    <div id='exploreBy' className='classes-section '>
                                            <div  className={`${this.state.exploreClick ? 'dropDownBtn' : 'dropDownBtn'}`} onClick={this.handleExplore} >
                                                <span >EXPLORE BY</span>
                                                <ExpandMoreIcon className={`topic-symbol ${this.state.exploreClick ? 'd-none' : ''}`}/>
                                                <ExpandLessIcon className={`topic-symbol ${this.state.exploreClick ? '' : 'd-none'}`}/>
                                            </div>

                                            <div className={`classes-body ${this.state.exploreClick ? 'd-block' : 'd-none'}`}>
                                            {
                                                CatalogPage.catagory.map((e,i) =>(
                                                    <div className='checkbox-element'key={i}>
                                                        <div className="pretty p-icon p-plain  ">
                                                            <input type="checkbox" />
                                                            <div className="state">
                                                                <CheckIcon className='icon checkIcon'/>
                                                                <label className='option'>{e}</label>
                                                            </div>
                                                        </div>  
                                                    </div>
                                                ))
                                            }
                                            </div>
                                    </div>
                                    </div>
                                    <div id='orderBy-wrapper' className='col-12 col-sm-6'>
                                    <div id='orderBy' className='classes-section'>
                                    
                                        <div className={`${this.state.orderClick ? 'dropDownBtn' : 'dropDownBtn'}`} onClick={this.handleOrder}>
                                            <span>ORDER BY</span>
                                            <ExpandMoreIcon className={`topic-symbol ${this.state.orderClick ? 'd-none' : ''}`}/>
                                            <ExpandLessIcon className={`topic-symbol ${this.state.orderClick ? '' : 'd-none'}`}/>
                                        </div>

                                        <div className={`classes-body ${this.state.orderClick ? 'd-block' : 'd-none'}`}>
                                        {
                                            CatalogPage.order.map((e,i) =>( 
                                                <div className='checkbox-element'key={i}>
                                                <div className="pretty p-icon p-plain ">
                                                    <input type="checkbox" />
                                                    <div className="state">
                                                        <CheckIcon className='icon checkIcon'/>
                                                        <label className='option'>{e}</label>
                                                    </div>
                                                </div></div>
                                            ))
                                        }                 
                                        </div>     
                                    </div>
                                    </div>
                                </Row>
                                </div>
                                </div>
                        </div>
                        <div className=' col-12 col-lg-9 posts-table'>
                            <div className='posts-table-heading'> Popular Activities</div>
                            <div className=''>
                                {/* <Carousel interval='5000' controls={true}>
                                    <Carousel.Item><Pop_Post/></Carousel.Item>
                                    <Carousel.Item><Pop_Post/></Carousel.Item>
                                </Carousel> */}
                                
                            </div>
                            <div className='posts-table-heading'> ALL</div>
                            {/* <div className='d-flex row justify-content-center'> */}
                            <div>
                                {
                                    postLoading && <Alert color='warning' className='loading'>Loading...</Alert>
                                }
                                
                                {children}
                                {   (this.state.posts.length)?
                                    <div className='button-wrapper'><button id='showMoreBtn' onClick={this.listMorePosts}> SHOW MORE</button></div>
                                    : ''
                                }
                            </div>
                        </div>


                    </Row>
                    
                </Container>
                
            </div>
            
            </div>
        )
    }

    listPosts(searchText, category, start, mode, club, order, userid) {
        this.setState({
            postLoading: true,
            masking: true,
        }, () => {
            listPosts(searchText, category, start, mode, club, order, userid).then(posts => {
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

    handleExplore(){
        let display = true;
        if(this.state.exploreClick) display = false;
        this.setState({    
            exploreClick: display
        });
    }
    handleOrder(){
        let display = true;
        if(this.state.orderClick) display = false;
        this.setState({    
            orderClick: display
        });
    }
    chooseCatagory(){

    }

}


