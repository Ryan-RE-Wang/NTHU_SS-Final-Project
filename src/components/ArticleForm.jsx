import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './ArticleForm.css'
import TagsInput from 'react-tagsinput'
 
import 'react-tagsinput/react-tagsinput.css'

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
            locationValue: '',
            locationDanger: false,
            file: null,
            fileDanger: false,
            tags: []
        }

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handlePreview = this.handlePreview.bind(this);
        


        this.handlePost = this.handlePost.bind(this);
        this.handleCancel = this.handleCancel.bind(this);

        this.handleTagChange = this.handleTagChange.bind(this);
    }

    render() {
        return (
            <div className='articleform-container'>
                <h2 className='title'>Make a Post</h2>
                <Form className='form'> 
                    <FormGroup className='form'>
                        <div className='row d-flex'>
                            <div className='col '>
                                <Label for="title" sm={2}>Title</Label>
                            </div>
                            <div className='col-10'>
                                <Input 
                                    type="textarea" 
                                    name="text" 
                                    id="title" 
                                    onChange={this.handleTitleChange} />
                            </div>
                        </div>
                    </FormGroup>
                    <FormGroup className='form'>
                        <div className='row d-flex'>
                            <div className='col'>
                                <Label for="eventDate" sm={2}>Date</Label>
                            </div>
                            <div className='col-10'>
                                <Input
                                    type="date"
                                    name="date"
                                    id="eventDate"
                                    placeholder="date placeholder" />
                            </div>
                        </div>
                    </FormGroup>
                    <FormGroup className='form'>
                        <div className='row d-flex'>
                            <div className='col'>
                                <Label for="eventTime" sm={2}>Time</Label> 
                            </div>
                            <div className='col-10'> 
                                <Input
                                    type="time"
                                    name="time"
                                    id="eventTime"
                                    placeholder="time placeholder"
                                    onChange={this.handleTimeChange} />
                            </div>

                        </div>
                    </FormGroup>
                    <FormGroup className='form'>
                        <div className='row d-flex'>
                            <div className='col'>
                                <Label for="location" sm={2}>Location</Label>
                            </div>
                            <div className='col-10'>
                                <Input 
                                    type="textarea" 
                                    name="text" 
                                    id="location" 
                                    onChange={this.handleLocationChange} />
                            </div> 
                        </div>
                    </FormGroup>
                    <FormGroup className='form'>
                        <div className='row d-flex'>
                            <div className='col'>
                                <Label for="contentText" sm={2}>Content</Label>
                            </div>
                            <div className='col-10'>
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
                    
                    <FormGroup row className='form'>
                        <Label for="imgFile" sm={2}>Poster</Label>
                        <Col sm={10}>
                            <Input type="file" name="file" id="imgFile" onChange={this.handleFileChange}/>
                            <FormText color="muted">
                                Upload your event poster.
                            </FormText>
                            {/* <div>{(this.state.file == null) ? '' : <button className= 'preview' onClick={this.handlePreview}><span>Preview</span></button>}</div> */}
                            {/* <div>{(Preview) ? <img src={this.state.file}/> : ''}</div> */}
        <div>{(this.state.file == null) ? '' : <img src={this.state.file}/>}</div>
                        </Col>
                    </FormGroup>
                </Form>
                <div className="buttons" className={`d-flex justify-content-around`}>
                    <div className='row d-flex'>
                        <div className='col'>
                            <Button className='btn-post' color="success" onClick={this.handlePost}>Post</Button>{' '}
                        </div>
                        <div className='col'>
                            <Button className='btn-cancel' color="secondary" onClick={this.handleCancel}>Cancel</Button>{' '} 
                        </div>
                    </div>
                </div>
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
        this.props.onPost(this.state.titleValue, this.state.contentValue, this.state.timeValue, this.state.dateValue, this.state.locationValue, this.state.imageValue, this.state.tags);
        this.setState({
            titleValue: '',
            titleDanger: false,
            contentValue: '',
            contentDanger: false,
            dateValue: '',
            dateDanger: false,
            timeValue: '',
            timeDanger: false,
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
            locationValue: '',
            locationDanger: false,
            file: null,
            fileDanger: false,
            tags: []
        })
    }
}

   

