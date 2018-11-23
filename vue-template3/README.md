# 模块说明

 1. 使用 webpack4
 2. 支持多模块项目
 3. 子模块支持独立运行、编译打包
 4. 支持生成 zip 包
 5. 简化代理配置
 6. 支持本地测试访问生产包
 7. 支持一键部署

``` bash
# 切换为官网：
npm config set registry https://registry.npmjs.org

#切换为淘宝镜像
npm config set registry https://registry.npm.taobao.org

# 安装依赖
npm install

# （单个模块）启动本地服务
npm run dev:模块名

# （所有模块）编译所有生产包
npm run build

# （单个模块）编译模块生产包
npm run build:模块名

# （所有模块）编译并生成 zip 生产包
npm run build:zip

# （单个模块）编译并生成 zip 生产包
npm run build:模块名:zip

# （单个模块）访问生产包
npm run start:模块名

# （单个模块）编译打包分析器报告
npm run build:模块名 --report

# （所有模块）一键部署
npm run deploy
npm run deploy u=root p=123456

# (单个模块) 一键部署
npm run deploy:模块名
npm run deploy:模块名 u=root p=123456
```
