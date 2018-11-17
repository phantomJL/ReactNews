import config from '../../config';

const FETCH = ({ url = '', option = ''}) => {


  var myFetchOptions = {
    method: option
  };

  return fetch(url,myFetchOptions)
  .then(resp => resp.json())
  .then(res => {
    if (res) {
      return [null, res];
    } else {
      return ['return none'];
    }
  })
  .catch(function (error) {
    console.log('Looks like there was a problem: \n', error);
  })
}

export default FETCH;
