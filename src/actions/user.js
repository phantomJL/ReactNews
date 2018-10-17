import Ajax from '../common/ajax'
import FETCH from '../common/fetch'

// 储存accessToken到redux
export function saveAccessToken({ accessToken }) {
  return dispatch => {
    dispatch({ type: 'SAVE_ACCESS_TOKEN', accessToken })
  }
}

export function saveUserInfo({ userinfo }) {
  return dispatch => {
    dispatch({ type: 'SAVE_USERINFO', userinfo })
  }
}

export function signIn({ username, password }) {
  return dispatch => {
  return new Promise(async (resolve, reject) => {

    // 这里写你的登录请求，登录成功以后，将token储存到cookie，使用httpOnly(比较安全)
    // your code ...

    // 储存 cookie


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
            let response = await FETCH({
              url: signupURL,
              options: signupOptions
            });
            resolve(response);
        })
    }
}
