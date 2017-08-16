import React , {Component} from "react";

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
		console.log(this.state.username);
		console.log(this.state.password);
		event.preventDefault();
	}
	handleChange(event){
		this.setState({
			[event.target.name] : event.target.value
		})
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
						<input type = "text" name ="password" value = {this.state.password} onChange = {this.handleChange}/>
					</label>
					<input type = "submit" name = "Submit" />
				</form>
			</div>
		)
	}
}

export default LoginBox;