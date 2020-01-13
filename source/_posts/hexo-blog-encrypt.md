---
title: hexo-blog-encrypt
categories:
  - Course
tags:
  - HEXO
  - Plug
---

### 简介

hexo-blog-encrypt可加密hexo文章

<!--more-->

### 特性

- 一旦输入正确密码, 密码将会被存储在本地浏览器的 localStorage中

- 按个按钮, 密码将会被清空

- 支持按标签加密

- 过时的浏览器将不能正常显示

### 安装

```
npm install hexo-blog-encrypt --save
```

### 快速使用

将"password"字段添加到文章front-matter,如:

```yaml
---
title: An encrypted passage
password: unencrypt
---
```

[Demo演示](./example)(密码为unencrypt)

### 高级设置

#### 优先级

文章front-matter设置>hexo/_config设置>默认设置

#### 文章front-matter模板

```yaml
---
title: Hello World
tags:
  - encrypted
password: unencrypt
abstract: 文章被加密,请输入密码查看
message: 您好,这里需要密码
wrong_pass_message: 密码错误,请重新输入
wrong_hash_message: 文章不能被校验,不过您还是能看看解密后的内容
---
```

#### hexo/_config.yml模板

```yaml
# Security
encrypt: # hexo-blog-encrypt
  abstract: 文章被加密,请输入密码查看
  message: 您好,这里需要密码
  tags:
  - {name: tagNameA, password: 密码A}
  - {name: tagNameB, password: 密码B}
  template: <div id="hexo-blog-encrypt" data-wpm="{{hbeWrongPassMessage}}" data-whm="{{hbeWrongHashMessage}}"><div class="hbe-input-container"><input type="password" id="hbePass" placeholder="{{hbeMessage}}" /><label>{{hbeMessage}}</label><div class="bottom-line"></div></div><script id="hbeData" type="hbeData" data-hmacdigest="{{hbeHmacDigest}}">{{hbeEncryptedData}}</script></div>
  wrong_pass_message: 密码错误,请重新输入
  wrong_hash_message: 文章不能被校验,不过您还是能看看解密后的内容
```

