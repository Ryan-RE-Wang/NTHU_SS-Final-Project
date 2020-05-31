import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, InputGroupAddon, Button, Jumbotron, Container,Row } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem,UncontrolledDropdown } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp, faCheck } from '@fortawesome/free-solid-svg-icons'
import 'pretty-checkbox/src/pretty-checkbox.scss';
import Carousel from 'react-bootstrap/Carousel'


import Post from 'components/Post.jsx';
import Pop_Post from 'components/Pop_Post.jsx';
import './CatalogPage.css'
import Footer_Content from 'components/Footer_Content.jsx';

export default class CatalogPage extends React.Component{
    static propTypes = {
        topicName: PropTypes.string,
        description: PropTypes.string
    };

    constructor(props){
        super(props);
        this.state = {
            exploreClick: true,
            orderClick: true,
            
        };
        this.handleExplore = this.handleExplore.bind(this); 
        this.handleOrder = this.handleOrder.bind(this); 
        
    }

    static catagory = ['All','Food','PE','Music','Association','Art','Competition'];
    static order = ['A to Z','Popularity','Date'];

    render(){
        

        return(  
            <div>     
            <div className='catalogPage-wrapper'>
            {/* d-block d-lg-none */}
                {/* <div className='left-wrapper '></div>
                <div className='right-wrapper'></div> */}
                <Container className=' pl-2 pr-2 pl-sm-2 pr-sm-2 pl-lg-5 pr-lg-5 pt-0 pb-0' >
                    <div className='row '>

                        <div className='col-12 col-sm-12 col-lg-3 classes-table ' >
                            <div className='row dropdown'>
                                <div id='exploreBy' className=' col-12 col-sm-6 col-lg-12' onClick={this.handleExplore}>
                                    
                    
                                    {/* drop down menu explore*/}
                                    <div className='d-block d-lg-none classes-section'>
                                        <div className='classes-topic dropDownBtn '>
                                            <span >EXPLORE BY</span>
                                            <FontAwesomeIcon icon={faAngleUp} size='lg'className={`d-lg-none topic-symbol ${this.state.exploreClick ? 'd-none' : ''}`}/>
                                            <FontAwesomeIcon icon={faAngleDown} size='lg'className={`d-lg-none topic-symbol ${this.state.exploreClick ? '' : 'd-none'}`}/>
                                        </div>

                                        <div className={`classes-body ${this.state.exploreClick ? 'd-block' : 'd-none'}`}>

                                        {
                                            CatalogPage.catagory.map((e,i) =>(
                                                <div className='checkbox-element'key={i}>
                                                    <div className="pretty p-icon p-plain  ">
                                                        <input type="checkbox" />
                                                        <div className="state">
                                                            <FontAwesomeIcon icon={faCheck} size='xs'className='icon checkIcon'/>
                                                            <label className='option'>{e}</label>
                                                        </div>
                                                    </div>  
                                                </div>
                                            ))
                                        }
                                        </div>


                                        

                                        <div className={`classes-topic dropDownBtn d-sm-none ${this.state.exploreClick ? 'd-block' : 'd-none'}`}>
                                            <span >ORDER BY</span>
                                        </div>
                                        
                                        <div className=" d-sm-none">
                                        <div className={ `classes-body ${this.state.exploreClick ? 'd-block' : 'd-none'}`}>
                                           
                                            {
                                                CatalogPage.order.map((e,i) =>( 
                                                    <div className='checkbox-element'key={i}>
                                                    <div className="pretty p-icon p-plain ">
                                                        <input type="checkbox" />
                                                        <div className="state">
                                                            <FontAwesomeIcon icon={faCheck} size='xs'className='icon checkIcon'/>
                                                            <label className='option'>{e}</label>
                                                        </div>
                                                    </div></div>
                                                ))
                                            }  
                                        </div>
                                        </div>
                                     </div>

                                    {/* left menu explore */}
                                    <div className='d-none d-lg-block classes-section'>
                                        <div className='classes-topic'>
                                            <span>EXPLORE BY</span>
                                        </div>
                                        <div className='classes-body'>
                                        {
                                            CatalogPage.catagory.map((e,i) =>(
                                                <div className='checkbox-element'key={i}>
                                                <div className="pretty p-icon p-plain ">
                                                    <input type="checkbox" />
                                                    <div className="state">
                                                        <FontAwesomeIcon icon={faCheck} size='xs'className='icon checkIcon'/>
                                                        <label className='option'>{e}</label>
                                                    </div>
                                                </div></div>
                                            ))
                                        }
                                        </div>
                                    </div>
                        
                                </div>

                                
                                <div id='orderBy'className='col-0 col-sm-6 col-lg-12 d-none d-sm-block ' onClick={this.handleOrder}>
                                    {/* drop down menu order*/}
                                    <div className='classes-section d-block d-lg-none '>
                                        
                                        <div className='classes-topic dropDownBtn  '>
                                            <span>ORDER BY</span>
                                            <FontAwesomeIcon icon={faAngleUp} size='lg'className={`topic-symbol ${this.state.orderClick ? 'd-none' : ''}`}/>
                                            <FontAwesomeIcon icon={faAngleDown} size='lg'className={`topic-symbol ${this.state.orderClick ? '' : 'd-none'}`}/>
                                        </div>

                                        <div className={`classes-body ${this.state.orderClick ? 'd-block' : 'd-none'}`}>
                                        {
                                            CatalogPage.order.map((e,i) =>( 
                                                <div className='checkbox-element'key={i}>
                                                <div className="pretty p-icon p-plain ">
                                                    <input type="checkbox" />
                                                    <div className="state">
                                                        <FontAwesomeIcon icon={faCheck} size='xs'className='icon checkIcon'/>
                                                        <label className='option'>{e}</label>
                                                    </div>
                                                </div></div>
                                            ))
                                        }                 
                                        </div>     
                                    </div>

                                    {/* left menu order */}
                                    <div className='classes-section d-none d-lg-block'>
                                        <div className='classes-topic '>
                                            <span>ORDER BY</span>
                                        </div>
                                        <div className='classes-body'>
                                        {
                                            CatalogPage.order.map((e,i) =>( 
                                                <div className='checkbox-element'key={i}>
                                                <div className="pretty p-icon p-plain "key={i}>
                                                    <input type="checkbox" />
                                                    <div className="state">
                                                        <FontAwesomeIcon icon={faCheck} size='xs'className='icon checkIcon'/>
                                                        <label className='option'>{e}</label>
                                                    </div>
                                                </div></div>
                                            ))
                                        }  
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                       
                        <div className=' col-12 col-lg-9 posts-table'>
                            <div className='posts-table-heading'> Popular Activities</div>
                            <div className=''>
                                <Carousel interval='5000' controls={true}>
                                    <Carousel.Item><Pop_Post/></Carousel.Item>
                                    <Carousel.Item><Pop_Post/></Carousel.Item>
                                </Carousel>
                                
                            </div>
                            <div className='posts-table-heading'> ALL</div>
                            <div className='d-flex row justify-content-center'>
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
                
            </div>
            
            </div>
        )
    }
    handleExplore(){
        let display = true;
        if(this.state.exploreClick) display = false;
        this.setState({    
            exploreClick: display
        });
    }
    handleOrder(){
        let display = true;
        if(this.state.orderClick) display = false;
        this.setState({    
            orderClick: display
        });
    }

}


