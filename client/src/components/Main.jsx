import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter as Router ,Route, Link, Redirect } from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Animate } from "react-simple-animate";
import DatePicker from 'react-date-picker';
// material ui icon
import CreateIcon from '@material-ui/icons/Create';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import SearchIcon from '@material-ui/icons/Search';
import DehazeIcon from '@material-ui/icons/Dehaze';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CloseIcon from '@material-ui/icons/Close';
import FaceIcon from '@material-ui/icons/Face';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EditIcon from '@material-ui/icons/Edit';
import ListIcon from '@material-ui/icons/List';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import './Main.css';

import Article from 'components/Article.jsx';
import ArticleForm from 'components/ArticleForm.jsx';
import Homepage from 'components/Homepage.jsx';
import Manager from 'components/Manager.jsx';
import Manager_dev from 'components/Manager_dev.jsx'
import CatalogPage from 'components/CatalogPage.jsx';
import SearchPage from 'components/SearchPage.jsx'
import LoginForm from 'components/LoginForm.jsx'
import Footer from "components/Footer_Content.jsx"
import SignUp_club from "components/SignUp_club.jsx"
import {connect} from 'react-redux';
import {listClub} from 'api/club.js';
import {setSearchText, setSearchStartDate, setSearchEndDate} from 'states/post-actions.js';


// action
import {closeLoginForm, openLoginForm , logout} from 'states/login-actions.js';
import {getClub} from 'states/clickClub-actions.js';
import {openUserInfo, changeToggle, clickList, clickTag, openSearchBar} from 'states/navbar-actions';
import Userside_manager from 'components/Userside_manager.jsx';
import {changeCategory} from 'states/category-action.js';


class Main extends React.Component {
    static propTypes = {
        loginPageOpen: PropTypes.bool,
    };

