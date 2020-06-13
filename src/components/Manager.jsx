import React, { useState } from 'react';
import { ListGroup, ListGroupItem, } from 'reactstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BarChartIcon from '@material-ui/icons/BarChart';
import AmpStoriesIcon from '@material-ui/icons/AmpStories';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import SimpleExpansionPanel from './Manager_used/expansion_panels.js';
import Image_information from './Manager_used/card.js';
import User_information from './Manager_used/user_information.jsx';
import Contact_Us_information from './Manager_used/contact_us_information.jsx';
import Article_Cover from './Manager_used/article_cover.jsx';
import Password_Reset from './Manager_used/password_reset.jsx';
import Memorandum from './Manager_used/memorandum.jsx';
import Footer_Content from 'components/Footer_Content.jsx';
import EditableText from './Manager_used/editable_text.jsx';
import AlertDismissible from './Manager_used/addArticle.jsx';
import Header from './Manager_used/header.jsx';
import Home from './Manager_used/M_home.jsx';

import './Manager.css'

export default class Manager extends React.Component {
  

    constructor(props) {
        super(props);
        this.state={
            nowpage:'1'

        }

        this.list_Selected = this.list_Selected.bind(this);
        this.render_Selected = this.render_Selected.bind(this);
    }
    
    

    render() {
        let content = this.render_Selected(this.state.nowpage);
        //console.log(content);
        return (
            <Row className = "Manager_row">
                <Col xs={12} md={{ span: 8, offset: 2 }} >
                        <Row>       
                           {content}
                           <Header className = "Manager_header" list_Selected = {this.list_Selected}/>
                        </Row>  
                </Col>
                <Col xs={12} md={12} className = "M_footer">
                    <Footer_Content/>
                </Col>   

            </Row>
        )
    }
    
    list_Selected(page) {
        if(page == '1'||page== '2'||page=='3')
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
                <Article_Cover/>
            )
        }else if(page == '3'){
            return (
                <Contact_Us_information/>            
            )    
        }else{

            return (<div>error</div>)
    }
    }
}