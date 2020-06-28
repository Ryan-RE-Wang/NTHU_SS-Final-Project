import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './navbar.css';

export default class Navbar extends React.Component {
    state = {
           
        }

    constructor(props) {
            super(props);
    
        }

    
    render() {
        
        return (
            <div  className={this.props.className}>
                    <div className="row navbar_Manager justify-content-center">
                   
                        <div className="col  navbar_btn_manager" onClick={()=>this.props.select('1')}>Home</div>
                        <div className="col  navbar_btn_manager" onClick={()=>this.props.select('2')}>Articles</div>
                        <div className="col  navbar_btn_manager" onClick={()=>this.props.select('3')}>Contact</div>
                   
                    </div>

            </div>
        )
    }
}