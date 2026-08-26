/**
 * CUMT 数院资料库 — 主题切换与回到顶部
 * - 深浅色模式: 初始跟随系统偏好, 手动切换后记忆于 localStorage
 * - 页面内联脚本已在 <head> 中提前设置 data-theme 以避免闪烁
 */

(function () {
  'use strict';

  var KEY = 'md-theme';
  var root = document.documentElement;
  var meta = document.querySelector('meta[name="theme-color"]');
  var colors = { light: '#ffffff', dark: '#1e2129' };

  var SUN = '<svg viewBox="0 0 24 24"><path d="M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3m0-7 2.39 3.42C13.65 5.15 12.84 5 12 5c-.84 0-1.65.15-2.39.42L12 2M3.34 7l4.16-.35A7.2 7.2 0 0 0 5.94 8.5c-.44.74-.69 1.5-.83 2.29L3.34 7m.02 10 1.76-3.77a7.131 7.131 0 0 0 2.38 4.14L3.36 17M20.65 7l-1.77 3.79a7.023 7.023 0 0 0-2.38-4.15l4.15.36m-.01 10-4.14.36c.59-.51 1.12-1.14 1.54-1.86.42-.73.69-1.5.83-2.29L20.64 17M12 22l-2.41-3.44c.74.27 1.55.44 2.41.44.82 0 1.63-.17 2.37-.44L12 22Z"/></svg>';
  var MOON = '<svg viewBox="0 0 24 24"><path d="M12 8a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4m0 10a6 6 0 0 1-6-6 6 6 0 0 1 6-6 6 6 0 0 1 6 6 6 6 0 0 1-6 6m8-9.31V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69Z"/></svg>';

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    if (meta) meta.setAttribute('content', colors[theme]);
    var btn = document.getElementById('themeToggle');
    if (btn) {
      btn.innerHTML = theme === 'dark' ? SUN : MOON;
      var label = theme === 'dark' ? '切换到浅色模式' : '切换到深色模式';
      btn.setAttribute('title', label);
      btn.setAttribute('aria-label', label);
    }
  }

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  // ---- 系统偏好变化时, 若用户从未手动选择过则跟随系统 ----
  var mql = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  if (mql) {
    var onPreferenceChange = function (e) {
      if (!stored()) apply(e.matches ? 'dark' : 'light');
    };
    if (mql.addEventListener) {
      mql.addEventListener('change', onPreferenceChange);
    } else if (mql.addListener) {
      mql.addListener(onPreferenceChange);
    }
  }

  // ---- 手动切换 ----
  var toggleBtn = document.getElementById('themeToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(KEY, next); } catch (e) { /* 隐私模式下忽略 */ }
      apply(next);
    });
  }

  // ---- 初始渲染(兜底 + 填充切换按钮图标) ----
  var current = root.getAttribute('data-theme');
  if (current !== 'dark' && current !== 'light') {
    current = (mql && mql.matches) ? 'dark' : 'light';
  }
  apply(current);

  // ---- 回到顶部按钮 ----
  var backToTop = document.getElementById('myBtn');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      backToTop.style.display = (document.documentElement.scrollTop > 400) ? 'block' : 'none';
    }, { passive: true });
  }

})();
