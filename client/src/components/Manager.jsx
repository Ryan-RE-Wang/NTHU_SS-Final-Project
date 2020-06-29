import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Contact_Us_information from './Manager_used/contact_us_information.jsx';
import Article_Cover from './Manager_used/article_cover.jsx';
import Header from './Manager_used/header.jsx';
import Home from './Manager_used/M_home.jsx';
import {connect} from 'react-redux';


import './Manager.css'

class Manager extends React.Component {
  

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
                        <Row className='d-flex justify-content-center'>       
                           {content}
                           <Header className = "Manager_header" list_Selected = {this.list_Selected}/>
                        </Row>  
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
                <Home c={this.props.club}/>

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

export default connect(state => ({
    ...state.club
}))(Manager);