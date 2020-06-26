import React from 'react';
import { v4 as uuid } from 'uuid';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import{Button} from 'reactstrap';
import './article_cover.css'
export default class Article_Cover extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            article:[{id:uuid(),link:"#",image:"images/海報1.jpg",title:"JOKER"},
                     {id:uuid(),link:"#",image:"images/海報2.jpg",title:"doctor strange"},
                     {id:uuid(),link:"#",image:"images/海報3.jpg",title:"阿凡達"}]
        }
        this.addArticle = this.addArticle.bind(this);
        this.deleteArticle = this.deleteArticle.bind(this);
    }

    render() {
        return (
            <div className="Article">
                <Container >
                    <Row className='d-flex justify-content-center'><h3>latest articles</h3></Row>
                    <Row >
                        {this.state.article.map(p=>
                            <Col xs={12} md={6} lg={3} key={p.title}>
                            <div className="card1">
                                <div className="card1_PandD">
                                    <div className="picture_i"><img src={p.image} alt={p.title} /></div>
                                    <div className = "article_describe">
                                        <div className = "bbtn_div">
                                            <svg className="bi bbtn bi-three-dots-vertical" onClick={() =>this.deleteArticle(p.id)} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                            </svg>
                                            <div className="dropdown-content">
                                                    <a href="#" onClick={() =>this.deleteArticle(p.id)}>Delete</a>
                                                    <a href="#">Read</a>
                                            </div>
                                        </div>
                                        <p className="picture_d1">{p.title}</p>
                                        <p className="picture_d2">April 26, 2016</p>
                                    </div>
                                </div>
                            </div>
                            </Col>)
                        }
                            <Col xs={12} md={6} lg={3} key="add_button">
                            <div className="card2">
                            <       div className="picture_i"><img src="images/add1_background.jpg" alt="add_article" /></div>
                                    <div className = "article_describe">
                                    <div className="card2_button">
                                        <svg className="bi card2_button1 bi-plus-square" onClick={() =>this.addArticle("#","images/海報1.jpg","test")} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
                                            <path fillRule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
                                            <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            </Col>
                        
                    </Row>
                </Container>
            </div>
        )
    }
    addArticle(link,image,title){
        this.setState({
            article:[{id:uuid(),link:link,image:image,title:title},...this.state.article]
        })
    }
    deleteArticle(id){
        this.setState({
            article: this.state.article.filter(x => {
                return x.id != id;
              })
        })
    }
}
