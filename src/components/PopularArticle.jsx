import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HTMLEllipsis from 'react-lines-ellipsis/lib/html';

import './PopularArticle.css';

export default class PopularArticle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const p = {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur tellus mi, ac euismod nisi suscipit vitae. Duis vehicula nibh quis felis tempor vulputate. Nunc non fringilla nisl, et malesuada elit. Etiam vel purus justo. Suspendisse imperdiet ultricies odio, porttitor iaculis ante iaculis ut. Aenean in sapien metus. Integer et arcu sodales, rhoncus neque eget, imperdiet mauris. Duis rhoncus ex ex, vitae fringilla sem tempor ut. In sed ante varius mauris auctor congue id at orci. Sed nibh diam, bibendum non pretium a, ornare ut velit. Phasellus egestas ac elit sed dictum. Proin pulvinar, dui ut tincidunt ultricies, erat lectus feugiat tellus, at sagittis ex tortor id felis. Donec in neque vitae arcu hendrerit dignissim vel et turpis.Nunc rhoncus, ex in maximus commodo, dui quam aliquet elit, non egestas quam tortor sit amet quam. Duis scelerisque tellus vitae sollicitudin scelerisque. Morbi enim magna, fringilla vitae pellentesque quis',   
            header: 'Roast Meal!!!!',
            image: './images/w-clear-bg.jpg'
        }

        return (
            <div>
                <h2>Most Popular</h2>
                <Container>
                    <Row className='d-flex' id='firstRow'>
                        <Col xs={1}/>
                        <Col xs={7} id='smallScreen'>
                            <h3>{p.header}</h3>
                            <img className='img-fluid' src={p.image}/>
                        </Col>
                        <Col xs={3} id='bigScreen'>
                            <h3 className='upLeftHeader'>{p.header}</h3>
                            <HTMLEllipsis id='content0' unsafeHTML={p.text} maxLine={7} ellipsis='...' basedOn='letters'/>
                        </Col>
                        <Col className='border-right border-dark' id='bigScreen' xs={4}>
                            <img className='img-fluid' id='image0' src={p.image}/>
                        </Col> 
                        <Col xs={2}>
                            <Row>
                                <img className='img-fluid' id='image1' src='./images/烤魷魚.jpg'/>
                            </Row>
                            <Row id='upRightText'>
                                <h3>Roast Meal!!!!</h3>
                                <HTMLEllipsis id='content1' unsafeHTML={p.text} maxLine={3} ellipsis='...' basedOn='letters' />

                            </Row>
                        </Col>
                    </Row>
                    <hr className='hor0'/>
                </Container>
            </div>
        )
    }
}