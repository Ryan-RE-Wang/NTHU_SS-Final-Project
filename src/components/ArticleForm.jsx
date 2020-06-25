import React , { useState }from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PlaceIcon from '@material-ui/icons/Place';
import PaymentIcon from '@material-ui/icons/Payment';
import EventIcon from '@material-ui/icons/Event';
import GroupIcon from '@material-ui/icons/Group';
import TagsInput from 'react-tagsinput'
import Slider, { createSliderWithTooltip } from 'rc-slider'; 
import AvatarEditor from 'react-avatar-editor';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ListIcon from '@material-ui/icons/List';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './ArticleForm.css';
import 'react-tagsinput/react-tagsinput.css';
import 'rc-slider/assets/index.css';
import { rgbToHex } from '@material-ui/core';

var Preview = false;
export default class ArticleForm extends React.Component {
    static propTypes = {
        onPost: PropTypes.func,
        club: PropTypes.string
    }
    constructor(props) {
        super(props);
        this.state = {
            id:0,
            titleValue: '',
            titleDanger: false,
            contentValue: '',
            contentDanger: false,
            startDateValue: '',
            startDateDanger: false,
            endDateValue: '',
            endDateDanger: false,
            startTimeValue: '',
            startTimeDanger: false,
            endTimeValue: '',
            endTimeDanger: false,
            ticketValue: '', 
            ticketDanger: false,
            locationValue: '',
            locationDanger: false,
            file: null,
            fileDanger: false,
            Value: 120,
            tags: [],
            dropdownOpen: false
        }

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
        this.handleEndTimeChange = this.handleEndDateChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleSliderChange = this.handleSliderChange.bind(this);
        this.handleTicketChange = this.handleTicketChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        
        // this.handlePreview = this.handlePreview.bind(this);

        this.handleCreatePost = this.handleCreatePost.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleTagChange = this.handleTagChange.bind(this);

    }



