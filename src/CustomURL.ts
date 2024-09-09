
class WURL {
  private url: URL;

  constructor(urlString: string) {
    try {
      this.url = new URL(urlString);
    } catch (error) {
      throw new Error('Invalid URL format');
    }
  }

  getMainDomain() {
    const domainParts = this.url.hostname.split('.');
    return domainParts.slice(-2).join('.');
  }

  parseQueryParams() {
    const urlParams = new URLSearchParams(this.url.search);
    const params: Record<string, string> = {};
    for (const [key, value] of urlParams.entries()) {
      params[key] = value;
    }
    return params;
  }
}

export default WURL;