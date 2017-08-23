import React , {Component} from "react";
import PropTypes from "prop-types";
import { api } from '../utils/api';

class LoginBox extends Component {
	constructor(props){
		super(props);
		this.state = {
			username : "",
			password : ""
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event){
		event.preventDefault();
		let login_info = {
			username: this.state.username,
			password: this.state.password
		}
		api.getLoginInfo(login_info);
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
						<input type = "password" name = "password" value = {this.state.password} autoComplete = 'off' onChange = {this.handleChange}/>
					</label>
					<input type = "submit" name = "Submit" />
				</form>
			</div>
		)
	}
}

export default LoginBox;