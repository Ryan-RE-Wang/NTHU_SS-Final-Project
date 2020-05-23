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
                    <Row>
                        {this.state.article.map(p=>
                            <Col xs={12} md={6} lg={4} key={p.title}>
                            <div className="card">
                                <div>
                                    <div className="picture_i"><a href={p.link}><img src={p.image} alt={p.title} /></a></div>
                                    <p className="picture_d">{p.title}</p>
                                </div>
                                <button className="btn" onClick={() =>this.deleteArticle(p.id)}>Delete</button>
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