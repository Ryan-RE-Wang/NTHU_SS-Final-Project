import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './ArticleForm.css'
import TagsInput from 'react-tagsinput'
 
import 'react-tagsinput/react-tagsinput.css'

export default class ArticleForm extends React.Component {
    static propTypes = {
        onPost: PropTypes.func,
    }
    constructor(props) {
        super(props);
        this.state = {
            titleValue: null,
            titleDanger: false,
            contentValue: null,
            contentDanger: false,
            dateValue: NaN,
            dateDanger: false,
            timeValue: NaN,
            timeDanger: false,
            tags: []
        }

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        
        this.handlePost = this.handlePost.bind(this);
        this.handleCancel = this.handleCancel.bind(this);

        this.handleChange = this.handleChange.bind(this);
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
                                <Input type="textarea" name="text" id="title" />
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
                                    placeholder="date placeholder"
                                />
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
                                />
                            </div>

                        </div>
                    </FormGroup>
                    <FormGroup className='form'>
                        <div className='row d-flex'>
                            <div className='col'>
                                <Label for="location" sm={2}>Location</Label>
                            </div>
                            <div className='col-10'>
                                <Input type="textarea" name="text" id="location" />
                            </div> 
                        </div>
                    </FormGroup>
                    <FormGroup className='form'>
                        <div className='row d-flex'>
                            <div className='col'>
                                <Label for="contentText" sm={2}>Content</Label>
                            </div>
                            <div className='col-10'>
                                <Input type="textarea" name="text" id="contentText" />
                            </div>
                        </div>
                    </FormGroup>
                    <div className='row'> 
                        <div className='col'>
                            <TagsInput value={this.state.tags} onChange={this.handleChange} />
                        </div>
                    </div>
                    <FormGroup className='form'>
                        <div className='row d-flex'>
                            <div className='col'>
                                <Label for="imgFile" sm={2}>Poster</Label>
                            </div>
                            <div className='col-10'>
                                <Input type="file" name="file" id="imgFile" />
                                <FormText color="muted">
                                    Upload your event poster.
                                </FormText>
                            </div>
                        </div>
                    </FormGroup>
                </Form>
                <div className="buttons" className={`d-flex justify-content-around`}>
                    <div className='row d-flex'>
                        <div className='col'>
                            <Button className='btn-post' color="success">Post</Button>{' '}
                        </div>
                        <div className='col'>
                            <Button className='btn-cancel' color="secondary">Cancel</Button>{' '} 
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
    handleContentChange() {
        const text = e.target.value;
        this.setState({titleValue: text});
        if (text) {
            this.setState({titleDanger: false});
        }
    }
    handlePost() {

    }
    handleCancel() {

    }

    handleChange(tags) {
        this.setState({tags})
      }
}

