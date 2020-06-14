import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import ArticleForm from 'components/ArticleForm.jsx';
export default class AlertDismissible extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show:false
        }
        this.setShow = this.setShow.bind(this);
    }
    render() {
        return (
        <>
            <Alert show={this.state.show} variant="success">

                <ArticleForm/>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => this.setShow(false)} variant="outline-success">
                    Close me ya'll!
                    </Button>
                </div>
            </Alert>
    
            {!this.state.show && <Button onClick={() => this.setShow(true)}>Show Alert</Button>}
        </>
        )
    }
    setShow(show){
        this.setState({show: show});
    }
}
