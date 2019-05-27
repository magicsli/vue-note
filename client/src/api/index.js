import ajax from './ajax'
// 登录
export const login = user => ajax('/localhost/login', user, 'POST' );

// 注册
export const register = user => ajax('/localhost/register', user, 'POST')

// 添加
export const increment = mes => ajax('/localhost/increment', mes, 'POST')

// 自动登录
export const autoLogin = () => ajax('/localhost/')

// 更新
export const update = (mes) => ajax('/localhost/update', mes, 'POST')

// 删除
export const remove = mes => ajax('/localhost/remove', mes)

// 完成
export const changeState = mes => ajax('/localhost/changeState', mes, "POST")