    constructor(props) {
        super(props);
        this.state = {
            clubsNthu: [],
            clubsNctu: [],
            redirect: false,
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleLinkSelect = this.handleLinkSelect.bind(this);
        this.animateComplete = this.animateComplete.bind(this);
        this.handleNavbarToggle = this.handleNavbarToggle.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleUserInfo = this.handleUserInfo.bind(this);
        this.handleSearchKeyPress = this.handleSearchKeyPress.bind(this);
        this.handleClearSearch = this.handleClearSearch.bind(this);

        this.listClubs = this.listClubs.bind(this);

    }

    componentDidMount() {
        this.listClubs();
    }

    render() {
        
        let {loginPageOpen} = this.props;

        let childrenNthu = (<div className='p-2 text-center'>There are no clubs</div>);
        if (this.state.clubsNthu.length) {
            childrenNthu = this.state.clubsNthu.map(c => (
                <div key={c.id} className='sidebar-element sidebar-child' onClick={() => this.handleNavbarToggle(c.clubname)}>{c.clubname}</div>
            ))
        }

        let childrenNctu = (<div className='p-2 text-center'>There are no clubs</div>);
        if (this.state.clubsNctu.length) {
            childrenNctu = this.state.clubsNctu.map(c => (
                <div key={c.id} className='sidebar-element sidebar-child' onClick={() => this.handleNavbarToggle(c.clubname)}>{c.clubname}</div>
            ))
        }

        return (
            <Router>
            <div className=' ' id='main-wrapper'>
                {/* side bar information */}
                <div id='newsSharing-sidebar' className={`${(this.props.sideBarOpen) ? 'sidebar-active':'sidebar-closed'}`}>
                    <div>
                        <div className='sidebar-element sidebar-logo'> 
                            <span>NEWS SHARING </span>
                            <CloseIcon className='sidebar-icon'onClick={this.handleNavbarToggle}/>
                        </div>
                        <div className='sidebar-element sidebar-entry d-block d-md-none'onClick={this.handleLogin}>   
                            <VpnKeyIcon/>&nbsp;<span>Login</span>                     
                        </div>
                        <div className='sidebar-element sidebar-entry'onClick={this.handleNavbarToggle }>   
                            <Link to='/' className='link'> 
                                <HomeIcon/>&nbsp;<span>Home</span>
                            </Link>
                                                     
                        </div>
                        <div className='sidebar-element sidebar-entry dropDown'>
                            <div className='dropdown-tag' onClick={e => this.handleClick('category')}>
                                <ListIcon/>&nbsp;<span>Catagory</span>
                                <ArrowDropDownIcon className={`sidebar-icon ${(this.props.categoryOpen) ? 'd-none' : 'd-inline'}`}/>
                                <ArrowDropUpIcon className={`sidebar-icon ${(this.props.categoryOpen) ? 'd-inline' :'d-none'}`}/>
                            </div>
                        </div>
                        <div style={{display: (this.props.categoryOpen) ? 'block' : 'none'}}>

                                <Link to='/category' className='link'><div className='sidebar-element sidebar-child' onClick={() => this.goToCategoryPage('Food')}>Food</div></Link>
                                <Link to='/category' className='link'><div className='sidebar-element sidebar-child' onClick={() => this.goToCategoryPage('Music')}>Music</div></Link>
                                <Link to='/category' className='link'><div className='sidebar-element sidebar-child' onClick={() => this.goToCategoryPage('Drama')}>Drama</div></Link>
                                <Link to='/category' className='link'><div className='sidebar-element sidebar-child' onClick={() => this.goToCategoryPage('Art')}>Art</div></Link>
                                <Link to='/category' className='link'><div className='sidebar-element sidebar-child' onClick={() => this.goToCategoryPage('Competition')}>Competition</div></Link>

                        </div>
                        <div className='sidebar-element sidebar-entry dropDown'>
                            <div className='dropdown-tag' onClick={e => this.handleClick('nthu')}>
                                <ListIcon/>&nbsp;<span>NTHU Club </span>
                                <ArrowDropDownIcon className={`sidebar-icon ${(this.props.nthuOpen) ? 'd-none' : 'd-inline'}`}/>
                                <ArrowDropUpIcon className={`sidebar-icon ${(this.props.nthuOpen) ? 'd-inline' :'d-none'}`}/>
                            </div>
                        </div>
                        <div style={{display: (this.props.nthuOpen) ? 'block' : 'none'}}>
                            <Link to='/Manager' className='link'>  
                                {childrenNthu}
                            </Link> 
                        </div>
                        <div className='sidebar-element sidebar-entry dropDown'>
                            <div className='dropdown-tag' onClick={e => this.handleClick('nctu')}>
                                <ListIcon/>&nbsp;<span>NCTU Club </span>
                                <ArrowDropDownIcon className={`sidebar-icon ${(this.props.nctuOpen) ? 'd-none' : 'd-inline'}`}/>
                                <ArrowDropUpIcon className={`sidebar-icon ${(this.props.nctuOpen) ? 'd-inline' :'d-none'}`}/>
                            </div>
                        </div>
                        <div style={{display: (this.props.nctuOpen) ? 'block' : 'none'}}>
                            <Link to='/Manager' className='link'>  
                                {childrenNctu}
                            </Link> 
                        </div>
                        <div className='sidebar-element sidebar-entry' style={{display: (this.props.alreadyLogin) ? 'block' : 'none'}} onClick={this.handleNavbarToggle}>  
                            <Link to='/ArticleForm' className='link'>                       
                                <EditIcon/>&nbsp;<span>Edit post</span> 
                            </Link>                                
                        </div>
                        <div className='sidebar-element sidebar-entry' style={{display: (this.props.alreadyLogin) ? 'block' : 'none'}} onClick={this.handleNavbarToggle}>  
                            <Link to='/signup_Club' className='link'>                       
                                <EditIcon/>&nbsp;<span>Create club</span> 
                            </Link>                                
                        </div>
                        <div className='sidebar-element sidebar-entry' onClick={this.handleNavbarToggle}>  
                            <Link to='/userside_manager' className='link'>                       
                                <InfoIcon/>&nbsp;<span>ABOUT US</span> 
                            </Link>                                
                        </div>
                    </div> 
                </div>
                
                <div id='main' className={`${(this.props.sideBarOpen) ? 'main-shift':'main-unshift'} `}>
                    
                    <div id='navbar-section' className={`${loginPageOpen?"d-none":""}`}>
                        <div className={`d-flex flex-row justify-content-between align-items-center`}>

                            {/* for normal condition */}
                            <div className={`${(this.props.startSearch) ? 'd-none':'d-block'}`}>
                                <div className=' navbar-items' id='toggleBtn'><DehazeIcon onClick={this.handleNavbarToggle}/><span className='d-none d-md-inline'>&nbsp;MENU</span></div>                               
                                <div className='d-none d-md-inline navbar-items'id='searchBtn'><SearchIcon onClick={this.handleSearch} className='search-icon'/></div>
                            </div>
                            <div className={`${(this.props.startSearch) ? 'd-none':'d-block'}`} id='navbar-logo' href="/" onClick={e => this.handleClick('none')}>
                                NewsSharing
                            </div>
                            <div className={`${(this.props.startSearch || this.props.alreadyLogin) ? 'd-none':'d-none d-md-block'}`} onClick={this.handleLogin}>
                                <Link to='/login' className='link'>  
                                <div className='navbar-items' id='loginBtn'><AccountBoxIcon/><span className='d-none d-lg-inline'>&nbsp;LOGIN</span></div>
                                </Link>  
                            </div>
                            <div className={`${(this.props.startSearch) ? 'd-none':'d-block d-md-none'}`}>
                                <div className='navbar-items' id='searchBtn'><SearchIcon onClick={this.handleSearch} className='search-icon'/></div>
                            </div>
                            <div className={`${(this.props.startSearch || !this.props.alreadyLogin) ? 'd-none':'d-none d-md-block'}`}>
                                {/* <div className='navbar-items'  >       */}
                                <Dropdown isOpen={this.props.userInfoOpen} toggle={this.handleUserInfo} >
                                    <DropdownToggle id='userIcon' >
                                        <FaceIcon className=''/>{this.props.username}
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem onClick={this.handleLogout}> <ExitToAppIcon/>&nbsp;&nbsp;&nbsp;SignOut</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                {/* </div> */}

                            </div>

                            {/* for search condition */}
                            <input className={`${(!this.props.startSearch) ? 'd-none':'d-block'}`}  onKeyPress={this.handleSearchKeyPress}  id='searchInput' placeholder='SEARCH FOR EVENT...'/>
                            
                            <div className={`${(!this.props.startSearch) ? 'd-none':'d-block'}`}>
                                <div className='navbar-items'id='searchBtn'>
                                    <CloseIcon onClick={this.handleSearch}/>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                    {/* <div className={`${this.state.categoryOpen || this.state.nthuOpen || this.state.nctuOpen   ? 'navbar-wrapper':'' }`}></div> */}

                    
                    <div id='blankSpace'></div>
                    {/* <div className={`${loginPageOpen? '':'d-none'}`}><LoginForm/></div> */}
                    <div id='content-section' >

                    {
                        this.state.redirect && <Route
                        render={() => (
                            <Redirect
                              to={{
                                pathname: "/search",
                                state: { searchText: this.state.searchText }
                              }}
                            />
                          )
                        }
                      />
                    }

                    {/* for router */}
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path='/article' component={Article}/>
                    <Route exact path="/Manager" component={Manager_dev}/>
                    <Route exact path='/search' component={SearchPage}/>
                    <Route exact path="/login" component={LoginForm}/>  
                    <Route exact path="/signup_Club" component={SignUp_club}/>
                    <Route exact path="/articleform" component={ArticleForm}/> 
                    <Route exact path="/category" render={() => (
                        <CatalogPage topicName={this.props.tagClick} />
                    )}/>



                    </div>
                    <div id='footer-section'style={{display: (this.props.loginPage) ? 'none' : 'block'}}>
                        <Footer/>
                    </div>
                </div> 
                </div>
            </Router>
        );
    }

    listClubs() {
        listClub('NTHU').then(clubs => {
            this.setState({
                clubsNthu: clubs
            })
        })

        listClub('NCTU').then(clubs => {
            this.setState({
                clubsNctu: clubs
            })
        })
    }

    animateComplete() {
        this.setState(() => ({
            animateComplete: true
        }))
    } 
    onChange = date => this.setState({ date })

    // redux
    handleUserInfo(){
        this.props.dispatch(openUserInfo());
    }

    handleNavbarToggle(clubname) {
        console.log(clubname)
        this.props.dispatch(getClub(clubname));
        this.props.dispatch(changeToggle());

    }

    handleClick(type) {
        this.props.dispatch(clickList(type));
    }

    handleLinkSelect(tag) {
        this.props.dispatch(clickTag(tag));
    }

    handleSearch(){
        this.props.dispatch(openSearchBar());
    }

    handleLogin(){
        this.props.dispatch(openLoginForm());
    }

    handleLogout(){
        this.props.dispatch(logout(this.props.loginType));
    }

    handleSearchKeyPress(e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode === 13){
            this.props.dispatch(setSearchText(e.target.value))
            this.props.dispatch(setSearchStartDate(null))
            this.props.dispatch(setSearchEndDate(null))
            this.setState({
                searchText: e.target.value,
                redirect: true 
            });
        } 
    }
    handleClearSearch() {
        this.props.dispatch(setSearchText())
    }

    goToCategoryPage(type){
        this.props.dispatch(changeToggle())
        this.props.dispatch(changeCategory(type))
    }
}

export default connect(state => ({
    ...state.login,
    loginPageOpen: state.loginPage.loginPageOpen,
    ...state.navBar,
    ...state.club
}))(Main);
