import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './sidebar.css';
import {home} from 'react-icons-kit/icomoon/home';
import {newspaper} from 'react-icons-kit/icomoon/newspaper';
import {mail4} from 'react-icons-kit/icomoon/mail4';
import { Icon } from 'react-icons-kit';

export default class Sidebar extends React.Component {
    state = {
           
        }

    constructor(props) {
            super(props);
    
        }

    
    render() {
        
        return (              
                    <div className="sidebar_icon_M">
                        {/* <div className= "sidebar_manager_used sidebar_manager_btn" onClick={()=>this.props.select('1')}><Icon size={20} icon={home} />Home</div>
                        <div className="just_a_line"></div>
                        <div className= "sidebar_manager_used sidebar_manager_btn" onClick={()=>this.props.select('2')}><Icon size={20} icon={newspaper} />Articles</div>
                        <div className="just_a_line"></div>
                        <div className= "sidebar_manager_used  sidebar_manager_btn" onClick={()=>this.props.select('3')}><Icon size={20} icon={mail4} />Contact</div>
                         <div className="just_a_line"></div> */}
                         <div className='myButt three' onClick={()=>this.props.select('1')}>Home</div>
                       
                         <div className='myButt three' onClick={()=>this.props.select('2')}>Articles</div>
                        
                         <div className='myButt three' onClick={()=>this.props.select('3')}>About us</div>
                        
                    </div>
        )
    }
}