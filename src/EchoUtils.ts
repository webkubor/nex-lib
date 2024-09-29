// src/EchoUtils.ts

import ObjectUtils from './ObjectUtils';

/**
 * 通过转义序列输出带有颜色的日志消息到控制台。
 * @param texts 要输出的文本，可以是多个参数。
 * @param color 使用的颜色类型。
 * @throws 如果颜色无效，则抛出错误。
 */
function colorLog(color: string, ...texts: (string | number)[]): void {
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
  let output = '';
  for (const text of texts) {
      output += typeof text === 'number'? text.toString() : text;
      output += ' ';
  }
  // console.log(`${colors[color]}${texts.join(' ')}${colors['reset']}`);
  console.log(`${colors[color]}${output.trim()}${colors['reset']}`);
}

/**
* 提供带有不同颜色和样式的日志输出方法。
*/
const EchoUtils = {
  reset: (...texts:  (string | number)[]) => colorLog('reset', ...texts),
  bright: (...texts:  (string | number)[]) => colorLog('bright', ...texts),
  dim: (...texts:  (string | number)[]) => colorLog('dim', ...texts),
  underscore: (...texts:  (string | number)[]) => colorLog('underscore', ...texts),
  blink: (...texts:  (string | number)[]) => colorLog('blink', ...texts),
  reverse: (...texts:  (string | number)[]) => colorLog('reverse', ...texts),
  hidden: (...texts:  (string | number)[]) => colorLog('hidden', ...texts),
  black: (...texts:  (string | number)[]) => colorLog('black', ...texts),
  red: (...texts:  (string | number)[]) => colorLog('red', ...texts),
  green: (...texts:  (string | number)[]) => colorLog('green', ...texts),
  yellow: (...texts:  (string | number)[]) => colorLog('yellow', ...texts),
  blue: (...texts:  (string | number)[]) => colorLog('blue', ...texts),
  magenta: (...texts:  (string | number)[]) => colorLog('magenta', ...texts),
  cyan: (...texts:  (string | number)[]) => colorLog('cyan', ...texts),
  white: (...texts:  (string | number)[]) => colorLog('white', ...texts),
  bgBlack: (...texts:  (string | number)[]) => colorLog('bgBlack', ...texts),
  bgRed: (...texts:  (string | number)[]) => colorLog('bgRed', ...texts),
  bgGreen: (...texts:  (string | number)[]) => colorLog('bgGreen', ...texts),
  bgYellow: (...texts:  (string | number)[]) => colorLog('bgYellow', ...texts),
  bgBlue: (...texts:  (string | number)[]) => colorLog('bgBlue', ...texts),
  bgMagenta: (...texts:  (string | number)[]) => colorLog('bgMagenta', ...texts),
  bgCyan: (...texts:  (string | number)[]) => colorLog('bgCyan', ...texts),
  bgWhite: (...texts:  (string | number)[]) => colorLog('bgWhite', ...texts)
};

export default EchoUtils;
