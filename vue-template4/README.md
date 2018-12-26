# 项目说明

 1. 使用 webpack4
 2. 支持生成 zip 包 

``` bash
# 切换为官网：
npm config set registry https://registry.npmjs.org

#切换为淘宝镜像
npm config set registry https://registry.npm.taobao.org

# 安装依赖
npm install

# 启动本地服务
npm run dev

# 编译生产包
npm run build

# 单元测试
npm run unit

# 端到端测试
npm run e2e

# 单元测试和端到端测试
npm run test

# 编译并生成 zip 生产包
npm run build:zip 或者 npm run build zip=dist

# 编译打包分析器报告
npm run build --report
```
