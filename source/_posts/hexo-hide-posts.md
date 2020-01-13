---
title: hexo-hide-posts
categories:
  - Course
tags:
  - HEXO
  - Plug
---

### 简介

hexo-hide-posts可隐藏hexo文章

<!--more-->

### 特性

- 当一篇文章被设置为「隐藏」时，它不会出现在任何列表中（包括首页、存档、分类页面、标签页面、Feed、站点地图等），也不会被搜索引擎索引（前提是搜索引擎遵守 noindex 标签）
- 只有知道文章链接的人才可以访问被隐藏的文章
- 可以在命令行运行`hexo hidden:list`来获取当前所有的已隐藏文章列表。

### 安装

```
npm install hexo-hide-posts --save
```

### 快速使用

将"hidden: true"字段添加到文章front-matter,如:

```yaml
---
title: A hidden passage
hidden: true
---
```

### 高级设置

#### hexo/_config.yml模板

```yaml
# hexo-hide-posts
hide_posts:
  # 可以改成其他你喜欢的名字
  filter: hidden
  # 指定你想要传递隐藏文章的 generator，比如让所有隐藏文章在存档页面可见
  # 常见的 generators 有：index, tag, category, archive, sitemap, feed, etc.
  public_generators: []
  # 为隐藏的文章添加 noindex meta 标签，阻止搜索引擎收录
  noindex: true
```

