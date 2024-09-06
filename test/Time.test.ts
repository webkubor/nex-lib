import Time from '../src/Time'; // 假设 Time 类所在的文件路径

describe('Time', () => {
    it('should format time correctly', () => {
        const time = new Time();
        const formattedTime = time.format();
        console.log(`output->formattedTime`,formattedTime)
        expect(formattedTime).toMatch(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/);
    });

    it('should get timestamp correctly', () => {
        const time = new Time();
        const timestamp = time.getTimestamp();
        console.log(`output->timestamp`,timestamp)

        expect(timestamp).toBeGreaterThan(0);
    });

    it('should format time from seconds correctly', () => {
        const seconds = 1693957400; // Some sample timestamp in seconds
        const formattedTime = new Time().format(seconds);
        console.log(`output->formattedTime`,formattedTime)
        expect(formattedTime).toMatch(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/);
    });

    it('should get timestamp from seconds correctly', () => {
        const seconds = 1693957400;
        const timestamp = new Time().getTimestamp(seconds);
        expect(timestamp).toBe(seconds * 1000);
    });

});