    render() {

        return (
            <div className='articleform-container flex-column d-flex container justify-content-center align-items-center'>
                <div id='blankSpace'></div>
                <div id='blankSpace'></div>
                <Form>
                    <FormGroup className='form'>
                        <div className='row d-flex'>
                            <div className='col-2'>
                                <Label className='label' for="title" sm={2} >Title</Label>
                            </div>
                            <div className='col-8'>
                                <Input 
                                    type="text" 
                                    name="text" 
                                    id="title" 
                                    value={this.state.titleValue}
                                    onChange={this.handleTitleChange} />
                            </div>                   
                        </div>
                    </FormGroup>
                    <div className='p-2 row info m-4'>
                        <div className='p-4 d-flex flex-row'>
                            <FormGroup className='form'>
                                <div>
                                    <Input  type="file" name="file" id="imgFile" onChange={this.handleFileChange}/>
                                    <FormText color="muted">
                                        Upload your event poster.
                                    </FormText>
                                    <AvatarEditor
                                        image={this.state.file}
                                        width={250}
                                        height={320}
                                        border={50}
                                        color={[255, 255, 255, 0.6]} // RGBA
                                        scale={this.state.Value/120}
                                        rotate={0}
                                        className='poster'
                                    />
                                    <Slider 
                                        min={120}
                                        max={240}
                                        value={this.state.Value}
                                        onChange={this.handleSliderChange}
                                        raliStyle={{
                                            height: 2
                                        }}
                                        handleStyle={{
                                            height: 14,
                                            width: 14,
                                            margintop: -7,
                                            marginleft: -7,
                                            backgroundColor: "#A1E0F8",
                                            border: 0
                                        }}
                                        trackStyle={{
                                            background: "none"
                                        }}
                                    />
                                        {/* <div>{(this.state.file == null) ? '' : <button className= 'preview' onClick={this.handlePreview}><span>Preview</span></button>}</div> */}
                                        {/* <div>{(Preview) ? <img src={this.state.file}/> : ''}</div> */}
                                        {/* <div>{(this.state.file == null) ? '' : <img src={this.state.file}/>}</div> */}
                                </div>
                            </FormGroup>
                        </div>
                        <div className=' col p-4'>
                            <FormGroup>
                                <div className='row'>
                                    <div className='col-2 label'> 
                                        <EventIcon/>
                                        Start
                                    </div>
                                    <div className='col-5 p-2'>
                                        <Input
                                            type="date"
                                            name="date"
                                            id="startDate"
                                            value={this.state.startDateValue}
                                            placeholder="date placeholder" 
                                            onChange={this.handleStartDateChange} />
                                    </div>
                                    <div className='col-4 p-2'>
                                        <Input
                                            type="time"
                                            name="time"
                                            id="startTime"
                                            value={this.state.startTimeValue}
                                            placeholder="time placeholder"
                                            onChange={this.handleStartTimeChange} />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div  className='col-2 label'> 
                                        <EventIcon/>
                                        End
                                    </div>
                                    <div className='col-5 p-2'> 
                                        <Input
                                            type="date"
                                            name="date"
                                            id="endDate"
                                            value={this.state.endDateValue}
                                            placeholder="date placeholder"
                                            onChange={this.handleEndDateChange} />
                                    </div>
                                    <div className='col-4 p-2'>
                                        <Input
                                            type="time"
                                            name="time"
                                            id="endTime"
                                            value={this.state.endTimeValue}
                                            placeholder="time placeholder"
                                            onChange={this.handleEndTimeChange} />
                                    </div>
                                </div>
                                <div className='row '>    
                                    <div className='col-2 label align-items-center'>
                                        <PlaceIcon/>
                                        Lacation
                                    </div> 
                                    <div className='col-5 p-2'>
                                        <Input 
                                            type="text" 
                                            name="text" 
                                            id="location" 
                                            value={this.state.locationValue}
                                            onChange={this.handleLocationChange} />    
                                    </div>                                    
                                    <div className='col-4 p-2'>
                                    
                                    </div>
                                </div>    
                                <div className='row'>
                                    <div className='col-2 label'>
                                        <PaymentIcon/>
                                        Ticket
                                    </div>
                                    <div className='col-5 p-2'>
                                        <Input 
                                            type="text" 
                                            name="text" 
                                            id="ticket" 
                                            value={this.state.ticketValue}
                                            onChange={this.handleTicketChange} />
                                    </div>
                                    <div className='col-4 p-2'></div>
                                </div> 
                            </FormGroup>
                            <div className=" row dropdown">
                                <div className='col-2 label'>
                                    <GroupIcon/>
                                    Club
                                </div> 
                                {/* <button className="col-5 p-2 btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown button
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">ClubA</a>
                                    <a className="dropdown-item" href="#">ClubB</a>
                                    <a className="dropdown-item" href="#">ClubC</a>
                                </div> */}
                                <Dropdown isOpen={this.state.dropdownOpen} toggle={() => this.setState({dropdownOpen: !this.state.dropdownOpen})} >
                                    <DropdownToggle>
                                        Dropdown
                                    </DropdownToggle>
                                    <DropdownMenu
                                        modifiers={{
                                        setMaxHeight: {
                                            enabled: true,
                                            order: 890,
                                            fn: (data) => {
                                            return {
                                                ...data,
                                                styles: {
                                                ...data.styles,
                                                overflow: 'auto',
                                                maxHeight: '100px',
                                                },
                                            };
                                            },
                                        },
                                        }}
                                    >
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>


                                <div className='col-4 p-2'></div>
                            </div>
                        </div>

                            
                    </div>
                        
                    <div id='blankSpace'></div>

                    <div className='m-8 p-2'>
                        <FormGroup className='form'>
                            <div className=''>
                                <div className='label p-2'>
                                    Content
                                </div>
                                <div className='content-input'>
                                    <Input 
                                        type="textarea" 
                                        name="text" 
                                        id="contentText"
                                        rows='10'
                                        value={this.state.contentValue} 
                                        onChange={this.handleContentChange} />
                                </div>
                            </div>
                        </FormGroup>
                    </div>
                    
                
                    <div className=''> 
                        <div className='col tag'>
                            <div className='label p-2'>
                                Hint: type and press enter 
                            </div>
                            <TagsInput 
                                value={this.state.tags} 
                                onChange={this.handleTagChange} />
                            
                        </div>
                    </div>

                    <div className="buttons" className={`d-flex justify-content-around`}>
                        <div className='row d-flex'>
                            <div className='p-2'>
                                <Button className='btn-post' color="success" onClick={this.handleCreatePost}>Post</Button>{' '}
                            </div>
                            <div className='p-2'>
                                <Button className='btn-cancel' color="secondary" onClick={this.handleCancel}>Cancel</Button>{' '} 
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        
        );
       
    }


