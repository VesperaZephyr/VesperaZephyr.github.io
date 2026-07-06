/**
 * CUMT 数院资料库 — 课程数据
 *
 * 数据模型：
 *   id        — 唯一标识
 *   name      — 课程中文名
 *   nameEn    — 课程英文名（可选）
 *   grade     — 年级：大一 | 大二 | 大三 | 大四
 *   category  — 类别：基础课 | 核心课 | 选修课
 *   teachers  — 授课教师数组，每项 { name, url }，url 可选
 *   textbooks — 参考教材数组
 *   examScope — 考试范围说明（可选，非空时显示）
 *   exams     — 试题数组，每项 { year, title, url }
 */

const COURSES = [
  // ============================================================
  //  1. 数学分析(1)
  // ============================================================
  {
    id: 'math-analysis-1',
    name: '数学分析(1)',
    nameEn: 'Mathematical Analysis I',
    grade: '大一',
    category: '基础课',
    teachers: [
      { name: '张杰', url: 'https://math.cumt.edu.cn/6d/eb/c9104a355819/page.htm' },
      { name: '陈毅', url: 'https://math.cumt.edu.cn/6d/a4/c9104a355748/page.htm' },
      { name: '范胜君', url: 'https://math.cumt.edu.cn/6d/9d/c9104a355741/page.htm' },
    ],
    textbooks: [
      '《数学分析》(第五版·上册) 华东师范大学数学系 编，高等教育出版社'
    ],
    examScope: '实数集与函数(第一章)、数列极限(第二章)、函数极限(第三章)、函数的连续性(第四章)、导数与微分(第五章)、微分中值定理及其应用(第六章)、实数的完备性(第七章)',
    exams: [
      { year: '2024-2025', title: '2024-2025-1_数学分析（1）_B卷', url: '/pdfs/2024-2025-1_数学分析（1）_B卷.pdf' },
      { year: '2025-2026', title: '2025-2026-1数学分析(1)B卷', url: '/pdfs/2025-2026-1数学分析(1)B卷.pdf' }
    ]
  },

  // ============================================================
  //  2. 高等代数(1)
  // ============================================================
  {
    id: 'advanced-algebra-1',
    name: '高等代数(1)',
    nameEn: 'Advanced Algebra I',
    grade: '大一',
    category: '基础课',
    teachers: [
      { name: '张驰', url: 'https://math.cumt.edu.cn/2b/63/c9104a535395/page.htm' },
      { name: '王志俊', url: 'https://math.cumt.edu.cn/6d/e0/c9104a355808/page.htm' },
      { name: '夏春光', url: 'https://math.cumt.edu.cn/6d/e4/c9104a355812/page.htm' },
    ],
    textbooks: [
      '《高等代数》(第五版) 北京大学数学系 编，高等教育出版社'
    ],
    examScope: '多项式(第一章)、行列式(第二章)、线性方程组(第三章)、矩阵(第四章)',
    exams: [
      { year: '2024-2025', title: '2024-2025-1高等代数1（A）', url: '/pdfs/2024-2025-1高等代数1（A）.pdf' },
      { year: '2024-2025', title: '2024-2025-1高等代数1（B）', url: '/pdfs/2024-2025-1高等代数1（B）.pdf' },
      { year: '2024-2025', title: '2024-2025高代1期末试题及解答', url: '/pdfs/2024-2025高代1期末试题及解答.pdf' },
      { year: '2025-2026', title: '2025-2026-1高等代数(1)B卷', url: '/pdfs/2025-2026-1高等代数(1)B卷.pdf' },
      { year: '往年', title: '高代期末试题解析', url: '/pdfs/高代期末试题解析.pdf' }
    ]
  },

  // ============================================================
  //  3. 数学分析(2)
  // ============================================================
  {
    id: 'math-analysis-2',
    name: '数学分析(2)',
    nameEn: 'Mathematical Analysis II',
    grade: '大一',
    category: '基础课',
    teachers: [
      { name: '张杰', url: 'https://math.cumt.edu.cn/6d/eb/c9104a355819/page.htm' },
      { name: '杨晓波', url: 'https://math.cumt.edu.cn/6d/e7/c9104a355815/page.htm' },
      { name: '陈毅', url: 'https://math.cumt.edu.cn/6d/a4/c9104a355748/page.htm' }
    ],
    textbooks: [
      '《数学分析》(第五版·上册) 华东师范大学数学系 编，高等教育出版社、《数学分析》(第五版·下册) 华东师范大学数学系 编，高等教育出版社'
    ],
    examScope: '不定积分(第八章)、定积分(第九章)、定积分的应用(第十章)、反常积分(第十一章)、级数(第十二章)、函数列与函数项级数(第十三章)、幂级数(第十四章)、傅里叶级数(第十五章)',
    exams: [
      { year: '2023-2024', title: '2023-2024数分2期末试题A及解答', url: '/pdfs/2023-2024数分2期末试题A及解答.pdf' },
      { year: '2023-2024', title: '2023-2024数分2期末试题B及解答', url: '/pdfs/2023-2024数分2期末试题B及解答.pdf' },
      { year: '2024-2025', title: '2024-2025学年2数学分析2期末试题(B卷)', url: '/pdfs/2024-2025学年2数学分析2期末试题(B卷).pdf' },
      { year: '2024-2025', title: '2024-2025数分2期末试题B及解答', url: '/pdfs/2024-2025数分2期末试题B及解答.pdf' }
    ]
  },

  // ============================================================
  //  4. 高等代数(2)
  // ============================================================
  {
    id: 'advanced-algebra-2',
    name: '高等代数(2)',
    nameEn: 'Advanced Algebra II',
    grade: '大一',
    category: '基础课',
    teachers: [
      { name: '张驰', url: 'https://math.cumt.edu.cn/2b/63/c9104a535395/page.htm' },
      { name: '王登银', url: 'https://math.cumt.edu.cn/6d/d8/c9104a355800/page.htm' },
      { name: '夏春光', url: 'https://math.cumt.edu.cn/6d/e4/c9104a355812/page.htm' }
    ],
    textbooks: [
      '《高等代数》(第五版) 北京大学数学系 编，高等教育出版社'
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

  // ============================================================
  //  5. 空间解析几何
  // ============================================================
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

  // ============================================================
  //  6. 数分高代实践
  // ============================================================
  {
    id: 'math-practice',
    name: '数分高代实践',
    nameEn: 'Math Analysis & Algebra Practice',
    grade: '大一',
    category: '基础课',
    teachers: [
      { name: '实践教学组', url: 'https://math.cumt.edu.cn/' }
    ],
    examScope: '开卷考',
    exams: [
      { year: '2024-2025', title: '2024-2025学年(2)数学分析与高等代数实践(2)B卷', url: '/pdfs/2024-2025学年(2)数学分析与高等代数实践(2)B卷.pdf' },
      { year: '2025-2026', title: '2025-2026学年(1)数学分析与高等代数实践(1) A卷', url: '/pdfs/2025-2026学年(1)数学分析与高等代数实践(1) A卷.pdf' },
      { year: '2025-2026', title: '2025-2026学年(1)数学分析实践-0002 B卷', url: '/pdfs/2025-2026学年(1)数学分析实践-0002 B卷.pdf' }
    ]
  },

  // ============================================================
  //  7. 数学分析(3)
  // ============================================================
  {
    id: 'math-analysis-3',
    name: '数学分析(3)',
    nameEn: 'Mathematical Analysis III',
    grade: '大二',
    category: '基础课',
    teachers: [
      { name: '岳晓蕊', url: 'https://math.cumt.edu.cn/a4/3a/c9104a566330/page.htm' },
      { name: '王林林', url: 'https://math.cumt.edu.cn/6d/da/c9104a355802/page.htm' },
      { name: '杨晓波', url: 'https://math.cumt.edu.cn/6d/e7/c9104a355815/page.htm' }
    ],
    textbooks: [
      '《数学分析》(第五版·下册) 华东师范大学数学系 编，高等教育出版社'
    ],
    examScope: '多元函数的极限与连续(第十六章)、多元函数微分学(第十七章)、隐函数定理及其应用(第十八章)、含参量积分(第十九章)、曲线积分(第二十章)、重积分(第二十一章)、曲面积分(第二十二章)',
    exams: [
      { year: '2024-2025', title: '2024-2025-1数学分析(3)A卷试题解答', url: '/pdfs/2024-2025-1数学分析(3)A卷试题解答.pdf' },
      { year: '2025-2026', title: '2025-2026-1数学分析(3)模拟卷A卷', url: '/pdfs/2025-2026-1数学分析(3)模拟卷A卷.pdf' }
    ]
  },

  // ============================================================
  //  8. 常微分方程
  // ============================================================
  {
    id: 'odes',
    name: '常微分方程',
    nameEn: 'Ordinary Differential Equations',
    grade: '大二',
    category: '核心课',
    teachers: [
      { name: '张慧星', url: 'https://math.cumt.edu.cn/6d/ea/c9104a355818/page.htm' },
      { name: '李争康(暂无教师主页)' },
      { name: '田守富', url: 'https://math.cumt.edu.cn/ed/34/c9104a585012/page.htm' }
    ],
    textbooks: [
      '《Ordinary Differential Equations》(第二版) 张慧星 杨晓波等 主编，中国矿业大学出版社'
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

  // ============================================================
  //  9. 概率论
  // ============================================================
  {
    id: 'probability',
    name: '概率论',
    nameEn: 'Probability Theory',
    grade: '大二',
    category: '核心课',
    teachers: [
      { name: '朱松', url: 'https://math.cumt.edu.cn/6d/f5/c9104a355829/page.htm' },
      { name: '杨旭', url: 'https://math.cumt.edu.cn/88/7b/c9104a493691/page.htm' },
      { name: '韩苗', url: 'https://math.cumt.edu.cn/6d/ac/c9104a355756/page.htm' }
    ],
    textbooks: [
      '《概率论与数理统计教程》(第四版) 茆诗松 程依明 濮晓龙 等 编，高等教育出版社'
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

  // ============================================================
  //  10. 数理统计
  // ============================================================
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

  // ============================================================
  //  11. 数值分析
  // ============================================================
  {
    id: 'numerical-analysis',
    name: '数值分析',
    nameEn: 'Numerical Analysis',
    grade: '大二',
    category: '核心课',
    teachers: [
      { name: '王海军', url: 'https://math.cumt.edu.cn/6d/d9/c9104a355801/page.htm' },
      { name: '金花', url: 'https://math.cumt.edu.cn/6d/af/c9104a355759/page.htm' },
      { name: '曹德欣', url: 'https://math.cumt.edu.cn/6e/75/c9104a355957/page.htm' },
      { name: '郭彦', url: 'https://math.cumt.edu.cn/6d/ab/c9104a355755/page.htm' }
    ],
    textbooks: [
      '《计算方法》(第三版) 曹德欣 曹璎珞 等 编，中国矿业大学出版社'
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

  // ============================================================
  //  12. 实变函数
  // ============================================================
  {
    id: 'real-analysis',
    name: '实变函数',
    nameEn: 'Functions of Real Variables',
    grade: '大二',
    category: '核心课',
    teachers: [
      { name: '胡志刚', url: 'https://math.cumt.edu.cn/6d/ad/c9104a355757/page.htm' },
      { name: '陈毅', url: 'https://math.cumt.edu.cn/6d/a4/c9104a355748/page.htm' },
      { name: '陈小林', url: 'https://math.cumt.edu.cn/6d/a3/c9104a355747/page.htm' }
    ],
    textbooks: [
      '《实变函数与泛函分析基础》 程其襄 张奠宙 胡善文 薛以锋 编，高等教育出版社'
    ],
    examScope: '集合论(第一章)、点集(第二章)、测度论(第三章)、可测函数(第四章)、积分论(第五章)',
    exams: [
      { year: '2022', title: '2022春-实变函数-A卷（回忆）', url: '/pdfs/2022春-实变函数-A卷（回忆）.pdf' },
      { year: '2024-2025', title: '2024-2025-2-实变函数-试题(A)(回忆)', url: '/pdfs/2024-2025-2-实变函数-试题(A)(回忆).pdf' },
      { year: '往年', title: '实变函数模拟试卷(1)', url: '/pdfs/实变函数模拟试卷(1).pdf' },
      { year: '往年', title: '实变函数模拟试卷(2)', url: '/pdfs/实变函数模拟试卷(2).pdf' }
    ]
  },

  // ============================================================
  //  13. 复变函数
  // ============================================================
  {
    id: 'complex-analysis',
    name: '复变函数',
    nameEn: 'Complex Analysis',
    grade: '大三',
    category: '选修课',
    teachers: [
      { name: '田守富', url: 'https://math.cumt.edu.cn/ed/34/c9104a585012/page.htm' },
      { name: '张杰', url: 'https://math.cumt.edu.cn/6d/eb/c9104a355819/page.htm' }
    ],
    textbooks: [
      '《复分析基础》廖良文 编，科学出版社'
    ],
    examScope: '[待补充]',
    reviewMaterials: [],
    exams: [
      { year: '2024-2025', title: '2024-2025-2复变函数A卷', url: '/pdfs/2024-2025-2复变函数A卷.pdf' },
      { year: '2024-2025', title: '2024-2025-2复变函数B卷', url: '/pdfs/2024-2025-2复变函数B卷.pdf' },
      { year: '2024-2025', title: '2024-2025-2复变试卷及解析(回忆版)', url: '/pdfs/2024-2025-2复变试卷及解析(回忆版).pdf' }
    ]
  },

  // ============================================================
  //  14. 数学物理方程
  // ============================================================
  {
    id: 'pde',
    name: '数学物理方程 A',
    nameEn: 'Partial Differential Equations',
    grade: '大三',
    category: '选修课',
    teachers: [
      { name: '陈太勇', url: 'https://math.cumt.edu.cn/6d/a2/c9104a355746/page.htm' }
    ],
    textbooks: [
      '《数学物理方程》(第三版) 刘文斌 等 编，中国矿业大学出版社'
    ],
    examScope: '[待补充]',
    reviewMaterials: [],
    exams: []
  },

  // ============================================================
  //  15. 泛函分析
  // ============================================================
  {
    id: 'functional-analysis',
    name: '泛函分析',
    nameEn: 'Functional Analysis',
    grade: '大三',
    category: '专业必修课',
    categoryDisplay: '专业必修课（核心数学课组必修）',
    teachers: [
      { name: '陈太勇', url: 'https://math.cumt.edu.cn/6d/a2/c9104a355746/page.htm' },
      { name: '陈小林', url: 'https://math.cumt.edu.cn/6d/a3/c9104a355747/page.htm' }
    ],
    textbooks: [
      '《实变函数与泛函分析基础》 程其襄 张奠宙 胡善文 薛以锋 编，高等教育出版社'
    ],
    examScope: '[待补充]',
    reviewMaterials: [],
    exams: [
      { year: '2025-2026', title: '2025-2026-1泛函分析', url: '/pdfs/2025-2026-1泛函分析.pdf' }
    ]
  },

  // ============================================================
  //  16. 抽象代数
  // ============================================================
  {
    id: 'abstract-algebra',
    name: '抽象代数',
    nameEn: 'Abstract Algebra',
    grade: '大三',
    category: '专业必修课',
    categoryDisplay: '专业必修课（核心数学课组必修）',
    teachers: [
      { name: '张驰', url: 'https://math.cumt.edu.cn/2b/63/c9104a535395/page.htm' }
    ],
    textbooks: [
      '《抽象代数基础》(第二版) 唐忠明 编，高等教育出版社'
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

  // ============================================================
  //  17. 拓扑学
  // ============================================================
  {
    id: 'topology',
    name: '拓扑学',
    nameEn: 'Topology',
    grade: '大三',
    category: '选修课',
    teachers: [
      { name: '陈小林', url: 'https://math.cumt.edu.cn/6d/a3/c9104a355747/page.htm' }
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

  // ============================================================
  //  18. 微分几何
  // ============================================================
  {
    id: 'differential-geometry',
    name: '微分几何',
    nameEn: 'Differential Geometry',
    grade: '大三',
    category: '专业必修课',
    categoryDisplay: '专业必修课（核心数学课组必修）',
    teachers: [
      { name: '任新安', url: 'https://math.cumt.edu.cn/6d/cb/c9104a355787/page.htm' },
      { name: '张玉峰', url: 'https://math.cumt.edu.cn/6d/f1/c9104a355825/page.htm' }
    ],
    textbooks: [
      '《微分几何》(修订版) 苏步青 胡和生 沈纯理 潘养廉 张国樑 编，高等教育出版社'
    ],
    examScope: '[待补充]',
    reviewMaterials: [],
    exams: []
  },

  // ============================================================
  //  19. 运筹学
  // ============================================================
  {
    id: 'operations-research',
    name: '运筹学',
    nameEn: 'Operations Research',
    grade: '大三',
    category: '选修课',
    teachers: [
      { name: '付乳燕', url: 'https://math.cumt.edu.cn/6d/aa/c9104a355754/page.htm' }
    ],
    textbooks: [
      '《Operation Research》'
    ],
    examScope: '[待补充]',
    reviewMaterials: [],
    exams: []
  },

  // ============================================================
  //  20. 数学建模
  // ============================================================
  {
    id: 'math-modeling',
    name: '数学建模',
    nameEn: 'Mathematical Modeling',
    grade: '大三',
    category: '选修课',
    teachers: [
      { name: '祁永强', url: 'https://math.cumt.edu.cn/6d/c5/c9104a355781/page.htm' },
      { name: '李俊领', url: 'https://math.cumt.edu.cn/6d/b3/c9104a355763/page.htm' }
    ],
    textbooks: [
      '《数学建模》祁永强 等 编，中国矿业大学出版社'
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
      '《数据挖掘概念与技术》(第三版) Jiawei Han 等 编，机械工业出版社'
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
