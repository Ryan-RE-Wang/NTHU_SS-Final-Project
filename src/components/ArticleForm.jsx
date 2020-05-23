import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PlaceIcon from '@material-ui/icons/Place';
import PaymentIcon from '@material-ui/icons/Payment';
import EventIcon from '@material-ui/icons/Event';
import './ArticleForm.css'

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
            dispatch: PropTypes.func
        }

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        
        this.handlePost = this.handlePost.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    render() {
        return (
            <div className='articleform-container'>
                <h2 className='title'>Make a Post</h2>
                <Form className='article-form'> 
                    <FormGroup row className='form'>
                        <Label for="title" sm={2}>Title</Label>
                        <Col sm={10}>
                            <Input type="textarea" name="text" id="title" />
                        </Col>
                    </FormGroup>
                    <FormGroup row className='form'>
                        <Row> 
                            <Col>
                                <EventIcon/>
                            </Col>
                            <Label for="eventDate" sm={2}>Date</Label>
                            <Col sm={10}>
                                <Input
                                    type="date"
                                    name="date"
                                    id="eventDate"
                                    placeholder="date placeholder"
                                />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup row className='form'>
                        <Row align='center'>
                            <Col>
                                <AccessTimeIcon/>
                            </Col>
                            <Col> 
                                <Label for="eventTime" sm={2}>Time</Label> 
                            </Col>
                            <Col>
                                <Input
                                    type="time"
                                    name="time"
                                    id="eventTime"
                                    placeholder="time placeholder"
                                />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup row className='form'>
                        <Row> 
                            <Col>
                                <PlaceIcon/>
                            </Col>
                            <Label for="location" sm={2}>Location</Label>
                            <Col sm={10}>
                                <Input type="textarea" name="text" id="location" />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup row className='form'>
                        <Label for="contentText" sm={2}>Content</Label>
                        <Col sm={10}>
                            <Input type="textarea" name="text" id="contentText" />
                        </Col>
                    </FormGroup>
                    <FormGroup row className='form'>
                        <Label for="imgFile" sm={2}>Poster</Label>
                        <Col sm={10}>
                            <Input type="file" name="file" id="imgFile" />
                            <FormText color="muted">
                                Upload your event poster.
                            </FormText>
                        </Col>
                    </FormGroup>
                </Form>
                <div className="buttons" className={`d-flex justify-content-around`}>
                    <Button className='btn-post' color="success">Post</Button>{' '}
                    <Button className='btn-cancel' color="secondary">Cancel</Button>{' '} 
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
}

