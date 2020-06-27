import React from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import {  Form, FormGroup, Input, FormText } from 'reactstrap';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PlaceIcon from '@material-ui/icons/Place';
import PaymentIcon from '@material-ui/icons/Payment';
import EventIcon from '@material-ui/icons/Event';
import GroupIcon from '@material-ui/icons/Group';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import BlockIcon from '@material-ui/icons/Block';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import TagsInput from 'react-tagsinput'
import Slider, { createSliderWithTooltip } from 'rc-slider'; 
import AvatarEditor from 'react-avatar-editor';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ReactCodeInput from 'react-verification-code-input';
import './ArticleForm.css';
import 'react-tagsinput/react-tagsinput.css';
import 'rc-slider/assets/index.css';
import {connect} from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import createPost from 'api/posts.js';
import S3 from 'react-aws-s3';
 
 
const config = {
    bucketName: 'team11final',
    region: 'us-west-1',
    accessKeyId: 'AKIAIVDIZU2RSKZUZ6OA',
    secretAccessKey: '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',
}

const ReactS3Client = new S3(config);



class ArticleForm extends React.Component {
    

    static propTypes = {
        club: PropTypes.string
    }
    constructor(props) {
        super(props);
        this.state = {
            id: uuid(),
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
            fileURL: '', 
            fileName: '',
            fileDanger: false,
            Value: 120,
            tags: [],
            dropdownOpen: false,
            unFill:'',
            modalShow: false,
            clubVerificationModalShow: false,
            club: 'select your club',
            clubVerified: false,
            verifiedInput: false
        }

        

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
        this.handleEndTimeChange = this.handleEndTimeChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleSliderChange = this.handleSliderChange.bind(this);
        this.handleTicketChange = this.handleTicketChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.handleClubVerificationSubmit = this.handleClubVerificationSubmit.bind(this);
        this.handleClubModalClose = this.handleClubModalClose.bind(this);
        this.onSave = this.onSave.bind(this);
        
        // this.handlePreview = this.handlePreview.bind(this);

        this.handleCreatePost = this.handleCreatePost.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleTagChange = this.handleTagChange.bind(this);

    }
     
    setEditorRef = (editor) => this.editor = editor



