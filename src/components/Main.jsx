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
    Button,
    Row
} from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import './Main.css';

import ArticleForm from 'components/ArticleForm.jsx';
import Homepage from 'components/Homepage.jsx';
import Manager from 'components/Manager.jsx';
import CatalogPage from 'components/CatalogPage.jsx';

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false
        }

    }
    

    render() {
        return (
            <Router>
                <div className='main bg-faded'>
                    <Container className='d-flex justify-content-around'>
                        <NavbarBrand className='text-info' href="/">NewsSharing</NavbarBrand>
                        <Link to='/'>Home</Link>
                        <Link to='/food'>Food</Link>
                        <Link to='/ArticleForm'>Post</Link>
                        <Link to='/Manager'>Manager</Link> 
                        <Link to='/catagory'>Catalog</Link>
                        <div className='dropDown' id='NTHU'>
                            <span className='dropBtn'>NTHU-Club</span>
                            <div className='contentNTHU'>
                                <span>NTHU</span>
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
                            <span className='dropBtn'>NCTU-Club</span>
                            <div className='contentNCTU'>
                                <span>NCTU</span>
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
