/**
 * CUMT 数院资料库 — 课程数据
 *
 * 数据模型：
 *   id        — 唯一标识
 *   name      — 课程中文名
 *   nameEn    — 课程英文名（可选）
 *   grade     — 年级：大一 | 大二 | 大三 | 大四
 *   category  — 类别：基础课 | 核心课 | 选修课
 *   teacher   — 授课教师姓名
 *   teacherUrl — 教师个人主页 URL（可选，点击可跳转）
 *   textbooks — 参考教材数组
 *   exams     — 试题数组，每项 { title, url }，url 为 PDF 路径
 */

const COURSES = [
  // ==================== 大 一 ====================
  {
    id: 'math-analysis-1',
    name: '数学分析 (上)',
    nameEn: 'Mathematical Analysis I',
    grade: '大一',
    category: '基础课',
    teacher: '江龙',
    teacherUrl: 'https://math.cumt.edu.cn/',
    textbooks: [
      '《数学分析》(第五版·上册) 华东师范大学数学系 编，高等教育出版社',
      '《数学分析习题课讲义》(上册) 谢惠民 等，高等教育出版社'
    ],
    exams: [
      { title: '2024-2025 学年第一学期期中试题', url: '/pdfs/math-analysis-1-mid-2024.pdf' },
      { title: '2024-2025 学年第一学期期末试题', url: '/pdfs/math-analysis-1-final-2024.pdf' },
      { title: '2023-2024 学年第一学期期末试题', url: '/pdfs/math-analysis-1-final-2023.pdf' }
    ]
  },
  {
    id: 'math-analysis-2',
    name: '数学分析 (下)',
    nameEn: 'Mathematical Analysis II',
    grade: '大一',
    category: '基础课',
    teacher: '张玉峰',
    teacherUrl: 'https://math.cumt.edu.cn/',
    textbooks: [
      '《数学分析》(第五版·下册) 华东师范大学数学系 编，高等教育出版社',
      '《数学分析习题课讲义》(下册) 谢惠民 等，高等教育出版社'
    ],
    exams: [
      { title: '2023-2024 学年第二学期期末试题', url: '/pdfs/math-analysis-2-final-2024.pdf' }
    ]
  },
  {
    id: 'advanced-algebra-1',
    name: '高等代数 (上)',
    nameEn: 'Advanced Algebra I',
    grade: '大一',
    category: '基础课',
    teacher: '王登银',
    teacherUrl: 'https://math.cumt.edu.cn/',
    textbooks: [
      '《高等代数》(第五版) 北京大学数学系 编，高等教育出版社',
      '《高等代数习思精解》 王登银 编，中国矿业大学出版社'
    ],
    exams: [
      { title: '2024-2025 学年第一学期期末试题', url: '/pdfs/advanced-algebra-1-final-2024.pdf' }
    ]
  },
  {
    id: 'advanced-algebra-2',
    name: '高等代数 (下)',
    nameEn: 'Advanced Algebra II',
    grade: '大一',
    category: '基础课',
    teacher: '王登银',
    teacherUrl: 'https://math.cumt.edu.cn/',
    textbooks: [
      '《高等代数》(第五版) 北京大学数学系 编，高等教育出版社',
      '《高等代数习思精解》 王登银 编，中国矿业大学出版社'
    ],
    exams: [
      { title: '2023-2024 学年第二学期期末试题', url: '/pdfs/advanced-algebra-2-final-2024.pdf' }
    ]
  },
  {
    id: 'analytic-geometry',
    name: '解析几何',
    nameEn: 'Analytic Geometry',
    grade: '大一',
    category: '基础课',
    teacher: '刘淑君',
    teacherUrl: 'https://math.cumt.edu.cn/',
    textbooks: [
      '《解析几何》(第四版) 吕林根、许子道 编，高等教育出版社'
    ],
    exams: [
      { title: '2024-2025 学年第一学期期末试题', url: '/pdfs/analytic-geometry-final-2024.pdf' }
    ]
  },

  // ==================== 大 二 ====================
  {
    id: 'odes',
    name: '常微分方程',
    nameEn: 'Ordinary Differential Equations',
    grade: '大二',
    category: '核心课',
    teacher: '陈兴成',
    teacherUrl: 'https://math.cumt.edu.cn/',
    textbooks: [
      '《常微分方程》(第四版) 王高雄 等 编，高等教育出版社',
      '《常微分方程习题集》 周尚仁 编，高等教育出版社'
    ],
    exams: [
      { title: '2024-2025 学年第一学期期末试题', url: '/pdfs/odes-final-2024.pdf' }
    ]
  },
  {
    id: 'probability-statistics',
    name: '概率论与数理统计',
    nameEn: 'Probability and Statistics',
    grade: '大二',
    category: '核心课',
    teacher: '周圣武',
    teacherUrl: 'https://math.cumt.edu.cn/',
    textbooks: [
      '《概率论与数理统计》(第四版) 盛骤 等 编，高等教育出版社',
      '《概率论与数理统计习题全解》 周圣武 编，中国矿业大学出版社'
    ],
    exams: [
      { title: '2024-2025 学年第一学期期末试题', url: '/pdfs/probability-final-2024.pdf' }
    ]
  },
  {
    id: 'complex-analysis',
    name: '复变函数',
    nameEn: 'Complex Analysis',
    grade: '大二',
    category: '核心课',
    teacher: '刘红彬',
    teacherUrl: 'https://math.cumt.edu.cn/',
    textbooks: [
      '《复变函数》(第五版) 钟玉泉 编，高等教育出版社'
    ],
    exams: [
      { title: '2023-2024 学年第二学期期末试题', url: '/pdfs/complex-analysis-final-2024.pdf' }
    ]
  },
  {
    id: 'real-analysis',
    name: '实变函数',
    nameEn: 'Functions of Real Variables',
    grade: '大二',
    category: '核心课',
    teacher: '朱凯',
    teacherUrl: 'https://kzhu.net/',
    textbooks: [
      '《实变函数与泛函分析》(上册·实变函数) 曹广福 编，高等教育出版社',
      '《实变函数论》 周民强 编，北京大学出版社'
    ],
    exams: [
      { title: '2024-2025 学年第一学期期末试题', url: '/pdfs/real-analysis-final-2024.pdf' },
      { title: '2023-2024 学年第一学期期末试题', url: '/pdfs/real-analysis-final-2023.pdf' }
    ]
  },
  {
    id: 'abstract-algebra',
    name: '抽象代数',
    nameEn: 'Abstract Algebra',
    grade: '大二',
    category: '核心课',
    teacher: '徐思奥',
    teacherUrl: 'https://math.cumt.edu.cn/',
    textbooks: [
      '《近世代数基础》(修订本) 张禾瑞 编，高等教育出版社',
      '《抽象代数》 朱平天 等 编，科学出版社'
    ],
    exams: [
      { title: '2023-2024 学年第二学期期末试题', url: '/pdfs/abstract-algebra-final-2024.pdf' }
    ]
  },
  {
    id: 'numerical-analysis',
    name: '数值分析',
    nameEn: 'Numerical Analysis',
    grade: '大二',
    category: '核心课',
    teacher: '王海军',
    teacherUrl: 'https://math.cumt.edu.cn/',
    textbooks: [
      '《数值分析》(第五版) 李庆扬 等 编，清华大学出版社'
    ],
    exams: [
      { title: '2024-2025 学年第一学期期末试题', url: '/pdfs/numerical-analysis-final-2024.pdf' }
    ]
  },
  {
    id: 'pde',
    name: '数学物理方程',
    nameEn: 'Partial Differential Equations',
    grade: '大二',
    category: '核心课',
    teacher: '刘红彬',
    teacherUrl: 'https://math.cumt.edu.cn/',
    textbooks: [
      '《数学物理方程》(第四版) 谷超豪 等 编，高等教育出版社'
    ],
    exams: [
      { title: '2023-2024 学年第二学期期末试题', url: '/pdfs/pde-final-2024.pdf' }
    ]
  },

  // ==================== 大 三 ====================
  {
    id: 'functional-analysis',
    name: '泛函分析',
    nameEn: 'Functional Analysis',
    grade: '大三',
    category: '核心课',
    teacher: '朱凯',
    teacherUrl: 'https://kzhu.net/',
    textbooks: [
      '《实变函数与泛函分析》(下册·泛函分析) 曹广福 编，高等教育出版社',
      '《泛函分析学习指导》 郭懋正 编，北京大学出版社'
    ],
    exams: [
      { title: '2024-2025 学年第一学期期末试题', url: '/pdfs/functional-analysis-final-2024.pdf' }
    ]
  },
  {
    id: 'differential-geometry',
    name: '微分几何',
    nameEn: 'Differential Geometry',
    grade: '大三',
    category: '核心课',
    teacher: '张玉峰',
    teacherUrl: 'https://math.cumt.edu.cn/',
    textbooks: [
      '《微分几何》(第四版) 梅向明、黄敬之 编，高等教育出版社'
    ],
    exams: [
      { title: '2023-2024 学年第二学期期末试题', url: '/pdfs/differential-geometry-final-2024.pdf' }
    ]
  },
  {
    id: 'topology',
    name: '拓扑学',
    nameEn: 'Topology',
    grade: '大三',
    category: '核心课',
    teacher: '王林',
    teacherUrl: 'https://math.cumt.edu.cn/',
    textbooks: [
      '《点集拓扑讲义》(第四版) 熊金城 编，高等教育出版社',
      '《基础拓扑学》 M.A.Armstrong 著，北京大学出版社'
    ],
    exams: [
      { title: '2024-2025 学年第一学期期末试题', url: '/pdfs/topology-final-2024.pdf' }
    ]
  },
  {
    id: 'modern-algebra',
    name: '近世代数',
    nameEn: 'Modern Algebra',
    grade: '大三',
    category: '核心课',
    teacher: '徐思奥',
    teacherUrl: 'https://math.cumt.edu.cn/',
    textbooks: [
      '《近世代数》(第二版) 吴品三 编，高等教育出版社',
      '《近世代数习题解答》 韩士安 编，科学出版社'
    ],
    exams: [
      { title: '2023-2024 学年第一学期期末试题', url: '/pdfs/modern-algebra-final-2023.pdf' }
    ]
  },
  {
    id: 'operations-research',
    name: '运筹学',
    nameEn: 'Operations Research',
    grade: '大三',
    category: '选修课',
    teacher: '王海军',
    teacherUrl: 'https://math.cumt.edu.cn/',
    textbooks: [
      '《运筹学》(第四版) 运筹学教材编写组 编，清华大学出版社'
    ],
    exams: [
      { title: '2024-2025 学年第一学期期末试题', url: '/pdfs/operations-research-final-2024.pdf' }
    ]
  },
  {
    id: 'math-modeling',
    name: '数学建模',
    nameEn: 'Mathematical Modeling',
    grade: '大三',
    category: '选修课',
    teacher: '陈太勇',
    teacherUrl: 'https://math.cumt.edu.cn/',
    textbooks: [
      '《数学模型》(第五版) 姜启源 等 编，高等教育出版社'
    ],
    exams: [
      { title: '2024 年全国大学生数学建模竞赛 CUMT 集训资料', url: '/pdfs/modeling-training-2024.pdf' }
    ]
  },

  // ==================== 大 四 ====================
  {
    id: 'adv-probability',
    name: '高等概率论',
    nameEn: 'Advanced Probability Theory',
    grade: '大四',
    category: '选修课',
    teacher: '周圣武',
    teacherUrl: 'https://math.cumt.edu.cn/',
    textbooks: [
      '《概率论基础》(第三版) 李贤平 编，高等教育出版社'
    ],
    exams: [
      { title: '2024-2025 学年第一学期期末试题', url: '/pdfs/adv-probability-final-2024.pdf' }
    ]
  },
  {
    id: 'lie-groups',
    name: '李群与李代数',
    nameEn: 'Lie Groups and Lie Algebras',
    grade: '大四',
    category: '选修课',
    teacher: '朱凯',
    teacherUrl: 'https://kzhu.net/',
    textbooks: [
      '《李群基础》 项武义 编，高等教育出版社'
    ],
    exams: []
  },
  {
    id: 'algebraic-topology',
    name: '代数拓扑',
    nameEn: 'Algebraic Topology',
    grade: '大四',
    category: '选修课',
    teacher: '王林',
    teacherUrl: 'https://math.cumt.edu.cn/',
    textbooks: [
      '《Algebraic Topology》 Allen Hatcher, Cambridge University Press'
    ],
    exams: []
  }
];