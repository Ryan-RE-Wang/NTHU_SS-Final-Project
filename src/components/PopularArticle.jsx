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
            <div className='content-r'>
                <img className='component-img' src="images/poster.jpg" alt=""/>
                <div className='title-r'>term project demo</div>
                <div>delta 105</div>
                <div>2020/6/30 10:00</div>
            </div>
        )
    }
}