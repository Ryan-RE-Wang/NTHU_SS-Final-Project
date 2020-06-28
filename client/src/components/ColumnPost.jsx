import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron } from 'reactstrap';


import './ColumnPost.css'
export default class ColumnPost extends React.Component{

    constructor(props) {
        super(props);
        this.getbody = this.getbody.bind(this);
    }
    render(){
        let body = this.getbody();
        
        return(  
            <div>{body}</div>
        )
    }

    getbody(){
        if(this.props.reverse === true){
            return(
            <div className='columnPost '>
                {/* <div className='columPost-img'> */}
                    <img src="./images/poster.jpg" className=''/>
                {/* </div> */}
                
                <div className='discription addleftmargin '>
                    <h1 className="display-4 d-none d-md-block ">Hello, world!</h1>
                    <h1 className="display-5 d-block d-md-none ">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <button className='learnmore-btn'>LearnMore</button>
                </div>
                
            </div>
            )
        }else{
            return (
            <div className='columnPost order-reverse'>
                <div className='discription addrightmargin'>
                    <h1 className="display-4 d-none d-md-block ">Hello, world!</h1>
                    <h1 className="display-5 d-block d-md-none ">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <button className='learnmore-btn'>LearnMore</button>
                </div>
                {/* <div className='columPost-img'> */}
                    <img src="./images/poster.jpg" className=''/>
                {/* </div> */}
            </div>
            )
        }

    }
}