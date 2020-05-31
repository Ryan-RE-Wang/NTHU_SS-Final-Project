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
            <Row >
                 <Col xs={12} md={{ span: 3, offset: 1 }} className="left">
                     <Row>
                         <Col xs={12} md={12}>
                        <User_information/>
                        </Col>
                        <Col xs={3} md={12}>
                        <ListItem className="list" button onClick={() => this.list_Selected('1')} >
                        <ListItemIcon>
                            <AssignmentIndIcon />
                        </ListItemIcon>
                         <div className="options">Manager</div>
                        </ListItem>
                        </Col>
                        <Col xs={3} md={12}>
                        <ListItem className="list" button onClick={() => this.list_Selected('2')}>
                        <ListItemIcon>
                            <AmpStoriesIcon />
                        </ListItemIcon>
                        <div className="options">Articles</div>
                        </ListItem>
                        </Col>
                        <Col xs={3} md={12}>
                        <ListItem className="list" button onClick={() => this.list_Selected('3')}>
                        <ListItemIcon>
                            <BarChartIcon />
                        </ListItemIcon>
                        <div className="options">Analysis</div>
                        </ListItem>
                        </Col>
                        <Col xs={3} md={12}>
                        <ListItem className="list" button onClick={() => this.list_Selected('4')}>
                        <ListItemIcon>
                            <BorderColorIcon />
                        </ListItemIcon>
                        <div className="options">Setting</div>
                        </ListItem>
                        </Col>
                        </Row>
                </Col>
                <Col xs={12} md={7}>         
                           {content}
                             
                </Col>   
            </Row>
        )
    }
    
    list_Selected(page) {
        if(page == '1'||page== '2'||page=='3'||page=='4')
            this.setState({nowpage: page});
        else
            console.log(`${page} error`);
    }
    render_Selected(page) {
        if(page == '1'){
            return (
                <Memorandum/>
            )
        }else if(page == '2'){
            return (
                <Article_Cover/>
            )
        }else if(page == '3'){
            return (
                <Image_information/>
            )
        }else if(page == '4'){
            return (
                <div className= "setting">
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                        <Tab eventKey="Reset Password" title="Reset Password">
                            <Password_Reset/>
                        </Tab>
                        <Tab eventKey="Personal Information" title="Ppersonal Information">
                            <AlertDismissible/>
                        </Tab>
                        <Tab eventKey="contact" title="Contact Us" >
                            <Contact_Us_information/>
                        </Tab>
                    </Tabs>
                </div>
            )    
        }else{

            return (<div>error</div>)
    }
    }
}