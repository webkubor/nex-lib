import TimeUtils from '../src/TimeUtils'; 
import EchoUtils from '../src/EchoUtils'; 

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