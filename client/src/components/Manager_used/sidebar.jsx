import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './sidebar.css';

export default class Sidebar extends React.Component {
    state = {
           
        }

    constructor(props) {
            super(props);
    
        }

    
    render() {
        
        return (
            <div  className={this.props.className}>
                    <div className="toggle-btn" onClick = {()=>this.props.toggle()}>
                        <span className="vertical_span"></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="vertical_span1"></span>
                    </div>
                    <ul className="sidebar_icon_M">
                        <li onClick={()=>this.props.select('1')}><i className="fa fa-home" aria-hidden="true"></i>Home</li>
                        <li onClick={()=>this.props.select('2')}><i className="fa fa-newspaper-o" aria-hidden="true"></i>Articles</li>
                        <li onClick={()=>this.props.select('3')}><i className="fa fa-envelope" aria-hidden="true"></i>Contact</li>
                        <li onClick={()=>this.props.select('4')}><i className="fa fa-envelope" aria-hidden="true"></i>New Article</li>
                    </ul>

                </div>
        )
    }
}