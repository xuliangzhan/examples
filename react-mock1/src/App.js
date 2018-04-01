import XEAjax from 'xe-ajax';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// 启动前端虚拟服务,自动判断 DEV 环境使用 Mock，生产环境打包编译时会自动忽略该代码块
if (process.env.NODE_ENV === 'development') {
  require('./mock')
}

XEAjax.interceptors.request.use((request, next) => {
  // 请求之前拦截器
  next()
})

XEAjax.interceptors.response.use((response, next) => {
  // 响应之后拦截器
  next()
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
