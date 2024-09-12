// src/EchoUtils.ts

/**
 * 输出带有颜色的日志消息到控制台。
 * @param text 要输出的文本。
 * @param color 使用的颜色类型。
 * @throws 如果颜色无效，则抛出错误。
 */
function colorLog(text: string, color: string): void {
  const colors: { [key: string]: string } = {
      'reset': '\x1b[0m',
      'bright': '\x1b[1m',
      'dim': '\x1b[2m',
      'underscore': '\x1b[4m',
      'blink': '\x1b[5m',
      'reverse': '\x1b[7m',
      'hidden': '\x1b[8m',
      'black': '\x1b[30m',
      'red': '\x1b[31m',
      'green': '\x1b[32m',
      'yellow': '\x1b[33m',
      'blue': '\x1b[34m',
      'magenta': '\x1b[35m',
      'cyan': '\x1b[36m',
      'white': '\x1b[37m',
      'bgBlack': '\x1b[40m',
      'bgRed': '\x1b[41m',
      'bgGreen': '\x1b[42m',
      'bgYellow': '\x1b[43m',
      'bgBlue': '\x1b[44m',
      'bgMagenta': '\x1b[45m',
      'bgCyan': '\x1b[46m',
      'bgWhite': '\x1b[47m'
  };

  if (!colors[color]) {
      throw new Error(`Invalid color: ${color}`);
  }

  console.log(`${colors[color]}${text}${colors['reset']}`);
}

/**
* 提供带有不同颜色和样式的日志输出方法。
*/
const EchoUtils = {
  /**
   * 输出重置颜色的日志。
   * @param text 要输出的文本。
   */
  reset: (text: string) => colorLog(text, 'reset'),

  /**
   * 输出亮色日志。
   * @param text 要输出的文本。
   */
  bright: (text: string) => colorLog(text, 'bright'),

  /**
   * 输出暗色日志。
   * @param text 要输出的文本。
   */
  dim: (text: string) => colorLog(text, 'dim'),

  /**
   * 输出下划线日志。
   * @param text 要输出的文本。
   */
  underscore: (text: string) => colorLog(text, 'underscore'),

  /**
   * 输出闪烁日志。
   * @param text 要输出的文本。
   */
  blink: (text: string) => colorLog(text, 'blink'),

  /**
   * 输出反转颜色日志。
   * @param text 要输出的文本。
   */
  reverse: (text: string) => colorLog(text, 'reverse'),

  /**
   * 输出隐藏日志。
   * @param text 要输出的文本。
   */
  hidden: (text: string) => colorLog(text, 'hidden'),

  /**
   * 输出黑色日志。
   * @param text 要输出的文本。
   */
  black: (text: string) => colorLog(text, 'black'),

  /**
   * 输出红色日志。
   * @param text 要输出的文本。
   */
  red: (text: string) => colorLog(text, 'red'),

  /**
   * 输出绿色日志。
   * @param text 要输出的文本。
   */
  green: (text: string) => colorLog(text, 'green'),

  /**
   * 输出黄色日志。
   * @param text 要输出的文本。
   */
  yellow: (text: string) => colorLog(text, 'yellow'),

  /**
   * 输出蓝色日志。
   * @param text 要输出的文本。
   */
  blue: (text: string) => colorLog(text, 'blue'),

  /**
   * 输出品红色日志。
   * @param text 要输出的文本。
   */
  magenta: (text: string) => colorLog(text, 'magenta'),

  /**
   * 输出青色日志。
   * @param text 要输出的文本。
   */
  cyan: (text: string) => colorLog(text, 'cyan'),

  /**
   * 输出白色日志。
   * @param text 要输出的文本。
   */
  white: (text: string) => colorLog(text, 'white'),

  /**
   * 输出黑色背景日志。
   * @param text 要输出的文本。
   */
  bgBlack: (text: string) => colorLog(text, 'bgBlack'),

  /**
   * 输出红色背景日志。
   * @param text 要输出的文本。
   */
  bgRed: (text: string) => colorLog(text, 'bgRed'),

  /**
   * 输出绿色背景日志。
   * @param text 要输出的文本。
   */
  bgGreen: (text: string) => colorLog(text, 'bgGreen'),

  /**
   * 输出黄色背景日志。
   * @param text 要输出的文本。
   */
  bgYellow: (text: string) => colorLog(text, 'bgYellow'),

  /**
   * 输出蓝色背景日志。
   * @param text 要输出的文本。
   */
  bgBlue: (text: string) => colorLog(text, 'bgBlue'),

  /**
   * 输出品红色背景日志。
   * @param text 要输出的文本。
   */
  bgMagenta: (text: string) => colorLog(text, 'bgMagenta'),

  /**
   * 输出青色背景日志。
   * @param text 要输出的文本。
   */
  bgCyan: (text: string) => colorLog(text, 'bgCyan'),

  /**
   * 输出白色背景日志。
   * @param text 要输出的文本。
   */
  bgWhite: (text: string) => colorLog(text, 'bgWhite')
};

export default EchoUtils;
