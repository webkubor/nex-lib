
# nex-lib

`nex-lib` 是一个前端工具库，包含了一些常用的工具函数和类，旨在提高你的开发效率。这个库提供了实用的功能，如时间格式化、URL 处理等。

## 安装

你可以通过 npm 安装 `nex-lib` 包：

```bash
npm install nex-lib
```
## 使用
安装完成后，你可以在项目中导入并使用 nex-lib 的功能。

###  导入
```javascript
// 导入 Time 类
import { Time } from 'nex-lib';

// 导入 CustomURL 类
import { CustomURL } from 'nex-lib';
```

###  使用 Time 类
Time 类提供了时间格式化和时间戳转换的功能。

```js
import { Time } from 'nex-lib';

const time = new Time();

// 格式化当前时间
console.log(time.format());

// 格式化指定的秒数
console.log(time.format(1633072800));

// 获取当前时间戳
console.log(time.getTimestamp());

// 获取指定秒数的时间戳
console.log(time.getTimestamp(1633072800));
```

### 使用 CustomURL 类(v1.2.1)
CustomURL 类提供了 URL 处理的功能，如获取主域名和解析查询参数。

```js
import { CustomURL } from 'nex-lib';

const url = new CustomURL('https://www.example.com/path?name=value');

// 获取主域名
console.log(url.getMainDomain()); // 输出: example.com

// 解析查询参数
console.log(url.parseQueryParams()); // 输出: { name: 'value' }
```
### 彩色日志输出(v1.2.1)

```js
import { EchoUtils } from 'nex-lib';
// 使用 EchoUtils 对象
EchoUtils.red('This is a red message!');
EchoUtils.bgGreen('This is a message with a green background.');

```


#### ObjectUtils (v1.2.1)
```js
import ObjectUtils from 'nex-lib';

// 使用 ObjectUtils
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, e: 4 };
const merged = ObjectUtils.deepMerge(obj1, obj2);
console.log(merged);

// 其他使用示例
console.log(ObjectUtils.deepEqual({ a: 1 }, { a: 1 })); // true
console.log(ObjectUtils.keys({ a: 1, b: 2 })); // ['a', 'b']
console.log(ObjectUtils.values({ a: 1, b: 2 })); // [1, 2]
console.log(ObjectUtils.judgeTypes([1, 2, 3])); // 'array'
```