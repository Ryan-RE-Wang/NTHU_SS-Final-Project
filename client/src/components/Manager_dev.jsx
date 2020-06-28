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
import Userside_manager from './Userside_manager.jsx';
import './Manager_dev.css'


export default class Manager_dev extends React.Component {
  

    constructor(props) {
        super(props);
        this.state={
            nowpage:'1',
            
        }

        this.list_Selected = this.list_Selected.bind(this);
        this.render_Selected = this.render_Selected.bind(this);
     
    }
    
    

    render() {
        let content = this.render_Selected(this.state.nowpage);
       
        return (

            <div className="body_M row">
                <Navbar className="navbar_M col-12" select={this.list_Selected}/>
                <Sidebar  select={this.list_Selected}/>
                <div className="content_M">
                    {content}
                </div>
            </div>
        
        )
    }
  
    list_Selected(page) {
        if(page == '1'||page== '2'||page=='3'||page=='4'||page=='5')
            this.setState({nowpage: page});
        else
            console.log(`${page} error`);
    }
    render_Selected(page) {
        if(page == '1'){
            return (
            <div>
                <div className="M_club_information_title">Club information</div>
                <div className="Manager_home"> 
                    <Home/> 
                </div>
            </div>
            )
        }else if(page == '2'){
            return (
                <Article_Cover select={this.list_Selected}/>
            )
        }else if(page == '3'){
            return (
                <div>
                    <div>
                        <div className="M_club_information_title">our team 11</div>
                    </div>
                    <div className="M_contact_us_body">
                        <Contact_Us_information/>
                    </div>
                </div>
              
                // <Userside_manager/>  
                // <ArticleForm/>
                        
            )    
        }else if(page == '4'){
            return (
                <div className="Manager_ArticleForm">
                <ArticleForm/>   
                </div>         
            )    
        }else if(page == '5'){
            return (
                
                <div className="Manager_article_outline">
                    <Article/> 
                </div>
                  
            )    
        }else{

            return (<div>error</div>)
    }
    }
}