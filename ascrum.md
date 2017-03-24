# 简介
该项目是一款项目管理工具。为遵循scrum方法的团队而设计。目标是辅助团队管理scrum产物：项目及其工作列表、冲刺及其工作列表、任务、进度图等。该项目还有完整的管理模块，用于管理用户和他们所在的项目。
# 技术栈
1. 持久化存储
基于文档的Mongodb，更适合Javascript开发环境。
使用MongoLab，mongodb的线上寄存版本。rest接口风格。

2.  back-end
中间件往往提供安全服务（认证）和查证访问许可（授权）。本项目选择基于javascript的解决方案： node.js.
构建服务器端组件所需的nodejs库。
Express, 服务器端web应用框架，提供路由、静态资源及数据服务。
Passport， node.js的安全中间件。
Restler， nodejs的http客户端。

3. 第三方javascript库
jQuery

4. Bootstrap CSS
使用Bootstrap 的LESS模板。

# 构建系统
自动化所有事情
尽早报错，清晰报错
不同的工作流，不同的命令
构建脚本同样是代码

# 工具
grunt.js 基于任务的命令行构建工具，为javascript项目服务

# 测试库与工具 
Jasmine。 测试javascript代码的框架，源于行为驱动测试运动 （behavior driven development）BDD
Karma runner。 用于执行javascript测试。