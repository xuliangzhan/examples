# 项目说明

``` bash
# 切换为官网：
npm config set registry https://registry.npmjs.org

#切换为淘宝镜像
npm config set registry https://registry.npm.taobao.org

# 安装依赖
npm install

# 启动本地服务
npm run dev 或者 npm run serve

# 编译生产包
npm run build

# 编译并生成 zip 生产包
npm run build:zip 或者 npm run build zip=dist

# 测试生产包
npm run start

# 编译并测试生产包
npm run build:start

# 编译打包分析器报告
npm run build --report

# 编译打包并部署（使用 WinSCP 工具一键部署）
npm run deploy u=root p=123456
```