import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './article_cover.css'
export default class Article_Cover extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="article">
                <Container>
                    <Row>
                        <Col xs={12}  md={6} lg={4}>
                            <div >
                            <div className="picture_i"><a href="#"><img src="images/海報1.jpg" alt="tree" width="224" height="280px" /></a></div>
                                <p className="picture_d">JOKER</p>
                            </div>
                        </Col>
                        <Col xs={12}  md={6} lg={4}>
                            <div>
                                <div className="picture_i"><a href="#"><img src="images/海報2.jpg" alt="thunderstorm" width="224" height="280px" /></a></div>
                                <p className="picture_d">doctor strange</p>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <div>
                            <div className="picture_i"><a href="#"><img src="images/海報3.jpg" alt="na" width="224" height="280px" /></a></div>
                                <p className="picture_d">Avatar</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}