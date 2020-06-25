import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './M_home.css';

export default class Home extends React.Component {
    state = {
            club_name:'聖經研習社',
            join_time:'2020/05/24',
            describe:'我們是聖經研習社，由學校的基督徒學生組成，平常活動有週三福音餐廳，週間小排聚會，週日主日聚會，歡迎與我們一同讀聖經理解人生的奧秘',
            release_num:3,
            expanded:false,
           
        }

    constructor(props) {
            super(props);
    
        }

    
    render() {
        return (
            <Row className = "home_M">
                    <Col className = "home_M1">
                        <img  className = "image_M" src='/images/user1.jpg' alt="logo"/>
                    </Col>
                    <Col className = "home_M2">
                        <div>
                            <h1><font face="標楷體" className = "home_M2text">{this.state.club_name}</font></h1>
                            <p>{this.state.describe}</p>
                            <div className = "tag_M"><img  src='/images/fb.jpg' className = "image_M1" alt="fb"/><div className="font">清華大學聖經研習社</div></div>
                            <div className = "tag_M"><img   src='/images/ig.jpg' className = "image_M2" alt="ig"/><div className="font">nthu_churchlife</div></div>
                        </div>
                    </Col>
                </Row>
        )
    }
}