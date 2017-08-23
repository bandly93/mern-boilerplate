//var axios = require("axios");
import axios from "axios";
//var qs = require("qs");
import qs from "query-string";

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
		axios.post('/logins',qs.stringify(info))
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
		axios.post('/register',qs.stringify(info))
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