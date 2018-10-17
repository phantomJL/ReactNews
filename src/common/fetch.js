import config from '../../config';

const FETCH = ({ url = '', option = ''}) => {


  var myFetchOptions = {
    method: option
  };
  fetch(url,myFetchOptions)
  .then(response => response.json())
}

export default FETCH;
