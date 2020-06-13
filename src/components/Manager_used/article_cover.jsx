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
            <div className="article">
                <Container>
                    <Row className='d-flex justify-content-center'><h3>latest articles</h3></Row>
                    <Row>
                        {this.state.article.map(p=>
                            <Col xs={12} md={6} lg={4} key={p.title} className='d-flex justify-content-center'>
                            <div className="card1">
                                <div>
                                    <div className="picture_i"><img src={p.image} alt={p.title} /></div>
                                    <div className = "article_describe">
                                    <div className = "bbtn_div"><svg class="bi bbtn bi-three-dots" onClick={() =>this.deleteArticle(p.id)} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fill-rule="evenodd" d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                                                </svg>
                                    </div>
                                    <p className="picture_d1">{p.title}</p>
                                    <p className="picture_d2">April 26, 2016</p>
                                    </div>
                                </div>
                            </div>
                            </Col>)
                        }
                    </Row>
                    <Row><Button color="info" onClick={() =>this.addArticle("#","images/海報1.jpg","test")}>Add</Button></Row>
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