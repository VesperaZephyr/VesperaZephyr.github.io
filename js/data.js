/**
 * CUMT 数院资料库 — 课程数据
 *
 * 分类依据: 数学与应用数学专业 2024 版本科人才培养方案
 *
 * 数据模型:
 *   id         — 唯一标识
 *   name       — 课程中文名
 *   nameEn     — 课程英文名（可选）
 *   section    — 一级分类: 专业大类基础课程 | 专业主干课程 | 专业选修课程 | 专业拓展课程
 *   subsection — 二级分类（专业主干课程可为数组, 表示课程属于多个课组）:
 *                  专业大类基础必修课程 | 专业大类基础实践课程
 *                  核心数学课组 | 金融数学课组 | 计算、控制与优化课组
 *                  所有课组 | 本研一体化课程 | 其他课组拓展课程
 *   credits    — 学分
 *   term       — 开课学期: 秋 | 春
 *   suggested  — 建议选修学期（如 '1'、'5 或 7'）
 *   note       — 备注（教学示范课程、二选一等）
 *   teachers   — 授课教师数组，每项 { name, url }，url 可选
 *   textbooks  — 参考教材数组；每项可为字符串（无电子版）或 { title, url }（电子版 PDF）
 *   examScope  — 考试范围说明（可选）
 *   reviewMaterials — 复习资料数组，每项 { title, url }
 *   exams      — 试题数组，每项 { year, title, url }
 */

