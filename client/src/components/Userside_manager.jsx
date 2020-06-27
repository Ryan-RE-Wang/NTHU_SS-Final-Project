import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Contact_Us_information from './Manager_used/contact_us_information.jsx';
import Article_Cover from './Manager_used/article_cover.jsx';
import Header from './Manager_used/header.jsx';
import ArticleForm from './ArticleForm.jsx';
import Article from './Article.jsx';
import Home from './Manager_used/M_home.jsx';
import Sidebar from './Manager_used/sidebar.jsx';
import Navbar from './Manager_used/navbar.jsx';
import SignUp_club from './SignUp_club.jsx';
import './Userside_manager.css';


export default class Userside_manager extends React.Component {
  

    constructor(props) {
        super(props);
        this.state={
         
        }   
    }
    
    

    render() {     
        return (

            <div className="row userside_manager_body">
                <div className="col-12">
                    <div className="userside_manager_home"><Home/></div>
                </div>
                <div className="col-12">
                    <Article_Cover/>
                </div>
            </div>
        
        )
    }
    
}