import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    Input,
    Button,
} from 'reactstrap';
import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { Animate } from "react-simple-animate";
import DatePicker from 'react-date-picker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import './Main.css';

import Article from 'components/Article.jsx';
import ArticleForm from 'components/ArticleForm.jsx';
import Homepage from 'components/Homepage.jsx';
import Manager from 'components/Manager.jsx';
import CatalogPage from 'components/CatalogPage.jsx';
import SearchPage from 'components/SearchPage.jsx'
import { colors } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nthuOpen: false,
            nctuOpen: false,
            tagClick: '',
            categoryOpen: false,
            animateComplete: false,
            navbarToggle: false
        }
        
        this.handleClick = this.handleClick.bind(this);
        this.handleLinkSelect = this.handleLinkSelect.bind(this);
        this.animateComplete = this.animateComplete.bind(this);
        this.handleNavbarToggle = this.handleNavbarToggle.bind(this);
    }

    onChange = date => this.setState({ date })

    handleClick(type) {
        if (type == 'nthu') {
            this.setState((prevState) => ({
                nthuOpen: !prevState.nthuOpen,
                nctuOpen: false,
                categoryOpen: false
            }));
        }
        else if (type == 'nctu') {
            this.setState((prevState) => ({
                nctuOpen: !prevState.nctuOpen,
                nthuOpen: false,
                categoryOpen: false
            }))
        }
        else if (type == 'category') {
            this.setState((prevState) => ({
                nctuOpen: false,
                nthuOpen: false,
                categoryOpen: !prevState.categoryOpen
            }))
        }
        else {
            this.setState((prevState) => ({
                nctuOpen: false,
                nthuOpen: false,
                categoryOpen: false
            }))
        }
    }

    handleLinkSelect(tag) {
        this.setState(() => ({
            nthuOpen: false,
            nctuOpen: false,
            categoryOpen: false,
            tagClick: tag
        }));
    }

    animateComplete() {
        this.setState(() => ({
            animateComplete: true
        }))
    } 

    render() {
        return (
            <Router>
                <div className='main'>
                    <div className='animation' style={{display: (this.state.animateComplete) ? 'none' : 'block'}}>
                        <Animate
                            play={true} // Toggle when animation should start
                            start={{
                                opacity: "0"
                            }}
                            end={{ 
                                opacity: "1"
                            }}
                            onComplete={this.animateComplete}
                            duration='0'
                            >
                            <h1 className='logo'>NewsSharing</h1>
                        </Animate>
                    </div>
                    <Animate
                            play={this.state.animateComplete} // Toggle when animation should start
                            start={{
                                opacity: "0"
                            }}
                            end={{ 
                                opacity: "1"
                            }}
                            duration='0'
                            >
                        <div className='container'>
                        <Navbar color='faded' light expand='md'>
                            <NavbarToggler onClick={this.handleNavbarToggle}/>
                            <NavbarBrand className='logo' href="/" onClick={e => this.handleClick('none')}>NewsSharing</NavbarBrand>
                            <Collapse isOpen={this.state.navbarToggle} navbar>
                                <Nav navbar>
                                <NavItem>
                                    <div className='dropDown'>
                                        <button className='tag' onClick={e => this.handleClick('category')}>Catalog<ArrowDropDownIcon style={{display: (this.state.categoryOpen) ? 'none' : 'inline'}}/><ArrowDropUpIcon style={{display: (this.state.categoryOpen) ? 'inline' : 'none'}}/></button>
                                        <br/><br/><br/>
                                        <div className='contentCategory' style={{display: (this.state.categoryOpen) ? 'block' : 'none'}}>
                                            <Container className='d-flex justify-content-around'>
                                                <Link to='/catagory'><button className='insideColCategory' onClick={e => this.handleLinkSelect('Food')}><span>Food</span></button></Link>
                                                <Link to='/catagory'><button className='insideColCategory' onClick={e => this.handleLinkSelect('Music')}><span>Music</span></button></Link>
                                                <Link to='/catagory'><button className='insideColCategory' onClick={e => this.handleLinkSelect('Drama')}><span>Drama</span></button></Link>
                                                <Link to='/catagory'><button className='insideColCategory' onClick={e => this.handleLinkSelect('Service')}><span>Service</span></button></Link>
                                            </Container>
                                        </div>
                                    </div>
                                </NavItem>
                                <NavItem>
                                    <div className='dropDown'>
                                        <button className='tag' onClick={e => this.handleClick('nthu')}>NTHU-Club<ArrowDropDownIcon style={{display: (this.state.nthuOpen) ? 'none' : 'inline'}}/><ArrowDropUpIcon style={{display: (this.state.nthuOpen) ? 'inline' : 'none'}}/></button>
                                        <br/><br/><br/>
                                        <div className='contentNTHU' style={{display: (this.state.nthuOpen) ? 'block' : 'none'}}>
                                            <Container className='d-flex justify-content-around'>
                                                <Link to='/catagory'><button className='insideColNthu' onClick={e => this.handleLinkSelect('雄友會')}><span>雄友會</span></button></Link>
                                                <Link to='/catagory'><button className='insideColNthu' onClick={e => this.handleLinkSelect('南友會')}><span>南友會</span></button></Link>
                                                <Link to='/catagory'><button className='insideColNthu' onClick={e => this.handleLinkSelect('中友會')}><span>中友會</span></button></Link>
                                                <Link to='/catagory'><button className='insideColNthu' onClick={e => this.handleLinkSelect('桃友會')}><span>桃友會</span></button></Link>
                                            </Container>
                                        </div>
                                    </div>
                                </NavItem> 
                                <NavItem>
                                    <div className='dropDown'>
                                        <button className='tag' onClick={e => this.handleClick('nctu')}>NCTU-Club<ArrowDropDownIcon style={{display: (this.state.nctuOpen) ? 'none' : 'inline'}}/><ArrowDropUpIcon style={{display: (this.state.nctuOpen) ? 'inline' : 'none'}}/></button>
                                        <br/><br/><br/>
                                        <div className='contentNCTU' style={{display: (this.state.nctuOpen) ? 'block' : 'none'}}>
                                            <Container className='d-flex justify-content-around'>
                                                <Link to='/catagory'><button className='insideColNctu' onClick={e => this.handleLinkSelect('雄友會')}><span>雄友會</span></button></Link>
                                                <Link to='/catagory'><button className='insideColNctu' onClick={e => this.handleLinkSelect('南友會')}><span>南友會</span></button></Link>
                                                <Link to='/catagory'><button className='insideColNctu' onClick={e => this.handleLinkSelect('中友會')}><span>中友會</span></button></Link>
                                                <Link to='/catagory'><button className='insideColNctu' onClick={e => this.handleLinkSelect('桃友會')}><span>桃友會</span></button></Link>
                                            </Container>
                                        </div>
                                    </div> 
                                </NavItem>   
                                <NavItem>
                                    <Link to='/ArticleForm'><button className='tag' id='post' onClick={e => this.handleClick('none')}>Post</button></Link>
                                </NavItem>
                                </Nav> 
                                <div className='ml-auto'>
                                    <InputGroup>
                                        <Input placeholder='search'/>
                                        <InputGroupAddon addonType="append">
                                            <DatePicker
                                                onChange={this.onChange}
                                                value={this.state.date}
                                                /> 
                                        </InputGroupAddon>
                                        <InputGroupAddon addonType="append">
                                            <Link to='/search' className='button'>
                                            <div className="s-circle"></div>
                                            <span className='span'></span>
                                            </Link>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </div>
                                </Collapse>
                        </Navbar>

                            <Route exact path="/" render={() => (
                                <Homepage />
                            )}/>
                            <Route exact path="/ArticleForm" render={() => (
                                <ArticleForm/>  
                            )}/>
                            <Route exact path='/article' render={() => (
                                <Article/>
                            )}/>
                            <Route exact path="/Manager" render={() => (
                                <Manager/>  
                            )}/>
                            <Route exact path="/catagory" render={() => (
                                <CatalogPage topicName={this.state.tagClick} description='Rishi Sunak has extended the government’s wage subsidy scheme until the end of October in a move that could see costs rise to more than £80 billion. The Treasury has decided not to cut the overall level of the wage subsidy scheme, which stands at 80 per cent of people’s wages up to £2,500 a month. It has instead announced that from August furloughed workers will'/>
                            )}/>
                            <Route exact path='/search' render={() => (
                                <SearchPage/>
                            )}/>
                            <Route exact path="/login" render={() => (
                                <LoginForm/>
                            )}/>

                        </div>
                    </Animate>


                </div>
                
            </Router>
            // <LoginForm/>
        );
    }

    handleNavbarToggle() {
        this.setState((prevState, props) => ({
            navbarToggle: !prevState.navbarToggle
        }));
    }
}
