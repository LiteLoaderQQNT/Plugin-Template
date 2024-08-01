// 运行在 Electron 主进程 下的插件入口


// 创建窗口时触发
exports.onBrowserWindowCreated = (window) => {
    // window 为 Electron 的 BrowserWindow 实例
}


// 用户登录时触发
exports.onLogin = (uid) => {
    // uid 为 账号 的 字符串 标识
}