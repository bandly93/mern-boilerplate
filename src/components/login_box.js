import React , {Component} from "react";

class LoginBox extends Component {
	render(){
		return(
			<div className = "container">
				<label>
					username:
					<input type = "text"/>
				</label>
				<label>
					password:
					<input type = "text"/>
				</label>
				<button>
					Submit!
				</button>
			</div>
		)
	}
}

export default LoginBox;