const COURSES = [
  // ============================================================
  //  专业大类基础课程 · 专业大类基础必修课程
  // ============================================================
  {
    id: 'math-analysis-1',
    name: '数学分析(1)',
    nameEn: 'Mathematical Analysis I',
    section: '专业大类基础课程',
    subsection: '专业大类基础必修课程',
    credits: 5,
    term: '秋',
    suggested: '1',
    note: '教学方法示范课程',
    teachers: [
      { name: '张杰', url: 'https://math.cumt.edu.cn/6d/eb/c9104a355819/page.htm' },
      { name: '陈毅', url: 'https://math.cumt.edu.cn/6d/a4/c9104a355748/page.htm' },
      { name: '范胜君', url: 'https://math.cumt.edu.cn/6d/9d/c9104a355741/page.htm' },
    ],
    textbooks: [
      { title: '《数学分析》(第五版·上册) 华东师范大学数学系 编，高等教育出版社', url: '/pdfs/books/数学分析(第五版)上册 华东师范大学.pdf' }
    ],
    examScope: '实数集与函数(第一章)、数列极限(第二章)、函数极限(第三章)、函数的连续性(第四章)、导数与微分(第五章)、微分中值定理及其应用(第六章)、实数的完备性(第七章)',
    exams: [
      { year: '2024-2025', title: '2024-2025-1_数学分析（1）_B卷', url: '/pdfs/2024-2025-1_数学分析（1）_B卷.pdf' },
      { year: '2025-2026', title: '2025-2026-1数学分析(1)B卷', url: '/pdfs/2025-2026-1数学分析(1)B卷.pdf' }
    ]
  },
  {
    id: 'math-analysis-2',
    name: '数学分析(2)',
    nameEn: 'Mathematical Analysis II',
    section: '专业大类基础课程',
    subsection: '专业大类基础必修课程',
    credits: 5,
    term: '春',
    suggested: '2',
    teachers: [
      { name: '张杰', url: 'https://math.cumt.edu.cn/6d/eb/c9104a355819/page.htm' },
      { name: '杨晓波', url: 'https://math.cumt.edu.cn/6d/e7/c9104a355815/page.htm' },
      { name: '陈毅', url: 'https://math.cumt.edu.cn/6d/a4/c9104a355748/page.htm' }
    ],
    textbooks: [
      { title: '《数学分析》(第五版·上册) 华东师范大学数学系 编，高等教育出版社', url: '/pdfs/books/数学分析(第五版)上册 华东师范大学.pdf' },
      { title: '《数学分析》(第五版·下册) 华东师范大学数学系 编，高等教育出版社', url: '/pdfs/books/数学分析(第五版)下册 华东师范大学.pdf' }
    ],
    examScope: '不定积分(第八章)、定积分(第九章)、定积分的应用(第十章)、反常积分(第十一章)、级数(第十二章)、函数列与函数项级数(第十三章)、幂级数(第十四章)、傅里叶级数(第十五章)',
    exams: [
      { year: '2023-2024', title: '2023-2024数分2期末试题A及解答', url: '/pdfs/2023-2024数分2期末试题A及解答.pdf' },
      { year: '2023-2024', title: '2023-2024数分2期末试题B及解答', url: '/pdfs/2023-2024数分2期末试题B及解答.pdf' },
      { year: '2024-2025', title: '2024-2025学年2数学分析2期末试题(B卷)', url: '/pdfs/2024-2025学年2数学分析2期末试题(B卷).pdf' },
      { year: '2024-2025', title: '2024-2025数分2期末试题B及解答', url: '/pdfs/2024-2025数分2期末试题B及解答.pdf' },
      { year: '2025-2026', title: '2025-2026-2数学分析2 A卷', url: '/pdfs/2025-2026-2数学分析2 A卷.pdf' }
    ]
  },
  {
    id: 'math-analysis-3',
    name: '数学分析(3)',
    nameEn: 'Mathematical Analysis III',
    section: '专业大类基础课程',
    subsection: '专业大类基础必修课程',
    credits: 5,
    term: '秋',
    suggested: '3',
    teachers: [
      { name: '岳晓蕊', url: 'https://math.cumt.edu.cn/a4/3a/c9104a566330/page.htm' },
      { name: '王林林', url: 'https://math.cumt.edu.cn/6d/da/c9104a355802/page.htm' },
      { name: '杨晓波', url: 'https://math.cumt.edu.cn/6d/e7/c9104a355815/page.htm' }
    ],
    textbooks: [
      { title: '《数学分析》(第五版·下册) 华东师范大学数学系 编，高等教育出版社', url: '/pdfs/books/数学分析(第五版)下册 华东师范大学.pdf' }
    ],
    examScope: '多元函数的极限与连续(第十六章)、多元函数微分学(第十七章)、隐函数定理及其应用(第十八章)、含参量积分(第十九章)、曲线积分(第二十章)、重积分(第二十一章)、曲面积分(第二十二章)',
    exams: [
      { year: '2024-2025', title: '2024-2025-1数学分析(3)A卷试题解答', url: '/pdfs/2024-2025-1数学分析(3)A卷试题解答.pdf' },
      { year: '2025-2026', title: '2025-2026-1数学分析(3)模拟卷A卷', url: '/pdfs/2025-2026-1数学分析(3)模拟卷A卷.pdf' }
    ]
  },
  {
    id: 'advanced-algebra-1',
    name: '高等代数(1)',
    nameEn: 'Advanced Algebra I',
    section: '专业大类基础课程',
    subsection: '专业大类基础必修课程',
    credits: 4.5,
    term: '秋',
    suggested: '1',
    teachers: [
      { name: '张驰', url: 'https://math.cumt.edu.cn/2b/63/c9104a535395/page.htm' },
      { name: '王志俊', url: 'https://math.cumt.edu.cn/6d/e0/c9104a355808/page.htm' },
      { name: '夏春光', url: 'https://math.cumt.edu.cn/6d/e4/c9104a355812/page.htm' },
    ],
    textbooks: [
      { title: '《高等代数》(第五版) 北京大学数学系 编，高等教育出版社', url: '/pdfs/books/高等代数(第五版) 北京大学数学系.pdf' }
    ],
    examScope: '多项式(第一章)、行列式(第二章)、线性方程组(第三章)、矩阵(第四章)',
    exams: [
      { year: '2024-2025', title: '2024-2025-1高等代数1（A）', url: '/pdfs/2024-2025-1高等代数1（A）.pdf' },
      { year: '2024-2025', title: '2024-2025-1高等代数1（B）', url: '/pdfs/2024-2025-1高等代数1（B）.pdf' },
      { year: '2024-2025', title: '2024-2025高代1期末试题及解答', url: '/pdfs/2024-2025高代1期末试题及解答.pdf' },
      { year: '2025-2026', title: '2025-2026-1高等代数(1)B卷', url: '/pdfs/2025-2026-1高等代数(1)B卷.pdf' }
    ]
  },
  {
    id: 'advanced-algebra-2',
    name: '高等代数(2)',
    nameEn: 'Advanced Algebra II',
    section: '专业大类基础课程',
    subsection: '专业大类基础必修课程',
    credits: 4.5,
    term: '春',
    suggested: '2',
    teachers: [
      { name: '张驰', url: 'https://math.cumt.edu.cn/2b/63/c9104a535395/page.htm' },
      { name: '王登银', url: 'https://math.cumt.edu.cn/6d/d8/c9104a355800/page.htm' },
      { name: '夏春光', url: 'https://math.cumt.edu.cn/6d/e4/c9104a355812/page.htm' }
    ],
    textbooks: [
      { title: '《高等代数》(第五版) 北京大学数学系 编，高等教育出版社', url: '/pdfs/books/高等代数(第五版) 北京大学数学系.pdf' }
    ],
    examScope: '第五章(二次型)、第六章(线性空间)、第七章(线性变换)、第九章(欧几里得空间)',
    exams: [
      { year: '2023-2024', title: '2023-2024高代2期末试题A及解答', url: '/pdfs/2023-2024高代2期末试题A及解答.pdf' },
      { year: '2023-2024', title: '2023-2024高代2期末试题B及解答', url: '/pdfs/2023-2024高代2期末试题B及解答.pdf' },
      { year: '2024-2025', title: '2024-2025-2高等代数2(A)', url: '/pdfs/2024-2025-2高等代数2(A).pdf' },
      { year: '2024-2025', title: '2024-2025学年2高等代数2押题A卷', url: '/pdfs/2024-2025学年2高等代数2押题A卷.pdf' },
      { year: '2024-2025', title: '2024-2025学年2高等代数2试题A卷', url: '/pdfs/2024-2025学年2高等代数2试题A卷.pdf' },
      { year: '2024-2025', title: '2024-2025高代2期末试题A及解答', url: '/pdfs/2024-2025高代2期末试题A及解答.pdf' },
      { year: '2025-2026', title: '2025-2026学年高等代数2 A卷试题', url: '/pdfs/2025-2026学年高等代数2 A卷试题.pdf' }
    ]
  },
  {
    id: 'analytic-geometry',
    name: '空间解析几何',
    nameEn: 'Analytic Geometry',
    section: '专业大类基础课程',
    subsection: '专业大类基础必修课程',
    credits: 2.5,
    term: '春',
    suggested: '2',
    note: '教学方法示范课程',
    teachers: [
      { name: '任新安', url: 'https://math.cumt.edu.cn/6d/cb/c9104a355787/page.htm' },
      { name: '汝强', url: 'https://math.cumt.edu.cn/6d/cc/c9104a355788/page.htm' },
      { name: '张玉峰', url: 'https://math.cumt.edu.cn/6d/f1/c9104a355825/page.htm' }
    ],
    textbooks: [
      { title: '《解析几何教程》(第三版) 廖华奎、王宝富 编，科学出版社', url: '/pdfs/books/解析几何教程(第三版) 廖华奎 王宝富.pdf' }
    ],
    reviewMaterials: [
      { title: '空间解析几何复习', url: '/pdfs/空间解析几何复习.pdf' }
    ],
    examScope: '向量代数(第一章)、直线与平面(第二章)、常见曲面(第三章)、二次曲线和二次曲面(第四章)',
    exams: [
      { year: '2016-2017', title: '2016-2017-2空间解析几何A卷', url: '/pdfs/2016-2017-2空间解析几何A卷.pdf' },
      { year: '2016-2017', title: '2016-2017-2空间解析几何A卷答案', url: '/pdfs/2016-2017-2空间解析几何A卷答案.pdf' },
      { year: '2018-2019', title: '2018-2019-2-空间解析几何A卷', url: '/pdfs/2018-2019-2-空间解析几何A卷.pdf' },
      { year: '2018-2019', title: '2018-2019解析几何A', url: '/pdfs/2018-2019解析几何A..pdf' },
      { year: '2021-2022', title: '2021-2022-2空间解析几何A卷', url: '/pdfs/2021-2022-2空间解析几何A卷.pdf' },
      { year: '2021-2022', title: '2021-2022-2空间解析几何B卷', url: '/pdfs/2021-2022-2空间解析几何B卷.pdf' },
      { year: '2022-2023', title: '2022-2023-2空间解析几何A卷', url: '/pdfs/2022-2023-2空间解析几何A卷.pdf' },
      { year: '2022-2023', title: '2022-2023-2空间解析几何B卷', url: '/pdfs/2022-2023-2空间解析几何B卷.pdf' },
      { year: '2024-2025', title: '2024-2025学年(2)空间解析几何A卷', url: '/pdfs/2024-2025学年(2)空间解析几何A卷.pdf' },
      { year: '2025-2026', title: '2025-2026空间解析几何A卷', url: '/pdfs/2025-2026空间解析几何A卷.pdf' },
      { year: '往年', title: '一套往年试卷', url: '/pdfs/一套往年试卷.pdf' }
    ]
  },
  {
    id: 'probability',
    name: '概率论',
    nameEn: 'Probability Theory',
    section: '专业大类基础课程',
    subsection: '专业大类基础必修课程',
    credits: 4,
    term: '秋',
    suggested: '3',
    teachers: [
      { name: '朱松', url: 'https://math.cumt.edu.cn/6d/f5/c9104a355829/page.htm' },
      { name: '杨旭', url: 'https://math.cumt.edu.cn/88/7b/c9104a493691/page.htm' },
      { name: '韩苗', url: 'https://math.cumt.edu.cn/6d/ac/c9104a355756/page.htm' }
    ],
    textbooks: [
      { title: '《概率论与数理统计教程》(第四版) 茆诗松 程依明 濮晓龙 等 编，高等教育出版社', url: '/pdfs/books/概率论与数理统计教程(第四版) 茆诗松.pdf' }
    ],
    examScope: '随机事件与概率(第一章)、随机变量及其分布(第二章)、多维随机变量及其分布(第三章)、大数定律与中心极限定理(第四章)',
    exams: [
      { year: '2023-2024', title: '2023-2024概率论A卷', url: '/pdfs/2023-2024概率论A卷.pdf' },
      { year: '2023-2024', title: '2023-2024概率论A卷试题及解答', url: '/pdfs/2023-2024概率论A卷试题及解答.pdf' },
      { year: '2024-2025', title: '2024-2025概率论A卷', url: '/pdfs/2024-2025概率论A卷.pdf' },
      { year: '2024-2025', title: '2024-2025概率论A卷试题及解答', url: '/pdfs/2024-2025概率论A卷试题及解答.pdf' },
      { year: '2025-2026', title: '2025-2026概率论模拟卷A卷', url: '/pdfs/2025-2026概率论模拟卷A卷.pdf' },
      { year: '2025-2026', title: '2025-2026概率论模拟卷B卷', url: '/pdfs/2025-2026概率论模拟卷B卷.pdf' },
      { year: '2025-2026', title: '2025-2026概率论模拟A卷解答', url: '/pdfs/2025-2026概率论模拟A卷解答.pdf' },
      { year: '2025-2026', title: '2025-2026概率论模拟B卷解答', url: '/pdfs/2025-2026概率论模拟B卷解答.pdf' }
    ]
  },
  {
    id: 'math-statistics',
    name: '数理统计',
    nameEn: 'Mathematical Statistics',
    section: '专业大类基础课程',
    subsection: '专业大类基础必修课程',
    credits: 3,
    term: '春',
    suggested: '4',
    note: '课程思政示范课程',
    teachers: [
      { name: '朱松', url: 'https://math.cumt.edu.cn/6d/f5/c9104a355829/page.htm' },
      { name: '韩苗', url: 'https://math.cumt.edu.cn/6d/ac/c9104a355756/page.htm' },
      { name: '芮文娟', url: 'https://math.cumt.edu.cn/6d/cd/c9104a355789/page.htm' }
    ],
    textbooks: [
      { title: '《概率论与数理统计教程》(第四版) 茆诗松 程依明 濮晓龙 等 编，高等教育出版社', url: '/pdfs/books/概率论与数理统计教程(第四版) 茆诗松.pdf' }
    ],
    reviewMaterials: [
      { title: '数理统计基础知识清单(必背)', url: '/pdfs/数理统计基础知识清单(必背).pdf' }
    ],
    examScope: '统计量及其分布(第五章)、参数估计(第六章)、假设检验(第七章)、方差分析与回归分析(第八章)',
    exams: [
      { year: '2021-2022', title: '2021-2022-2数理统计A卷', url: '/pdfs/2021-2022-2数理统计A卷.pdf' },
      { year: '2022-2023', title: '2022-2023-2数理统计A卷', url: '/pdfs/2022-2023-2数理统计A卷.pdf' },
      { year: '2023-2024', title: '2023-2024-2数理统计A卷', url: '/pdfs/2023-2024-2数理统计A卷.pdf' },
      { year: '2024-2025', title: '2024-2025-2数理统计A卷', url: '/pdfs/2024-2025-2数理统计A卷.pdf' },
      { year: '2024-2025', title: '2024-2025-2数理统计B卷', url: '/pdfs/2024-2025-2数理统计B卷.pdf' },
      { year: '往年', title: '数理统计近四年5套真题参考答案', url: '/pdfs/数理统计近四年5套真题参考答案.pdf' }
    ]
  },
  {
    id: 'odes',
    name: '常微分方程(双语)',
    nameEn: 'Ordinary Differential Equations',
    section: '专业大类基础课程',
    subsection: '专业大类基础必修课程',
    credits: 3.5,
    term: '秋',
    suggested: '3',
    teachers: [
      { name: '张慧星', url: 'https://math.cumt.edu.cn/6d/ea/c9104a355818/page.htm' },
      { name: '李争康(暂无教师主页)' },
      { name: '田守富', url: 'https://math.cumt.edu.cn/ed/34/c9104a585012/page.htm' }
    ],
    textbooks: [
      { title: '《Ordinary Differential Equations》(第二版) 张慧星 杨晓波等 主编，中国矿业大学出版社', url: '/pdfs/books/Ordinary Differential Equations(第二版) 张慧星 杨晓波.pdf' }
    ],
    reviewMaterials: [
      { title: 'Solutions to Ordinary Differential Equations (By Fingolfin)', url: '/pdfs/Solutions to Ordinary Differential Equations (By Fingolfin).pdf' }
    ],
    examScope: 'Elementary Integration Method(Chapter 1), Linear Systems of Differential Equations(Chapter 2), High Order Linear Differential Equations(Chapter 3), Existence and Uniqueness of Solutions(Chapter 4, 4.2)',
    exams: [
      { year: '2025-2026', title: '2025-2026常微分方程(双语)A卷回忆版', url: '/pdfs/2025-2026常微分方程(双语)A卷回忆版.pdf' },
      { year: '往年', title: '常微分方程模拟卷', url: '/pdfs/常微分方程模拟卷.pdf' }
    ]
  },
  {
    id: 'numerical-analysis',
    name: '数值分析',
    nameEn: 'Numerical Analysis',
    section: '专业大类基础课程',
    subsection: '专业大类基础必修课程',
    credits: 3.5,
    term: '春',
    suggested: '4',
    teachers: [
      { name: '王海军', url: 'https://math.cumt.edu.cn/6d/d9/c9104a355801/page.htm' },
      { name: '金花', url: 'https://math.cumt.edu.cn/6d/af/c9104a355759/page.htm' },
      { name: '曹德欣', url: 'https://math.cumt.edu.cn/6e/75/c9104a355957/page.htm' },
      { name: '郭彦', url: 'https://math.cumt.edu.cn/6d/ab/c9104a355755/page.htm' }
    ],
    textbooks: [
      { title: '《计算方法》(第三版) 曹德欣 曹璎珞 等 编，中国矿业大学出版社', url: '/pdfs/books/计算方法(第三版) 曹德欣 曹璎珞.pdf' }
    ],
    reviewMaterials: [
      { title: '数值分析基础知识清单(必背)', url: '/pdfs/数值分析基础知识清单(必背).pdf' },
      { title: '(数值分析典型例题) 差分格式截断误差的首项的求法和绝对稳定区间', url: '/pdfs/(数值分析典型例题) 差分格式截断误差的首项的求法和绝对稳定区间.pdf' }
    ],
    examScope: '绪论(第一章)、非线性方程求解(第二章)、线性方程组解法(第三章)、插值法(第四章)、曲线拟合和函数逼近(第五章)、数值积分和数值微分(第六章)、常微分方程数值解法(第七章)',
    exams: [
      { year: '2024-2025', title: '2024-2025-2-数值分析-试题(A)(复刻)', url: '/pdfs/2024-2025-2-数值分析-试题(A)(复刻).pdf' },
      { year: '2024-2025', title: '2024-2025第二学期数值分析A卷试题及保姆级式解析', url: '/pdfs/2024-2025第二学期数值分析A卷试题及保姆级式解析.pdf' },
      { year: '2025-2026', title: '2025-2026-2数值分析A卷(回忆)', url: '/pdfs/2025-2026-2数值分析A卷(回忆).pdf' },
      { year: '2025-2026', title: '2025-2026数值分析预测A卷', url: '/pdfs/2025-2026数值分析预测A卷.pdf' },
      { year: '往年', title: '数值分析_中国矿业大学课程考试试卷A', url: '/pdfs/数值分析_中国矿业大学课程考试试卷A.pdf' },
      { year: '往年', title: '数值分析_中国矿业大学课程考试试卷B', url: '/pdfs/数值分析_中国矿业大学课程考试试卷B.pdf' },
      { year: '往年', title: '数值分析练习A卷解答', url: '/pdfs/数值分析练习A卷解答.pdf' },
      { year: '往年', title: '数值分析练习B卷解答', url: '/pdfs/数值分析练习B卷解答.pdf' }
    ]
  },
  {
    id: 'real-analysis',
    name: '实变函数',
    nameEn: 'Functions of Real Variables',
    section: '专业大类基础课程',
    subsection: '专业大类基础必修课程',
    credits: 3,
    term: '春',
    suggested: '4',
    teachers: [
      { name: '胡志刚', url: 'https://math.cumt.edu.cn/6d/ad/c9104a355757/page.htm' },
      { name: '陈毅', url: 'https://math.cumt.edu.cn/6d/a4/c9104a355748/page.htm' },
      { name: '陈小林', url: 'https://math.cumt.edu.cn/6d/a3/c9104a355747/page.htm' }
    ],
    textbooks: [
      { title: '《实变函数与泛函分析基础》(第四版) 程其襄 张奠宙 胡善文 薛以锋 编，高等教育出版社', url: '/pdfs/books/实变函数与泛函分析基础(第四版) 程其襄.pdf' }
    ],
    reviewMaterials: [
      { title: '实变函数期末知识整理', url: '/pdfs/实变函数期末知识整理.pdf' }
    ],
    examScope: '集合论(第一章)、点集(第二章)、测度论(第三章)、可测函数(第四章)、积分论(第五章)',
    exams: [
      { year: '2022', title: '2022春-实变函数-A卷（回忆）', url: '/pdfs/2022春-实变函数-A卷（回忆）.pdf' },
      { year: '2024-2025', title: '2024-2025-2-实变函数-试题(A)(回忆)', url: '/pdfs/2024-2025-2-实变函数-试题(A)(回忆).pdf' },
      { year: '2024-2025', title: '2024-2025-2实变函数A卷解答', url: '/pdfs/2024-2025-2实变函数A卷解答..pdf' },
      { year: '2025-2026', title: '2025-2026-2实变函数(A)卷(回忆)', url: '/pdfs/2025-2026-2实变函数(A)卷(回忆).pdf' },
      { year: '往年', title: '实变函数模拟试卷(1)', url: '/pdfs/实变函数模拟试卷(1).pdf' },
      { year: '往年', title: '实变函数模拟试卷(2)', url: '/pdfs/实变函数模拟试卷(2).pdf' }
    ]
  },
  {
    id: 'operations-research',
    name: '运筹学B',
    nameEn: 'Operations Research',
    section: '专业大类基础课程',
    subsection: '专业大类基础必修课程',
    credits: 3.5,
    term: '春',
    suggested: '6',
    teachers: [
      { name: '付乳燕', url: 'https://math.cumt.edu.cn/6d/aa/c9104a355754/page.htm' }
    ],
    textbooks: [
      '《Operation Research》',
      { title: '《运筹学》(第2版) 段滋明 苗连英 主编，中国矿业大学出版社', url: '/pdfs/books/运筹学(第2版) 段滋明 苗连英.pdf' }
    ]
  },
  // ============================================================
  //  专业大类基础课程 · 专业大类基础实践课程
  // ============================================================
  {
    id: 'analysis-algebra-practice-1',
    name: '数学分析与高等代数实践(1)',
    section: '专业大类基础课程',
    subsection: '专业大类基础实践课程',
    credits: 1,
    term: '秋',
    suggested: '1'
  },
  {
    id: 'analysis-algebra-practice-2',
    name: '数学分析与高等代数实践(2)',
    section: '专业大类基础课程',
    subsection: '专业大类基础实践课程',
    credits: 1,
    term: '春',
    suggested: '2'
  },
  {
    id: 'analysis-practice',
    name: '数学分析实践',
    section: '专业大类基础课程',
    subsection: '专业大类基础实践课程',
    credits: 1,
    term: '秋',
    suggested: '3'
  },
  {
    id: 'comprehensive-practice',
    name: '基础数学综合实践 / 应用数学综合实践',
    section: '专业大类基础课程',
    subsection: '专业大类基础实践课程',
    credits: 1.5,
    term: '秋',
    suggested: '6',
    note: '二选一'
  },
  {
    id: 'numerical-analysis-practice',
    name: '数值分析实践',
    section: '专业大类基础课程',
    subsection: '专业大类基础实践课程',
    credits: 1,
    term: '春',
    suggested: '4'
  },
  {
    id: 'operations-research-practice',
    name: '运筹学实践',
    section: '专业大类基础课程',
    subsection: '专业大类基础实践课程',
    credits: 1,
    term: '春',
    suggested: '6'
  },

  // ============================================================
  //  专业主干课程 (至少修读一个课组, 泛函分析为各课组共享)
  // ============================================================
  {
    id: 'functional-analysis',
    name: '泛函分析',
    nameEn: 'Functional Analysis',
    section: '专业主干课程',
    subsection: ['核心数学课组', '金融数学课组', '计算、控制与优化课组'],
    credits: 3,
    term: '秋',
    suggested: '5',
    teachers: [
      { name: '陈太勇', url: 'https://math.cumt.edu.cn/6d/a2/c9104a355746/page.htm' },
      { name: '陈小林', url: 'https://math.cumt.edu.cn/6d/a3/c9104a355747/page.htm' }
    ],
    textbooks: [
      { title: '《实变函数与泛函分析基础》(第四版) 程其襄 张奠宙 胡善文 薛以锋 编，高等教育出版社', url: '/pdfs/books/实变函数与泛函分析基础(第四版) 程其襄.pdf' }
    ],
    exams: [
      { year: '2025-2026', title: '2025-2026-1泛函分析', url: '/pdfs/2025-2026-1泛函分析.pdf' }
    ]
  },
  {
    id: 'abstract-algebra',
    name: '抽象代数',
    nameEn: 'Abstract Algebra',
    section: '专业主干课程',
    subsection: '核心数学课组',
    credits: 3,
    term: '秋',
    suggested: '5',
    teachers: [
      { name: '张驰', url: 'https://math.cumt.edu.cn/2b/63/c9104a535395/page.htm' }
    ],
    textbooks: [
      { title: '《抽象代数基础》(第二版) 唐忠明 编，高等教育出版社', url: '/pdfs/books/抽象代数基础(第二版) 唐忠明.pdf' }
    ],
    exams: [
      { year: '2021-2022', title: '2021-2022-1抽象代数(A)', url: '/pdfs/2021-2022-1抽象代数(A).pdf' },
      { year: '2021-2022', title: '2021-2022-1抽象代数(B)', url: '/pdfs/2021-2022-1抽象代数(B).pdf' },
      { year: '2022-2023', title: '2022-2023-1抽象代数(A)', url: '/pdfs/2022-2023-1抽象代数(A).pdf' },
      { year: '2022-2023', title: '2022-2023-1抽象代数(B)', url: '/pdfs/2022-2023-1抽象代数(B).pdf' },
      { year: '2023-2024', title: '2023-2024-1抽象代数(A)', url: '/pdfs/2023-2024-1抽象代数(A).pdf' },
      { year: '2023-2024', title: '2023-2024-1抽象代数(B)', url: '/pdfs/2023-2024-1抽象代数(B).pdf' },
      { year: '2024-2025', title: '2024-2025-1抽象代数(A)', url: '/pdfs/2024-2025-1抽象代数(A).pdf' },
      { year: '2024-2025', title: '2024-2025-1抽象代数(B)', url: '/pdfs/2024-2025-1抽象代数(B).pdf' }
    ]
  },
  {
    id: 'complex-analysis',
    name: '复变函数',
    nameEn: 'Complex Analysis',
    section: '专业主干课程',
    subsection: '核心数学课组',
    credits: 3,
    term: '春',
    suggested: '6',
    teachers: [
      { name: '田守富', url: 'https://math.cumt.edu.cn/ed/34/c9104a585012/page.htm' },
      { name: '张杰', url: 'https://math.cumt.edu.cn/6d/eb/c9104a355819/page.htm' }
    ],
    textbooks: [
      { title: '《复分析基础》 廖良文 编，科学出版社', url: '/pdfs/books/复分析基础 廖良文.pdf' }
    ],
    exams: [
      { year: '2024-2025', title: '2024-2025-2复变函数A卷', url: '/pdfs/2024-2025-2复变函数A卷.pdf' },
      { year: '2024-2025', title: '2024-2025-2复变函数B卷', url: '/pdfs/2024-2025-2复变函数B卷.pdf' },
      { year: '2024-2025', title: '2024-2025-2复变试卷及解析(回忆版)', url: '/pdfs/2024-2025-2复变试卷及解析(回忆版).pdf' },
      { year: '2025-2026', title: '2025-2026-2-复变函数-试题(A)(回忆)', url: '/pdfs/2025-2026-2-复变函数-试题(A)(回忆).pdf' }
    ]
  },
  {
    id: 'differential-geometry',
    name: '微分几何',
    nameEn: 'Differential Geometry',
    section: '专业主干课程',
    subsection: '核心数学课组',
    credits: 3,
    term: '秋',
    suggested: '7',
    teachers: [
      { name: '任新安', url: 'https://math.cumt.edu.cn/6d/cb/c9104a355787/page.htm' },
      { name: '张玉峰', url: 'https://math.cumt.edu.cn/6d/f1/c9104a355825/page.htm' }
    ],
    textbooks: [
      { title: '《微分几何》(修订版) 苏步青 胡和生 沈纯理 潘养廉 张国樑 编，高等教育出版社', url: '/pdfs/books/微分几何(修订版) 苏步青 胡和生.pdf' }
    ]
  },
  {
    id: 'financial-economics',
    name: '金融经济学',
    nameEn: 'Financial Economics',
    section: '专业主干课程',
    subsection: '金融数学课组',
    credits: 2.5,
    term: '春',
    suggested: '6'
  },
  {
    id: 'derivative-pricing',
    name: '金融衍生产品定价(双语)',
    nameEn: 'Pricing of Financial Derivatives',
    section: '专业主干课程',
    subsection: '金融数学课组',
    credits: 3.5,
    term: '秋',
    suggested: '5'
  },
  {
    id: 'stochastic-processes',
    name: '随机过程',
    nameEn: 'Stochastic Processes',
    section: '专业主干课程',
    subsection: '金融数学课组',
    credits: 3,
    term: '秋',
    suggested: '5'
  },
  {
    id: 'matrix-computation',
    name: '矩阵计算(双语)',
    nameEn: 'Matrix Computation',
    section: '专业主干课程',
    subsection: '计算、控制与优化课组',
    credits: 3,
    term: '秋',
    suggested: '5',
    textbooks: [
      { title: '《矩阵计算》(第四版) Gene H. Golub 等 著，人民邮电出版社', url: '/pdfs/books/矩阵计算(第四版) Gene H. Golub.pdf' }
    ]
  },
  {
    id: 'control-theory-foundations',
    name: '控制论数学基础(国际)',
    nameEn: 'Mathematical Foundations of Control Theory',
    section: '专业主干课程',
    subsection: '计算、控制与优化课组',
    credits: 3,
    term: '秋',
    suggested: '5'
  },
  {
    id: 'optimization-methods',
    name: '最优化方法',
    nameEn: 'Optimization Methods',
    section: '专业主干课程',
    subsection: '计算、控制与优化课组',
    credits: 3,
    term: '春',
    suggested: '6',
    textbooks: [
      '《最优化理论与方法》 袁亚湘 孙文瑜 编，科学出版社'
    ]
  },

  // ============================================================
  //  专业选修课程 (至少修读 7 学分)
  // ============================================================
  {
    id: 'pde',
    name: '数学物理方程A',
    nameEn: 'Partial Differential Equations',
    section: '专业选修课程',
    subsection: '核心数学课组',
    credits: 3,
    term: '秋',
    suggested: '5',
    teachers: [
      { name: '陈太勇', url: 'https://math.cumt.edu.cn/6d/a2/c9104a355746/page.htm' }
    ],
    textbooks: [
      { title: '《数学物理方程》(第三版) 刘文斌 等 编，中国矿业大学出版社', url: '/pdfs/books/数学物理方程(第三版) 刘文斌.pdf' }
    ]
  },
  {
    id: 'topology',
    name: '拓扑学',
    nameEn: 'Topology',
    section: '专业选修课程',
    subsection: '核心数学课组',
    credits: 3,
    term: '秋',
    suggested: '7',
    teachers: [
      { name: '陈小林', url: 'https://math.cumt.edu.cn/6d/a3/c9104a355747/page.htm' }
    ],
    textbooks: [
      { title: '《点集拓扑讲义》(第五版) 熊金城 编，高等教育出版社', url: '/pdfs/books/点集拓扑讲义(第五版) 熊金城.pdf' }
    ],
    exams: [
      { year: '2025-2026', title: '2025-2026-2-拓扑学-试题(A)(回忆)', url: '/pdfs/2025-2026-2-拓扑学-试题(A)(回忆).pdf' }
    ]
  },
  {
    id: 'pde-elective',
    name: '偏微分方程',
    nameEn: 'Partial Differential Equations',
    section: '专业选修课程',
    subsection: '核心数学课组',
    credits: 3,
    term: '春',
    suggested: '6'
  },
  {
    id: 'graph-theory',
    name: '图论',
    nameEn: 'Graph Theory',
    section: '专业选修课程',
    subsection: '核心数学课组',
    credits: 3,
    term: '春',
    suggested: '6'
  },
  {
    id: 'multivariate-statistics',
    name: '多元统计分析',
    nameEn: 'Multivariate Statistical Analysis',
    section: '专业选修课程',
    subsection: '金融数学课组',
    credits: 3,
    term: '春',
    suggested: '6'
  },
  {
    id: 'financial-modeling',
    name: '金融建模',
    nameEn: 'Financial Modeling',
    section: '专业选修课程',
    subsection: '金融数学课组',
    credits: 2,
    term: '春',
    suggested: '6'
  },
  {
    id: 'data-mining',
    name: '数据挖掘',
    nameEn: 'Data Mining',
    section: '专业选修课程',
    subsection: '金融数学课组',
    credits: 3,
    term: '秋',
    suggested: '5 或 7',
    textbooks: [
      '《数据挖掘概念与技术》(第三版) Jiawei Han 等 编，机械工业出版社'
    ]
  },
  {
    id: 'numerical-financial-methods',
    name: '金融模型的数值计算方法',
    nameEn: 'Numerical Methods for Financial Models',
    section: '专业选修课程',
    subsection: '金融数学课组',
    credits: 2,
    term: '秋',
    suggested: '7'
  },
  {
    id: 'statistical-computing',
    name: '统计计算',
    nameEn: 'Statistical Computing',
    section: '专业选修课程',
    subsection: '金融数学课组',
    credits: 3,
    term: '春',
    suggested: '6'
  },
  {
    id: 'time-series',
    name: '时间序列分析(国际)',
    nameEn: 'Time Series Analysis',
    section: '专业选修课程',
    subsection: '金融数学课组',
    credits: 2.5,
    term: '春',
    suggested: '6'
  },
  {
    id: 'interval-mathematics',
    name: '区间数学理论与应用',
    nameEn: 'Interval Mathematics: Theory and Applications',
    section: '专业选修课程',
    subsection: '计算、控制与优化课组',
    credits: 2.5,
    term: '秋',
    suggested: '5 或 7'
  },
  {
    id: 'numerical-ode',
    name: '微分方程数值解',
    nameEn: 'Numerical Solution of Differential Equations',
    section: '专业选修课程',
    subsection: '计算、控制与优化课组',
    credits: 3,
    term: '秋',
    suggested: '5 或 7'
  },
  {
    id: 'nonlinear-systems',
    name: '非线性方程组数值解法',
    nameEn: 'Numerical Methods for Nonlinear Systems',
    section: '专业选修课程',
    subsection: '计算、控制与优化课组',
    credits: 3,
    term: '春',
    suggested: '6'
  },
  {
    id: 'computer-control',
    name: '计算机控制技术与应用',
    nameEn: 'Computer Control Technology and Applications',
    section: '专业选修课程',
    subsection: '计算、控制与优化课组',
    credits: 2.5,
    term: '秋',
    suggested: '5 或 7'
  },
  {
    id: 'modern-control',
    name: '现代控制理论',
    nameEn: 'Modern Control Theory',
    section: '专业选修课程',
    subsection: '计算、控制与优化课组',
    credits: 3,
    term: '秋',
    suggested: '5 或 7'
  },
  {
    id: 'ai-control',
    name: '人工智能控制',
    nameEn: 'Artificial Intelligence Control',
    section: '专业选修课程',
    subsection: '计算、控制与优化课组',
    credits: 2,
    term: '春',
    suggested: '6'
  },
  {
    id: 'optimal-control',
    name: '最优控制(国际)',
    nameEn: 'Optimal Control',
    section: '专业选修课程',
    subsection: '计算、控制与优化课组',
    credits: 3,
    term: '春',
    suggested: '6'
  },
  {
    id: 'matrix-analysis',
    name: '矩阵分析',
    nameEn: 'Matrix Analysis',
    section: '专业选修课程',
    subsection: '所有课组',
    credits: 3,
    term: '春',
    suggested: '6'
  },
  {
    id: 'math-modeling',
    name: '数学建模',
    nameEn: 'Mathematical Modeling',
    section: '专业选修课程',
    subsection: '所有课组',
    credits: 3,
    term: '春',
    suggested: '5',
    teachers: [
      { name: '祁永强', url: 'https://math.cumt.edu.cn/6d/c5/c9104a355781/page.htm' },
      { name: '李俊领', url: 'https://math.cumt.edu.cn/6d/b3/c9104a355763/page.htm' }
    ],
    textbooks: [
      '《数学建模》祁永强 等 编，中国矿业大学出版社'
    ]
  },
  {
    id: 'math-history',
    name: '数学史',
    nameEn: 'History of Mathematics',
    section: '专业选修课程',
    subsection: '所有课组',
    credits: 2,
    term: '秋',
    suggested: '7'
  },

  // ============================================================
  //  专业拓展课程 (核心数学课组的本研一体化课程)
  // ============================================================
  {
    id: 'nonlinear-functional-analysis',
    name: '非线性泛函分析',
    nameEn: 'Nonlinear Functional Analysis',
    section: '专业拓展课程',
    subsection: '本研一体化课程',
    credits: 3,
    term: '秋',
    suggested: '7'
  },
  {
    id: 'manifolds',
    name: '微分流形',
    nameEn: 'Differentiable Manifolds',
    section: '专业拓展课程',
    subsection: '本研一体化课程',
    credits: 3,
    term: '秋',
    suggested: '7'
  },
  {
    id: 'combinatorics',
    name: '组合数学',
    nameEn: 'Combinatorics',
    section: '专业拓展课程',
    subsection: '本研一体化课程',
    credits: 3,
    term: '春',
    suggested: '6'
  },
  {
    id: 'measure-probability',
    name: '测度与概率论',
    nameEn: 'Measure and Probability',
    section: '专业拓展课程',
    subsection: '本研一体化课程',
    credits: 3,
    term: '秋',
    suggested: '7'
  },
  {
    id: 'numerical-optimization',
    name: '数值优化',
    nameEn: 'Numerical Optimization',
    section: '专业拓展课程',
    subsection: '本研一体化课程',
    credits: 3,
    term: '春',
    suggested: '8',
    note: 'AI 深融课程'
  },
  {
    id: 'lie-algebras',
    name: '有限维复半单李代数(双语)',
    nameEn: 'Finite-Dimensional Complex Semisimple Lie Algebras',
    section: '专业拓展课程',
    subsection: '本研一体化课程',
    credits: 3,
    term: '春',
    suggested: '8'
  },
  {
    id: 'stochastic-analysis',
    name: '随机分析',
    nameEn: 'Stochastic Analysis',
    section: '专业拓展课程',
    subsection: '本研一体化课程',
    credits: 3,
    term: '春',
    suggested: '8'
  },
  {
    id: 'modern-math-enhancement',
    name: '近代数学理论提升',
    nameEn: 'Advanced Modern Mathematics',
    section: '专业拓展课程',
    subsection: '其他课组拓展课程',
    credits: 4,
    term: '秋',
    suggested: '7',
    note: '面向计算、控制与优化、金融数学课组, 三门中建议修读一门'
  },
  {
    id: 'math-foundation-extension',
    name: '数学基础能力拓展',
    nameEn: 'Extension of Mathematical Foundations',
    section: '专业拓展课程',
    subsection: '其他课组拓展课程',
    credits: 4,
    term: '秋',
    suggested: '7'
  },
  {
    id: 'applied-math-training',
    name: '专业数学应用训练',
    nameEn: 'Training in Applied Mathematics',
    section: '专业拓展课程',
    subsection: '其他课组拓展课程',
    credits: 3,
    term: '春',
    suggested: '6'
  }
];
