import React from 'react';
import './contact_us_information.css'
export default class Contact_Us_information extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
            <div className="container">
                <div className="background-img">
                <div className="box">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="content">
                    <h2>Our Team</h2>
                    <p><a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=buithuyvan100@gmail.com" className="temp" target="_blank">buithuyvan100@gmail.com</a></p>
                    </div>
                    
                </div>
                </div>
            </div>
            </section>
        )
    }
}