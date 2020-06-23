import React , { useState }from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PlaceIcon from '@material-ui/icons/Place';
import PaymentIcon from '@material-ui/icons/Payment';
import EventIcon from '@material-ui/icons/Event';
import TagsInput from 'react-tagsinput'
import Slider, { createSliderWithTooltip } from 'rc-slider'; 
import AvatarEditor from 'react-avatar-editor';
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
            value: 120,
            tags: []
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
        
        // this.handlePreview = this.handlePreview.bind(this);

        this.handlePost = this.handlePost.bind(this);
        this.handleCancel = this.handleCancel.bind(this);

        this.handleTagChange = this.handleTagChange.bind(this);
    }

    

    render() {

        return (
            <div>
                <div id='blankSpace'></div>
            <Container className='articleform-container'>
                <Form>
                <div className='title' font-weight='bold'>
                        <FormGroup className='form'>
                            <div className='row d-flex align-items-center'>
                                <div className='col-2'>
                                    <Label for="title" sm={2}>Title</Label>
                                </div>
                                <div className='col-8'>
                                    <Input 
                                        type="textarea" 
                                        name="text" 
                                        id="title" 
                                        onChange={this.handleTitleChange} />
                                </div>
                            </div>
                        </FormGroup>
                </div>
                <div className='d-flex row justify-content-center align-items-center'>
                    <div className='poster p-4'>
                        <FormGroup row className='form'>
                            <div>
                                 <Input type="file" name="file" id="imgFile" onChange={this.handleFileChange}/>
                                    <FormText color="muted">
                                        Upload your event poster.
                                    </FormText>
                                    <AvatarEditor
                                        image={this.state.file}
                                        width={250}
                                        height={320}
                                        border={50}
                                        color={[255, 255, 255, 0.6]} // RGBA
                                        scale={this.state.value/120}
                                        rotate={0}
                                    />
                                    <Slider 
                                        min={120}
                                        max={240}
                                        value={this.state.value}
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
                    <div className='info p-2'>
                        <FormGroup className='form'>
                            <div className='d-flex row justify-content-start align-items-center'>
                                <div className='col-1'> 
                                    <EventIcon/>
                                </div> 
                                <div className='col-3'>
                                    Date and Time
                                </div>
                                <div className='col-1'>Start</div>
                                <div className='col-4'>
                                    <Input
                                        type="date"
                                        name="date"
                                        id="startDate"
                                        placeholder="date placeholder" 
                                        onChange={this.handleStartDateChange} />
                                </div>
                                <div className='col-3'>
                                    <Input
                                        type="time"
                                        name="time"
                                        id="startTime"
                                        placeholder="time placeholder"
                                        onChange={this.handleStartTimeChange} />
                                </div>
                            </div>
                        </FormGroup>
                        <FormGroup className='form'>
                            <div className= 'd-flex row justify-content-start align-items-center'>
                                <div className='col-1' > 
                                </div> 
                                <div className='col-3'>
                                </div>
                                <div className='col-1'>End</div>
                                <div className='col-4'> 
                                    <Input
                                        type="date"
                                        name="date"
                                        id="endDate"
                                        placeholder="date placeholder"
                                        onChange={this.handleEndDateChange} />
                                </div>
                                <div className='col-3'>
                                    
                                    <Input
                                        type="time"
                                        name="time"
                                        id="endTime"
                                        placeholder="time placeholder"
                                        onChange={this.handleEndTimeChange} />
                                </div>
                            </div>
                        </FormGroup>
                        <FormGroup className='form'>
                            <div className='d-flex row justify-content-start align-items-center'>
                                <div className='col-1'> 
                                    <PlaceIcon/>
                                </div> 
                                <div className='col-3'>
                                    Location
                                </div>
                                <div className='col-1'></div>
                                <div className='col-7'>
                                    <Input 
                                        type="textarea" 
                                        name="text" 
                                        id="location" 
                                        onChange={this.handleLocationChange} />            
                                </div> 
                            </div>
                        </FormGroup>
                        <FormGroup className='form'>
                        <div className='d-flex row justify-content-start align-items-center '>
                            <div className='col-1'> 
                                <PaymentIcon/>
                            </div>  
                            <div className='col-3'>
                                Ticket
                            </div>
                            <div className='col-1'></div>
                            <div className='col-7'>
                                <Input 
                                    type="textarea" 
                                    name="text" 
                                    id="ticket" 
                                    onChange={this.handleTicketChange} />
                            </div> 
                        </div>
                        </FormGroup>
                    </div>
                </div>
                
                <FormGroup className='form'>
                    <div className='d-flex row align-items-center'>
                        <div className='col-2'>
                            Content
                        </div>
                        <div className='p-2 tag col-8'>
                            <Input 
                                type="textarea" 
                                name="text" 
                                id="contentText" 
                                onChange={this.handleContentChange} />
                        </div>
                    </div>
                </FormGroup>
                
                <div className='row'> 
                    <div className='col'>
                        <div className='hint'>Hint: type and press enter </div>
                        <TagsInput 
                            value={this.state.tags} 
                            onChange={this.handleTagChange} />
                        
                    </div>
                </div>
                </Form>
                <div className="buttons" className={`d-flex justify-content-around`}>
                    <div className='row d-flex'>
                        <div className='p-2'>
                            <Button className='btn-post' color="success" onClick={this.handlePost}>Post</Button>{' '}
                        </div>
                        <div className='p-2'>
                            <Button className='btn-cancel' color="secondary" onClick={this.handleCancel}>Cancel</Button>{' '} 
                        </div>
                    </div>
                </div>
            </Container>
            <div id='blankSpace'></div>
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
    

    handleContentChange() {
        const text = e.target.value;
        this.setState({contentValue: text});
        if (text) {
            this.setState({contentDanger: false});
        }
    }

    handleFileChange(event) {
        this.setState({
          file: URL.createObjectURL(event.target.files[0])
        }, ()=> {
                console.log(this.state.file);
            }
        );
    }

    handleTicketChange() {
        const ticket = e.tartget.value;
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
        this.setState({tags})
    }
    handlePost() {
        const {
            titleValue,
            contentValue,
            startDateValue,
            startTimeValue,
            endDateValue,
            endTimeValue,
            locationValue,
            file,
            tags,
        } = this.state;
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
        this.props.onPost(
                        this.props.club, 
                        this.state.titleValue, 
                        this.state.contentValue, 
                        this.state.startTimeValue,
                        this.state.endTimeValue,
                        this.state.startDateValue,
                        this.state.endTimeValue,
                        this.state.ticketValue, 
                        this.state.locationValue, 
                        this.state.file, 
                        this.state.tags);
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

   

