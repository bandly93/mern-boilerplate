import React , {Component} from "react";

class RegisterBox extends Component {
	constructor(props){
		super(props);

		//since everything should be empty when you load, we can use the same value for all.
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
		console.log(this.state.username);
		console.log(this.state.password);
		console.log(this.state.confirm_password);
		console.log(this.state.email);
		event.preventDefault();
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
						<input type = "text" name = "username" value = {this.state.username} onChange = {this.handleChange}/>
					</label>
					<label>
						password:
						<input type = "text" name = "password" value = {this.state.password} onChange = {this.handleChange} />
					</label>
					<label> 
						confirm password:
						<input type = "text" name = "confirm_password" value = {this.state.confirm_password} onChange = {this.handleChange}/>
					</label>
					<label>
						email:
						<input type = "text" name = "email" value = {this.state.email} onChange = {this.handleChange} />
					</label>
					<input type = "submit" name = "Submit" />
				</form>
			</div>
		)
	}
}

export default RegisterBox;