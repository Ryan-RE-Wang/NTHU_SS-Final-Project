import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, InputGroupAddon, Button, Jumbotron, Container } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem,UncontrolledDropdown } from 'reactstrap';
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp} from '../../node_modules/@fortawesome/free-solid-svg-icons'
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
        this.state = {
            exploreClick: true,
            orderClick: true
        };
        this.handleExplore = this.handleExplore.bind(this); 
        this.handleOrder = this.handleOrder.bind(this); 
    }

    render(){
        
        return(  
            <div>     
            <div className='catalogPage-wrapper'>
            {/* d-block d-lg-none */}
                <div className='left-wrapper '></div>
                <div className='right-wrapper'></div>
                <Container className='CatalogPage pl-2 pr-2 pl-lg-3 pr-lg-3 pl-xl-5 pr-xl-5 pt-0 pb-0' >
                    <div className='d-flex row '>

                        <div className='col-11 col-sm-12 col-lg-3 classes-table ' >
                            <div className=' row dropdown'>
                                <div id='exploreBy' className='col-12 col-sm-6 col-lg-12 ' onClick={this.handleExplore}>
                                    
                    
                                    {/* drop down menu */}
                                    <div className='col-12 classes-topic dropDownBtn'>
                                        <span>EXPLORE BY</span>
                                        <FontAwesomeIcon icon={faAngleUp} size='lg'className={`d-lg-none topic-symbol ${this.state.exploreClick ? 'd-none' : ''}`}/>
                                        <FontAwesomeIcon icon={faAngleDown} size='lg'className={`d-lg-none topic-symbol ${this.state.exploreClick ? '' : 'd-none'}`}/>
                                    </div>
                                    <div className='col-12 option'>A to Z</div>
                                    <div className={`d-lg-none dropdown-content ${this.state.exploreClick ? 'dropdown-hide' : 'dropdown-display'}`}>
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                        <div>ORDER BY</div>
                                        <a href="#">Link 4</a>
                                        <a href="#">Link 5</a>
                                        <a href="#">Link 6</a>
                                    </div>
                                </div>
                                <div id='orderBy'className='col-6 col-lg-12 ' onClick={this.handleOrder}>

                                    {/* drop down menu */}
                                    <div className='col-12 classes-topic dropDownBtn'>
                                        <span>ORDER BY</span>
                                        <FontAwesomeIcon icon={faAngleUp} size='lg'className={`d-lg-none topic-symbol ${this.state.orderClick ? 'd-none' : ''}`}/>
                                        <FontAwesomeIcon icon={faAngleDown} size='lg'className={`d-lg-none topic-symbol ${this.state.orderClick ? '' : 'd-none'}`}/>
                                    </div>        
                                    <div className='col-12 option'>A to Z</div>
                                    <div className='col-12 option'>Popularity</div>
                                    <div className='col-12 option'>Date</div>           
                                    <div className={`d-lg-none dropdown-content ${this.state.orderClick ? 'dropdown-hide' : 'dropdown-display'}`}>
                                        <a href="#">Link 4</a>
                                        <a href="#">Link 5</a>
                                        <a href="#">Link 6</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div className='col-12 col-lg-9 posts-table'>
                            <div className='d-flex row justify-content-center'>
                                <div className='col-12 posts-topic'>&nbsp;ALL</div>
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
            <Footer_Content />
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





{/* <div className='col-12'>
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
</div> */}