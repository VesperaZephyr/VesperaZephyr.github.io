/**
 * CUMT 数院资料库 — MkDocs Material 风格交互逻辑
 * - 侧边栏筛选器（年级 + 类别）
 * - 课程卡片渲染
 * - 移动端侧边栏 / 遮罩 / 回到顶部
 */

(function () {
  'use strict';

  // ---- DOM 引用 ----
  var grid = document.getElementById('coursesGrid');
  var emptyState = document.getElementById('emptyState');
  var countEl = document.getElementById('courseCount');
  var sidebar = document.getElementById('mdSidebar');
  var overlay = document.getElementById('mdOverlay');
  var sidebarToggle = document.getElementById('sidebarToggle');
  var backToTop = document.getElementById('myBtn');
  var tabs = document.getElementById('mdTabs');

  // ---- 状态 ----
  var activeGrade = 'all';
  var activeCategory = 'all';

  // ============================================================
  //  Sidebar section toggle (no-op for now)
  // ============================================================
  window.toggleNavSection = function (e) {
    // 保留以备后续折叠/展开侧边栏分组
    e.preventDefault();
  };

  // ============================================================
  //  侧边栏筛选器
  // ============================================================

  window.setFilter = function (el, type) {
    if (!el) return;

    // 更新 active 样式
    var parent = el.parentElement.parentElement; // ul.md-nav__list
    var links = parent.querySelectorAll('.md-nav__link');
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove('md-nav__link--active');
    }
    el.classList.add('md-nav__link--active');

    // 更新筛选状态
    if (type === 'grade') {
      activeGrade = el.getAttribute('data-filter');
    } else if (type === 'category') {
      activeCategory = el.getAttribute('data-filter');
    }

    filterCourses();
  };

  // ============================================================
  //  课程卡片渲染
  // ============================================================

  function renderCards(courses) {
    if (!grid) return;

    if (courses.length === 0) {
      grid.innerHTML = '';
      emptyState.classList.add('show');
      if (countEl) {
        countEl.innerHTML = '共 <strong>0</strong> 门课程';
      }
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
      if (c.teachers && c.teachers.length > 0) {
        html += '  <div class="teacher-info">';
        html += '    <span class="teacher-label">授课教师：</span>';
        for (var ti = 0; ti < c.teachers.length; ti++) {
          if (ti > 0) {
            html += '    <span class="teacher-sep">、</span>';
          }
          if (c.teachers[ti].url) {
            html += '    <a href="' + escapeAttr(c.teachers[ti].url) + '" target="_blank" class="teacher-link">' + escapeHtml(c.teachers[ti].name) + '</a>';
          } else {
            html += '    <span class="teacher-name">' + escapeHtml(c.teachers[ti].name) + '</span>';
          }
        }
        html += '  </div>';
      }

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

      // 考试范围
      if (c.examScope) {
        html += '  <div class="exam-scope">';
        html += '    <span class="exam-scope-label">📋 考试范围</span>';
        html += '    <p class="exam-scope-text">' + escapeHtml(c.examScope) + '</p>';
        html += '  </div>';
      }

      // 复习资料
      html += '  <div class="review-section">';
      html += '    <div class="review-section-title">📖 复习资料</div>';
      if (c.reviewMaterials && c.reviewMaterials.length > 0) {
        html += '    <ul class="review-list">';
        for (var ri = 0; ri < c.reviewMaterials.length; ri++) {
          html += '      <li><a href="' + escapeAttr(c.reviewMaterials[ri].url) + '" target="_blank" class="review-link">' + escapeHtml(c.reviewMaterials[ri].title) + '</a></li>';
        }
        html += '    </ul>';
      } else {
        html += '    <p class="review-empty">暂无，待补充</p>';
      }
      html += '  </div>';

      // 试题资源 — 按年份分组
      if (c.exams && c.exams.length > 0) {
        // 按年份分组
        var yearGroups = {};
        for (var e = 0; e < c.exams.length; e++) {
          var y = c.exams[e].year || '往年';
          if (!yearGroups[y]) yearGroups[y] = [];
          yearGroups[y].push(c.exams[e]);
        }

        // 年份排序：降序，往年放最后
        var years = Object.keys(yearGroups).sort(function (a, b) {
          if (a === '往年') return 1;
          if (b === '往年') return -1;
          return b.localeCompare(a);
        });

        html += '  <div class="exams-section">';
        html += '    <div class="exams-section-title">📝 试题资源</div>';

        for (var yi = 0; yi < years.length; yi++) {
          var yearLabel = years[yi];
          var groupExams = yearGroups[yearLabel];
          html += '    <div class="exam-year-group">';
          html += '      <span class="exam-year-label">' + escapeHtml(yearLabel) + '</span>';
          html += '      <ul class="exam-list">';
          for (var gi = 0; gi < groupExams.length; gi++) {
            html += '        <li><a href="' + escapeAttr(groupExams[gi].url) + '" target="_blank" class="exam-link">' + escapeHtml(groupExams[gi].title) + '</a></li>';
          }
          html += '      </ul>';
          html += '    </div>';
        }

        html += '  </div>';
      }

      html += '</div>';
    }

    grid.innerHTML = html;
    if (countEl) {
      countEl.innerHTML = '共 <strong>' + courses.length + '</strong> 门课程';
    }
  }

  // ============================================================
  //  筛选逻辑
  // ============================================================

  function filterCourses() {
    var filtered = COURSES.filter(function (c) {
      var matchGrade = activeGrade === 'all' || c.grade === activeGrade;
      var matchCategory = activeCategory === 'all' || c.category === activeCategory;
      return matchGrade && matchCategory;
    });
    renderCards(filtered);
  }

  // ============================================================
  //  移动端侧边栏开关
  // ============================================================

  function openSidebar() {
    if (sidebar) sidebar.classList.add('open');
    if (overlay) overlay.classList.add('open');
  }

  function closeSidebar() {
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
  }

  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function () {
      if (sidebar && sidebar.classList.contains('open')) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }

  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }

  // 点击侧边栏内链接后关闭（移动端）
  if (sidebar) {
    sidebar.addEventListener('click', function (e) {
      if (e.target.classList.contains('md-nav__link') && e.target.hasAttribute('data-filter')) {
        // 移动端筛选后关闭侧边栏
        if (window.innerWidth <= 959) { // 59.9375em
          closeSidebar();
        }
      }
    });
  }

  // ============================================================
  //  回到顶部按钮
  // ============================================================

  window.addEventListener('scroll', function () {
    if (backToTop) {
      backToTop.style.display = (document.documentElement.scrollTop > 400) ? 'block' : 'none';
    }
  });

  // ============================================================
  //  Tab 点击（页面间导航）
  // ============================================================
  if (tabs) {
    tabs.addEventListener('click', function (e) {
      var link = e.target.closest('.md-tabs__link');
      if (!link) return;
      var items = tabs.querySelectorAll('.md-tabs__item');
      for (var i = 0; i < items.length; i++) {
        items[i].classList.remove('md-tabs__item--active');
      }
      var item = link.closest('.md-tabs__item');
      if (item) item.classList.add('md-tabs__item--active');
    });
  }
  // ============================================================
  //  工具函数
  // ============================================================
  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function escapeAttr(str) {
    return String(str).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  // ============================================================
  //  初始渲染
  // ============================================================
  filterCourses();

})();
