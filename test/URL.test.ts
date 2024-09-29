import { createWURL }  from '../src/WURL';
import EchoUtils from '../src/EchoUtils'; 

describe('URL class', () => {
  it('should get main domain correctly', () => {
    const myUrl = createWURL('https://example.com/path?query=123');
    EchoUtils.green(myUrl.getMainDomain()); // 'example.com'
    EchoUtils.green(myUrl.parseQueryParams()); // { query: '123' }
    EchoUtils.green(myUrl.isHttps()); // true
    EchoUtils.green(myUrl.getPathname()); // '/path'
    EchoUtils.green(myUrl.getPort()); // '80'
  });

  it('test addParamsToURL', () => {
    const url = 'https://example.com';
    const params = { name: 'John', age: '30' };
    const myUrl = createWURL(url);
    const newUrl = myUrl.addParamsToURL(params);
    EchoUtils.orange(`addParamsToURL`, newUrl) //  function() {} function
  });

});