import React from 'react';
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
    }
    constructor(props) {
        super(props);
        this.state = {
            titleValue: '',
            titleDanger: false,
            contentValue: '',
            contentDanger: false,
            dateValue: '',
            dateDanger: false,
            timeValue: '',
            timeDanger: false,
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
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
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
            <Container className='article-container'>
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
                    <div className='poster p-4 '>
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
                    <div className='info p-4'>
                        <FormGroup className='form'>
                            <div className='d-flex row justify-content-start align-items-center'>
                                <div className='col-1'> 
                                    <EventIcon/>
                                </div> 
                                <div className='col-3'>
                                    <Label for="eventDate" sm={2}>Date</Label>
                                </div>
                                <div className='col-4'>
                                    Start
                                    <Input
                                        type="date"
                                        name="date"
                                        id="startDate"
                                        placeholder="date placeholder" />
                                </div>
                                <div className='col-4'>
                                    End
                                    <Input
                                        type="date"
                                        name="date"
                                        id="endDate"
                                        placeholder="date placeholder" />
                                </div>
                            </div>
                        </FormGroup>
                        <FormGroup className='form'>
                            <div className= 'd-flex row justify-content-start align-items-center'>
                                <div className='col-1' > 
                                    <AccessTimeIcon/>
                                </div> 
                                 <div className='col-3'>
                                    <Label for="eventTime" sm={2}>Time</Label> 
                                </div>
                                <div className='col-4'> 
                                    Start <Input
                                        type="time"
                                        name="time"
                                        id="startTime"
                                        placeholder="time placeholder"
                                        onChange={this.handleTimeChange} />
                                </div>
                                <div className='col-4'>
                                    End <Input
                                        type="time"
                                        name="time"
                                        id="endTime"
                                        placeholder="time placeholder"
                                        onChange={this.handleTimeChange} />
                                </div>
                            </div>
                        </FormGroup>
                        <FormGroup className='form'>
                            <div className='d-flex row justify-content-start align-items-center'>
                                <div className='col-1'> 
                                    <PlaceIcon/>
                                </div> 
                                <div className='col-3'>
                                    <Label for="location" sm={2}>Location</Label>
                                </div>
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
                                <Label for="ticket" sm={2}>Ticket</Label>
                            </div>
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
                            <Label for="contentText" sm={2}>Content</Label>
                        </div>
                        <div className='col-8'>
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
        );
       
    }

    handleTitleChange(e) {
        const text = e.target.value;
        this.setState({titleValue: text});
        if (text) {
            this.setState({titleDanger: false});
        }
    }

    handleDateChange(e) {
        const date = e.target.value;
        this.setState({dateValue: date});
        if (date) {
            this.setState({dateDanger: false});
        }
    }

    handleTimeChange(e) {
        const time = e.target.value;
        this.setState({timeValue: time});
        if (time) {
            this.setState({timeDanger: false});
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
        })
        console.log(this.state.file);
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

    handlePost() {
        
    }

    handleTagChange(tags) {
        this.setState({tags})
    }
    handlePost() {
        const {
            titleValue,
            contentValue,
            dateValue,
            timeValue,
            locationValue,
            imageValue,
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
        if (!dateValue || dateValue == '') {
            this.setState({
                dateDanger: true
            })
            return;
        }
        if (!timeValue || timeValue == '') {
            this.setState({
                timeDanger: true
            })
            return;
        }
        if (!locationValue || locationValue == '') {
            this.setState({
                locationDanger: true
            })
            return;
        }
        if (!imageValue || imageValue == '') {
            this.setState({
            imageDanger: true
            })
            return;
        }
        this.props.onPost(this.state.titleValue, this.state.contentValue, this.state.timeValue, this.state.dateValue, this.state.ticketValue, this.state.locationValue, this.state.imageValue, this.state.tags);
        this.setState({
            titleValue: '',
            titleDanger: false,
            contentValue: '',
            contentDanger: false,
            dateValue: '',
            dateDanger: false,
            timeValue: '',
            timeDanger: false,
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
            dateValue: '',
            dateDanger: false,
            timeValue: '',
            timeDanger: false,
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

   

