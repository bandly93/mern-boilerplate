import axios from "axios";

let api = { 
	getLoginInfo : getLoginInfo,
	getRegistrationInfo : getRegistrationInfo
};

function getLoginInfo(info){
	var info = {
		username : info.username,
		password : info.password,
	}
	return(
		axios.post('/login',info)
		.then(function(response){
			console.log('response received')
			console.log(response);
		})
		.catch(function(error){
			if(error.response){
				console.log(error.response);
			}
		})
	);
}

function getRegistrationInfo(info){
	var info = {
		username : info.username,
		password : info.password,
		confirm_password : info.confirm_password,
		email : info.email
	}
	return(
		axios.post('/login',info)
			.then(function(response){
				console.log(response);
			})
			.catch(function(error){
				if (error.response) {
					console.log(error.response);
			}
		})
	);
}

export { api };