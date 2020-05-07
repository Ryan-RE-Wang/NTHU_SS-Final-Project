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
    NavLink
} from 'reactstrap';

import './Main.css';

import ArticleForm from 'components/ArticleForm.jsx';
import Homepage from 'components/Homepage.jsx';


export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div className='main bg-faded'>
                    <div className='container'>
                        <Navbar color='faded' light expand='md'>
                            <NavbarToggler/>
                            <NavbarBrand className='text-info' href="/">NewsSharing</NavbarBrand>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink tag={Link} to='/'>Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} to='/food'>Food</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} to='/ArticleForm'>Make a Post(temporary)</NavLink> {/* testing only */}
                                    </NavItem>
                                </Nav>
                        </Navbar>
                        
                    </div>

                    <Route exact path="/" render={() => (
                        <Homepage />
                    )}/>
                    <Route exact path="/food" render={() => (
                        <h1>Food</h1>
                    )}/>
                    <Route exact path="/ArticleForm" render={() => (
                        <ArticleForm/>  
                    )}/>
                </div>
            </Router>
        );
    }
}