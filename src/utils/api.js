import axios from "axios";

let api = {
	getLoginInfo : getLoginInfo,
	getRegistrationInfo : getRegistrationInfo
};

function getLoginInfo(info){
	return(
		axios.post('/login',{
			username : info.username,
			password : info.password
		})
		.then(function(response){
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
	return(
		axios.post('/register',{
			username : info.username,
			password : info.password,
			confirm_password : info.confirm_password,
			email : info.email
		})
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