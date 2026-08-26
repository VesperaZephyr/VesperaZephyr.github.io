# CUMT 数院电子资料库

> 中国矿业大学数学学院 · 核心课程资源共享平台

## 功能

- 📚 **课程资料展示** — 按 2024 版培养方案课程体系（专业大类基础 / 专业主干 / 专业选修 / 专业拓展）筛选查看课程信息
- 👨‍🏫 **教师链接** — 点击授课教师姓名可跳转至其个人主页
- 📖 **参考教材** — 每门课程列出推荐教材
- 📝 **试题直达** — 试题以超链接形式呈现，点击直接打开 PDF（预览与下载合一）
- 📐 **数学笔记** — 独立栏目，MathJax 渲染 LaTeX 公式，笔记页面位于 `notes/` 目录
- 🔗 **友情链接** — 学术主页、资源百科、在线工具一站式导航
- 🌓 **深浅色主题** — 初始跟随系统偏好，可手动切换并记忆于本地

## 本地开发

```bash
python -m http.server 8000 --directory F:\VesperaZephyr.github.io
# 访问 http://localhost:8000
```

## 如何更新

### 添加/修改课程数据
编辑 `js/data.js`，按以下格式添加课程对象（分类依据 2024 版培养方案）：

```js
{
  id: 'course-id',
  name: '课程名称',
  nameEn: 'English Name',
  section: '专业主干课程',            // 专业大类基础课程 | 专业主干课程 | 专业选修课程 | 专业拓展课程
  subsection: '核心数学课组',          // 二级分类; 专业主干课程可为数组（多课组共享）
  credits: 3,
  term: '秋',                        // 秋 | 春
  suggested: '5',                    // 建议选修学期
  teachers: [{ name: '教师名', url: 'https://...' }],
  textbooks: ['教材1'],
  examScope: '考试范围说明',
  reviewMaterials: [{ title: '资料名', url: '/pdfs/filename.pdf' }],
  exams: [
    { year: '2024-2025', title: '试题名称', url: '/pdfs/filename.pdf' }
  ]
}
```

### 添加试题
将 PDF 放入 `pdfs/` 目录，确保 `js/data.js` 中 `url` 路径正确。

### 添加数学笔记
笔记源文件维护在 Obsidian 仓库 `F:\Obsidian Vault\数学笔记与总结`，构建脚本会读取其中的 `.md` 文件并渲染为 `notes/*.html`、生成索引 `js/notes-data.js`：

```bash
python build_notes.py
# 可指定其他仓库: python build_notes.py "其他路径"
```

支持 Markdown 公式（`$...$` / `$$...$$`，由 MathJax 渲染）、Obsidian 双向链接 `[[笔记]]` 与图片嵌入 `![[图片.png]]`（本地图片自动复制到 `notes/assets/`）。依赖 `pip install markdown2`。

若手动新增笔记页面，复制现有 `notes/*.html` 作为模板，并在 `js/notes-data.js` 中登记。

## 部署

```bash
cd F:\VesperaZephyr.github.io
git add -A
git commit -m "更新"
git push
```

## 致谢

- 设计灵感来自 [慕可的数学笔记](https://yyhmuke.com/class/note/)
- 链接页大部分条目整理自[慕可的神秘小导航](https://yyhmuke.com/links/)
- 字体使用 [Fira Sans](https://fonts.google.com/specimen/Fira+Sans) 与 [JetBrains Mono](https://www.jetbrains.com/lp/mono/)

## 许可

本站资料仅供学习交流使用，请勿用于商业用途。