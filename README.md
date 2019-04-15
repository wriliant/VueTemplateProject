# VueTelemplateProject

### 使用

将本项目下载至本地，使用命令npm install 安装好项目所需的依赖包，使用npm run dev即可运行项目，使用npm run build即可打包项目。

### 介绍

本项目是vue+elementUI的模板项目，项目已经安装好了elementUI,axios,vuex,vue-router等项目基本依赖包，本项目解决了系统打性能问题，多环境配置以及api的集中管理等，本项目下载到本地装包后就能直接运行，减少开发者生成项目并且配置时间，提高开发效率。欢迎各开发者好的idea，及时补充一起完善整个vue模板项目

1：解决项目部署缓存问题
webpack.prod,conf.js文件中生成一个随机数，为打包后的js和css文件名添加一个随机数
2：解决项目打包后js文件过大，影响页面加载
vue-router懒加载和将相同模块下的组件打包进一个js文件中
3：配置多种开发环境
prod.env.js中配置多种开发环境，http.js中设置了根据域名选择不同的请求地址
4：api.js管理这项目所有的请求地址，组件中需要则按需引入，集中管理便于后期维护

### 项目目录结构

├─build			            //构建相关
├─config		            //配置相关
├─src			            //项目源代码
│  ├─api		            //项目所有请求管理以及axios基本配置
│  │  ├─api.js              //项目中所有请求
│  │  └─http.js             //axios基本配置以及get，post方法的封装
│  ├─assets		            //资源文件夹
│  ├─components	            //组件
│  ├─filtres		        //全局过滤器
│  ├─router		            //项目路由
│  ├─store		            //全局store管理
│  ├─utils		            //工具包
│  ├─App.vue	            //入口页面
│  └─main.js    	        //入口js文件，加载组件，初始化等
├─static			        //第三方不打包资源
├─.editorconfig             //帮助开发人员在不同的编辑器和IDE之间定义和维护一致的编码样式
├─.babelrc                  //babel-loade
├─.gitignore                //Git忽略项
├─index.html                //html模板文件
└─package.json              //package.json