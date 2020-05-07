import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import './Article.css';

export default class Article extends React.Component {
    static propTypes = {

    }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='article'>
                <Title id={id}></Title>
                <Content id={id}></Content>
            </div>
        );
    }
}
class Title {

}
class Content {
    
}