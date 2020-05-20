import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, InputGroupAddon, Button, Jumbotron, Container } from 'reactstrap';
import '../../node_modules/pretty-checkbox/src/pretty-checkbox.scss';

import Post from 'components/Post.jsx';
import './CatalogPage.css'
import Footer_Content from 'components/Footer_Content.jsx';
export default class CatalogPage extends React.Component{
    static propTypes = {
        topicName: PropTypes.string,
        description: PropTypes.string
    };

    constructor(props){
        super(props);

    }
    render(){
        
        return(       
            <div>
                <Container className='CatalogPage pl-2 pr-2 pl-lg-3 pr-lg-3 pl-xl-5 pr-xl-5'>
                    <div className='d-flex row '>

                        <div className='col-12 col-lg-3 classes-table'>
                            <div className='d-flex row '>
                                <div className='col-12 classes-topic'>EXPLORE BY</div>

                                <div className='col-12'>
                                    <div className="pretty p-default p-curve">
                                        <input type="checkbox" />
                                        <div className="state">
                                            <label className='option'>Default</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 '>
                                    <div className="pretty p-icon p-round">
                                        <input type="checkbox" />
                                        <div className="state">
                                            <i className="icon mdi mdi-check"></i>
                                            <label> Pay Bills</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 option'>

                                    <div className="pretty p-icon p-curve p-smooth">
                                        <input type="radio" name="radio66"/>
                                        <div className="state">
                                            <i className="icon mdi mdi-check"></i>
                                            <label>Swift</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 classes-topic'>ORDER BY</div>
                                <div className='col-12 option'>A to Z</div>
                                <div className='col-12 option'>Popularity</div>
                                <div className='col-12 option'>Date</div>
                            </div>
                        </div>
                       
                        <div className='col-12 col-lg-9 posts-table'>
                            <div className='d-flex row justify-content-center'>
                                <div className='col-12 posts-topic'>ALL</div>
                                <div className='col-12'><Post/></div>
                                <div className='col-12'><Post/></div>
                                <div className='col-12'><Post/></div>
                                <div className='col-12'><Post/></div>
                                <div className='col-12'><Post/></div>
                                <div className='col-12 button-wrapper'><button id='showMoreBtn'> SHOW MORE</button></div>
                                
                            </div>
                        </div>
                    </div>
                    
                </Container>
                <Footer_Content/>
            </div>
        )
    }
}