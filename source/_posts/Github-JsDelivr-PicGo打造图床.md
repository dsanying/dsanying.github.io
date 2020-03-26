---
title: Github+JsDelivr+PicGo打造图床
categories:
  - Course
tags:
  - HEXO
---

![](https://cdn.jsdelivr.net/gh/dsanying/ImgHosting@posts/Github+JsDeliver+Picgo.jpg)

<!--more-->

### 前言

先来对比一下各路图床：

> 微博图床：防盗链！！！
> SM.MS：速度慢！！！
> 其他小众图床：风险大！！！
> Imgur等国外图床：风险大！！！
> 大厂储存服务：要花钱！！！~~富豪专用！！！~~
> GitHub图床：加速访问！！！一键上传！！！完全免费！！！

### 教程

#### 新建GitHub仓库

登录/注册GitHub，新建一个仓库

建议：

> 仓库名：ImgHosting

#### 生成一个Token

点击头像依次选择【Settings】-【Developer settings】-【Personal access tokens】-【Generate new token】

填写【Note】，勾选【repo】，点击【Generate token】生成Token

**Token只显示一次！！！记得保存！！！**

#### 配置PicGo

下载[PicGo](https://github.com/Molunerfinn/picgo/releases)，安装好后开始配置图床

> 仓库名：用户名/图床仓库名
> 分支名：master
> Token：粘贴之前生成的Token
> 存储路径：填写储存路径，如【PicGo/】，会在仓库创建名为PicGo的文件夹，图片会储存在此文件夹中
> 自定义域名：在图片上传后，PicGo会按照【自定义域名+上传的图片名】的方式生成访问链接，放到粘贴板上
>
> 如果要使用JsDelivr加速访问，可以设置为【https://cdn.jsdelivr.net/gh/用户名/图床仓库名 】

#### 高效创作

配置好PicGo，就可以将图片拖拽到上传区，PicGo将会自动上传并复制访问链接，将链接粘贴到想要的地方