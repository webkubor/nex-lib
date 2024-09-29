const browserUtils = {

    isBrowser: () => typeof window !== 'undefined',

    /**
     * 检查当前浏览器是否为移动端浏览器
     * @returns {boolean} 如果是移动端浏览器返回 true，否则返回 false
     */
    isAppleMobileDevice: () => {
        let reg = /iphone|ipod|ipad|Macintosh/i;
        return reg.test(navigator.userAgent.toLowerCase());
    },

    /**
     * 检查当前浏览器是否为微信浏览器
     * @returns {boolean} 如果是微信浏览器返回 true，否则返回 false
     */
    isWeChatBrowser() {
        const userAgent = navigator.userAgent.toLowerCase();
        // return userAgent.match(/MicroMessenger/i) == 'micromessenger';
        return userAgent.includes('micromessenger');
    },

    /**
   * 平滑滚动到页面顶部的函数
   * 该函数使用 requestAnimationFrame 实现平滑滚动效果
   * @returns {void} 无返回值
   */
    scrollToTop = () => {
        const t = document.documentElement.scrollTop || document.body.scrollTop;
        if (t > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, t — t / 8);
        }
    },
    /**
     * 获取当前页面选中的文本内容
     * @returns {string} 选中的文本内容
     */
    getSelect() {
        return window.getSelection().toString();
    },

    async getPublicIP(): Promise<any> {
        return fetch('https://api.ipify.org?format=json')
    }

}