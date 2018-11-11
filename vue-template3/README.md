# 项目说明

 1. 支持多模块项目
 2. 子模块支持独立运行、编译打包
 3. 支持生成 zip 包
 4. 简化代理配置
 5. 支持本地测试访问生产包
 6. 支持一键部署

``` bash
# 切换为官网：
npm config set registry https://registry.npmjs.org

#切换为淘宝镜像
npm config set registry https://registry.npm.taobao.org

# 安装依赖
npm install

# （单个项目）启动本地服务
npm run dev:项目名

# （所有项目）编译所有生产包
npm run build

# （单个项目）编译项目生产包
npm run build:项目名

# （所有项目）编译并生成 zip 生产包
npm run build:zip

# （单个项目）编译并生成 zip 生产包
npm run build:项目名:zip

# （单个项目）访问生产包
npm run start:项目名

# （单个项目）编译打包分析器报告
npm run build:项目名 --report

# （所有项目）一键部署
npm run deploy
npm run deploy u=root p=123456

# (单个项目) 一键部署
npm run deploy:项目名
npm run deploy:项目名 u=root p=123456
```
