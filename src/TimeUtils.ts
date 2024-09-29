

const TimeUtils = {

  /**
 * @function format
 * @description 格式化时间为 'YYYY-MM-DD HH:mm:ss' 格式
 * @param {number} [seconds] - 可选参数，传入的秒数，如果不传则使用当前时间
 * @returns {string} 返回格式化后的时间字符串
 */
 transDate(seconds?: number): string {
  // 如果提供了秒数，使用对应时间；否则，使用当前时间
  const dateToFormat = seconds ? new Date(seconds * 1000) : new Date();
  
  const year = dateToFormat.getFullYear();
  const month = String(dateToFormat.getMonth() + 1).padStart(2, '0');
  const day = String(dateToFormat.getDate()).padStart(2, '0');
  const hours = String(dateToFormat.getHours()).padStart(2, '0');
  const minutes = String(dateToFormat.getMinutes()).padStart(2, '0');
  const secondsPart = String(dateToFormat.getSeconds()).padStart(2, '0');

  // 返回格式化后的时间字符串
  return `${year}-${month}-${day} ${hours}:${minutes}:${secondsPart}`;
},

/**
 * @function getTimestamp
 * @description 获取当前时间的时间戳，或者基于传入的秒数获取时间戳（毫秒）
 * @param {number} [seconds] - 可选参数，传入的秒数，如果不传则返回当前时间的时间戳
 * @returns {number} 返回时间戳（毫秒）
 */
getTimestamp(seconds?: number): number {
  // 如果传入了秒数，将其转换为毫秒返回，否则返回当前时间的时间戳
  return seconds ? seconds * 1000 : new Date().getTime();
}

}



export default TimeUtils;
