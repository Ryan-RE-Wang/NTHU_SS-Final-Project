import React from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import {  Form, FormGroup, Input, FormText } from 'reactstrap';
import Button from '@material-ui/core/Button'
import PlaceIcon from '@material-ui/icons/Place';
import PaymentIcon from '@material-ui/icons/Payment';
import EventIcon from '@material-ui/icons/Event';
import GroupIcon from '@material-ui/icons/Group';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import BlockIcon from '@material-ui/icons/Block';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';
import TagsInput from 'react-tagsinput'
import ImageIcon from '@material-ui/icons/Image';
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
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
 
import S3 from 'react-aws-s3';
 
const config = {
    bucketName: 'team11final',
    region: 'us-west-1',
    accessKeyId: 'AKIAYY47H3QJVLMYGFHB',
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
            fileName: '',
            fileDanger: false,
            src: null,
            crop: {
                unit: '%',
                width: 30,
                aspect: 42 / 57,
            },
            croppedImageUrl: null,
            croppedImage: null,
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
        this.handleSliderChange = this.handleSliderChange.bind(this);
        this.handleTicketChange = this.handleTicketChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.handleClubVerificationSubmit = this.handleClubVerificationSubmit.bind(this);
        this.handleClubModalClose = this.handleClubModalClose.bind(this);
        this.dataURLtoFile = this.dataURLtoFile.bind(this);
        
        // this.handlePreview = this.handlePreview.bind(this);

        this.handleCreatePost = this.handleCreatePost.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleTagChange = this.handleTagChange.bind(this);

    }

    componentDidMount() {
        this.setState({
            fileName: uuid()
        })
    }
     
    setEditorRef = (editor) => this.editor = editor

    onSelectFile = e => {
        if (e.target.files && e.target.files.length > 0) {
          const reader = new FileReader();
          reader.addEventListener('load', () =>
            this.setState({ src: reader.result, fileDanger: false })
          );
          reader.readAsDataURL(e.target.files[0]);
        }
      };
    
      // If you setState the crop in here you should return false.
      onImageLoaded = image => {
        this.imageRef = image;
      };
    
      onCropComplete = crop => {
        this.makeClientCrop(crop);
      };
    
      onCropChange = (crop, percentCrop) => {
        // You could also use percentCrop:
        // this.setState({ crop: percentCrop });
        this.setState({ crop });
      };
    
      async makeClientCrop(crop) {
        if (this.imageRef && crop.width && crop.height) {
          const croppedImageUrl = await this.getCroppedImg(
            this.imageRef,
            crop,
            'newFile.jpeg'
          );
          this.setState({ croppedImageUrl });
        }
      }
    
      getCroppedImg(image, crop, fileName) {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');
    
        ctx.drawImage(
          image,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height
        );
    
        return new Promise((resolve, reject) => {

            
            const reader = new FileReader();
            canvas.toBlob(blob => {
                if (!blob) {
                //reject(new Error('Canvas is empty'));
                console.error('Canvas is empty');
                return;
                }

                reader.readAsDataURL(blob)
                reader.onloadend = () => {
                    this.dataURLtoFile(reader.result, 'cropped.jpg')
                }
                blob.name = fileName;
                window.URL.revokeObjectURL(this.fileUrl);
                this.fileUrl = window.URL.createObjectURL(blob);
                resolve(this.fileUrl);

            }, 'image/jpeg');
        });
    }



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
                <div id='blankSpace'></div>
                <div id='blankSpace'></div>
                <div>
                    <Modal show={this.state.modalShow} onHide={this.handleModalClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Oops!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{this.state.unFill} is required</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleModalClose}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div>
                    <Modal show={this.state.clubVerificationModalShow} onHide={this.handleClubVerificationSubmit}>
                        <Modal.Header closeButton>
                            <Modal.Title>Input the verification code for {this.state.club} </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <ReactCodeInput onComplete={this.handleClubVerificationSubmit}/>
                            {(this.state.verifiedInput)?
                                (this.state.clubVerified)? 
                                <CheckCircleIcon className='check-icon'/> : 
                                <BlockIcon className='block-icon'/> : ''
                            }
                            
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClubModalClose}>
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
                    <div className='p-2 col info m-4'>
                        <div className='p-4 d-flex flex-col justify-content-center align-items-center'>
                            <FormGroup className='form'>
                                <div>
                                    <div >
                                        <ImageIcon className='label'/>
                                        <input type="file" accept="image/*"  onChange={this.onSelectFile} />
                                    </div>

                                        <div>
                                            {this.state.src && (
                                                <ReactCrop
                                                    src={this.state.src}
                                                    crop={this.state.crop}
                                                    ruleOfThirds
                                                    onImageLoaded={this.onImageLoaded}
                                                    onComplete={this.onCropComplete}
                                                    onChange={this.onCropChange}
                                                />
                                            )}
                                        </div>
                                        <div>
                                            {this.state.croppedImageUrl && (
                                                <img alt="Crop" style={{ maxWidth: '100%', height: '360px' }} src={this.state.croppedImageUrl} />
                                            )}
                                        </div>

                                    
                                    
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
                                        Lacation
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
                                        maxLength="3000"
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
                                <Button className='btn-cancel' color="secondary" onClick={this.handleCancel}>Cancel</Button>{' '} 
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        );   
    }

    dataURLtoFile(dataurl, filename) {
        let arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
                
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        let croppedImage = new File([u8arr], filename, {type:mime});
        this.setState({croppedImage: croppedImage}) 
    }

    handleModalClose() {
        this.setState({modalShow: false})
    }

    handleClubModalClose() {
        this.setState({clubVerificationModalShow: false});
    }
    
    handleClubVerificationSubmit(e) {
        const input = e;
        console.log(input);

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
        });
    };

    handleTagChange(tags) {
        this.setState({tags})
    }

    handleCreatePost() {        

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
        // if (!this.state.src || this.state.src== '') {
        //     this.setState({
        //         fileDanger: true,
        //         modalShow: true,
        //         unFill:'file',
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
        ReactS3Client.uploadFile(this.state.croppedImage, this.state.fileName).then(
            data => console.log(data))
        .catch(err => console.error(err))

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
            true, 
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
            fileName: '',
            fileDanger: false,
            src: null,
            crop: {
                unit: '%',
                width: 30,
                aspect: 42 / 57,
            },
            croppedImageUrl: null,
            croppedImage: null,
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
            fileName: '',
            fileDanger: false,
            src: null,
            crop: {
                unit: '%',
                width: 30,
                aspect: 42 / 57,
            },
            croppedImageUrl: null,
            croppedImage: null,
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

   

