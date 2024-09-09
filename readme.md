
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

###  示例
使用 Time 类
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
### 使用 CustomURL 类
CustomURL 类提供了 URL 处理的功能，如获取主域名和解析查询参数。

```js
import { CustomURL } from 'nex-lib';

const url = new CustomURL('https://www.example.com/path?name=value');

// 获取主域名
console.log(url.getMainDomain()); // 输出: example.com

// 解析查询参数
console.log(url.parseQueryParams()); // 输出: { name: 'value' }
```

## 功能

### Time 类
- format(seconds?: number): string: 格式化时间，传入秒数则格式化指定时间，否则格式化当前时间。
- getTimestamp(seconds?: number): number: 获取时间戳（毫秒），传入秒数则获取指定时间的时间戳，否则获取当前时间的时间戳。

### CustomURL 类
- getMainDomain(): string: 获取 URL 的主域名。
- parseQueryParams(): Record<string, string>: 解析 URL 查询参数。
  
## 贡献
如果你发现任何问题或有改进建议，请提交问题或拉取请求。我们欢迎任何形式的贡献！

## 许可证
nex-lib 遵循 MIT 许可证。有关更多详细信息，请参阅 LICENSE 文件。