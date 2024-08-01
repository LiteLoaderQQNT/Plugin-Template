// Electron 主进程 与 渲染进程 交互的桥梁
const { contextBridge } = require("electron");


// 在window对象下导出只读对象
contextBridge.exposeInMainWorld("plugin_template", {
    // 框架中 IPC 通信标识格式为 "组织名.项目名.方法名"
    // 格式不重要，只需要确保标识唯一即可，定义成什么都行
});
