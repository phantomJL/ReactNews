import Ajax from '../common/ajax'
import FETCH from '../common/fetch'

// 储存accessToken到redux
export function saveAccessToken({
    accessToken
}) {
    return dispatch => {
        dispatch({
            type: 'SAVE_ACCESS_TOKEN',
            accessToken
        })
    }
}

export function saveUserInfo({
    userinfo
}) {
    return dispatch => {
        dispatch({
            type: 'SAVE_USERINFO',
            userinfo
        })
    }
}

export function signIn({ username, password }) {
  return dispatch => {

  return new Promise(async (resolve, reject) => {

    // 这里写你的登录请求，登录成功以后，将token储存到cookie，使用httpOnly(比较安全)
    // your code ...
    let signinURL = `http://newsapi.gugujiankong.com/Handler.ashx?action=login&username=${username}&password=${password}&r_userName=r_userName&r_password=r_password&r_confirmPassword=r_confirmPassword`;
    console.log(signinURL);
    let signinOptions = 'GET';
    let [err1,res] = await FETCH({
      url: signinURL,
      option: signinOptions
    });

    // 储存 cookie
    let [ err, data ] = await Ajax({
      url: window.location.origin+'/sign/in',
      method: 'post',
      data: {
        id: res.UserId,
        nickname: res.NickUserName
      }
    })

    if (data && data.success) {
      resolve([null, true])
    } else {
      resolve(['sign error'])
    }


      })
    }
  }


export function signOut() {
  return dispatch => {
  return new Promise(async (resolve, reject) => {

    let [ err, data ] = await Ajax({
      url: window.location.origin+'/sign/out',
      method: 'post'
    })

    if (data && data.success) {

      resolve([null, true])
    } else {
      resolve(['sign error'])
    }

  })
  }
}

export function signUp({username, password, confirmPassword}) {
    return (dispatch, getState) => {

        return new Promise(async (resolve, reject) => {

            let signupURL = `http://newsapi.gugujiankong.com/Handler.ashx?action=register&r_userName=${username}&r_password=${password}&r_confirmPassword=${confirmPassword}`;
            let signupOptions = 'GET';
            let [err, res] = await FETCH({
              url: signupURL,
              option: signupOptions
            });
            if (res){
                  resolve([null, true])
              } else {
                  resolve(['sign error'])
              }


    })
}
}
