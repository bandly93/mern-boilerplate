import axios from "axios";

let api = { 
	getLoginInfo : getLoginInfo,
	PostRegistrationInfo : PostRegistrationInfo
};

function getLoginInfo(info){
	var info = {
		username : info.username,
		password : info.password,
	}
	return(
		axios.get('/login',info)
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

function PostRegistrationInfo(info){
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