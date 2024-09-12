import { createWURL }  from '../src/WURL';

describe('URL class', () => {
  it('should get main domain correctly', () => {
    const myUrl = createWURL('https://example.com/path?query=123');
    console.log(myUrl.getMainDomain()); // 'example.com'
    console.log(myUrl.parseQueryParams()); // { query: '123' }
    console.log(myUrl.isHttps()); // true
    console.log(myUrl.getPathname()); // '/path'
    console.log(myUrl.getPort()); // '80'
  });


});