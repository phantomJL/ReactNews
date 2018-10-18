import config from '../../config';

const FETCH = async ({ url = '', option = ''}) => {


  var myFetchOptions = {
    method: option
  };
  let response = await fetch(url,myFetchOptions);
  let data = await response.json();
  return data;

  // 注：这段代码如果想运行，外面需要包一个 async function

}

export default FETCH;
