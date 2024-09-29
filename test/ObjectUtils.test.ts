import EchoUtils from '../src/EchoUtils'; 
import ObjectUtils from '../src/ObjectUtils'


describe('test ObjectUtils', () => {
    it('judgeTypes', () => {
        EchoUtils.green(`123456`, ObjectUtils.judgeTypes(123456)) //  123456 number
        EchoUtils.green(`[]`, ObjectUtils.judgeTypes([])) //    [] array
        EchoUtils.green(`new Date()`, ObjectUtils.judgeTypes(new Date())) //    new Date() date
        EchoUtils.yellow(`true`, ObjectUtils.judgeTypes(true)) //    true boolean
        EchoUtils.purple(`hello`, ObjectUtils.judgeTypes('hello')) //  hello string
        EchoUtils.orange(`function() {}`, ObjectUtils.judgeTypes(function() {})) //  function() {} function
        EchoUtils.pink(`new Error('something wrong')`, ObjectUtils.judgeTypes(new Error('something wrong'))) // new Error('something wrong') error
        EchoUtils.creamWhite(`null`, ObjectUtils.judgeTypes(null)) // null null
        EchoUtils.bgGreen(`undefined`, ObjectUtils.judgeTypes(undefined)) //    undefined undefined
        EchoUtils.magenta(`/abc/`, ObjectUtils.judgeTypes(/abc/)) //  /abc/ regexp
    });

});
