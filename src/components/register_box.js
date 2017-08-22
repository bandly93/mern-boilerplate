import React , {Component} from "react";
import PropTypes from "prop-types";
import {api} from "../utils/api";

class RegisterBox extends Component {
	constructor(props){
		super(props);
		this.state = {
			username : '',
			password : '',
			confirm_password : '',
			email : ''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleSubmit(event){
		event.preventDefault();
		let register_info = {
			username : this.state.username,
			password : this.state.password,
			confirm_password : this.state.confirm_password,
			email : this.state.email
		}
		api.getRegistationInfo(register_info);
	}

	handleChange(event){
		this.setState({[event.target.name] : event.target.value})
	}

	render(){
		return(
			<div className = "container">
				<form onSubmit = {this.handleSubmit}>
					<label>
						username:
						<input type = "text" name = "username" value = {this.state.username} autoComplete = 'off' onChange = {this.handleChange}/>
					</label>
					<label>
						password:
						<input type = "password" name = "password" value = {this.state.password} autoComplete = 'off' onChange = {this.handleChange} />
					</label>
					<label> 
						confirm password:
						<input type = "password" name = "confirm_password" value = {this.state.confirm_password} autoComplete = 'off' onChange = {this.handleChange}/>
					</label>
					<label>
						email:
						<input type = "email" name = "email" value = {this.state.email} autoComplete = 'off' onChange = {this.handleChange} />
					</label>
					<input type = "submit" name = "Submit" />
				</form>
			</div>
		)
	}
}

export default RegisterBox;