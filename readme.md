发布到 npm
## 注册一个 npm 账号。
在项目目录下登录 npm。
npm login
## 按照提示输入用户名、密码和邮箱。
发布项目。
npm publish
## 在 Vue 项目中使用
安装 web-tools 包。

```
npm install web-tools
```


### 使用
```
   import { URL } from 'web-tools';

   export default {
     name: 'MyComponent',
     mounted() {
       const url = new URL('https://www.example.com/page?param=value');
       console.log(url.getMainDomain());
     },
   };
```