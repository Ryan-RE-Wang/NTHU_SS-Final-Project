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
import './Manager_dev.css'


export default class Manager_dev extends React.Component {
  

    constructor(props) {
        super(props);
        this.state={
            nowpage:'5',
            sidebarOpen:false
        }

        this.list_Selected = this.list_Selected.bind(this);
        this.render_Selected = this.render_Selected.bind(this);
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }
    
    

    render() {
        let content = this.render_Selected(this.state.nowpage);
        let sidebarClassname = this.state.sidebarOpen ? 'sidebar_M fucker' : 'sidebar_M';
        console.log(sidebarClassname);
        return (
            
            <div className="body_M">
                <Sidebar className={sidebarClassname} toggle={this.toggleSidebar} select={this.list_Selected}/>
                <div className="content_M">
                    {content}
                </div>
            </div>
        )
    }
    toggleSidebar() {
        this.setState({
            sidebarOpen: ~this.state.sidebarOpen
        })
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
                 <Home/>
            )
        }else if(page == '2'){
            return (
                <Article_Cover select={this.list_Selected}/>
            )
        }else if(page == '3'){
            return (
                <Contact_Us_information/>            
            )    
        }else if(page == '4'){
            return (
                <ArticleForm/>            
            )    
        }else if(page == '5'){
            return (
                <div className="Manager_article_outline"><Article/> </div>         
            )    
        }else{

            return (<div>error</div>)
    }
    }
}