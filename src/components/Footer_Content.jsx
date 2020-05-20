import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, InputGroupAddon, Button, Jumbotron, Container,Row } from 'reactstrap';


import './Footer_Content.css'

export default class Footer_Content extends React.Component{

    constructor(props){
        super(props);
    }
    
    static About = ['information','contact','developer','email','Art','Competition'];
    static catagory = ['Food','PE','Music','Association','Art','Competition'];
    render(){
        console.log("foot");
        return(       

            <div>
            <div className='divide-bar'></div>
            <div className='footer'>
                <Container className='footer-content pl-2 pr-2 pl-sm-5 pr-sm-5'>
                    
                    <div className='d-flex row info-table'>
                        <div className='col-12'>
                            <div className='d-flex row '>
                                <div className='footer-title'>NEWS SHARAING</div>
                            </div>
                        </div>
                        <div id='section-1' className='col-12 col-md-4'>
                            <div className='d-flex row '>
                                <div className='d-flex col-12 info-topic'>MORE catagory</div>                                
                                {
                                    Footer_Content.About.map((e,i) =>(
                                        <div className='d-flex col-6 info-element' key={i}>{e}</div>
                                    ))
                                }

                            </div>
                        </div>
                        <div id='section-2' className='col-12 col-md-8'>                           
                            <div className='d-flex row '>
                                <div className='d-flex col-12 info-topic'>MORE catagory</div>   
                                {
                                    Footer_Content.catagory.map((e,i) =>(
                                        <div className='d-flex col-6 col-md-3 col-xs-6 info-element' key={i}>{e}</div>
                                    ))
                                }
                            </div>
                        </div>
                        <div id='section-3' className='col-12 '>
                            <div className='d-flex row '>
                                <div id='footer-intro' className='d-flex col-12  info-element'>Team 15 final project news sharing</div>
                            </div>
                        </div>
                    </div>

                </Container>                
            </div>
            </div>
        )
    }
}




