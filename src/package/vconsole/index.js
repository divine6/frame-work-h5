import VConsole from 'vconsole'
// 调式工具 开发环境才会开启
const isDev = process.env.NODE_ENV === 'development'

isDev && new VConsole()
