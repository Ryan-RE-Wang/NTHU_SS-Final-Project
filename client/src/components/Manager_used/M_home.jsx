import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './M_home.css';

const baseUrl = 'https://team11final.s3-us-west-1.amazonaws.com/';
const lasturl = '.jpeg';

export default class Home extends React.Component {
    static propTypes = {
        c: PropTypes.object,
    };

    constructor(props) {
            super(props);
    
        }

    
    render() {
        return (
            <div className="HOME_body_M">
            <Row className = "home_M">
                    <Col className = "home_M1">
                        <img  className = "image_M" src={baseUrl + this.props.c.clubpic + lasturl} alt="logo"/>
                    </Col>
                    <Col className = "home_M2">
                        <div>
                            <h1><font face="標楷體" className = "home_M2text">{this.props.c.clubname}</font></h1>
                            <p>{this.props.c.description}</p>
                            <a  href={this.props.c.facebook} className = "tag_M"><img  src='/images/fb.jpg' className = "image_M1" alt="fb"/></a>
                            <a href={this.props.c.instagram} className = "tag_M"><img   src='/images/ig.jpg' className = "image_M2" alt="ig"/></a>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}