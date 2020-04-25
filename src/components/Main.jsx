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
                            <NavbarBrand className='text-info' href="/">WeatherMood</NavbarBrand>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink tag={Link} to='/'>Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} to='/food'>Food</NavLink>
                                    </NavItem>
                                </Nav>
                        </Navbar>
                    </div>

                    <Route exact path="/" render={() => (
                        <Homepage/>
                    )}/>
                    <Route exact path="/food" render={() => (
                        <h1>Article</h1>
                    )}/>
                </div>
            </Router>
        );
    }
}