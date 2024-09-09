/**
 * @class WURL
 * @description 处理 URL 的工具类，支持解析主域名和查询参数。
 */
class WURL {
  private url: URL;

  /**
   * @constructor
   * @param {string} urlString - 传入的 URL 字符串
   * @throws {Error} 如果传入的 URL 格式不合法，则抛出错误
   */
  constructor(urlString: string) {
    try {
      this.url = new URL(urlString);
    } catch (error) {
      throw new Error('Invalid URL format');
    }
  }

  /**
   * @method getMainDomain
   * @description 获取 URL 的主域名，不包括子域名
   * @returns {string} 返回主域名，如 'example.com'
   */
  getMainDomain() {
    const domainParts = this.url.hostname.split('.');
    return domainParts.slice(-2).join('.');
  }

  /**
   * @method parseQueryParams
   * @description 解析 URL 中的查询参数
   * @returns {Record<string, string>} 返回键值对形式的查询参数
   */
  parseQueryParams() {
    const urlParams = new URLSearchParams(this.url.search);
    const params: Record<string, string> = {};
    for (const [key, value] of urlParams.entries()) {
      params[key] = value;
    }
    return params;
  }

  /**
   * @method isHttps
   * @description 检查当前 URL 是否使用 HTTPS 协议
   * @returns {boolean} 如果是 HTTPS，返回 true，否则返回 false
   */
  isHttps() {
    return this.url.protocol === 'https:';
  }

  /**
   * @method getPathname
   * @description 获取 URL 中的路径部分
   * @returns {string} 返回路径部分，如 '/path/to/resource'
   */
  getPathname() {
    return this.url.pathname;
  }

  /**
   * @method getPort
   * @description 获取 URL 中的端口号
   * @returns {string} 返回端口号，如 '8080'，如果没有设置端口则返回空字符串
   */
  getPort() {
    return this.url.port || '80'; // 默认返回 80 端口
  }
}

export default WURL;
