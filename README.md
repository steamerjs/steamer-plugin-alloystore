# steamer-plugin-alloystore

将组件上传或更新至alloystore(一个组件展示平台)


## 安装

```javascript
// tnpm是内部npm管理命令行工具
tnpm i -g steamerjs

tnpm i -g steamer-plugin-alloystore
```


## 推荐脚手架

组件开发推荐使用以下脚手架:
* [steamer-react-component](https://github.com/SteamerTeam/steamer-react-component)

组件的 `example` 需要符合以下规范，才能正确被读取，并上传到 `alloystore`

* `example` 源码写在 `example/src` 下

* `js` 代码仅且仅写在一个 `js` 文件中，此文件位置默认在 `example/src/container/index.js`

* `css` 或其它样式代码，仅写在一个文件中，此文件位置默认在 `example/src/container/` 下，与 `js` 文件同级，支持 `css|less|stylus|scss|sass` 5种后缀，名字为 `index.[ext]`，但在 `index.js` 中要引用，并以完整名称引用，如 `require('./index.css')`

* 如果你想自定 `example` 路径，可以在 `package.json` 中设置，如下:

```javascript
"alloystore": {
    "demo": "example/src/index/container/",
    "id": 84
}
```


## 使用

进入组件目录

```javascript
cd component
```

初次使用，进行登录，输入用户名和密码，正确后，会自动进行上传

```javascript
steamer alloystore
```

如果已经上传过，命令会在 `package.json` 写入以下字段，记录组件的 `id`:

```
"alloystore": {
	"id": 35
}
```

那么再次使用命令时，会帮你自动更新组件在线上的版本，以及 `example`。

如果你只是想上传 `example`，而不更新组件的版本，可使用以下命令：

```
steamer alloystore -u example
// or
steamer alloystore --update example
```


### 开发

```javascript
// 将你的插件传至全局路径，那你就可以直接使用 `steamer example`
npm link

// 当你完成开发，可以 `unlink` 你的插件
npm unlink

```
