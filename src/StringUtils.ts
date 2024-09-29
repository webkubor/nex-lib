// StringUtils.ts

const StringUtils = {
  // 生成随机颜色
  randomHexColor: () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`,

  /**
 * 将给定的字符串转换为驼峰命名法
 * @param str - 要转换的字符串
 * @returns 转换为驼峰命名法后的字符串
 */
  toCamelCase(str: string): string {
    return str
      .replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', ''));
  },

  /**
   * 反转字符串
   * @param str - 要反转的字符串
   * @returns 反转后的字符串
   */
  reverseString(str: string): string {
    return str.split('').reverse().join('');
  },

  /**
   * 对字符串进行省略处理，显示指定长度的开头和结尾部分，并在中间添加省略号
   * @param str - 要处理的字符串
   * @param start - 开头显示的字符数，默认为 6
   * @param end - 结尾显示的字符数，默认为 4
   * @returns 处理后的字符串
   */
  ellipsisStr(str, start = 6, end = 4) {
    if (typeof str === "string") {
      return str.slice(0, start) + "..." + str.slice(-end);
    }
    return str;
  },


  // 获取随机字符串可指定长度
  createRandomStr(len = 6) {
    let rdmString = "";
    while (rdmString.length < len) {
      rdmString += Math.random().toString(36).slice(2);
    }
    return rdmString.slice(0, len);
  },


  // 统计指定单词在字符串中出现的次数
  countOccurrences(str: string, word: string): number {
    // 使用 split 将字符串按单词分割，减去 1 就是单词的出现次数
    return str.split(word).length - 1;
  }
};

export default StringUtils;
