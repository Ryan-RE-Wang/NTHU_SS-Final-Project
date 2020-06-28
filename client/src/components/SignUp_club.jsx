import React , { useState }from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PlaceIcon from '@material-ui/icons/Place';
import PaymentIcon from '@material-ui/icons/Payment';
import AvatarEditor from 'react-avatar-editor';
import './SignUp_club.css';
import 'react-tagsinput/react-tagsinput.css';
import 'rc-slider/assets/index.css';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {connect} from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import createPost from 'api/posts.js';
import { Icon } from 'react-icons-kit';
import {facebook2} from 'react-icons-kit/icomoon/facebook2';
import {facebook} from 'react-icons-kit/icomoon/facebook';
import {key} from 'react-icons-kit/icomoon/key';
import ImageIcon from '@material-ui/icons/Image';
import {instagram} from 'react-icons-kit/icomoon/instagram';
import {quill} from 'react-icons-kit/icomoon/quill';
import {link} from 'react-icons-kit/icomoon/link';
import ReactCrop from 'react-image-crop';
import {createClub} from 'api/club.js';
import 'react-image-crop/dist/ReactCrop.css';

import S3 from 'react-aws-s3';
 
const s3URL = 'https://team11final.s3-us-west-1.amazonaws.com/';
const config = {
    bucketName: 'team11final',
    region: 'us-west-1',
    accessKeyId: 'AKIAYY47H3QJVLMYGFHB',
    secretAccessKey: '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',
}

const ReactS3Client = new S3(config);

class SignUp_club extends React.Component {
    static propTypes = {
        club: PropTypes.string
    }
    constructor(props) {
        super(props);
        this.state = {
            id: uuid(),
            clubnameValue: '',
            clubnameDanger: false,
            descriptionValue: '',
            descriptionDanger: false,
            fb_urlValue: '', 
            fb_urlDanger: false,
            ig_urlValue: '', 
            ig_urlDanger: false,
            verification_codeValue: '',
            verification_codeDanger: false,
            file: null,
            fileName:'',
            fileDanger: false,
            Value: 120,
            university:'University',
            universityDanger: false,
            src: null,
            crop: {
                unit: '%',
                width: 30,
                aspect: 42 / 57,
            },
            croppedImageUrl: null,
            croppedImage: null,
            unFill:'',
            modalShow: false,
            dropdownOpen:false,
            fileName: '',
            
        }

        this.handleClubNameChange = this.handleClubNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleFB_URLChange = this.handleFB_URLChange.bind(this);
        this.handleIG_URLChange = this.handleIG_URLChange.bind(this);
        this.handleVerification_CodeChange = this.handleVerification_CodeChange.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.handleClubModalClose = this.handleClubModalClose.bind(this);
        this.handleCreateClub = this.handleCreateClub.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.dataURLtoFile = this.dataURLtoFile.bind(this);
   

    }

    componentDidMount() {
        this.setState({
            fileName: uuid()
        })
    }

    onSelectFile = e => {
        if (e.target.files && e.target.files.length > 0) {
          const reader = new FileReader();
          reader.addEventListener('load', () =>
            this.setState({ src: reader.result, fileDanger: false })
          );
          reader.readAsDataURL(e.target.files[0]);
        }
      };

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
        
