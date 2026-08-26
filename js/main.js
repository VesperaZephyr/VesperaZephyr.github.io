/**
 * CUMT 数院资料库 — 交互逻辑
 * - 侧边栏筛选器（按培养方案课程体系: 一级分类 + 课组）
 * - 课程卡片渲染
 * - 移动端侧边栏 / 遮罩
 */

(function () {
  'use strict';

  var ICON = {
    book: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 22a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-6v7l-2.5-1.5L7 9V2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12Z"/></svg>',
    file: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6m4 18H6V4h7v5h5Z"/></svg>',
    scope: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 0a1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1m0 4a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3Z"/></svg>',
    note: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25Z"/></svg>'
  };

  // ---- DOM 引用 ----
  var grid = document.getElementById('coursesGrid');
  var emptyState = document.getElementById('emptyState');
  var countEl = document.getElementById('courseCount');
  var sidebar = document.getElementById('mdSidebar');
  var overlay = document.getElementById('mdOverlay');
  var sidebarToggle = document.getElementById('sidebarToggle');
  var tabs = document.getElementById('mdTabs');

  // ---- 状态 ----
  var activeGroup = 'all';
  var searchKeyword = '';

  // ============================================================
  //  课程分类键: "一级分类::二级分类"
  // ============================================================

  function courseSubsections(c) {
    if (Array.isArray(c.subsection)) return c.subsection;
    return c.subsection ? [c.subsection] : [];
  }

  function courseKeys(c) {
    var subs = courseSubsections(c);
    var keys = [];
    for (var i = 0; i < subs.length; i++) {
      keys.push(c.section + '::' + subs[i]);
    }
    return keys;
  }

  // ============================================================
  //  搜索功能
  // ============================================================

  var searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      searchKeyword = this.value.trim().toLowerCase();
      activeGroup = 'all';
      setActiveNavLink('all');
      filterCourses();
    });
  }

  function setActiveNavLink(filter) {
    var links = document.querySelectorAll('#mdSidebar .md-nav__link[data-filter]');
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove('md-nav__link--active');
      if (links[i].getAttribute('data-filter') === filter) {
        links[i].classList.add('md-nav__link--active');
      }
    }
  }

  // ============================================================
  //  侧边栏筛选器
  // ============================================================

  window.setFilter = function (el) {
    if (!el) return;
    activeGroup = el.getAttribute('data-filter');
    setActiveNavLink(activeGroup);
    filterCourses();
  };

  // ============================================================
  //  课程卡片渲染
  // ============================================================

  function renderMetaLine(c) {
    var parts = [];
    if (c.credits) parts.push(c.credits + ' 学分');
    if (c.term) parts.push(c.term + '季学期');
    if (c.suggested) parts.push('建议第 ' + c.suggested + ' 学期');
    if (c.note) parts.push(c.note);
    if (parts.length === 0) return '';
    return '<p class="course-meta">' + escapeHtml(parts.join(' · ')) + '</p>';
  }

  function sectionLabel(icon, text) {
    return '<span class="section-label">' + ICON[icon] + '<span>' + text + '</span></span>';
  }

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

      html += '<article class="course-card">';
      html += '  <div class="course-card-header">';
      html += '    <div class="course-name">' + escapeHtml(c.name);
      if (c.nameEn) {
        html += '      <span class="course-name-en">' + escapeHtml(c.nameEn) + '</span>';
      }
      html += '    </div>';
      html += '    <div class="course-tags">';
      html += '      <span class="course-tag grade">' + escapeHtml(c.section) + '</span>';
      var subs = courseSubsections(c);
      for (var si = 0; si < subs.length; si++) {
        html += '      <span class="course-tag category">' + escapeHtml(subs[si]) + '</span>';
      }
      html += '    </div>';
      html += '  </div>';

      html += renderMetaLine(c);

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

      // 参考教材（条目可为字符串，或 { title, url } 电子版链接）
      if (c.textbooks && c.textbooks.length > 0) {
        html += '  <div class="card-section">';
        html += sectionLabel('book', '参考教材');
        html += '    <ul class="textbook-list">';
        for (var t = 0; t < c.textbooks.length; t++) {
          var tb = c.textbooks[t];
          if (tb && typeof tb === 'object') {
            html += '      <li><a href="' + escapeAttr(tb.url) + '" target="_blank" class="review-link textbook-link">' + escapeHtml(tb.title) + '</a></li>';
          } else {
            html += '      <li>' + escapeHtml(tb) + '</li>';
          }
        }
        html += '    </ul>';
        html += '  </div>';
      }

      // 考试范围
      if (c.examScope && c.examScope !== '[待补充]') {
        html += '  <div class="exam-scope">';
        html += '    ' + sectionLabel('scope', '考试范围');
        html += '    <p class="exam-scope-text">' + escapeHtml(c.examScope) + '</p>';
        html += '  </div>';
      }

      // 复习资料
      if (c.reviewMaterials && c.reviewMaterials.length > 0) {
        html += '  <div class="card-section">';
        html += sectionLabel('note', '复习资料');
        html += '    <ul class="review-list">';
        for (var ri = 0; ri < c.reviewMaterials.length; ri++) {
          html += '      <li><a href="' + escapeAttr(c.reviewMaterials[ri].url) + '" target="_blank" class="review-link">' + escapeHtml(c.reviewMaterials[ri].title) + '</a></li>';
        }
        html += '    </ul>';
        html += '  </div>';
      }

      // 试题 & 模拟卷 — 按类型分拆，各自按年份分组
      if (c.exams && c.exams.length > 0) {
        var realExams = [];
        var mockExams = [];
        for (var e = 0; e < c.exams.length; e++) {
          var title = c.exams[e].title || '';
          if (title.indexOf('模拟') !== -1 || title.indexOf('预测') !== -1) {
            mockExams.push(c.exams[e]);
          } else {
            realExams.push(c.exams[e]);
          }
        }

        if (realExams.length > 0) {
          html += renderExamSection('试题资源', 'file', realExams);
        }
        if (mockExams.length > 0) {
          html += renderExamSection('模拟卷', 'file', mockExams);
        }
      }

      // 尚无任何资料时的提示
      var hasMaterials =
        (c.reviewMaterials && c.reviewMaterials.length > 0) ||
        (c.exams && c.exams.length > 0);
      if (!hasMaterials) {
        html += '  <p class="course-empty-note">资料待补充，欢迎投稿</p>';
      }

      html += '</article>';
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
      var matchGroup = activeGroup === 'all' || courseKeys(c).indexOf(activeGroup) !== -1;
      var matchSearch = !searchKeyword ||
        (c.name && c.name.toLowerCase().indexOf(searchKeyword) !== -1) ||
        (c.nameEn && c.nameEn.toLowerCase().indexOf(searchKeyword) !== -1) ||
        (c.section && c.section.toLowerCase().indexOf(searchKeyword) !== -1) ||
        (courseSubsections(c).some(function (s) { return s.toLowerCase().indexOf(searchKeyword) !== -1; })) ||
        (c.teachers && c.teachers.some(function (t) { return t.name.toLowerCase().indexOf(searchKeyword) !== -1; })) ||
        (c.textbooks && c.textbooks.some(function (tb) {
          var title = (tb && typeof tb === 'object') ? tb.title : tb;
          return title && title.toLowerCase().indexOf(searchKeyword) !== -1;
        }));
      return matchGroup && matchSearch;
    });
    renderCards(filtered);
  }

  // ============================================================
  //  侧边栏计数
  // ============================================================

  function renderCounts() {
    var counts = { 'all': COURSES.length };
    for (var i = 0; i < COURSES.length; i++) {
      var keys = courseKeys(COURSES[i]);
      for (var k = 0; k < keys.length; k++) {
        counts[keys[k]] = (counts[keys[k]] || 0) + 1;
      }
    }
    var links = document.querySelectorAll('#mdSidebar .md-nav__link[data-filter]');
    for (var j = 0; j < links.length; j++) {
      var key = links[j].getAttribute('data-filter');
      var span = links[j].querySelector('.md-nav__count');
      if (span && counts[key] !== undefined) {
        span.textContent = counts[key];
      }
    }
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

  if (sidebar) {
    sidebar.addEventListener('click', function (e) {
      var link = e.target.closest ? e.target.closest('.md-nav__link') : null;
      if (link && link.hasAttribute('data-filter')) {
        if (window.innerWidth <= 959) {
          closeSidebar();
        }
      }
    });
  }

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

  /**
   *  渲染试题/模拟卷栏目（按年份分组）
   */
  function renderExamSection(title, icon, exams) {
    var h = '  <div class="card-section">';
    h += sectionLabel(icon, title);

    var yearGroups = {};
    for (var i = 0; i < exams.length; i++) {
      var y = exams[i].year || '往年';
      if (!yearGroups[y]) yearGroups[y] = [];
      yearGroups[y].push(exams[i]);
    }

    var years = Object.keys(yearGroups).sort(function (a, b) {
      if (a === '往年') return 1;
      if (b === '往年') return -1;
      return b.localeCompare(a);
    });

    for (var yi = 0; yi < years.length; yi++) {
      var yearLabel = years[yi];
      var groupExams = yearGroups[yearLabel];
      h += '    <div class="exam-year-group">';
      h += '      <span class="exam-year-label">' + escapeHtml(yearLabel) + '</span>';
      h += '      <ul class="exam-list">';
      for (var gi = 0; gi < groupExams.length; gi++) {
        h += '        <li><a href="' + escapeAttr(groupExams[gi].url) + '" target="_blank" class="exam-link">' + escapeHtml(groupExams[gi].title) + '</a></li>';
      }
      h += '      </ul>';
      h += '    </div>';
    }

    h += '  </div>';
    return h;
  }

  // ============================================================
  //  初始渲染
  // ============================================================
  renderCounts();
  filterCourses();

})();
