
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

[线上地址:https://github.com/webkubor/nex-lib](https://github.com/webkubor/nex-lib)

