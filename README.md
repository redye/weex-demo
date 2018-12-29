# weex 从零开始

最近看了一篇很赞的文章，是讲 weex、react-native 和 JSPatch 之间的对比，作为一枚 iOS 程序猿，当然了，我使用过 react-native，JSPatch 也了解过（由于苹果爸爸禁止使用 hotfix，并没有派上用场），weex 当然也有必要去体验一下。

这里先贴下[原文](http://awhisper.github.io/2016/07/22/Weex-ReactNative-JSPatch/)。

## weex 初体验

作为小白，最快了解和体验 weex 的办法，当然是寻求[weex 官方文档](https://weex.apache.org/cn/)的帮助。

Weex有一个[在线编写代码的平台](http://dotwe.org/vue/)，可以先去感受一下，weex 使用 vue 语法开发，如果你以前写过 vue，那就太棒了。

如果想要在自己的本本上感觉一下，那么就需要安装 weex 的环境了。

说起来，weex 的使用感与 vue 是基本一致的，阿里同样提供了 weex 的脚手架，这对于新手真的很友好，项目的模板与 vue 也基本一致，同样是使用 webpack 来启动服务和进行 hot reload 的，对于我这个前端小白，里面的各种 loader 真的是让人头大(╯﹏╰)。

## 使用 weex-toolkit
> weex-toolkit 是官方提供的一个脚手架命令行工具，你可以使用它进行 Weex 项目的创建，调试以及打包等功能。
>
> [使用 weex-toolkit 的文档](https://weex.apache.org/cn/tools/toolkit.html)

node 的安装这里先略过，保证 node 的版本 >= 6

```bash
node -v 			# 查看 node 的版本
node --version 		# 查看 node 的版本
```

首先是安装 weex-toolkit

```bash
npm install -g weex-toolkit
```

安装成功后，就可以愉快的去创建你的项目了

```bash
weex create weex-demo 			# 创建项目
weex platform add ios			# 添加 iOS 项目模板
weex run ios					# 运行 iOS 项目
```

顺利的话，你已经启动了你的 iOS 模拟器 ✌️

当然，你也许想要启动 weex 项目，自己修改点东西看看效果，你打开了项目的跟目录，观察了下 package.json 这个文件，项目目录下如果没有 node_modules 这个文件夹，首先需要 

```bash
npm install 			# 安装依赖包
```
安装完成后，开始启动服务

```bash
npm run serve			# 启动 serve 服务
npm run dev			# 自动编译
```

可能你在启动服务的时候会遇到一个错误

```bash
Vue packages version mismatch:

- vue@2.4.4

- vue-template-compiler@2.5.13

This may cause things to work incorrectly. Make sure to use the same version for both.

If you are using vue-loader@>=10.0, simply update vue-template-compiler.

If you are using vue-loader@<10.0 or vueify, re-installing vue-loader/vueify should bump vue-template-compiler to the latest.
```

不匹配的对象是 `vue` 和 `vue-template-compiler`。

这是由于 weex 要求他们完全匹配，但是你看了看你的 package.json，发现他们的版本号并没有什么问题，然后你把问题放到了 google 上，找到了很多同道中人，按照他们的方法试了个遍，发现依然没有解决问题，很难说这不是个悲伤的事实 ☹️

但是你并不是一无所获，有一个可能的原因 -- 在这之前你安装了全局的 vue，然后你在终端敲下了

```bash
vue -v
```
终端回应你了，他输出了 vue 的版本号，嗯，跟你的 package.json 里面并不一样...

现在有两个方式可以解决这个问题:

1. 升级全局的 vue 
2. 删除掉全局环境下的 vue

为了长远考虑，当然是删除掉全局环境下的 vue 比较靠谱，哈哈~

全局的 vue 安装在当前用户的目录下

```bash
cd ~
ls -a
```
找到 .vue 文件夹，删除他就可以了。

