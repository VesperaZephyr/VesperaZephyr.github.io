/**
 * CUMT 数院资料库 — 主要交互逻辑
 * - 课程卡片渲染
 * - 筛选功能（年级 + 类别）
 * - 导航移动端菜单
 */

(function () {
  'use strict';

  // ---- DOM 引用 ----
  const grid = document.getElementById('coursesGrid');
  const emptyState = document.getElementById('emptyState');
  const countEl = document.getElementById('courseCount');
  const gradeBtns = document.querySelectorAll('#gradeFilter .filter-btn');
  const categoryBtns = document.querySelectorAll('#categoryFilter .filter-btn');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  // ---- 状态 ----
  let activeGrade = 'all';
  let activeCategory = 'all';

  // ---- 导航移动端 ----
  if (navToggle) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    // 点击导航链接后关闭菜单
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  // ---- 渲染课程卡片 ----
  function renderCards(courses) {
    if (!grid) return;

    if (courses.length === 0) {
      grid.innerHTML = '';
      emptyState.classList.add('show');
      countEl.textContent = '0';
      return;
    }

    emptyState.classList.remove('show');

    var html = '';
    for (var i = 0; i < courses.length; i++) {
      var c = courses[i];

      html += '<div class="course-card">';
      html += '  <div class="course-card-header">';
      html += '    <div>';
      html += '      <div class="course-name">' + escapeHtml(c.name);
      if (c.nameEn) {
        html += '        <span class="course-name-en">' + escapeHtml(c.nameEn) + '</span>';
      }
      html += '      </div>';
      html += '    </div>';
      html += '    <div class="course-tags">';
      html += '      <span class="course-tag grade">' + escapeHtml(c.grade) + '</span>';
      html += '      <span class="course-tag category">' + escapeHtml(c.category) + '</span>';
      html += '    </div>';
      html += '  </div>';

      // 教师信息
      html += '  <div class="teacher-info">';
      html += '    <span class="teacher-label">授课教师：</span>';
      if (c.teacherUrl) {
        html += '    <a href="' + escapeAttr(c.teacherUrl) + '" target="_blank" class="teacher-link">' + escapeHtml(c.teacher) + '</a>';
      } else {
        html += '    <span>' + escapeHtml(c.teacher) + '</span>';
      }
      html += '  </div>';

      // 参考教材
      if (c.textbooks && c.textbooks.length > 0) {
        html += '  <div class="textbooks">';
        html += '    <div class="textbook-title">📚 参考教材</div>';
        html += '    <ul class="textbook-list">';
        for (var t = 0; t < c.textbooks.length; t++) {
          html += '      <li>' + escapeHtml(c.textbooks[t]) + '</li>';
        }
        html += '    </ul>';
        html += '  </div>';
      }

      // 试题资源
      if (c.exams && c.exams.length > 0) {
        html += '  <div class="exams-section">';
        html += '    <div class="exams-section-title">📝 试题资源</div>';
        html += '    <div class="exam-list">';
        for (var e = 0; e < c.exams.length; e++) {
          html += '      <a href="' + escapeAttr(c.exams[e].url) + '" target="_blank" class="exam-link">';
          html += '        <span class="exam-link-icon">PDF</span>';
          html += '        <span class="exam-link-text">' + escapeHtml(c.exams[e].title) + '</span>';
          html += '        <span class="exam-link-arrow">↗</span>';
          html += '      </a>';
        }
        html += '    </div>';
        html += '  </div>';
      }

      html += '</div>';
    }

    grid.innerHTML = html;
    countEl.textContent = courses.length;
  }

  // ---- 筛选逻辑 ----
  function filterCourses() {
    var filtered = COURSES.filter(function (c) {
      var matchGrade = activeGrade === 'all' || c.grade === activeGrade;
      var matchCategory = activeCategory === 'all' || c.category === activeCategory;
      return matchGrade && matchCategory;
    });
    renderCards(filtered);
  }

  // ---- 按钮事件绑定 ----
  function bindFilterButtons(buttons, callback) {
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function () {
        var parent = this.parentElement;
        var currentActive = parent.querySelector('.active');
        if (currentActive) {
          currentActive.classList.remove('active');
        }
        this.classList.add('active');
        callback(this.getAttribute('data-filter'));
      });
    }
  }

  bindFilterButtons(gradeBtns, function (val) {
    activeGrade = val;
    filterCourses();
  });

  bindFilterButtons(categoryBtns, function (val) {
    activeCategory = val;
    filterCourses();
  });

  // ---- 工具函数 ----
  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function escapeAttr(str) {
    return String(str).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  // ---- 初始渲染 ----
  filterCourses();

})();