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
            <Row className = "home">
                    <Col className = "home1">
                        <img  className = "image" src='/images/user1.jpg' alt="User"/>
                    </Col>
                    <Col className = "home2">
                        <div>
                            <h1><font face="標楷體" className = "home2text">{this.state.club_name}</font></h1>
                            <p>{this.state.describe}</p>
                        </div>
                    </Col>
                </Row>
        )
    }
}