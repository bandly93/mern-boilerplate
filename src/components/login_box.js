import React , {Component} from "react";

class LoginBox extends Component {
	render(){
		return(
			<div className = "container">
				<form>
					<label>
						username:
						<input type = "text"/>
					</label>
					<label>
						password:
						<input type = "text"/>
					</label>
					<input type = "submit" name = "Submit" />
				</form>
			</div>
		)
	}
}

export default LoginBox;