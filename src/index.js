import React from 'react'
import dva from 'dva'
import createLoading from 'dva-loading'
import App from './App'

// 创建应用
const app = dva()
// 使用插件
app.use(createLoading())
// 注册model
app.model(require('./models/app').default)
// 注册视图
app.router(() => <App />)
// 启动应用
app.start('#root')
