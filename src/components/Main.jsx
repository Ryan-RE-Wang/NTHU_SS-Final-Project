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
    Row
} from 'reactstrap';
import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { Animate } from "react-simple-animate";


import './Main.css';

import Article from 'components/Article.jsx';
import ArticleForm from 'components/ArticleForm.jsx';
import Homepage from 'components/Homepage.jsx';
import Manager from 'components/Manager.jsx';
import CatalogPage from 'components/CatalogPage.jsx';
import SearchPage from 'components/SearchPage.jsx'
import { colors } from '@material-ui/core';
import LoginForm from 'components/LoginForm.jsx';

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nthuOpen: false,
            nctuOpen: false,
            tagClick: '',
            categoryOpen: false,
            animateComplete: false
        }
        
        this.handleClick = this.handleClick.bind(this);
        this.handleLinkSelect = this.handleLinkSelect.bind(this);
        this.animateComplete = this.animateComplete.bind(this);
    }

    

    handleClick(type) {
        console.log(this.state.animateComplete);
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
                        <div className='main-page'>
                            <Container className='d-flex justify-content-around' id='navbar'>
                                <NavbarBrand className='logo' href="/" onClick={e => this.handleClick('none')}>NewsSharing</NavbarBrand>
                                <Link to='/'><button className='tag' id='home' onClick={e => this.handleClick('none')}>Home</button></Link>
                                <Link to='/ArticleForm'><button className='tag' id='post' onClick={e => this.handleClick('none')}>Post</button></Link>
                                <Link to='/Manager'><button className='tag' id='manager' onClick={e => this.handleClick('none')}>Manager</button></Link> 
                                <div className='dropDown' id='category'>
                                    <button className='tag' id='catalog' onClick={e => this.handleClick('category')}>Catalog<ArrowDropDownIcon style={{display: (this.state.categoryOpen) ? 'none' : 'inline'}}/><ArrowDropUpIcon style={{display: (this.state.categoryOpen) ? 'inline' : 'none'}}/></button>
                                    <br/><br/><br/>
                                    <div className='contentCategory' style={{display: (this.state.categoryOpen) ? 'block' : 'none'}}>
                                        <div className='row'>
                                            <Container className='d-flex justify-content-around'>
                                                <Link className='insideColCategory' to='/catagory' onClick={e => this.handleLinkSelect('Food')}>Food</Link>
                                                <Link className='insideColCategory' to='/catagory' onClick={e => this.handleLinkSelect('Music')}>Music</Link>
                                                <Link className='insideColCategory' to='/catagory' onClick={e => this.handleLinkSelect('Drama')}>Drama</Link>
                                                <Link className='insideColCategory' to='/catagory' onClick={e => this.handleLinkSelect('Service')}>Service</Link>
                                            </Container>
                                        </div>
                                        <div className='row'>
                                            <Container className='d-flex justify-content-around'>
                                                <Link className='insideColCategory' to='/catagory' onClick={e => this.handleLinkSelect('熱舞社')}>Sport</Link>
                                                <Link className='insideColCategory' to='/catagory' onClick={e => this.handleLinkSelect('迴聲社')}>Dance</Link>
                                                <Link className='insideColCategory' to='/catagory' onClick={e => this.handleLinkSelect('吉他社')}>Volunteer</Link>
                                                <Link className='insideColCategory' to='/catagory' onClick={e => this.handleLinkSelect('烹飪社')}>Show</Link>
                                            </Container>
                                        </div>
                                        <div className='row'>
                                            <Container className='d-flex justify-content-around'>
                                                <Link className='insideColCategory' to='/catagory' onClick={e => this.handleLinkSelect('光舞社')}>光舞社</Link>
                                                <Link className='insideColCategory' to='/catagory' onClick={e => this.handleLinkSelect('攝影社')}>攝影社</Link>
                                                <Link className='insideColCategory' to='/catagory' onClick={e => this.handleLinkSelect('梅籌會')}>梅籌會</Link>
                                                <Link className='insideColCategory' to='/catagory' onClick={e => this.handleLinkSelect('畢聯會')}>畢聯會</Link>
                                            </Container>
                                        </div>
                                    </div>
                                </div>
                                <div className='dropDown' id='NTHU'>
                                    <button className='tag' id='nthu' onClick={e => this.handleClick('nthu')}>NTHU-Club<ArrowDropDownIcon style={{display: (this.state.nthuOpen) ? 'none' : 'inline'}}/><ArrowDropUpIcon style={{display: (this.state.nthuOpen) ? 'inline' : 'none'}}/></button>
                                    <br/><br/><br/>
                                    <div className='contentNTHU' style={{display: (this.state.nthuOpen) ? 'block' : 'none'}}>
                                        <div className='row'>
                                            <Container className='d-flex justify-content-around'>
                                                <Link className='insideColNthu' to='/catagory' onClick={e => this.handleLinkSelect('雄友會')}>雄友會</Link>
                                                <Link className='insideColNthu' to='/catagory' onClick={e => this.handleLinkSelect('南友會')}>南友會</Link>
                                                <Link className='insideColNthu' to='/catagory' onClick={e => this.handleLinkSelect('中友會')}>中友會</Link>
                                                <Link className='insideColNthu' to='/catagory' onClick={e => this.handleLinkSelect('桃友會')}>桃友會</Link>
                                            </Container>
                                        </div>
                                        <div className='row'>
                                            <Container className='d-flex justify-content-around'>
                                                <Link className='insideColNthu' to='/catagory' onClick={e => this.handleLinkSelect('熱舞社')}>熱舞社</Link>
                                                <Link className='insideColNthu' to='/catagory' onClick={e => this.handleLinkSelect('迴聲社')}>迴聲社</Link>
                                                <Link className='insideColNthu' to='/catagory' onClick={e => this.handleLinkSelect('吉他社')}>吉他社</Link>
                                                <Link className='insideColNthu' to='/catagory' onClick={e => this.handleLinkSelect('烹飪社')}>烹飪社</Link>
                                            </Container>
                                        </div>
                                        <div className='row'>
                                            <Container className='d-flex justify-content-around'>
                                                <Link className='insideColNthu' to='/catagory' onClick={e => this.handleLinkSelect('光舞社')}>光舞社</Link>
                                                <Link className='insideColNthu' to='/catagory' onClick={e => this.handleLinkSelect('攝影社')}>攝影社</Link>
                                                <Link className='insideColNthu' to='/catagory' onClick={e => this.handleLinkSelect('梅籌會')}>梅籌會</Link>
                                                <Link className='insideColNthu' to='/catagory' onClick={e => this.handleLinkSelect('畢聯會')}>畢聯會</Link>
                                            </Container>
                                        </div>
                                    </div>
                                </div>   
                                <div className='dropDown' id='NCTU'>
                                    <button className='tag' id="nctu" onClick={e => this.handleClick('nctu')}>NCTU-Club<ArrowDropDownIcon style={{display: (this.state.nctuOpen) ? 'none' : 'inline'}}/><ArrowDropUpIcon style={{display: (this.state.nctuOpen) ? 'inline' : 'none'}}/></button>
                                    <br/><br/><br/>
                                    <div className='contentNCTU' style={{display: (this.state.nctuOpen) ? 'block' : 'none'}}>
                                        <div className='row'>
                                            <Container className='d-flex justify-content-around'>
                                                <Link className='insideColNctu' to='/catagory' onClick={e => this.handleLinkSelect('雄友會')}>雄友會</Link>
                                                <Link className='insideColNctu' to='/catagory' onClick={e => this.handleLinkSelect('南友會')}>南友會</Link>
                                                <Link className='insideColNctu' to='/catagory' onClick={e => this.handleLinkSelect('中友會')}>中友會</Link>
                                                <Link className='insideColNctu' to='/catagory' onClick={e => this.handleLinkSelect('桃友會')}>桃友會</Link>
                                            </Container>
                                        </div>
                                        <div className='row'>
                                            <Container className='d-flex justify-content-around'>
                                                <Link className='insideColNctu' to='/catagory' onClick={e => this.handleLinkSelect('熱舞社')}>熱舞社</Link>
                                                <Link className='insideColNctu' to='/catagory' onClick={e => this.handleLinkSelect('迴聲社')}>迴聲社</Link>
                                                <Link className='insideColNctu' to='/catagory' onClick={e => this.handleLinkSelect('吉他社')}>吉他社</Link>
                                                <Link className='insideColNctu' to='/catagory' onClick={e => this.handleLinkSelect('合唱社')}>合唱社</Link>
                                            </Container>
                                        </div>
                                        <div className='row'>
                                            <Container className='d-flex justify-content-around'>
                                                <Link className='insideColNctu' to='/catagory' onClick={e => this.handleLinkSelect('光舞社')}>光舞社</Link>
                                                <Link className='insideColNctu' to='/catagory' onClick={e => this.handleLinkSelect('攝影社')}>攝影社</Link>
                                                <Link className='insideColNctu' to='/catagory' onClick={e => this.handleLinkSelect('梅籌會')}>梅籌會</Link>
                                                <Link className='insideColNctu' to='/catagory' onClick={e => this.handleLinkSelect('畢聯會')}>畢聯會</Link>
                                            </Container>
                                        </div>
                                    </div>
                                </div>                 
                            </Container>

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
}
