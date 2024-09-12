
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
import {EchoUtils} from 'nex-lib';
EchoUtils.red('This is a red message!');
EchoUtils.bgGreen('This is a message with a green background.');
EchoUtils.red(`output->111111`)
EchoUtils.blue(`output->111111`)
EchoUtils.yellow(`output->111111`)

```

#### WURL-URL 的各类解析 (v1.2.1)
```js
import WURL from 'nex-lib';

const url = new WURL('https://example.com:8080/path?query=123');

console.log(url.getMainDomain());  // 输出: example.com
console.log(url.parseQueryParams());  // 输出: { query: '123' }
console.log(url.isHttps());  // 输出: true
console.log(url.getPathname());  // 输出: /path
console.log(url.getPort());  // 输出: 8080
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


#### ValidationUtils (v1.2.1)

```ts
import ValidationUtils from 'nex-lib';

const email = 'example@example.com';
const url = 'https://example.com';
const phone = '12345678901';
const date = '2024-09-12';
const postalCode = '123456';
const idCard = '110101199003076515';

// 验证邮箱
console.log(ValidationUtils.isValidEmail(email));  // 输出: true

// 验证 URL
console.log(ValidationUtils.isValidURL(url));  // 输出: true

// 验证电话号码
console.log(ValidationUtils.isValidPhoneNumber(phone));  // 输出: true

// 验证日期字符串
console.log(ValidationUtils.isValidDate(date));  // 输出: true

// 验证邮政编码
console.log(ValidationUtils.isValidPostalCode(postalCode));  // 输出: true

// 验证身份证号码
console.log(ValidationUtils.isValidIDCard(idCard));  // 输出: true

```

