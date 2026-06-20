<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    :root {
      --bg: #15171c;
      --panel: #1b1e25;
      --border: #2a2e38;
      --text: #e8e9ec;
      --muted: #8b8f9b;
      --accent: #c96442;
    }
    * { box-sizing: border-box; }
    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
      background: var(--bg);
      color: var(--text);
      font-family: -apple-system, "Segoe UI", Roboto, sans-serif;
      overflow: hidden;
    }
    #topbar {
      position: fixed;
      top: 0; left: 0; right: 0;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 14px;
      background: var(--panel);
      border-bottom: 1px solid var(--border);
      -webkit-app-region: drag;
    }
    #topbar .left {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    #topbar .title {
      font-size: 13px;
      color: var(--muted);
      letter-spacing: .3px;
    }
    #toggleSidebarBtn {
      -webkit-app-region: no-drag;
      background: transparent;
      color: var(--muted);
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 4px 9px;
      font-size: 15px;
      cursor: pointer;
      line-height: 1;
      display: none;
    }
    #toggleSidebarBtn:hover { background: #21242c; color: var(--text); }
    #toggleSidebarBtn.visible { display: inline-flex; align-items: center; justify-content: center; }
    #addBtn {
      -webkit-app-region: no-drag;
      background: var(--accent);
      color: #fff;
      border: none;
      border-radius: 6px;
      padding: 6px 12px;
      font-size: 13px;
      cursor: pointer;
    }
    #addBtn:hover { filter: brightness(1.1); }
    #sidebar {
      position: fixed;
      top: 44px; left: 0; bottom: 0;
      width: 230px;
      background: var(--panel);
      border-right: 1px solid var(--border);
      overflow-y: auto;
      display: none;
      transition: transform 0.2s ease;
    }
    #sidebar.visible { display: block; }
    .session-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 14px;
      cursor: pointer;
      font-size: 13px;
      border-bottom: 1px solid var(--border);
      color: var(--muted);
    }
    .session-item:hover { background: #21242c; color: var(--text); }
    .session-item.active {
      background: #262a33;
      color: var(--text);
      border-left: 2px solid var(--accent);
    }
    .session-label {
      min-width: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .session-label-wrap {
      flex: 1;
      min-width: 0;
      display: flex;
      align-items: center;
      gap: 6px;
      overflow: hidden;
    }
    .limit-badge {
      flex-shrink: 0;
      font-size: 13px;
      color: #e05252;
      line-height: 1;
      animation: pulse-badge 2s ease-in-out infinite;
    }
    @keyframes pulse-badge {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.45; }
    }
    .session-label-input {
      flex: 1;
      min-width: 0;
      background: #21242c;
      color: var(--text);
      border: 1px solid var(--accent);
      border-radius: 4px;
      padding: 2px 6px;
      font-size: 13px;
      font-family: inherit;
      outline: none;
    }
    .session-actions {
      display: flex;
      align-items: center;
      gap: 4px;
      opacity: 0;
      flex-shrink: 0;
    }
    .session-item:hover .session-actions { opacity: 1; }
    .session-actions span {
      font-size: 12px;
      padding: 2px 6px;
      border-radius: 4px;
      cursor: pointer;
    }
    .session-actions span:hover { background: #3a3f4a; }
  </style>
</head>
<body>
  <div id="topbar">
    <div class="left">
      <button id="toggleSidebarBtn" title="Свернуть / развернуть панель">☰</button>
      <span class="title">Claude Multi</span>
    </div>
    <button id="addBtn">+ Новое окно</button>
  </div>
  <div id="sidebar"></div>
  <script src="renderer.js"></script>
</body>
</html>
