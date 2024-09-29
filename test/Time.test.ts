import TimeUtils from '../src/TimeUtils'; // 假设 Time 类所在的文件路径
import EchoUtils from '../src/EchoUtils'; // 假设 Time 类所在的文件路径

describe('Time', () => {
    it('should format time correctly', () => {
        const formattedTime = TimeUtils.transDate();
        EchoUtils.green(`formattedTime`, formattedTime)
    });
    it('getTimestamp correctly', () => {
        const timestamp = TimeUtils.getTimestamp();
        EchoUtils.green(`output->formattedTime`,timestamp)
    });

});