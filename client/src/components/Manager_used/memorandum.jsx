import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './memorandum.css'
export default class Memorandum extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
    <div>
        <figure class="snip1401 hover"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample93.jpg" alt="sample93" />
        <figcaption>
          <h3>Eric Widget</h3>
          <p>I'm killing time while I wait for life to shower me with meaning and happiness.</p>
        </figcaption><i class="ion-ios-personadd-outline"></i>
        <a href="#"></a>
      </figure>
      
        <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
      
          <script src="./card.js"></script>
    </div>
        )
    }
}