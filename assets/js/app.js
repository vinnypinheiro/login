(function() {
  'use strict';

const username = "samuel";
const password = "1234";

window.localStorage.setItem("App_username", username);
window.localStorage.setItem("App_password", password);


window.addEventListener("DOMContentLoaded", setupForm);

function setupForm(){
	const form = document.getElementById("login-form");
	form.addEventListener("submit", handleSubmit);
}

function handleSubmit(event){
	event.preventDefault();

	const {
		username,
		password,
		result
	} = event.target;

    const processUser = loginUser;
	const response    = processUser(username.value, password.value);
	result.innerHTML  = response;
}


function loginUser(username, password){
	const User     = window.localStorage.getItem("App_username");
	const Password = window.localStorage.getItem("App_password");

	const validUser     = username == User;
	const validPassword = password == Password;

	if(validUser && validPassword){
    newLocation();
		return `User ${username} successfully logged-in! redirecting...`;
	}
  else if(!validUser)   return `Username ${username} has not been registered. `;
	else if(!validPassword) return `Incorrect password for username ${username}`;
}

function newLocation() { 
            window.location =  '/logged.html';
         } 


})();