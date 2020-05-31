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
import SearchIcon from '@material-ui/icons/Search';
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
// import SearchIcon from '@material-ui/icons/Search';


export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nthuOpen: false,
            nctuOpen: false,
            categoryOpen: false,
            tagClick: '',
            animateComplete: false,
            startSearch: false
        }
        
        this.handleClick = this.handleClick.bind(this);
        this.handleLinkSelect = this.handleLinkSelect.bind(this);
        this.animateComplete = this.animateComplete.bind(this);
        this.handleNavbarToggle = this.handleNavbarToggle.bind(this);

        this.handleSearch = this.handleSearch.bind(this);
    }

    render() {
        return (
            <Router>
                <div className='main'>
                    <div id='navbar-section'>
                    
                    <Navbar color='faded' light expand='md' id='newsSharing-navbar' className='py-0'>
                                
                        <Container className='py-0'>
                        
                            <NavbarToggler className='d-block d-md-none' onClick={this.handleNavbarToggle} outline='none'/>
                            <NavbarBrand className=' px-2 py-2'id='navbar-logo' href="/" onClick={e => this.handleClick('none')}>NewsSharing</NavbarBrand>
                            <div className='py-2 search-btn d-block d-lg-none dropDownBtn ' onClick={this.handleSearch}>
                                <SearchIcon className='search-icon'/>
                                {/* drop down menu */}
                                <div className={`dropdown-content ${!this.state.startSearch? 'dropdown-hide' : 'dropdown-display'}`}>
                                    <a href="#">Link 1</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                </div>
                            </div>
                            {/* <div className='login-btn d-block d-md-none '>Login</div> */}

                            <Collapse className='py-0 my-0' isOpen={this.state.navbarToggle} navbar>
                                <Nav navbar className=' py-0 my-0 navbar-fixed-top'>

                                {/* big window items  */}
                                <NavItem className={`pl-2 pr-1 py-3 navbar-items ${this.state.categoryOpen ? 'outside-picked-item':''}`}>
                                    <div className="navbar-dropDown">
                                        <button className='navbar-tag' onClick={e => this.handleClick('category') }>Catalog
                                            <ArrowDropDownIcon style={{display: (this.state.categoryOpen) ? 'none' : 'inline'}}/>
                                            <ArrowDropUpIcon style={{display: (this.state.categoryOpen) ? 'inline' : 'none'}}/>
                                        </button>
                                        <div className='navbar-dropDown-content' style={{display: (this.state.categoryOpen) ? 'block' : 'none'}}>                                            
                                            <div className='d-flex row pl-3 pr-3 my-4 '>
                                                <Link className="col-2 navbar-content-link" to='/catagory'><button className='outside-toggle-linkBtn' onClick={e => this.handleLinkSelect('Food')}><span>Food</span></button></Link>
                                                <Link className="col-2 navbar-content-link" to='/catagory'><button className='outside-toggle-linkBtn' onClick={e => this.handleLinkSelect('Music')}><span>Music</span></button></Link>
                                                <Link className="col-2 navbar-content-link" to='/catagory'><button className='outside-toggle-linkBtn' onClick={e => this.handleLinkSelect('Drama')}><span>Drama</span></button></Link>
                                                <Link className="col-2 navbar-content-link" to='/catagory'><button className='outside-toggle-linkBtn' onClick={e => this.handleLinkSelect('Service')}><span>Service</span></button></Link>
                                                <Link className="col-2 navbar-content-link" to='/catagory'><button className='outside-toggle-linkBtn' onClick={e => this.handleLinkSelect('Service')}><span>Service</span></button></Link>
                                                <Link className="col-2 navbar-content-link" to='/catagory'><button className='outside-toggle-linkBtn' onClick={e => this.handleLinkSelect('Service')}><span>Service</span></button></Link>

                                            </div>
                                        </div>
                                    </div>
                                </NavItem >
                                <NavItem className={`pl-2 pr-1 py-3 navbar-items ${this.state.nthuOpen ? 'outside-picked-item':''}`}>
                                    <div className="navbar-dropDown">
                                        <button className='navbar-tag' onClick={e => this.handleClick('nthu')}>NTHU CLUB
                                            <ArrowDropDownIcon style={{display: (this.state.nthuOpen) ? 'none' : 'inline'}}/>
                                            <ArrowDropUpIcon style={{display: (this.state.nthuOpen) ? 'inline' : 'none'}}/>
                                        </button>
                                        <div className='navbar-dropDown-content' style={{display: (this.state.nthuOpen) ? 'block' : 'none'}}>                                            
                                            <div className='d-flex row pl-3 pr-3 my-4 '>
                                                <Link className="col-2 navbar-content-link" to='/catagory'><button className='outside-toggle-linkBtn' onClick={e => this.handleLinkSelect('雄友會')}><span>雄友會</span></button></Link>
                                                <Link className="col-2 navbar-content-link" to='/catagory'><button className='outside-toggle-linkBtn' onClick={e => this.handleLinkSelect('南友會')}><span>南友會</span></button></Link>
                                                <Link className="col-2 navbar-content-link" to='/catagory'><button className='outside-toggle-linkBtn' onClick={e => this.handleLinkSelect('中友會')}><span>中友會</span></button></Link>
                                                <Link className="col-2 navbar-content-link" to='/catagory'><button className='outside-toggle-linkBtn' onClick={e => this.handleLinkSelect('桃友會')}><span>桃友會</span></button></Link>

                                            </div>
                                        </div>
                                    </div>
                                </NavItem >
                                <NavItem className={`pl-2 pr-1 py-3 navbar-items ${this.state.nctuOpen ? 'outside-picked-item':''}`}>
                                    <div className="navbar-dropDown">
                                        <button className='navbar-tag' onClick={e => this.handleClick('nctu')}>NCTU CLUB
                                            <ArrowDropDownIcon style={{display: (this.state.nctuOpen) ? 'none' : 'inline'}}/>
                                            <ArrowDropUpIcon style={{display: (this.state.nctuOpen) ? 'inline' : 'none'}}/>
                                        </button>
                                        <div className='navbar-dropDown-content' style={{display: (this.state.nctuOpen) ? 'block' : 'none'}}>                                            
                                            <div className='d-flex row pl-3 pr-3 my-4 '>
                                                <Link className="col-2 navbar-content-link" to='/catagory'><button className='outside-toggle-linkBtn' onClick={e => this.handleLinkSelect('雄友會')}><span>雄友會</span></button></Link>
                                                <Link className="col-2 navbar-content-link" to='/catagory'><button className='outside-toggle-linkBtn' onClick={e => this.handleLinkSelect('南友會')}><span>南友會</span></button></Link>
                                                <Link className="col-2 navbar-content-link" to='/catagory'><button className='outside-toggle-linkBtn' onClick={e => this.handleLinkSelect('中友會')}><span>中友會</span></button></Link>
                                                <Link className="col-2 navbar-content-link" to='/catagory'><button className='outside-toggle-linkBtn' onClick={e => this.handleLinkSelect('桃友會')}><span>桃友會</span></button></Link>

                                            </div>
                                        </div>
                                    </div>
                                </NavItem >

                                {/* small window items  */}
                                <NavItem >
                                    <div className='d-md-none d-block'> 
                                        <div className='inside-toggle-element navbar-tag' >
                                            <button className='' onClick={e => this.handleClick('category')}>Catalog
                                                    <ArrowDropDownIcon style={{display: (this.state.categoryOpen) ? 'none' : 'inline'}}/>
                                                    <ArrowDropUpIcon style={{display: (this.state.categoryOpen) ? 'inline' : 'none'}}/>
                                            </button>
                                        </div>
                                        <div className='inside-toggle-element' style={{display: (this.state.categoryOpen) ? 'block' : 'none'}}>
                                            <Link className="d-block navbar-content-link" to='/catagory'><button className='inside-toggle-linkBtn' onClick={e => this.handleLinkSelect('Food')}><span>Food</span></button></Link>
                                            <Link className="d-block navbar-content-link" to='/catagory'><button className='inside-toggle-linkBtn' onClick={e => this.handleLinkSelect('Music')}><span>Music</span></button></Link>
                                            <Link className="d-block navbar-content-link" to='/catagory'><button className='inside-toggle-linkBtn' onClick={e => this.handleLinkSelect('Drama')}><span>Drama</span></button></Link>
                                            <Link className="d-block navbar-content-link" to='/catagory'><button className='inside-toggle-linkBtn' onClick={e => this.handleLinkSelect('Service')}><span>Service</span></button></Link>
                                            <Link className="d-block navbar-content-link" to='/catagory'><button className='inside-toggle-linkBtn' onClick={e => this.handleLinkSelect('Service')}><span>Service</span></button></Link>
                                            <Link className="d-block navbar-content-link" to='/catagory'><button className='inside-toggle-linkBtn' onClick={e => this.handleLinkSelect('Service')}><span>Service</span></button></Link>
                                        </div>  
                                    </div>
                                </NavItem >
                                <NavItem >
                                    <div className='d-md-none d-block'> 
                                        <div className='inside-toggle-element navbar-tag' >
                                            <button className='' onClick={e => this.handleClick('nthu')}>NTHU CLUB
                                                    <ArrowDropDownIcon style={{display: (this.state.nthuOpen) ? 'none' : 'inline'}}/>
                                                    <ArrowDropUpIcon style={{display: (this.state.nthuOpen) ? 'inline' : 'none'}}/>
                                            </button>
                                        </div>
                                        <div className='inside-toggle-element' style={{display: (this.state.nthuOpen) ? 'block' : 'none'}}>
                                            <Link className="d-block navbar-content-link" to='/catagory'><button className='inside-toggle-linkBtn' onClick={e => this.handleLinkSelect('雄友會')}><span>雄友會</span></button></Link>
                                            <Link className="d-block navbar-content-link" to='/catagory'><button className='inside-toggle-linkBtn' onClick={e => this.handleLinkSelect('南友會')}><span>南友會</span></button></Link>
                                            <Link className="d-block navbar-content-link" to='/catagory'><button className='inside-toggle-linkBtn' onClick={e => this.handleLinkSelect('中友會')}><span>中友會</span></button></Link>
                                            <Link className="d-block navbar-content-link" to='/catagory'><button className='inside-toggle-linkBtn' onClick={e => this.handleLinkSelect('桃友會')}><span>桃友會</span></button></Link>
                                        </div>  
                                    </div>
                                </NavItem >
                                </Nav>

                                
                            </Collapse>

                            <div className='search-btn d-none d-lg-block'>
                                {/* <InputGroup> */}

                                {/* <input type="text" placeholder="&#xF002; Search" style="font-family:Arial, FontAwesome" /> */}
                                {/* <input type="text" placeholder="&#xF002;" style="font-family:Arial, FontAwesome" /> */}
                                {/* </InputGroup> */}
                                <input className="mainLoginInput" type="text" placeholder="&#61442; Search..."/> <br/>
                            </div>

                            <div className='login-btn d-none d-md-block'>Login</div>
                        
                        </Container>
                        
                    </Navbar>
                    </div>
                    <div className={`${this.state.categoryOpen || this.state.nthuOpen || this.state.nctuOpen   ? 'navbar-wrapper':'' }`}></div>

                    

                    <div id='content-section' >

                    {/* for router */}
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
                    <Route exact path="/catalog" render={() => (
                        <CatalogPage topicName={this.state.tagClick} description='Rishi Sunak has extended the government’s wage subsidy scheme until the end of October in a move that could see costs rise to more than £80 billion. The Treasury has decided not to cut the overall level of the wage subsidy scheme, which stands at 80 per cent of people’s wages up to £2,500 a month. It has instead announced that from August furloughed workers will'/>
                    )}/>
                    <Route exact path='/search' render={() => (
                        <SearchPage/>
                    )}/>
                    <Route exact path="/login" render={() => (
                        <LoginForm/>
                    )}/>

                    
                    </div>
                </div> 
            </Router>
        );
    }

    handleNavbarToggle() {
        this.setState((prevState, props) => ({
            navbarToggle: !prevState.navbarToggle
        }));
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
        // console.log(this.state.categoryOpen);
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
    handleSearch(){
        this.setState((prevState) => ({
            startSearch: !prevState.startSearch
        }))
    }
}

{/* <div className='animation' style={{display: (this.state.animateComplete) ? 'none' : 'block'}}>
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
                            <Link to='/ArticleForm'>post</Link>
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


                </div> */}