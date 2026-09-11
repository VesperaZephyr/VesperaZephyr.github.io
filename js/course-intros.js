/**
 * 课程详细介绍 —— 手工维护的数据文件
 *
 * key: js/data.js 中对应课程的 id
 * 每门课可包含以下字段(均可选, 缺失时页面显示"待补充"):
 *   intro    — 课程简介(内容、难度、考试风格等)
 *   teachers — 教师评价(按授课教师逐个点评)
 *   books    — 推荐书籍与补充书目(可含 markdown 链接)
 *
 * 示例:
 * const COURSE_INTROS = {
 *   'regression-analysis': {
 *     intro: '回归分析是统计学专业主干课程…',
 *     teachers: '**刘昱**: 讲课细腻…',
 *     books: '- 《应用回归分析》…'
 *   }
 * };
 */
const COURSE_INTROS = {};
