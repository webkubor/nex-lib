

import Image from '../src/Image'; // 假设 Image 类所在的文件路径


let url = 'https://github.com/webkubor/picx-images-hosting/raw/master/20240816/1.5fkieuljlq.webp'

describe('Image', () => {
    it('should load image successfully', async () => {
        const image = new Image(url);
        await expect(image.load()).resolves.toBeUndefined();
    });

    it('should get correct width', async () => {
        const image = new Image(url);
        await image.load();
        const width = image.getWidth();
        expect(width).toBeGreaterThan(0);
    });

    it('should get correct height', async () => {
        const image = new Image(url);
        await image.load();
        const height = image.getHeight();
        expect(height).toBeGreaterThan(0);
    });
});