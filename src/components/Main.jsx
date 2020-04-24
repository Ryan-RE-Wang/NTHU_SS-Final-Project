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


export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>Hello Final</h1>
        );
    }
}