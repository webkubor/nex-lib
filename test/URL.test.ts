import WURL from '../src/CustomURL';

describe('URL class', () => {
  it('should get main domain correctly', () => {
    const url = new WURL('https://www.example.com/page?param=value');
    expect(url.getMainDomain()).toBe('example.com');
  });

  it('should parse query parameters correctly', () => {
    const url = new WURL('https://www.example.com/page?param1=value1&param2=value2');
    expect(url.parseQueryParams()).toEqual({ param1: 'value1', param2: 'value2' });
  });
});