    render() {

        const clubList = ['Club A', 'Club B', 'Club C', 'Club D', 'Club E'];
        let clubListItems = clubList.map((clubList) =>
            <DropdownItem key={clubList} onClick={() => 
                this.setState({
                    club: clubList, 
                    clubVerificationModalShow: true,
                    clubVerified: (this.state.club !== clubList)? false: this.state.clubVerified,
                    verifiedInput: (this.state.club !== clubList)? false: this.state.verifiedInput})}>
                 {clubList}
            </DropdownItem>
        )
        return (
            <div className='articleform-container flex-column d-flex container justify-content-center align-items-center'>
                <div id='blankSpace2'></div>
                <div>
                    <Modal show={this.state.modalShow} onHide={this.handleModalClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Oops!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{this.state.unFill} is required</Modal.Body>
                        <Modal.Footer>
                        <Button variant="contained" color="secondary" onClick={this.handleModalClose}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div>
                    <Modal show={this.state.clubVerificationModalShow} onHide={this.handleClubModalClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Input the verification code for {this.state.club} </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='d-flex row justify-content-center align-items-center'>
                                <div p-1 m-1>
                                    <ReactCodeInput onComplete={this.handleClubVerificationSubmit}/> 
                                </div>
                                <div p-1 m-1>
                                   {(this.state.verifiedInput)?
                                    (this.state.clubVerified)? 
                                    <CheckCircleIcon className='check-icon'/> : 
                                    <BlockIcon className='block-icon'/> : ''
                                    } 
                                </div>
                                
                            </div>
                            
                            
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="contained" color="secondary" onClick={this.handleClubModalClose}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <Form>
                    <FormGroup className='form'>
                        <div className='row d-flex justify-content-center align-items-center'>
                                <div className='cl label'>
                                    Title
                                </div>
                                
                                <div className='col '>
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
                                    <FormText className='p-1' color="muted">
                                        Upload your event poster.
                                    </FormText>
                                    <AvatarEditor
                                        ref={this.setEditorRef}
                                        image={this.state.fileURL}
                                        width={250}
                                        height={320}
                                        border={50}
                                        color={[255, 255, 255, 0.6]} // RGBA
                                        scale={this.state.Value/120}
                                        rotate={0}
                                        className='poster-form'
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
                                    <Button className='p-1' variant="contained" color='default' onClick={this.onSave} > Save </Button>
                                </div>
                            </FormGroup>
                        </div>
                        <div className=' col p-4'>

                                <div className='row'>
                                    <div className='col-2 label'> 
                                        <EventIcon/>
                                        Start
                                    </div>
                                    <div className='col-5 p-2'>
                                        <FormGroup> 
                                            <Input
                                                type="date"
                                                name="date"
                                                id="startDate"
                                                value={this.state.startDateValue}
                                                placeholder="date placeholder" 
                                                onChange={this.handleStartDateChange} /> 
                                        </FormGroup>
                                    </div>
                                    <div className='col-4 p-2'>
                                        <FormGroup> 
                                            <Input
                                                type="time"
                                                name="time"
                                                id="startTime"
                                                value={this.state.startTimeValue}
                                                placeholder="time placeholder"
                                                onChange={this.handleStartTimeChange} />  
                                        </FormGroup>
                                        
                                    </div>
                                </div>
                                <div className='row'>
                                    <div  className='col-2 label'> 
                                        <EventIcon/>
                                        End
                                    </div>
                                    <div className='col-5 p-2'> 
                                        <FormGroup> 
                                            <Input
                                                type="date"
                                                name="date"
                                                id="endDate"
                                                value={this.state.endDateValue}
                                                placeholder="date placeholder" 
                                                onChange={this.handleEndDateChange} /> 
                                        </FormGroup>
                                    </div>
                                    <div className='col-4 p-2'>
                                        <FormGroup> 
                                            <Input
                                                type="time"
                                                name="time"
                                                id="endTime"
                                                value={this.state.endTimeValue}
                                                placeholder="time placeholder"
                                                onChange={this.handleEndTimeChange} />  
                                        </FormGroup>
                                    </div>
                                </div>
                                <div className='row '>    
                                    <div className='col-2 label align-items-center'>
                                        <PlaceIcon/>
                                        Location
                                    </div> 
                                    <div className='col-5 p-2'>
                                        <FormGroup> 
                                            <Input 
                                                type="text" 
                                                name="text" 
                                                id="location" 
                                                value={this.state.locationValue}
                                                onChange={this.handleLocationChange} />       
                                        </FormGroup>
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
                                        <FormGroup> 
                                          <Input 
                                            type="text" 
                                            name="text" 
                                            id="ticket" 
                                            value={this.state.ticketValue}
                                            onChange={this.handleTicketChange} />  
                                        </FormGroup>
                                    </div>
                                    <div className='col-4 p-2'></div>
                                </div>
                            <div className=" row dropdown">
                                <div className='col-2 label'>
                                    <GroupIcon/>
                                    Club
                                </div> 
                                <Dropdown isOpen={this.state.dropdownOpen} toggle={() => this.setState({dropdownOpen: !this.state.dropdownOpen})} >
                                    <DropdownToggle>
                                        {this.state.club}
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
                                        {clubListItems}
                                    </DropdownMenu>
                                </Dropdown>
                                <div className='col-4 p-2'></div>
                            </div>
                        </div>
                    </div>
                        
                    <div id='blankSpace2'></div>

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
                                        maxLength="10"
                                        rows='10'
                                        value={this.state.contentValue} 
                                        onChange={this.handleContentChange} />
                                </div>
                            </div>
                        </FormGroup>
                    </div>
                    
                
                    <div className=''> 

                        <div className='col tag ArticleForm_Tag'>
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
                                <Button
                                    variant="contained"
                                    color="default"
                                    
                                >
                                    <SaveIcon /> &nbsp; Save for later
                                </Button>
                            </div>
                            <div className='p-2'>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleCreatePost}
                                >
                                    <CloudUploadIcon /> &nbsp; Post
                                </Button>
                            </div>
                            <div className='p-2'>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={this.handleCancel}
                                >
                                    <DeleteIcon /> &nbsp; Delete
                                </Button>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>

        
        );
       
    }

    onSave() {
        
    }

    handleModalClose() {
        this.setState({modalShow: false})
    }
    handleClubModalClose() {
        this.setState({clubVerificationModalShow: false});
    }
    handleClubVerificationSubmit(e) {
        const input = e;
        if (input === '000000') {
            this.setState({clubVerified: true, verifiedInput: true})
        } else {
            this.setState({clubVerified: false, verifiedInput: true})
        }
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

    handleFileChange(e) {
        this.setState({
          fileURL: URL.createObjectURL(e.target.files[0]),
          file: e.target.files[0],
          fileName: e.target.files[0].name
        })        
    }

    handleTicketChange(e) {
        const ticket = e.target.value;
        this.setState({ticketValue: ticket});
        if (ticket) {
            this.setState({ticketDanger: false});
        }
    }
   
    handleSliderChange(value){
        this.setState({
            Value: value
          }, () => {
            console.log(this.state.Value);
          }
        );
    };

    handleTagChange(tags) {
        this.setState({tags})
    }

    handleCreatePost() {

        // if (this.editor)
        //     const canvasScaled = this.editor.getImageScaledToCanvas()
        

        // if (!this.state.titleValue || this.state.titleValue == '') {
        //     this.setState({
        //         titleDanger: true,
        //         modalShow: true,
        //         unFill:'title'
        //     })
        //     return;
        // }
        // if (!this.state.contentValue || this.state.contentValue == '') {
        //     this.setState({
        //         contentDanger: true,
        //         modalShow: true,
        //         unFill:'content'
        //     })
        //     return;
        // }
        // if (!this.state.startDateValue || this.state.startDateValue == '') {
        //     this.setState({
        //         startDateDanger: true,
        //         modalShow: true,
        //         unFill:'start date'
        //     })
        //     return;
        // }
        // if (!this.state.startTimeValue || this.state.startTimeValue == '') {
        //     this.setState({
        //         startTimeDanger: true,
        //         modalShow: true,
        //         unFill:'start time'
        //     })
        //     return;
        // }
        // if (!this.state.endDateValue || this.state.endDateValue == '') {
        //     this.setState({
        //         endDateDanger: true,
        //         modalShow: true,
        //         unFill:'end date'
        //     })
        //     return;
        // }
        // if (!this.state.endTimeValue || this.state.endTimeValue == '') {
        //     this.setState({
        //         endTimeDanger: true,
        //         modalShow: true,
        //         unFill:'end time'
        //     })
        //     return;
        // }
        // if (!this.state.locationValue || this.state.locationValue == '') {
        //     this.setState({
        //         locationDanger: true,
        //         modalShow: true,
        //         unFill:'location'
        //     })
        //     return;
        // }
        // if (!this.state.file || this.state.file== '') {
        //     this.setState({
        //         fileDanger: true,
        //         modalShow: true,
        //         unFill:'file'
        //     })
        //     return;
        // }

        // if (!this.state.ticketValue || this.state.ticketValue == '') {
        //     this.setState({
        //         ticketDanger: true,
        //         modalShow: true,
        //         unFill:'ticket'
        //     })
        //     return;
        // }
        // ReactS3Client.uploadFile(this.state.file, this.state.fileName).then(
        //     data => console.log(data))
        // .catch(err => console.error(err))
        createPost(this.state.id,
            this.state.titleValue,
            this.state.contentValue,
            this.state.startDateValue,
            this.state.startTimeValue,
            this.state.endDateValue,
            this.state.endTimeValue,
            this.state.ticketValue,
            this.state.locationValue,
            this.state.fileName,
            this.state.tags, 
            this.state.club, 
            this.props.userId).then(() => {
            // this.listPosts(this.props.searchText);
        }).catch(err => {
            console.error('Error creating posts', err);
        });



        this.setState({
            id: uuid(),
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
            fileURL: '',
            fileName: '',
            fileDanger: false,
            tags: [],
            dropdownOpen: false,
            unFill:'',
            modalShow: false,
            clubVerificationModalShow: false,
            club: 'select your club',
            clubVerified: false,
            verifiedInput: false
        })


    }

    handleCancel() {
        this.setState({
            id: uuid(),
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
            fileURL: '',
            fileName: '',
            fileDanger: false,
            value: 120,
            tags: [],
            dropdownOpen: false,
            unFill:'',
            modalShow: false,
            clubVerificationModalShow: false,
            club: 'select your club',
            clubVerified: false,
            verifiedInput: false
        })
    }

}

export default connect(state => ({
    ...state.login
}))(ArticleForm);

