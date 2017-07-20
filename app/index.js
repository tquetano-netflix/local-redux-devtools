const { app, BrowserWindow } = require('electron');
const path = require('path');

const argv = process.argv.slice(2);

const hostname = argv[0].split(' ').pop() || 'localhost';
const port = argv[1].split(' ').pop() || 8000;

app.on('ready', () => {
  let mainWindow = null;

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'icon128.png')
  });

  const appFolder = path.resolve(__dirname, '..', 'dist', 'app');

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${appFolder}/index.html?hostname=${hostname}&port=${port}`);

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});

app.on('window-all-closed', () => {
  app.quit();
});
