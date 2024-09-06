class URL {
  private urlString: string;

  constructor(url: string) {
    this.urlString = url;
  }

  getMainDomain() {
    const urlParts = this.urlString.split('/');
    const domainParts = urlParts[2].split('.');
    return domainParts.slice(-2).join('.');
  }

  parseQueryParams() {
    const urlParams = new URLSearchParams(this.urlString.split('?')[1]);
    const params = {};
    for (const [key, value] of urlParams.entries()) {
      params[key] = value;
    }
    return params;
  }
}

export default URL;