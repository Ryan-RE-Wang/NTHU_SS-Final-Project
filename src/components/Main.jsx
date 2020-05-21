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
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import './Main.css';

import ArticleForm from 'components/ArticleForm.jsx';
import Homepage from 'components/Homepage.jsx';
import Manager from 'components/Manager.jsx';
import CatalogPage from 'components/CatalogPage.jsx';

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nthuOpen: false,
            nctuOpen: false
        }
        
        this.handleClick = this.handleClick.bind(this);
    }

    

    handleClick(school) {
        if (school == 'nthu') {
            this.setState((prevState) => ({
                nthuOpen: !prevState.nthuOpen
            }));
        }
        if (school == 'nctu') {
            this.setState((prevState) => ({
                nctuOpen: !prevState.nctuOpen
            }))
        }
    }
    

    render() {
        const style = {
        
        }

        return (
            <Router>
                <div className='main'>
                    <Container className='d-flex justify-content-around' id='navbar'>
                        <NavbarBrand className='logo' href="/">NewsSharing</NavbarBrand>
                        <Link to='/' className='tag' id='home'>Home</Link>
                        <Link to='/food' className='tag' id='food'>Food</Link>
                        <Link to='/ArticleForm' className='tag' id='post'>Post</Link>
                        <Link to='/Manager' className='tag' id='manager'>Manager</Link> 
                        <Link to='/catagory' className='tag' id='catalog'>Catalog</Link>
                        <div className='dropDown' id='NTHU'>
                            <button className='tag' id='nthu' onClick={e => this.handleClick('nthu')}>NTHU-Club<ArrowDropDownIcon style={{display: (this.state.nthuOpen) ? 'none' : 'inline'}}/><ArrowDropUpIcon style={{display: (this.state.nthuOpen) ? 'inline' : 'none'}}/></button>
                            <br/><br/><br/>
                            <div className='contentNTHU' style={{display: (this.state.nthuOpen) ? 'block' : 'none'}}>
                                <div className='row'>
                                    <Container className='d-flex justify-content-around'>
                                        <Link className='insideCol' to='/catagory'>雄友會</Link>
                                        <Link className='insideCol' to='/catagory'>南友會</Link>
                                        <Link className='insideCol' to='/catagory'>中友會</Link>
                                        <Link className='insideCol' to='/catagory'>桃友會</Link>
                                    </Container>
                                </div>
                                <div className='row'>
                                    <Container className='d-flex justify-content-around'>
                                        <Link className='insideCol' to='/catagory'>熱舞社</Link>
                                        <Link className='insideCol' to='/catagory'>迴聲社</Link>
                                        <Link className='insideCol' to='/catagory'>吉他社</Link>
                                        <Link className='insideCol' to='/catagory'>烹飪社</Link>
                                    </Container>
                                </div>
                                <div className='row'>
                                    <Container className='d-flex justify-content-around'>
                                        <Link className='insideCol' to='/catagory'>光舞社</Link>
                                        <Link className='insideCol' to='/catagory'>攝影社</Link>
                                        <Link className='insideCol' to='/catagory'>梅籌會</Link>
                                        <Link className='insideCol' to='/catagory'>畢聯會</Link>
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
                                        <Link className='insideCol' to='/catagory'>雄友會</Link>
                                        <Link className='insideCol' to='/catagory'>南友會</Link>
                                        <Link className='insideCol' to='/catagory'>中友會</Link>
                                        <Link className='insideCol' to='/catagory'>桃友會</Link>
                                    </Container>
                                </div>
                                <div className='row'>
                                    <Container className='d-flex justify-content-around'>
                                        <Link className='insideCol' to='/catagory'>熱舞社</Link>
                                        <Link className='insideCol' to='/catagory'>迴聲社</Link>
                                        <Link className='insideCol' to='/catagory'>吉他社</Link>
                                        <Link className='insideCol' to='/catagory'>合唱社</Link>
                                    </Container>
                                </div>
                                <div className='row'>
                                    <Container className='d-flex justify-content-around'>
                                        <Link className='insideCol' to='/catagory'>光舞社</Link>
                                        <Link className='insideCol' to='/catagory'>攝影社</Link>
                                        <Link className='insideCol' to='/catagory'>梅籌會</Link>
                                        <Link className='insideCol' to='/catagory'>畢聯會</Link>
                                    </Container>
                                </div>
                            </div>
                        </div>                 
                    </Container>

                    <Route exact path="/" render={() => (
                        <Homepage />
                    )}/>
                    <Route exact path="/food" render={() => (
                        <h1>Food</h1>
                    )}/>
                    <Route exact path="/ArticleForm" render={() => (
                        <ArticleForm/>  
                    )}/>
                    <Route exact path="/Manager" render={() => (
                        <Manager/>  
                    )}/>
                    <Route exact path="/catagory" render={() => (
                        <CatalogPage topicName='food' description='Rishi Sunak has extended the government’s wage subsidy scheme until the end of October in a move that could see costs rise to more than £80 billion. The Treasury has decided not to cut the overall level of the wage subsidy scheme, which stands at 80 per cent of people’s wages up to £2,500 a month. It has instead announced that from August furloughed workers will'/>
                    )}/>
                </div>
            </Router>
        );
    }
}
