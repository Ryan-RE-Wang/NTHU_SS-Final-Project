import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, InputGroupAddon, Button, Jumbotron, Container,Row } from 'reactstrap';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { createHashHistory } from 'history'
import './LoginForm.css'

import {createAccount, login, closeLoginForm, changeForm, loginWithFB, createAccountWithFB} from 'states/login-actions.js';
import { clearAllInfo } from '../api/infos';
import {connect} from 'react-redux';
import { Loader } from 'semantic-ui-react';
import MyLoader from 'components/MyLoader.jsx';


import {facebookLogin} from 'api/facebook.js';

// icon
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import FacebookIcon from '@material-ui/icons/Facebook';

class LoginForm extends React.Component{


	static propTypes = {
        loginPageOpen: PropTypes.bool
    };
    constructor(props){
		
		super(props);
		const history = createHashHistory()
		this.state={
			// createAccountForm:false,
			formName:'Login Form',
			tmp_email:'',
			tmp_username:'',
			tmp_password:'',
			msg_email:'',
			msg_username:'',
			msg_password:'',
			isLoggedIn: true,
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleValidate = this.handleValidate.bind(this);
		this.handleAccountCreate = this.handleAccountCreate.bind(this);
		this.handleFormClose = this.handleFormClose.bind(this);
		this.fblogin = this.fblogin.bind(this);
	}
	componentDidUpdate(){
		if(this.props.alreadyLogin) this.handleFormClose();
	}
    render (){
		
		const {createAccountForm} = this.props;
		return(
			
		<div className={`login_form ${(createAccountForm) ? 'createAccount-form':''} `}>
			<div className={`${(!createAccountForm)? 'd-none':'switch-login'}`}> 
				Already have a newsSharing account ?
				&nbsp;
				<button onClick={this.handleAccountCreate}> Login</button>
			</div>
        	<div className={`login_box ${(createAccountForm)? 'createAccountStyle':'loginStyle'}`} >
				<p id='login-closeIcon' onClick={this.handleFormClose}>									
					<CloseIcon/>
				</p>
				
				<p className='title'>News Sharing</p>
				<p className='login'>{this.state.formName}</p>
				<p className={`${this.props.showMsg ? 'warning-msg loginFormMsg' :'d-none'}`}><ErrorIcon/>&nbsp;{this.props.loginMsg}</p>
				{/* <form type='Post'onSubmit={this.handleSubmit}> */}
				{/* <div> */}
					
					<div className={` ${createAccountForm? 'inputBox':'d-none'}`}>
						<input type="text" name="username" autoComplete="off" value={this.state.tmp_username} onChange={this.handleInputChange} required/>
						<label>Username name</label>
						<p className={`${this.state.msg_username===''? 'd-none':'warning-msg'}`}>{this.state.msg_username}</p>
					</div>
					<div className={`inputBox`}>
					{/* <div className="inputBox"> */}
						<input type="text" name="email" autoComplete="off" value={this.state.tmp_email} onChange={this.handleInputChange} required />
						<label>Email</label>
						<p className={`${this.state.msg_email===''? 'd-none':'warning-msg'}`}>{this.state.msg_email}</p>
					</div>
					<div className="inputBox">
						<input type="password" name="password" autoComplete="off"  value={this.state.tmp_password} onChange={this.handleInputChange} required/>
						<label>Password</label>
						<p className={`${this.state.msg_password===''? 'd-none':'warning-msg'}`}>{this.state.msg_password}</p>
					</div>					
					<div>
						<div className='form-otherOption'id='fogetPassward'>Forget passward?</div><br/>
					</div>


					<button id='login-submitBtn'onClick={this.handleValidate}>Submit</button>
					<div className={`${this.props.loading ? 'd-block ' :'d-none'}`}><MyLoader/></div>
									
					
					<h5>Sign in with</h5>
					<div className='d-flex justify-content-between other-loginbtns'>
						<button id='facebook-btn' onClick={this.fblogin}><FacebookIcon/>&nbsp; Facebook </button>
						<button id='google-btn'> <img src="https://img.icons8.com/color/25/000000/google-logo.png"/>&nbsp; Google</button>
					</div>
				{/* </form> */}
          	</div>
				<div className={`${createAccountForm ? "d-none":'form-otherOption'}`}id='createAccount' onClick={this.handleAccountCreate}> Create account</div>
		<div>


		</div>		

		
		</div>
			
		)
	}
	fblogin(){
		if(this.props.createAccountForm){
			this.props.dispatch(createAccountWithFB());
		}else{
			this.props.dispatch(loginWithFB());
		}
	}

	handleAccountCreate(){
		let formName = this.props.createAccountForm? 'Login Form':'Create Account';
		this.props.dispatch(changeForm());
		this.setState((prevState)=>({
			// createAccountForm:!prevState.createAccountForm,
			formName:formName,
			tmp_email:'',
			tmp_username:'',
			tmp_password:'',
			msg_email:'',
			msg_username:'',
			msg_password:''
		}));
		//console.log(this.state.createAccountForm);
		
	}
	handleValidate(){
		// clearAllInfoFromAPI();
		var reCapital = /([A-Z])/;
		var reLow = /([A-Z])/;
		var reEmail = /([a-zA-Z0-9_]+@[a-zA-Z0-9._]+)/

		var qualify = true;
		if(/*this.state.username.length < 5 ||*/ this.state.tmp_account === ''){
			// console.error("no input");
			this.setState({
				msg_account:'Please enter your account.'
			})
			qualify = false;
		}
		if( /*this.state.password.length < 8 ||*/  this.state.tmp_password === '' /*|| 
			!reCapital.test(this.state.password) || !reLow.test(this.state.password*/){
				// console.error("unqualified password");
				this.setState({
					msg_password:'Please enter your password.'
				})
				qualify = false;
		}

		if(this.props.createAccountForm){
			if(this.state.tmp_email === '' /*|| !reEmail.test(this.state.email)*/){
				console.error("unqualified password");
				this.setState({
					msg_email:'Please enter your email.'
				})
				qualify = false;
			}
		}else {
			this.setState({
				msg_email:''
			})
		}

		if(qualify) {
			console.log("true");
			this.handleSubmit();
		}
		else return;
	}
	
	handleSubmit(){
		const data = this.state;
		console.log(data);
		if(this.props.createAccountForm)
			this.props.dispatch(createAccount(data.tmp_username,data.tmp_password,data.tmp_email));
		else 
			this.props.dispatch(login(data.tmp_email,data.tmp_password));
		
	}
	handleInputChange(e){

		let update = `tmp_${e.target.name}`;
		let updateMsg = '';
		let msg = `msg_${e.target.name}`;

		if(update === 'tmp_password' && this.state.createAccountForm){
			if( e.target.value.length === ''){
				updateMsg = 'Please enter your password.'
			}else if( e.target.value.length < 8){
				updateMsg = 'Your password must be at least 8 characters.'
			}
		}

		this.setState({
			[update]: e.target.value,
			[msg]:updateMsg
		})

		
	}
	handleFormClose(){
		//console.log("close");
		this.props.dispatch(closeLoginForm());
		this.props.history.push('/')
	}
}



export default connect(state => ({
	...state.login,
	loginPageOpen: state.loginPage.loginPageOpen
}))(LoginForm);