import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, InputGroupAddon, Button, Jumbotron, Container,Row } from 'reactstrap';
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp} from '../../node_modules/@fortawesome/free-solid-svg-icons'

import './LoginForm.css'

export default class LoginForm extends React.Component{

    constructor(props){
        super(props);
    }
    render (){
        return(
        	<div className="login_box">
				<p className='title'>News Sharing</p>
				<p className='login'>Login Form</p>

				<form role="form" method="post" className=''>
					<div className="inputBox">
						<input type="text" name="username" autocomplete="off" required/>
						<label>Username</label>
					</div>
					<div className="inputBox">
						<input type="password" name="password" autocomplete="off" required/>
						<label>Password</label>
					</div>
					<div id='createAccount'>Create account</div>
					<div id='createAccount'>Forget passward</div>
					<input type="submit" name="login" value="Login"/>
				</form>
          	</div>



        )
    }
}