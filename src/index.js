const {app, BrowserWindow} = require("electron");
const fetchRoot = require('./system');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1100,
        height: 700,
        autoHideMenuBar: true,
        minHeight: 200,
        minWidth: 300,
        icon: "media/images/NUMBERS_ONLY128.png"
    });

    win.loadFile(fetchRoot("./pages/GAY"));
};


app.on('ready', () => {
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== "darwin") app.quit();
});