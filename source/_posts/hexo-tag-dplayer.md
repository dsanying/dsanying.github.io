---
title: hexo-tag-dplayer
categories:
  - Course
tags:
  - HEXO
  - Plug
---

### 简介

`hexo-tag-dplayer`可在hexo文章中插入视频

<!--more-->

### 安装

```
npm install hexo-tag-dplayer
```

### 语法

```
{% dplayer "url=" %} 
```



| 名称                 | 默认值                             | 描述                                                         |
| -------------------- | ---------------------------------- | ------------------------------------------------------------ |
| container            | document.querySelector('.dplayer') | 播放器容器元素                                               |
| live                 | false                              | 开启直播模式, [详情](http://dplayer.js.org/#/home?id=live)   |
| autoplay             | false                              | 视频自动播放                                                 |
| theme                | '#b7daff'                          | 主题色                                                       |
| loop                 | false                              | 视频循环播放                                                 |
| lang                 | navigator.language.toLowerCase()   | 可选值: 'en', 'zh-cn', 'zh-tw'                               |
| screenshot           | false                              | 开启截图，如果开启，视频和视频封面需要开启跨域               |
| hotkey               | true                               | 开启热键                                                     |
| preload              | 'auto'                             | 预加载，可选值: 'none', 'metadata', 'auto'                   |
| volume               | 0.7                                | 默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效 |
| logo                 | -                                  | 在左上角展示一个 logo，你可以通过 CSS 调整它的大小和位置     |
| apiBackend           | -                                  | 自定义获取和发送弹幕行为，[详情](http://dplayer.js.org/#/home?id=live) |
| video                | -                                  | 视频信息                                                     |
| video.quality        | -                                  | [详情](http://dplayer.js.org/#/home?id=quality-switching)    |
| video.defaultQuality | -                                  | [详情](http://dplayer.js.org/#/home?id=quality-switching)    |
| video.url            | -                                  | 视频链接                                                     |
| video.pic            | -                                  | 视频封面                                                     |
| video.thumbnails     | -                                  | 视频缩略图，可以使用 [DPlayer-thumbnails](https://github.com/MoePlayer/DPlayer-thumbnails) 生成 |
| video.type           | 'auto'                             | 可选值: 'auto', 'hls', 'flv', 'dash', 'webtorrent', 'normal' 或其他自定义类型, [详情](http://dplayer.js.org/#/home?id=mse-support) |
| video.customType     | -                                  | 自定义类型, [详情](http://dplayer.js.org/#/home?id=mse-support) |
| subtitle             | -                                  | 外挂字幕                                                     |
| subtitle.url         | `required`                         | 字幕链接                                                     |
| subtitle.type        | 'webvtt'                           | 字幕类型，可选值: 'webvtt', 'ass'，目前只支持 webvtt         |
| subtitle.fontSize    | '20px'                             | 字幕字号                                                     |
| subtitle.bottom      | '40px'                             | 字幕距离播放器底部的距离，取值形如: '10px' '10%'             |
| subtitle.color       | '#fff'                             | 字幕颜色                                                     |
| danmaku              | -                                  | 显示弹幕                                                     |
| danmaku.id           | `required`                         | 弹幕池id，必须唯一                                           |
| danmaku.api          | `required`                         | [详情](http://dplayer.js.org/#/home?id=danmaku-api)          |
| danmaku.token        | -                                  | 弹幕后端验证 token                                           |
| danmaku.maximum      | -                                  | 弹幕最大数量                                                 |
| danmaku.addition     | -                                  | 额外外挂弹幕，[详情](http://dplayer.js.org/#/home?id=bilibili-danmaku) |
| danmaku.user         | 'DIYgod'                           | 弹幕用户名                                                   |
| danmaku.bottom       | -                                  | 弹幕距离播放器底部的距离，防止遮挡字幕，取值形如: '10px' '10%' |
| danmaku.unlimited    | false                              | 海量弹幕模式，即使重叠也展示全部弹幕，请注意播放器会记忆用户设置，用户手动设置后即失效 |
| contextmenu          | []                                 | 自定义右键菜单                                               |
| highlight            | []                                 | 自定义进度条提示点                                           |
| mutex                | true                               | 互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器 |