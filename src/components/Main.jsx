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
import Manager from 'components/Manager.jsx';
import CatalogPage from 'components/CatalogPage.jsx';
import LoginForm from 'components/LoginForm.jsx';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <Router>
            //     <div className='main bg-faded'>
            //         <div className='container'>
            //             <Navbar color='faded' light expand='md'>
            //                 <NavbarToggler/>
            //                 <NavbarBrand className='text-info' href="/">NewsSharing</NavbarBrand>
            //                     <Nav navbar>
            //                         <NavItem>
            //                             <NavLink tag={Link} to='/a'>Home</NavLink>
            //                         </NavItem>
            //                         <NavItem>
            //                             <NavLink tag={Link} to='/food'>Food</NavLink>
            //                         </NavItem>
            //                         <NavItem>
            //                             <NavLink tag={Link} to='/ArticleForm'>Make a Post(temporary)</NavLink> {/* testing only */}
            //                         </NavItem>
            //                         <NavItem>
            //                             <NavLink tag={Link} to='/Manager'>Manager</NavLink> 
            //                         </NavItem>
            //                         <NavItem>
            //                             <NavLink tag={Link} to='/'>Catalog</NavLink> 
            //                         </NavItem>
            //                     </Nav>
            //             </Navbar>
                        
            //         </div>

            //         <Route exact path="/a" render={() => (
            //             <Homepage />
            //         )}/>
            //         <Route exact path="/food" render={() => (
            //             <h1>Food</h1>
            //         )}/>
            //         <Route exact path="/ArticleForm" render={() => (
            //             <ArticleForm/>  
            //         )}/>
            //         <Route exact path="/Manager" render={() => (
            //             <Manager/>  
            //         )}/>
            //         {/* <Route exact path="/" render={() => (
            //             <CatalogPage topicName='food' description='Rishi Sunak has extended the government’s wage subsidy scheme until the end of October in a move that could see costs rise to more than £80 billion. The Treasury has decided not to cut the overall level of the wage subsidy scheme, which stands at 80 per cent of people’s wages up to £2,500 a month. It has instead announced that from August furloughed workers will'/>
            //         )}/> */}
            //         <Route exact path="/" render={() => (
            //             <LoginForm/>
            //         )}/>
            //     </div>
            // </Router>
            <LoginForm/>
        );
    }
}
