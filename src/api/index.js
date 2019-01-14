import ajax from './ajax'
const BASE = '/api'
export const reqHomeData = () => ajax('/homedata')
export const reqTopicData = () => ajax('/topicdata')
export const reqNavData = () => ajax('/navdata')

//5、获取一次性验证码
export const reqGetCaptcha = () => ajax(`${BASE}/captcha`)
//6、用户名密码登陆
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(`${BASE}/login_pwd`,{name, pwd, captcha}, 'POST')
//7、发送短信验证码
export const reqSendCode = (phone) => ajax(`${BASE}/sendcode`,{phone})
//8、手机号验证码登陆
export const reqSmsLogin = ({phone, code}) => ajax(`${BASE}/login_sms`,{phone, code}, 'POST')
//9、根据会话获取用户信息
export const reqUserInfo = () => ajax(`${BASE}/userinfo`)
//10、用户退出登录
export const reqLogout = () => ajax(`${BASE}/logout`)