        return (
            <div className="signupclub_body">
            <div className= 'signuplcub'>
               
                <div>
                    <Modal show={this.state.modalShow} onHide={this.handleModalClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Oops!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{this.state.unFill}</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleModalClose}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            
                <Form>
                    <div className="signuph1_title">Create Club</div>
                    <FormGroup className=''>
                        <div className=''>
                                <div className='signupclub_title'>
                                <Label  for="clubname"  ><div className="">Club Name</div></Label>
                                </div>
                                
                                <div className=''>
                                <Input 
                                    placeholder="space is limited to 20 characters"
                                    type="text" 
                                    name="text" 
                                    id="clubname" 
                                    maxLength="20"
                                    value={this.state.clubnameValue}
                                    onChange={this.handleClubNameChange} />
                                </div>                
                        </div>
                    </FormGroup>
                    <div className=''>
                        <div className=''>
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
                        <div className=''>
                        <div className='row justify-content-center combine'>
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={() => this.setState({dropdownOpen: !this.state.dropdownOpen})}>
                            <DropdownToggle caret>
                                {this.state.university}
                                </DropdownToggle>
                            <DropdownMenu>
                                
                                <DropdownItem onClick={()=>{this.setState({university:'NTHU'})}}>NTHU</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={()=>{this.setState({university:'NCTU'})}}>NCTU</DropdownItem>
                            </DropdownMenu>
                         </Dropdown>
                         </div>

                            <FormGroup>
          
                                <div className=''>
                                    <div className='row justify-content-center combine'>
                                    <Icon size={28} icon={facebook} />
                                    <div className="signupclub_title">FB URL</div>
                                    </div>
                                    <div className=''>
                                        <Input 
                                            type="text" 
                                            name="text" 
                    
                                            id="fb_url" 
                                            value={this.state.fb_urlValue}
                                            onChange={this.handleFB_URLChange} />
                                    </div>
                                    <div className=''></div>
                                </div> 
                 
                                <div className=''>
                                    <div className='row justify-content-center combine'>
                                    <Icon size={28} icon={instagram} />
                                    <div className="signupclub_title">IG URL</div>
                                    </div>
                                    <div className=''>
                                        <Input 
                                            type="text" 
                                            name="text" 
                                           
                                            id="ig_url" 
                                            value={this.state.ig_urlValue}
                                            onChange={this.handleIG_URLChange} />
                                    </div>
                                    <div className=''></div>
                                </div> 
                                <div className=''>
                                    <div className='row justify-content-center combine'>
                                    <div className=""><Icon size={28} icon={key} /></div>
                                    <div className="signupclub_title ">Verification Code</div>
                                    </div>
                                    <div className=''>
                                        <Input 
                                            type="text" 
                                            name="text" 
                                            placeholder="6 numbers only"
                                            id="verification_code" 
                                            maxLength="6"
                                            value={this.state.verification_codeValue}
                                            onChange={this.handleVerification_CodeChange} />
                                    </div>
                                    <div className=''></div>
                                </div> 
                            </FormGroup>
                        </div>

                            
                    </div>
                        
                    <div id='blankSpace'></div>

                    <div className=''>
                        <FormGroup className=''>
                            <div className=''>
                                <div className='row justify-content-center '>
                                <Icon size={28} icon={quill} />
                                    Description
                                </div>
                                <div className=''>
                                    <Input 
                                        type="textarea" 
                                        name="text" 
                                        placeholder="space is limited to 77 characters"
                                        id="descriptiontText"
                                        maxLength="77"
                                        rows='5'
                                        value={this.state.descriptionValue} 
                                        onChange={this.handleDescriptionChange} />
                                </div>
                            </div>
                        </FormGroup>
                    </div>

                  
                        <div className='row justify-content-center btngroup_signup'>
                            <div className='col'>
                                <Button className='btn-post' color="success" onClick={this.handleCreateClub}>Post</Button>{' '}
                            </div>
                            <div className='col signupdelete_btn'>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={this.handleCancel}
                                >
                                    <DeleteIcon /> &nbsp; Delete
                                </Button>
                            </div>
                        </div>
                 
                </Form>
            </div>
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

    handleClubNameChange(e) {
        const text = e.target.value;
        this.setState({clubnameValue: text});
        if (text) {
            this.setState({clubnameDanger: false});
        }
    }

    

    handleFB_URLChange(e) {
        const fb_url = e.target.value;
        this.setState({fb_urlValue: fb_url});
        if (fb_url) {
            this.setState({fb_urlDanger: false});
        }
    }

    handleIG_URLChange(e) {
        const ig_url = e.target.value;
        this.setState({ig_urlValue: ig_url});
        if (ig_url) {
            this.setState({ig_urlDanger: false});
        }
    }
    
    handleVerification_CodeChange(e) {
        const text = e.target.value;
        this.setState({verification_codeValue: text});
        if (text) {
            this.setState({verification_codeDanger: false});
        }
    }

    handleDescriptionChange(e) {
        const text = e.target.value;
        this.setState({descriptionValue: text});
        if (text) {
            this.setState({descriptionDanger: false});
        }
    }



    handleCreateClub() {
        // if (!this.state.clubnameValue || this.state.clubnameValue == '') {
        //     this.setState({
        //         clubnameDanger: true,
        //         modalShow: true,
        //         unFill:'clubname is required'
        //     })
        //     return;
        // }
        // if (!this.state.croppedImageUrl || this.state.croppedImageUrl== '') {
        //     this.setState({
        //         fileDanger: true,
        //         modalShow: true,
        //         unFill:'photo is required'
        //     })
        //     return;
        // }
        // if (this.state.university=="University" || this.state.university=='') {
        //     this.setState({
        //         universityDanger: true,
        //         modalShow: true,
        //         unFill:'should select one university'
        //     })
        //     return;
        // }
        // if (!this.state.verification_codeValue || this.state.verification_codeValue == '') {
        //     this.setState({
        //         verification_codeDanger: true,
        //         modalShow: true,
        //         unFill:'verification_code is required'
        //     })
        //     return;
        // }
        // if (this.state.verification_codeValue.length!=6) { 
        //     　　this.setState({
        //         verification_codeDanger: true,
        //         modalShow: true,
        //         unFill:'verification_code should have 6 numbers'
        //     })
        //     return; 
        // } 
        // if (!this.state.descriptionValue || this.state.descriptionValue == '') {
        //     this.setState({
        //         descriptionDanger: true,
        //         modalShow: true,
        //         unFill:'description is required'
        //     })
        //     return;
        // }
   
        ReactS3Client.uploadFile(this.state.croppedImage, this.state.fileName).then(
            data => console.log(data))
        .catch(err => console.error(err))
        
        console.log(this.state.fileName);

        createClub(this.state.id,
            this.props.account,
            this.state.school,
            this.state.clubnameValue,
            this.state.fb_urlValue,
            this.state.ig_urlValue,
            this.state.fileName,
            this.state.verification_codeValue,
            this.state.descriptionValue
            ).then(() => {
            // this.listPosts(this.props.searchText);
        }).catch(err => {
            console.error('Error creating posts', err);
        });

        this.setState({
            id: uuid(),
            clubnameValue: '',
            clubnameDanger: false,
            descriptionValue: '',
            descriptionDanger: false,
            fb_urlValue: '', 
            fb_urlDanger: false,
            ig_urlValue: '', 
            ig_urlDanger: false,
            verification_codeValue: '',
            verification_codeDanger: false,
            fileDanger: false,
            Value: 120,
            university:'University',
            universityDanger: false,
            src: null,
            crop: {
                unit: '%',
                width: 30,
                aspect: 42 / 57,
            },
            croppedImageUrl: null,
            croppedImage: null,
            unFill:'',
            modalShow: false,
            dropdownOpen:false,
            fileName: '',
        })

        
    }

    handleCancel() {
        this.setState({
            id: uuid(),
            clubnameValue: '',
            clubnameDanger: false,
            descriptionValue: '',
            descriptionDanger: false,
            fb_urlValue: '', 
            fb_urlDanger: false,
            ig_urlValue: '', 
            ig_urlDanger: false,
            verification_codeValue: '',
            verification_codeDanger: false,
            fileDanger: false,
            Value: 120,
            university:'University',
            universityDanger: false,
            src: null,
            crop: {
                unit: '%',
                width: 30,
                aspect: 42 / 57,
            },
            croppedImageUrl: null,
            croppedImage: null,
            unFill:'',
            modalShow: false,
            dropdownOpen:false,
            fileName: '',
            
        })
    }

}

export default connect(state => ({
    ...state.login
}))(SignUp_club);

   

