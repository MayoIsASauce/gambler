const {app, BrowserWindow} = require("electron");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1100,
        height: 700,
        autoHideMenuBar: true,
        minHeight: 200,
        minWidth: 300
    });

    win.loadFile("./pages/index.html");

    win.on('resize', (_, _1) => {
        console.log(`${win.getSize()}`);
    });
};


app.on('ready', () => {
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== "darwin") app.quit();
});