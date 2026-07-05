# CUMT 数院电子资料库

> 中国矿业大学数学学院 · 核心课程资源共享平台

## 功能

- 📚 **课程资料展示** — 按年级/类别筛选查看各门课程信息
- 👨‍🏫 **教师链接** — 点击授课教师姓名可跳转至其个人主页
- 📖 **参考教材** — 每门课程列出推荐教材
- 📝 **试题直达** — 试题以超链接形式呈现，点击直接打开 PDF（预览与下载合一）
- 🔗 **友情链接** — 相关资源快速访问

## 本地开发

```bash
# 启动本地服务器
python -m http.server 8000
# 然后访问 http://localhost:8000
```

## 如何更新

### 添加/修改课程数据
编辑 `js/data.js` 文件，按以下格式添加课程对象：

```js
{
  id: 'course-id',
  name: '课程名称',
  nameEn: 'English Name',
  grade: '大一',       // 大一 | 大二 | 大三 | 大四
  category: '核心课',   // 基础课 | 核心课 | 选修课
  teacher: '教师名',
  teacherUrl: 'https://...',
  textbooks: ['教材1', '教材2'],
  exams: [
    { title: '试题名称', url: '/pdfs/filename.pdf' }
  ]
}
```

### 添加试题文件
将 PDF 文件放入 `pdfs/` 目录，确保 `js/data.js` 中对应的 `url` 路径正确。

## 部署

推送到 GitHub 仓库的 `main` 分支即可自动通过 GitHub Pages 部署。

## 致谢

- 设计灵感来自 [慕可的数学笔记](https://yyhmuke.com/class/note/)
- 字体使用 [Noto Sans SC](https://fonts.google.com/noto/specimen/Noto+Sans+SC)

## 许可

本站资料仅供学习交流使用，请勿用于商业用途。