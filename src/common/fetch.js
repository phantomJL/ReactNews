import config from '../../config';

const FETCH = ({ url = '', option = ''}) => {

  var myFetchOptions = {
    method: option
  };
  fetch(url,myFetchOptions)
  .then(response => response.JSON())
}

export default FETCH;
