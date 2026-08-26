#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
把 Obsidian 数学笔记仓库渲染为静态 HTML, 并生成笔记索引 js/notes-data.js.

用法:
    python build_notes.py [仓库路径]

默认仓库: F:\\Obsidian Vault\\数学笔记与总结

输出:
    notes/<slug>.html   每篇笔记一个页面(含站点导航与 MathJax)
    notes/assets/       笔记内引用的本地图片
    js/notes-data.js    笔记索引(供 notes.html 使用)

依赖: pip install markdown2
"""

import datetime
import html as htmlmod
import json
import os
import re
import shutil
import sys
import urllib.parse

import markdown2

VAULT = r'F:\Obsidian Vault\数学笔记与总结'
ROOT = os.path.dirname(os.path.abspath(__file__))
NOTES_DIR = os.path.join(ROOT, 'notes')
ASSETS_DIR = os.path.join(NOTES_DIR, 'assets')
DATA_FILE = os.path.join(ROOT, 'js', 'notes-data.js')
VERSION = '20260827'

IMG_EXTS = ('.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg')
MD_EXTRAS = [
    'fenced-code-blocks', 'tables', 'header-ids', 'footnotes',
    'strikethrough', 'task-lists', 'cuddled-lists',
]

ANTI_FOUC = (
    "<script>(function(){try{var t=localStorage.getItem('md-theme');"
    "if(t!=='light'&&t!=='dark'){t=window.matchMedia&&"
    "window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}"
    "var d=document.documentElement;d.setAttribute('data-theme',t);"
    "var m=document.querySelector('meta[name=\"theme-color\"]');"
    "if(m){m.setAttribute('content',t==='dark'?'#1e2129':'#ffffff');}}catch(e){}})();</script>"
)

MATHJAX_CONFIG = (
    "<script>window.MathJax={tex:{inlineMath:[['$','$'],['\\\\(','\\\\)']],"
    "displayMath:[['$$','$$'],['\\\\[','\\\\]']],processEscapes:true},"
    "options:{skipHtmlTags:['script','noscript','style','textarea','pre','code']}};</script>"
)

HEADER = """<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} — CUMT 数院电子资料库</title>
<meta name="description" content="{desc}">
<meta name="theme-color" content="#ffffff">
{anti_fouc}
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://cdn.jsdelivr.net">
<link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;700&family=Noto+Serif+SC:wght@600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../css/style.css?v={version}">
{mathjax}
<script async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>
<body>

<!-- 跳至内容 -->
<a href="#main" class="md-skip">跳到主内容</a>

<!-- ===== 顶部导航栏 ===== -->
<header class="md-header">
  <div class="md-header__inner">
    <a href="/" class="md-logo">
      <svg class="md-icon md-icon--logo" viewBox="0 0 32 32" width="24" height="24">
        <rect x="2" y="20" width="7" height="10" rx="1" fill="currentColor" opacity="0.9"/>
        <rect x="12" y="13" width="7" height="17" rx="1" fill="currentColor" opacity="0.7"/>
        <rect x="22" y="7" width="7" height="23" rx="1" fill="currentColor" opacity="0.5"/>
      </svg>
    </a>
    <div class="md-header__title">
      <div class="md-header__ellipsis">
        <span class="md-header__topic">{title_short}</span>
        <span class="md-header__topic">数学笔记</span>
      </div>
    </div>
    <div class="md-header__option">
      <button class="md-header__button md-icon" id="themeToggle" aria-label="切换深浅色模式"></button>
    </div>
    <div class="md-header__source">
      <a href="https://github.com/VesperaZephyr/vesperazephyr.github.io" target="_blank" class="md-header__button md-icon" title="GitHub 仓库" aria-label="GitHub">
        <svg viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
      </a>
    </div>
  </div>
</header>

<!-- ===== 标签页导航 ===== -->
<nav class="md-tabs">
  <ul class="md-tabs__list">
    <li class="md-tabs__item">
      <a href="/" class="md-tabs__link">课程资料</a>
    </li>
    <li class="md-tabs__item md-tabs__item--active">
      <a href="/notes.html" class="md-tabs__link">数学笔记</a>
    </li>
    <li class="md-tabs__item">
      <a href="/tools.html" class="md-tabs__link">友情链接 / 有用工具</a>
    </li>
  </ul>
</nav>

<!-- ===== 主容器 ===== -->
<div class="md-container">
  <main class="md-main">
    <div class="md-main__inner">
      <div class="md-content md-typeset note-article" id="main" style="margin-left:0;">
