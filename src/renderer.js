// 运行在 Electron 渲染进程 下的页面脚本


// 打开设置界面时触发
export const onSettingWindowCreated = (view) => {
    // view 为 Element 对象，修改将同步到插件设置界面
}


// Vue组件挂载时触发
export const onVueComponentMount = (component) => {
    // component 为 Vue Component 对象
}


// Vue组件卸载时触发
export const onVueComponentUnmount = (component) => {
    // component 为 Vue Component 对象
}