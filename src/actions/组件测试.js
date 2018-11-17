export function signUp({username, password, confirmPassword}) {
    // return (dispatch, getState) => {
        var myFetchOptions = {
    			method: 'GET'
    		};
        fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=register&r_userName=${username}&r_password=${password}&r_confirmPassword=${confirmPassword}`, myFetchOptions)
    		.then(response => response.json())
    		.then(json => {

          console.log(json);
    			localStorage.userid= json.UserId;
    			localStorage.userNickName = json.NickUserName;
    		});
        // return new Promise(async (resolve, reject) => {
        //
        //     let signupURL = `http://newsapi.gugujiankong.com/Handler.ashx?action=register&r_userName=${username}&r_password=${password}&r_confirmPassword=${confirmPassword}`;
        //     let signupOptions = 'GET';
        //     let response = await FETCH({
        //       url: signupURL,
        //       option: signupOptions
        //     });
        //
        //     resolve(response);
        //

    // }
}
