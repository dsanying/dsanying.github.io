---
title: Butterfly魔改教程
categories: "教程"
tags:
  - 代码
  - Hexo
---

# Hexo插件
## Hexo部署:[hexo-deployer-git](https://github.com/hexojs/hexo-deployer-git) 
```npm install hexo-deployer-git --save```
## 本地搜索:[hexo-generator-search](https://github.com/wzpan/hexo-generator-search) 
```npm install hexo-generator-search --save```
## 推送到搜索引擎:[hexo-submit-urls-to-search-engine](https://github.com/cjh0613/hexo-submit-urls-to-search-engine)
```npm install hexo-submit-urls-to-search-engine --save```
## mathjax转katex
```
npm uninstall hexo-renderer-marked --save # 如果有安装这个的话，卸载
npm uninstall hexo-renderer-kramed --save # 如果有安装这个的话，卸载
npm install hexo-renderer-markdown-it --save # 需要安装这个渲染插件
npm install @neilsustc/markdown-it-katex --save #需要安装这个katex插件
```
## 字数统计:[hexo-wordcount](https://github.com/willin/hexo-wordcount) 
```npm install hexo-wordcount --save```  
## 给hexo-theme-butterfly添加侧边栏电子钟:[hexo-butterfly-clock](https://github.com/Akilarlxh/hexo-butterfly-clock)
```npm install hexo-butterfly-clock --save```
## 博客备份:[hexo-git-backup](https://github.com/coneycode/hexo-git-backup)
```npm install hexo-git-backup --save```

# 标签
## 添加文章页顶部标签
{% tabs tabs, 1 %}
<!-- tab 效果-->
{% asset_img 1.1.1.png 魔改前 %}
{% asset_img 1.1.2.png 魔改后 %}
<!-- endtab -->

<!-- tab 源码-->
1. 打开`hexo/themes/butterfly/layout/includes/header/post-info.pug`找到下方代码

```pug
if (theme.post_meta.post.categories && page.categories.data.length > 0)
```

2. 在下面同一层级加入下方代码

```pug
      if (theme.post_meta.post.tags && page.tags.data.length > 0)
        span.post-meta.tags
            span.post-meta-separator |
            i.fas.fa-tag.fa-fw.post-meta-icon
            each item, index in page.tags.data
              a(href=url_for(item.path)).post-meta__tags #[=item.name]
              if (index < page.tags.data.length - 1)
                span.page-meta-link #[=' • ']
```

3. {% asset_img 1.1.3.png 最终代码(注意缩进) %}
<!-- endtab -->
{% endtabs %}

## 删除文章页底部标签
{% tabs tabs, 1 %}
<!-- tab 效果-->
{% asset_img 1.2.1.png 魔改前 %}
{% asset_img 1.2.2.png 魔改后 %}
<!-- endtab -->

<!-- tab 源码-->
1. 打开`hexo/themes/butterfly/layout/post.pug`
2. 删除下方片段
```html
          each item, index in page.tags.data
            a(href=url_for(item.path)).post-meta__tags #[=item.name]
```
<!-- endtab -->
{% endtabs %}