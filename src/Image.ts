class Image {
  private src: string;
  private imgElement: HTMLImageElement;

  constructor(src: string) {
      this.src = src;
      this.imgElement = new HTMLImageElement();
      this.imgElement.src = src;
  }

  // 加载图像并返回 Promise
  load(): Promise<void> {
      return new Promise((resolve, reject) => {
          this.imgElement.onload = () => resolve();
          this.imgElement.onerror = (error) => reject(error);
      });
  }

  // 获取图像宽度
  getWidth(): number {
      return this.imgElement.width;
  }

  // 获取图像高度
  getHeight(): number {
      return this.imgElement.height;
  }
}

export default Image;