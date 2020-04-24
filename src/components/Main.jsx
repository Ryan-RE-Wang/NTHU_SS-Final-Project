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
            <Homepage/>
        );
    }
}