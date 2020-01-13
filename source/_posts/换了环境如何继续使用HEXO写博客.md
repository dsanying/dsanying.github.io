---
title: 换了环境如何继续使用HEXO写博客
categories:
  - Course
tags:
  - HEXO
---

### 前言

我们知道，使用 Github+HEXO 搭建个人博客需要花不少时间。

如果有一天我们电脑突然坏了，或者换了系统，那么我们怎么使用 HEXO 再发布文章到个人博客呢？

<!--more-->

### 操作

#### 一、安装软件

==>[Node.js](https://nodejs.org/en/)

==>[Git](https://git-scm.com/downloads)

#### 二、在 Github 官网添加新密钥

在Git中输入：ssh-keygen -t rsa -C "youremail@example.com"

打开C:\Users\Administrator\\.ssh中的id_rsa.pub

复制密钥，在[https://github.com/settings/keys](https://github.com/settings/keys)中新建SSH key

#### 三、源文件拷贝

将原来电脑上博客目录下必要文件拷到你的新电脑文件夹中，必须拷贝一下几个目录：

```
_config.yml
package.json
scaffolds/
source/
themes/
```

#### 四、安装 HEXO

在 git 下输入下面指令安装 HEXO：

```
npm install hexo-cli -g
```

#### 五、Git cd到博客新目录，输入下面指令安装相关模块

```
npm install
npm install hexo-deployer-git --save//部署到git
（下面插件选择安装）
npm install hexo-generator-feed --save //建立RSS订阅
npm install hexo-generator-sitemap --save //建立站点地图
npm install hexo-generator-searchdb //本地搜索
npm install hexo-blog-encrypt --save //博文加密
npm install hexo-sage-posts --save //隐藏博文
npm install hexo-tag-aplayer //音频播放器
npm install hexo-tag-dplayer //视频播放器
npm install hexo-filter-mermaid-diagrams //mermaid
npm install hexo-pdf --save //pdf在线阅读
npm install hexo-baidu-url-submit --save //百度推送
```

#### 六、测试

Git输入hexo s在本地测试运行

#### 七、部署发布文章

在Git中**依次**输入以下指令：

```
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

之后只需**依次**输入以下指令：

```
hexo clean
hexo g
hexo d
```