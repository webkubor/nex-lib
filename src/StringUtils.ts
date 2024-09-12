// StringUtils.ts

const StringUtils = {
    // 将字符串转换为驼峰命名法
    toCamelCase(str: string): string {
      return str
        .replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', ''));
    },
  
    // 反转字符串
    reverseString(str: string): string {
      return str.split('').reverse().join('');
    },
  
  
    // 统计指定单词在字符串中出现的次数
    countOccurrences(str: string, word: string): number {
      // 使用 split 将字符串按单词分割，减去 1 就是单词的出现次数
      return str.split(word).length - 1;
    }
  };
  
  export default StringUtils;
  