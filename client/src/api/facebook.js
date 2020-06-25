export function getUserData() {
	let userdata;
	return new Promise((resolve,reject)=>{
		FB.api('/me', {fields: 'name, email'}, (response) => {
			resolve(response) ;
		});
	});

}

export function facebookLogin(){
	//do the login
	return new Promise((resolve,reject)=>{
		FB.login((response) => {
			if (response.authResponse) {
				resolve(response.authResponse) 
			}
		}, {scope: 'email, public_profile', return_scopes: true});
	});
}

export function facebookLogout(){
	FB.logout();
}