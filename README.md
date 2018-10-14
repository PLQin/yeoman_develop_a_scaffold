# 基于 Yeoman 开发一个脚手架，实现快速启动小程序开发的功能。然后用它搭建一个小程序项目，随便做点功能，比如登录后显示头像（像自带模板那样）。

------------

开始安装

首先确保自己已经安装了nodejs

然后安装 yeoman

```js
npm install -g yo
```

接着将项目导入到 yeoman的 node_modules中
```
npm link
```


在自己的空项目中运行：

```js
yo xcx
```

然后就会在此目录下生成以下目录结构：

    ├── build
    │   └── newpage.js
    ├── src
    │   ├── components
    │   │   └── App.js
    │   ├── images
    │   │   └── yeoman.png
    │   ├── styles
    │   │   └── app.scss
    │   ├── vendor
    │   │   └── jquery.js
    │   ├── views
    │   │   └── home.html
    ├── node_modules
    ├── index.html
    ├── package.json
    └── webpack.config.js
    ...


然后使用以下命令开始监听 pug：

```js
npm run dev
```


也可以使用以下命令新建page：

```js
npm run create:page
```
