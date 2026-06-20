const sidebarEl = document.getElementById('sidebar');
const addBtn = document.getElementById('addBtn');
const toggleSidebarBtn = document.getElementById('toggleSidebarBtn');

addBtn.addEventListener('click', () => window.hostAPI.createSession());
toggleSidebarBtn.addEventListener('click', () => window.hostAPI.toggleSidebar());

function startRename(paneId, labelEl) {
  const current = labelEl.textContent;
  const input = document.createElement('input');
  input.className = 'session-label-input';
  input.value = current;
  labelEl.replaceWith(input);
  input.focus();
  input.select();

  function commit() {
    const newLabel = input.value.trim() || current;
    window.hostAPI.renameSession(paneId, newLabel);
  }

  input.addEventListener('blur', commit);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); input.blur(); }
    if (e.key === 'Escape') { input.value = current; input.blur(); }
  });
}

window.hostAPI.onState((state) => {
  const isListView = state.listView;

  toggleSidebarBtn.classList.toggle('visible', isListView);

  if (isListView) {
    if (state.sidebarCollapsed) {
      sidebarEl.classList.remove('visible');
    } else {
      sidebarEl.classList.add('visible');
    }
  } else {
    sidebarEl.classList.remove('visible');
  }

  sidebarEl.innerHTML = '';

  state.panes.forEach((p) => {
    const item = document.createElement('div');
    item.className = 'session-item' + (p.id === state.selectedId ? ' active' : '');

    const label = document.createElement('span');
    label.className = 'session-label';
    label.textContent = p.label;

    const actions = document.createElement('div');
    actions.className = 'session-actions';

    const rename = document.createElement('span');
    rename.textContent = '✎';
    rename.title = 'Переименовать';
    rename.addEventListener('click', (e) => {
      e.stopPropagation();
      startRename(p.id, label);
    });

    const close = document.createElement('span');
    close.textContent = '✕';
    close.title = 'Закрыть это окно';
    close.addEventListener('click', (e) => {
      e.stopPropagation();
      window.hostAPI.closeSession(p.id);
    });

    actions.appendChild(rename);
    actions.appendChild(close);

    item.appendChild(label);
    item.appendChild(actions);
    item.addEventListener('click', () => window.hostAPI.selectSession(p.id));

    sidebarEl.appendChild(item);
  });
});
