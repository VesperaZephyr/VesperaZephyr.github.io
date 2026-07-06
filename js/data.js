/**
 * CUMT 数院资料库 — 课程数据
 *
 * 数据模型：
 *   id        — 唯一标识
 *   name      — 课程中文名
 *   nameEn    — 课程英文名（可选）
 *   grade     — 年级：大一 | 大二 | 大三 | 大四
 *   category  — 类别：基础课 | 核心课 | 专业必修课 | 选修课 | 计算数学课组必修
 *   categoryDisplay — 显示用类别名（可选，category 为「专业必修课」时显示「专业必修课（核心数学课组必修）」）
 *   teachers  — 授课教师数组，每项 { name, url }
 *   textbooks — 参考教材数组
 *   examScope — 考试范围说明
 *   reviewMaterials — 复习资料数组，每项 { title, url }
 *   exams     — 试题数组，每项 { year, title, url }
 */

const COURSES = [
  // ============================================================
  //  基础课
  // ============================================================
  {
    id: 'math-analysis-1',
    name: '数学分析(1)',
    nameEn: 'Mathematical Analysis I',
    grade: '大一',
    category: '基础课',
    teachers: [
      { name: '江龙', url: 'https://math.cumt.edu.cn/' }
    ],
    textbooks: [
      '《数学分析》(第五版·上册) 华东师范大学数学系 编，高等教育出版社'
    ],
    examScope: '[待补充]',
    reviewMaterials: [],
    exams: [
      { year: '2024-2025', title: '2024-2025-1_数学分析（1）_B卷', url: '/pdfs/2024-2025-1_数学分析（1）_B卷.pdf' },
      { year: '2025-2026', title: '2025-2026-1数学分析(1)B卷', url: '/pdfs/2025-2026-1数学分析(1)B卷.pdf' }
    ]
  },
  {
    id: 'advanced-algebra-1',
    name: '高等代数(1)',
    nameEn: 'Advanced Algebra I',
    grade: '大一',
    category: '基础课',
    teachers: [
      { name: '王登银', url: 'https://math.cumt.edu.cn/' }
    ],
    textbooks: [
      '《高等代数》(第五版) 北京大学数学系 编，高等教育出版社'
    ],
    examScope: '[待补充]',
    reviewMaterials: [],
    exams: [
      { year: '2024-2025', title: '2024-2025-1高等代数1（A）', url: '/pdfs/2024-2025-1高等代数1（A）.pdf' },
      { year: '2024-2025', title: '2024-2025-1高等代数1（B）', url: '/pdfs/2024-2025-1高等代数1（B）.pdf' },
      { year: '2024-2025', title: '2024-2025高代1期末试题及解答', url: '/pdfs/2024-2025高代1期末试题及解答.pdf' },
      { year: '2025-2026', title: '2025-2026-1高等代数(1)B卷', url: '/pdfs/2025-2026-1高等代数(1)B卷.pdf' }
    ]
  },
  {
    id: 'math-analysis-2',
    name: '数学分析(2)',
    nameEn: 'Mathematical Analysis II',
    grade: '大一',
    category: '基础课',
    teachers: [
      { name: '张玉峰', url: 'https://math.cumt.edu.cn/' }
    ],
    textbooks: [
      '《数学分析》(第五版·下册) 华东师范大学数学系 编，高等教育出版社'
    ],
    examScope: '[待补充]',
    reviewMaterials: [],
    exams: [
      { year: '2023-2024', title: '2023-2024数分2期末试题A及解答', url: '/pdfs/2023-2024数分2期末试题A及解答.pdf' },
      { year: '2023-2024', title: '2023-2024数分2期末试题B及解答', url: '/pdfs/2023-2024数分2期末试题B及解答.pdf' },
      { year: '2024-2025', title: '2024-2025学年2数学分析2期末试题(B卷)', url: '/pdfs/2024-2025学年2数学分析2期末试题(B卷).pdf' },
      { year: '2024-2025', title: '2024-2025数分2期末试题B及解答', url: '/pdfs/2024-2025数分2期末试题B及解答.pdf' }
    ]
  },
  {
    id: 'advanced-algebra-2',
    name: '高等代数(2)',
    nameEn: 'Advanced Algebra II',
    grade: '大一',
    category: '基础课',
    teachers: [
      { name: '王登银', url: 'https://math.cumt.edu.cn/' }
    ],
    textbooks: [
      '《高等代数》(第五版) 北京大学数学系 编，高等教育出版社'
    ],
    examScope: '[待补充]',
    reviewMaterials: [],
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
    grade: '大一',
    category: '基础课',
    teachers: [
      { name: '任新安', url: 'https://math.cumt.edu.cn/6d/cb/c9104a355787/page.htm' },
      { name: '汝强', url: 'https://math.cumt.edu.cn/6d/cc/c9104a355788/page.htm' },
      { name: '张玉峰', url: 'https://math.cumt.edu.cn/6d/f1/c9104a355825/page.htm' }
    ],
    textbooks: [
      '《解析几何教程》(第三版) 廖华奎、王宝富 编，科学出版社'
    ],
    examScope: '向量代数(第一章)、直线与平面(第二章)、常见曲面(第三章)、二次曲线和二次曲面(第四章)',
    reviewMaterials: [
      { title: '空间解析几何复习', url: '/pdfs/空间解析几何复习.pdf' }
    ],
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
    id: 'math-practice',
    name: '数分高代实践',
    nameEn: 'Math Analysis & Algebra Practice',
    grade: '大一',
    category: '基础课',
    teachers: [
      { name: '实践教学组', url: 'https://math.cumt.edu.cn/' }
    ],
    textbooks: [
      '《数学分析习题课讲义》 谢惠民 等，高等教育出版社',
      '《高等代数习思精解》 王登银 编，中国矿业大学出版社'
    ],
    examScope: '[待补充]',
    reviewMaterials: [],
    exams: [
      { year: '2024-2025', title: '2024-2025学年(2)数学分析与高等代数实践(2)B卷', url: '/pdfs/2024-2025学年(2)数学分析与高等代数实践(2)B卷.pdf' },
      { year: '2025-2026', title: '2025-2026学年(1)数学分析与高等代数实践(1) A卷', url: '/pdfs/2025-2026学年(1)数学分析与高等代数实践(1) A卷.pdf' },
      { year: '2025-2026', title: '2025-2026学年(1)数学分析实践-0002 B卷', url: '/pdfs/2025-2026学年(1)数学分析实践-0002 B卷.pdf' }
    ]
  },
  {
    id: 'math-analysis-3',
    name: '数学分析(3)',
    nameEn: 'Mathematical Analysis III',
    grade: '大二',
    category: '基础课',
    teachers: [
      { name: '张玉峰', url: 'https://math.cumt.edu.cn/' }
    ],
    textbooks: [
      '《数学分析》(第五版·下册) 华东师范大学数学系 编，高等教育出版社'
    ],
    examScope: '[待补充]',
    reviewMaterials: [],
    exams: [
      { year: '2024-2025', title: '2024-2025-1数学分析(3)A卷试题解答', url: '/pdfs/2024-2025-1数学分析(3)A卷试题解答.pdf' },
      { year: '2025-2026', title: '2025-2026-1数学分析(3)模拟卷A卷', url: '/pdfs/2025-2026-1数学分析(3)模拟卷A卷.pdf' }
    ]
  },

  // ============================================================
  //  核心课
  // ============================================================
  {
    id: 'odes',
    name: '常微分方程',
    nameEn: 'Ordinary Differential Equations',
    grade: '大二',
    category: '核心课',
    teachers: [
      { name: '陈兴成', url: 'https://math.cumt.edu.cn/' }
    ],
    textbooks: [
      '《Ordinary Differential Equations》(第二版) 张慧星 杨晓波等 主编，中国矿业大学出版社'
    ],
    examScope: 'Elementary Integration Method(Chapter 1), Linear Systems of Differential Equations(Chapter 2), High Order Linear Differential Equations(Chapter 3), Existence and Uniqueness of Solutions(Chapter 4, 4.2)',
    reviewMaterials: [
      { title: 'Solutions to Ordinary Differential Equations (By Fingolfin)', url: '/pdfs/Solutions to Ordinary Differential Equations (By Fingolfin).pdf' }
    ],
    exams: [
      { year: '2025-2026', title: '2025-2026常微分方程(双语)A卷回忆版', url: '/pdfs/2025-2026常微分方程(双语)A卷回忆版.pdf' },
      { year: '往年', title: '常微分方程模拟卷', url: '/pdfs/常微分方程模拟卷.pdf' }
    ]
  },
  {
    id: 'probability',
    name: '概率论',
    nameEn: 'Probability Theory',
    grade: '大二',
    category: '核心课',
    teachers: [
      { name: '周圣武', url: 'https://math.cumt.edu.cn/' }
    ],
    textbooks: [
      '《概率论与数理统计教程》(第四版) 茆诗松 程依明 濮晓龙 等 编，高等教育出版社'
    ],
    examScope: '[待补充]',
    reviewMaterials: [],
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
    grade: '大二',
    category: '核心课',
    teachers: [
      { name: '朱松', url: 'https://math.cumt.edu.cn/6d/f5/c9104a355829/page.htm' },
      { name: '韩苗', url: 'https://math.cumt.edu.cn/6d/ac/c9104a355756/page.htm' },
      { name: '芮文娟', url: 'https://math.cumt.edu.cn/6d/cd/c9104a355789/page.htm' }
    ],
    textbooks: [
      '《概率论与数理统计教程》(第四版) 茆诗松 程依明 濮晓龙 等 编，高等教育出版社'
    ],
    examScope: '统计量及其分布(第五章)、参数估计(第六章)、假设检验(第七章)、方差分析与回归分析(第八章)',
    reviewMaterials: [
      { title: '数理统计基础知识清单(必背)', url: '/pdfs/数理统计基础知识清单(必背).pdf' }
    ],
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
    id: 'numerical-analysis',
    name: '数值分析',
    nameEn: 'Numerical Analysis',
    grade: '大二',
    category: '核心课',
    teachers: [
      { name: '王海军', url: 'https://math.cumt.edu.cn/' }
    ],
    textbooks: [
      '《计算方法》(第三版) 曹德欣 曹璎珞 等 编，中国矿业大学出版社'
    ],
    examScope: '绪论(第一章)、非线性方程求解(第二章)、线性方程组解法(第三章)、插值法(第四章)、曲线拟合和函数逼近(第五章)、数值积分和数值微分(第六章)、常微分方程数值解法(第七章)',
    reviewMaterials: [
      { title: '数值分析基础知识清单(必背)', url: '/pdfs/数值分析基础知识清单(必背).pdf' },
      { title: '(数值分析典型例题) 差分格式截断误差的首项的求法和绝对稳定区间', url: '/pdfs/(数值分析典型例题) 差分格式截断误差的首项的求法和绝对稳定区间.pdf' }
    ],
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
    grade: '大二',
    category: '核心课',
    teachers: [
      { name: '朱凯', url: 'https://kzhu.net/' }
    ],
    textbooks: [
      '《实变函数与泛函分析》(上册·实变函数) 曹广福 编，高等教育出版社',
      '《实变函数论》 周民强 编，北京大学出版社'
    ],
    examScope: '[待补充]',
    reviewMaterials: [],
    exams: [
      { year: '2022', title: '2022春-实变函数-A卷（回忆）', url: '/pdfs/2022春-实变函数-A卷（回忆）.pdf' },
      { year: '2024-2025', title: '2024-2025-2-实变函数-试题(A)(回忆)', url: '/pdfs/2024-2025-2-实变函数-试题(A)(回忆).pdf' },
      { year: '往年', title: '实变函数模拟试卷(1)', url: '/pdfs/实变函数模拟试卷(1).pdf' },
      { year: '往年', title: '实变函数模拟试卷(2)', url: '/pdfs/实变函数模拟试卷(2).pdf' }
    ]
  },

  // ============================================================
  //  专业必修课（核心数学课组必修）
  // ============================================================
  {
    id: 'abstract-algebra',
    name: '抽象代数',
    nameEn: 'Abstract Algebra',
    grade: '大三',
    category: '专业必修课',
    categoryDisplay: '专业必修课（核心数学课组必修）',
    teachers: [
      { name: '徐思奥', url: 'https://math.cumt.edu.cn/' }
    ],
    textbooks: [
      '《近世代数基础》(修订本) 张禾瑞 编，高等教育出版社'
    ],
    examScope: '[待补充]',
    reviewMaterials: [],
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
    id: 'functional-analysis',
    name: '泛函分析',
    nameEn: 'Functional Analysis',
    grade: '大三',
    category: '专业必修课',
    categoryDisplay: '专业必修课（核心数学课组必修）',
    teachers: [
      { name: '朱凯', url: 'https://kzhu.net/' }
    ],
    textbooks: [
      '《实变函数与泛函分析》(下册·泛函分析) 曹广福 编，高等教育出版社'
    ],
    examScope: '[待补充]',
    reviewMaterials: [],
    exams: [
      { year: '2025-2026', title: '2025-2026-1泛函分析', url: '/pdfs/2025-2026-1泛函分析.pdf' }
    ]
  },
  {
    id: 'differential-geometry',
    name: '微分几何',
    nameEn: 'Differential Geometry',
    grade: '大三',
    category: '专业必修课',
    categoryDisplay: '专业必修课（核心数学课组必修）',
    teachers: [
      { name: '张玉峰', url: 'https://math.cumt.edu.cn/' }
    ],
    textbooks: [
      '《微分几何》(第四版) 梅向明、黄敬之 编，高等教育出版社'
    ],
    examScope: '[待补充]',
    reviewMaterials: [],
    exams: []
  },

  // ============================================================
  //  选修课
  // ============================================================
  {
    id: 'math-physics-a',
    name: '数学物理方程 A',
    nameEn: 'Partial Differential Equations',
    grade: '大二',
    category: '选修课',
    teachers: [
      { name: '刘红彬', url: 'https://math.cumt.edu.cn/' }
    ],
    textbooks: [
      '《数学物理方程》(第四版) 谷超豪 等 编，高等教育出版社'
    ],
    examScope: '[待补充]',
    reviewMaterials: [],
    exams: []
  },
  {
    id: 'complex-analysis',
    name: '复变函数',
    nameEn: 'Complex Analysis',
    grade: '大三',
    category: '选修课',
    teachers: [
      { name: '刘红彬', url: 'https://math.cumt.edu.cn/' }
    ],
    textbooks: [
      '《复变函数》(第五版) 钟玉泉 编，高等教育出版社'
    ],
    examScope: '[待补充]',
    reviewMaterials: [],
    exams: [
      { year: '2024-2025', title: '2024-2025-2复变函数A卷', url: '/pdfs/2024-2025-2复变函数A卷.pdf' },
      { year: '2024-2025', title: '2024-2025-2复变函数B卷', url: '/pdfs/2024-2025-2复变函数B卷.pdf' },
      { year: '2024-2025', title: '2024-2025-2复变试卷及解析(回忆版)', url: '/pdfs/2024-2025-2复变试卷及解析(回忆版).pdf' }
    ]
  },
  {
    id: 'topology',
    name: '拓扑学',
    nameEn: 'Topology',
    grade: '大三',
    category: '选修课',
    teachers: [
      { name: '王林', url: 'https://math.cumt.edu.cn/' }
    ],
    textbooks: [
      '《点集拓扑讲义》(第四版) 熊金城 编，高等教育出版社'
    ],
    examScope: '[待补充]',
    reviewMaterials: [],
    exams: [
      { year: '2025-2026', title: '2025-2026-2-拓扑学-试题(A)(回忆)', url: '/pdfs/2025-2026-2-拓扑学-试题(A)(回忆).pdf' }
    ]
  },
  {
    id: 'operations-research',
    name: '运筹学',
    nameEn: 'Operations Research',
    grade: '大三',
    category: '选修课',
    teachers: [
      { name: '王海军', url: 'https://math.cumt.edu.cn/' }
    ],
    textbooks: [
      '《运筹学》(第四版) 运筹学教材编写组 编，清华大学出版社'
    ],
    examScope: '[待补充]',
    reviewMaterials: [],
    exams: []
  },
  {
    id: 'math-modeling',
    name: '数学建模',
    nameEn: 'Mathematical Modeling',
    grade: '大三',
    category: '选修课',
    teachers: [
      { name: '陈太勇', url: 'https://math.cumt.edu.cn/' }
    ],
    textbooks: [
      '《数学模型》(第五版) 姜启源 等 编，高等教育出版社'
    ],
    examScope: '[待补充]',
    reviewMaterials: [],
    exams: []
  },

  // ============================================================
  //  计算数学课组必修
  // ============================================================
  {
    id: 'data-mining',
    name: '数据挖掘',
    nameEn: 'Data Mining',
    grade: '大四',
    category: '计算数学课组必修',
    teachers: [
      { name: '待定', url: '' }
    ],
    textbooks: [
      '《数据挖掘概念与技术》 (第三版) Jiawei Han 等 编，机械工业出版社'
    ],
    examScope: '[待补充]',
    reviewMaterials: [],
    exams: []
  },
  {
    id: 'matrix-computation',
    name: '矩阵计算',
    nameEn: 'Matrix Computation',
    grade: '大四',
    category: '计算数学课组必修',
    teachers: [
      { name: '待定', url: '' }
    ],
    textbooks: [
      '《矩阵计算》(第四版) Gene H. Golub 等 著，人民邮电出版社'
    ],
    examScope: '[待补充]',
    reviewMaterials: [],
    exams: []
  },
  {
    id: 'optimization',
    name: '最优化',
    nameEn: 'Optimization',
    grade: '大四',
    category: '计算数学课组必修',
    teachers: [
      { name: '待定', url: '' }
    ],
    textbooks: [
      '《最优化理论与方法》 袁亚湘 孙文瑜 编，科学出版社'
    ],
    examScope: '[待补充]',
    reviewMaterials: [],
    exams: []
  }
];
