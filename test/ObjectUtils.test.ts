import EchoUtils from '../src/EchoUtils'; 
import ObjectUtils from '../src/ObjectUtils'


describe('test ObjectUtils', () => {
    it('judgeTypes', () => {
        EchoUtils.green(`123456`, ObjectUtils.judgeTypes(123456))
        EchoUtils.green(`[]`, ObjectUtils.judgeTypes([]))
        EchoUtils.green(`new Date()`, ObjectUtils.judgeTypes(new Date()))
        EchoUtils.yellow(`true`, ObjectUtils.judgeTypes(true))
        EchoUtils.purple(`hello`, ObjectUtils.judgeTypes('hello'))
        EchoUtils.orange(`function() {}`, ObjectUtils.judgeTypes(function() {}))
        EchoUtils.pink(`new Error('something wrong')`, ObjectUtils.judgeTypes(new Error('something wrong')))
        EchoUtils.creamWhite(`null`, ObjectUtils.judgeTypes(null))
        EchoUtils.bgGreen(`undefined`, ObjectUtils.judgeTypes(undefined))
        EchoUtils.magenta(`/abc/`, ObjectUtils.judgeTypes(/abc/))
        
    });

});