    handleTitleChange(e) {
        const text = e.target.value;
        this.setState({titleValue: text});
        if (text) {
            this.setState({titleDanger: false});
        }
    }

    handleStartDateChange(e) {
        const date = e.target.value;
        this.setState({startDateValue: date});
        if (date) {
            this.setState({startDateDanger: false});
        }
    }
    handleEndDateChange(e) {
        const date = e.target.value;
        this.setState({endDateValue: date});
        if (date) {
            this.setState({endDateDanger: false});
        }
    }

    handleStartTimeChange(e) {
        const time = e.target.value;
        this.setState({startTimeValue: time});
        if (time) {
            this.setState({startTimeDanger: false});
        }
    }
    handleEndTimeChange(e) {
        const time = e.target.value;
        this.setState({endTimeValue: time});
        if (time) {
            this.setState({endTimeDanger: false});
        }
    }

    handleLocationChange(e) {
        const location = e.target.value;
        this.setState({locationValue: location});
        if (location) {
            this.setState({locationDanger: false});
        }
    }
    
    handleContentChange(e) {
        const text = e.target.value;
        this.setState({contentValue: text});
        if (text) {
            this.setState({contentDanger: false});
        }
    }

    handleFileChange(event) {
        this.setState({
          file: URL.createObjectURL(event.target.files[0])
        })
        
    }

    handleTicketChange(e) {
        const ticket = e.tartget.value;
        console.log(ticket);
        this.setState({ticketValue: ticket});
        if (ticket) {
            this.setState({ticketDanger: false});
        }
    }

   
    handleSliderChange(value){
        this.setState({
            value
          }, () => {
            console.log(this.state.value);
          }
        );
    };
    // handlePreview() {
    //     Preview = !Preview;
    // }

    handleTagChange(tags) {
        console.log(tags);
        this.setState({tags})
    }

    handleCreatePost() {
        const {
            id,
            titleValue,
            contentValue,
            startDateValue,
            startTimeValue,
            endDateValue,
            endTimeValue,
            locationValue,
            ticketValue,
            file,
            tags,
        } = this.state;

        this.setState({
            id: uuid()
        })

        if (!titleValue || titleValue == '') {
            this.setState({
                titleDanger: true
            })
            return;
        }
        if (!contentValue || contentValue == '') {
            this.setState({
                contentDanger: true
            })
            return;
        }
        if (!startDateValue || startDateValue == '') {
            this.setState({
                startDateDanger: true
            })
            return;
        }
        if (!startTimeValue || startTimeValue == '') {
            this.setState({
                startTimeDanger: true
            })
            return;
        }
        if (!endDateValue || endDateValue == '') {
            this.setState({
                endDateDanger: true
            })
            return;
        }
        if (!endTimeValue || endTimeValue == '') {
            this.setState({
                endTimeDanger: true
            })
            return;
        }
        if (!locationValue || locationValue == '') {
            this.setState({
                locationDanger: true
            })
            return;
        }
        if (!fileDanger || file== '') {
            this.setState({
                fileDanger: true
            })
            return;
        }

        if (!ticketValue || ticketValue == '') {
            this.setState({
                ticketDanger: true
            })
            return;
        }
        console.log(this.state.id);
        createPost(this.state).then(() => {
            this.listPosts(this.props.searchText);
        }).catch(err => {
            console.error('Error creating posts', err);
        });

        this.setState({
            id:0,
            titleValue: '',
            titleDanger: false,
            contentValue: '',
            contentDanger: false,
            startDateValue: '',
            startDateDanger: false,
            startTimeValue: '',
            startTimeDanger: false,
            endDateValue: '',
            endDateDanger: false,
            endTimeValue: '',
            endTimeDanger: false,
            ticketValue: '',
            ticketDanger: false,
            locationValue: '',
            locationDanger: false,
            file: null,
            fileDanger: false,
            tags: []
        })

        
    }
    handleCancel() {
        this.setState({
            titleValue: '',
            titleDanger: false,
            contentValue: '',
            contentDanger: false,
            startDateValue: '',
            startDateDanger: false,
            startTimeValue: '',
            startTimeDanger: false,
            endDateValue: '',
            endDateDanger: false,
            endTimeValue: '',
            endTimeDanger: false,
            ticketValue: '',
            ticketDanger: false,
            locationValue: '',
            locationDanger: false,
            file: null,
            fileDanger: false,
            value: 120,
            tags: []
        })
    }

}

   

