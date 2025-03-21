# 上海栉云科技有限公司官网

这是上海栉云科技有限公司的官方网站项目，专注于展示公司的AI应用和智能体开发能力。

## 项目概述

本项目是一个响应式公司官网，使用现代前端技术栈构建，旨在展示公司的产品、服务和技术实力。网站设计参考了 Manus.im 的风格和结构，但内容和品牌标识完全符合上海栉云科技有限公司的特点。

## 技术栈

- **框架**: Next.js 14 (React框架)
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **国际化**: 自定义Context API实现中英文切换
- **主题**: 支持明亮/暗黑模式切换
- **数据存储**: Supabase (PostgreSQL)
- **认证**: Supabase Auth
- **部署**: Vercel/自托管服务器

## 网站结构

网站包含以下主要部分：

1. **首页** - 展示公司核心价值和产品亮点
2. **产品** - 详细介绍公司的AI产品和解决方案
3. **技术** - 展示公司的技术能力和创新
4. **关于我们** - 公司简介、团队和文化
5. **加入我们** - 招聘信息
6. **演示** - 产品演示和交互体验
7. **联系方式** - 联系表单和联系信息
8. **后台管理** - 管理员后台，用于管理联系表单提交的数据

## 页面说明

### 首页 (`app/page.tsx`)
展示公司的核心价值主张、产品亮点和客户案例。

### 产品页 (`app/products/page.tsx`)
详细介绍公司的AI产品和解决方案，包括智能体平台、智能助手和数据分析平台等。

### 技术页 (`app/technology/page.tsx`)
展示公司的技术能力和研究方向，包括自然语言处理、机器学习、知识图谱和多模态交互等。

### 关于我们 (`app/about/page.tsx`)
介绍公司的历史、使命、愿景、团队和企业文化。

### 加入我们 (`app/careers/page.tsx`)
展示公司的招聘信息、职位描述和公司福利。

### 演示页 (`app/demo/page.tsx`)
提供产品的交互式演示，让访问者可以直观体验公司的AI技术和产品功能。

### 联系页 (`app/contact/page.tsx`)
提供联系表单和公司的联系信息。

### 后台管理系统 (`app/admin/*`)
管理员后台，用于管理联系表单提交的数据。包括：
- **登录页** (`app/admin/login/page.tsx`) - 管理员登录页面
- **仪表盘** (`app/admin/dashboard/page.tsx`) - 显示留言统计数据和最近留言
- **留言管理** (`app/admin/messages/page.tsx`) - 查看、标记和删除留言

## 特色功能

### 动画和交互效果
- 使用Framer Motion库实现丰富的动画效果
- 页面元素在滚动到视图中时会有淡入和滑动效果
- 卡片和按钮有悬停动画，增强用户交互体验
- 使用React Intersection Observer检测元素可见性，触发动画
- 所有页面保持一致的动画风格，提升整体用户体验
- 动画效果包括：
  - 淡入和滑动效果
  - 交错动画序列
  - 悬停时的缩放和旋转效果
  - 背景元素的视差效果

### 国际化支持
- 支持中文和英文两种语言
- 通过顶部导航栏的语言切换按钮可以切换语言
- 语言偏好会被保存在本地存储中

### 主题切换
- 支持明亮模式和暗黑模式
- 通过顶部导航栏的主题切换按钮可以切换主题
- 默认会根据用户系统偏好自动选择主题
- 主题偏好会被保存在本地存储中

### 联系表单数据存储
- 使用Supabase作为后端数据存储
- 联系表单提交的数据会存储到Supabase数据库中
- 实现了错误处理和表单验证
- 支持国际化的错误消息

### 后台管理系统
- 基于Supabase Auth的管理员认证
- 仪表盘显示留言统计数据和最近留言
- 留言管理页面支持查看、标记和删除留言
- 响应式设计，支持移动端和桌面端
- 分页功能，方便浏览大量留言数据

## 数据库设置

项目使用Supabase作为后端数据库。要设置数据库，请参考 `supabase/README.md` 文件中的说明。

## 本地开发

### 环境变量

在项目根目录创建 `.env.local` 文件，并添加以下环境变量：

```
NEXT_PUBLIC_SUPABASE_URL=你的Supabase项目URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=你的Supabase匿名密钥
```

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 启动开发服务器

```bash
npm run dev
# 或
yarn dev
```

### 构建生产版本

```bash
npm run build
# 或
yarn build
```

## 部署

项目可以部署到Vercel平台或自托管服务器上。

## 项目维护

本项目由上海栉云科技有限公司技术团队维护。 