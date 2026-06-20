const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('hostAPI', {
  createSession: () => ipcRenderer.send('host:create-session'),
  selectSession: (id) => ipcRenderer.send('host:select-session', id),
  closeSession: (id) => ipcRenderer.send('host:close-session', id),
  renameSession: (id, label) => ipcRenderer.send('host:rename-session', { id, label }),
  toggleSidebar: () => ipcRenderer.send('host:toggle-sidebar'),
  onState: (callback) => {
    ipcRenderer.on('host:state', (_event, state) => callback(state));
  },
});
