class Time {
  private date: Date;

  constructor() {
    this.date = new Date();
  }

  // 格式化时间，可传入秒数，不传则默认当前时间的秒数
  format(seconds?: number): string {
    const dateToFormat = seconds? new Date(seconds * 1000) : this.date;
    const year = dateToFormat.getFullYear();
    const month = String(dateToFormat.getMonth() + 1).padStart(2, '0');
    const day = String(dateToFormat.getDate()).padStart(2, '0');
    const hours = String(dateToFormat.getHours()).padStart(2, '0');
    const minutes = String(dateToFormat.getMinutes()).padStart(2, '0');
    const secondsPart = String(dateToFormat.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${secondsPart}`;
  }

  // 获取时间戳（毫秒），可传入秒数，不传则默认当前时间的秒数转换为时间戳
  getTimestamp(seconds?: number): number {
    return seconds? seconds * 1000 : this.date.getTime();
  }

}

export default Time;