"""

FOOTER = """
        <nav class="note-footer">
          <a href="/notes.html">&laquo; 返回数学笔记列表</a>
        </nav>

      </div>
    </div>
  </main>
</div>

<!-- ===== 页脚 ===== -->
<footer class="md-footer">
  <div class="md-footer__inner">
    <p>© 2026 CUMT 数院电子资料库 · 由 VesperaZephyr 维护</p>
    <p class="md-footer__note">本站资料仅供学习交流使用，请勿用于商业用途</p>
  </div>
</footer>

<!-- 回到顶部 -->
<button id="myBtn" onclick="window.scrollTo({{top:0,behavior:'smooth'}})" title="回到顶部" aria-label="回到顶部">
  <svg viewBox="0 0 24 24" width="18" height="18"><path d="M12 4l-8 8h5v8h6v-8h5l-8-8z" fill="currentColor"/></svg>
</button>

<script src="../js/theme.js?v={version}"></script>

</body>
</html>
"""


def slugify(name):
    base = os.path.splitext(name)[0]
    s = re.sub(r'[\\/:*?"<>|]', '_', base).strip()
    return s or 'untitled'


def parse_frontmatter(text):
    m = re.match(r'^---\r?\n(.*?)\r?\n---\r?\n?', text, re.DOTALL)
    if not m:
        return {}, text
    meta = {}
    for line in m.group(1).splitlines():
        if ':' in line:
            key, _, val = line.partition(':')
            meta[key.strip()] = val.strip().strip('"\'')
    return meta, text[m.end():]


def copy_asset(name, src_dir):
    path = os.path.join(src_dir, name)
    if os.path.isfile(path):
        os.makedirs(ASSETS_DIR, exist_ok=True)
        try:
            shutil.copy2(path, os.path.join(ASSETS_DIR, name))
        except Exception:
            pass
        return 'assets/' + urllib.parse.quote(name)
    return None


def preprocess_wikilinks(text, src_dir, note_slugs):
    def repl_embed(m):
        target, _, alias = m.group(1).partition('|')
        target = target.strip()
        alias = (alias.strip() or target)
        if os.path.splitext(target)[1].lower() in IMG_EXTS:
            url = copy_asset(target, src_dir)
            if url:
                return '<img src="%s" alt="%s">' % (url, htmlmod.escape(alias))
        return m.group(0)

    def repl_link(m):
        target, _, alias = m.group(1).partition('|')
        target = target.strip()
        alias = (alias.strip() or target)
        if os.path.splitext(target)[1].lower() in IMG_EXTS:
            url = copy_asset(target, src_dir)
            if url:
                return '<a href="%s">%s</a>' % (url, htmlmod.escape(alias))
            return htmlmod.escape(alias)
        base = os.path.splitext(target)[0]
        if base in note_slugs:
            return '<a href="%s.html">%s</a>' % (note_slugs[base], htmlmod.escape(alias))
        return htmlmod.escape(alias)

    text = re.sub(r'!\[\[([^\]]+)\]\]', repl_embed, text)
    text = re.sub(r'\[\[([^\]]+)\]\]', repl_link, text)
    return text


def protect(text):
    blocks = {'code': [], 'dm': [], 'im': []}

    def code_repl(m):
        idx = len(blocks['code'])
        blocks['code'].append((m.group(1).strip(), m.group(2)))
        return '@@CODE%d@@' % idx

    text = re.sub(r'```(\w*)\r?\n(.*?)```', code_repl, text, flags=re.DOTALL)

    def dm_repl(m):
        idx = len(blocks['dm'])
        blocks['dm'].append(m.group(1))
        return '@@DM%d@@' % idx

    text = re.sub(r'\$\$(.+?)\$\$', dm_repl, text, flags=re.DOTALL)

    def im_repl(m):
        idx = len(blocks['im'])
        blocks['im'].append(m.group(1))
        return '@@IM%d@@' % idx

    text = re.sub(r'\$([^$\n]+)\$', im_repl, text)
    return text, blocks


def restore(text, blocks):
    def esc(s):
        return htmlmod.escape(s, quote=False)

    def code_repl(m):
        lang, code = blocks['code'][int(m.group(1))]
        cls = ' class="language-%s"' % htmlmod.escape(lang) if lang else ''
        return '<pre><code%s>%s</code></pre>' % (cls, esc(code))

    out = re.sub(r'@@CODE(\d+)@@', code_repl, text)

    def dm_repl(m):
        return '$$\n%s\n$$' % esc(blocks['dm'][int(m.group(1))])

    out = re.sub(r'@@DM(\d+)@@', dm_repl, out)

    def im_repl(m):
        return '$%s$' % esc(blocks['im'][int(m.group(1))])

    out = re.sub(r'@@IM(\d+)@@', im_repl, out)
    return out


def make_excerpt(body):
    for para in body.split('\n\n'):
        t = para.replace('\n', ' ')
        t = re.sub(r'\$\$.+?\$\$', ' ', t, flags=re.DOTALL)
        t = re.sub(r'\$[^$\n]+\$', ' ', t)
        t = re.sub(r'^\s*(#+\s*|>\s*|[-*+]\s*|\d+[.)]\s*)', '', t)
        t = re.sub(r'\[\[([^\]|]+)(\|[^\]]*)?\]\]', r'\1', t)
        t = re.sub(r'!\[[^\]]*\]\([^)]*\)', ' ', t)
        t = re.sub(r'\[([^\]]*)\]\([^)]*\)', r'\1', t)
        t = re.sub(r'[`*_~]', '', t)
        t = re.sub(r'\s+', ' ', t).strip()
        if t:
            return t if len(t) <= 140 else t[:140].rstrip() + '…'
    return ''


def main():
    vault = sys.argv[1] if len(sys.argv) > 1 else VAULT
    if not os.path.isdir(vault):
        print('仓库目录不存在:', vault)
        sys.exit(1)

    os.makedirs(ASSETS_DIR, exist_ok=True)

    mds = sorted(f for f in os.listdir(vault) if f.lower().endswith('.md'))
    note_slugs = {os.path.splitext(f)[0]: slugify(f) for f in mds}

    notes = []
    for fname in mds:
        src = os.path.join(vault, fname)
        with open(src, 'r', encoding='utf-8') as f:
            text = f.read()

        meta, body = parse_frontmatter(text)
        title = meta.get('zhihu-title') or meta.get('title') or os.path.splitext(fname)[0]
        date = (meta.get('zhihu-created-at') or '')[:10]
        if not date:
            date = datetime.date.fromtimestamp(os.path.getmtime(src)).isoformat()
        topics = meta.get('zhihu-topics', '')
        tags = [t.strip().lstrip('#') for t in re.findall(r'#([^\s#]+)', topics)] or []

        body = preprocess_wikilinks(body, vault, note_slugs)
        body, blocks = protect(body)
        html_body = markdown2.markdown(body, extras=MD_EXTRAS)
        html_body = restore(html_body, blocks)

        excerpt = make_excerpt(body)

        slug = note_slugs[os.path.splitext(fname)[0]]
        title_short = title if len(title) <= 22 else title[:22] + '…'

        tags_html = ''
        if tags:
            chips = ''.join('<span class="note-tag">%s</span>' % htmlmod.escape(t)
                            for t in tags)
            tags_html = '<div class="note-tags">%s</div>' % chips

        intro = (
            '<div class="page-intro">\n'
            '  <h1>%s</h1>\n'
            '  <p>%s</p>\n'
            '  %s\n'
            '</div>\n' % (
                htmlmod.escape(title),
                htmlmod.escape('更新于 ' + date),
                tags_html,
            )
        )

        page = (
            HEADER.format(title=htmlmod.escape(title), desc=htmlmod.escape(excerpt),
                          anti_fouc=ANTI_FOUC, version=VERSION, mathjax=MATHJAX_CONFIG,
                          title_short=htmlmod.escape(title_short))
            + intro
            + html_body
            + FOOTER.format(version=VERSION)
        )

        out_path = os.path.join(NOTES_DIR, slug + '.html')
        with open(out_path, 'w', encoding='utf-8') as f:
            f.write(page)

        notes.append({
            'id': slug,
            'title': title,
            'date': date,
            'tags': tags,
            'file': os.path.join('notes', slug + '.html'),
            'excerpt': excerpt,
        })
        print('generated:', os.path.relpath(out_path, ROOT))

    notes.sort(key=lambda n: n['date'], reverse=True)
    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        f.write('const NOTES = ' + json.dumps(notes, ensure_ascii=False, indent=2) + ';\n')
    print('index:', os.path.relpath(DATA_FILE, ROOT), '| notes:', len(notes))


if __name__ == '__main__':
    main()
