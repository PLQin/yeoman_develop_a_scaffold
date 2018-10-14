# 基于 Yeoman 开发一个脚手架，实现快速启动小程序开发的功能。然后用它搭建一个小程序项目，随便做点功能，比如登录后显示头像（像自带模板那样）。

------------

开始安装

首先确保自己已经安装了nodejs

然后安装 yeoman
```js
npm install -g yo
```

安装gulp-cli 以及bower
```
npm install -g gulp-cli bower
```


接着将项目导入到 yeoman 的 node_modules中
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
    ├── config
    │   └── index.js
    ├── pages
    │   └── example
    │       └── index.js
    │       └── index.pug
    │       └── index.styl
    ├── utils
    │   └── utils.js
    ├── package.json
    └── project.config.json
    ...


然后使用以下命令开始监听 pug 与 stylus：
```js
npm run dev
```


也可以使用以下命令新建page：
```js
npm run create:page
```

---

部分参考:
- : https://my.oschina.net/liu-xuewei/blog/608435
- : https://blog.csdn.net/sunscheung/article/details/76037615