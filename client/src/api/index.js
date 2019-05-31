import ajax from './ajax'
// 登录
export const login = user => ajax('/login', user, 'POST' );

// 注册
export const register = user => ajax('/register', user, 'POST')

// 添加
export const increment = mes => ajax('/increment', mes, 'POST')

// 自动登录
export const autoLogin = () => ajax('/auto')

// 更新
export const update = (mes) => ajax('/update', mes, 'POST')

// 删除
export const remove = mes => ajax('/remove', mes)

// 完成
export const changeState = mes => ajax('/changeState', mes, "POST")
