import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './password_reset.css'
export default class Password_Reset extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="password_reset">
                <Form>
                    <Form.Group controlId="ormBasicPassword">
                        <Form.Label>Old Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        <Form.Text className="text-muted">
                        Hope you know your password. If don't <a href="#"> click me</a>
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirm</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="I am not a robot" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        CHANGE
                    </Button>
                </Form>
            </div>
        )
    }
}