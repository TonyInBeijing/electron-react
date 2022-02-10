// 引入electron并创建一个Browserwindow
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require("path");
// 保持window对象的全局引用,避免JavaScript对象被垃圾回收时,窗口被自动关闭.
let mainWindow

function createWindow() {
    // 初始化electron- remote
    require("@electron/remote/main").initialize();

    //创建浏览器窗口,宽高自定义
    mainWindow = new BrowserWindow({
        width: 768,
        height: 1366,
        webPreferences: {
            // 给渲染进程注入node模块
            nodeIntegration: true,
            // 语境隔离：设置为false时允许渲染进程访问window上的变量
            // https://runebook.dev/zh-CN/docs/electron/tutorial/context-isolation 
            contextIsolation: false,
            enableRemoteModule: true,
        }
    });
    /* 
     * 加载应用-----  electron-quick-start中默认的加载入口
     */
    //创建每一个窗口后，都要调用
    require("@electron/remote/main").enable(mainWindow.webContents)

    // 开发
    mainWindow.loadURL("http://localhost:3000/");

    // 发布
    // mainWindow.loadURL(path.join("file://", __dirname, "./build/index.html"));

    // 关闭window时触发下列事件.
    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

// 当 Electron 完成初始化并准备创建浏览器窗口时调用此方法
app.on('ready', createWindow)



