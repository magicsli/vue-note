## 项目介绍
 **极简记事本**
 - 此项目采用前后端分离设计方案, 具有真实生产环境运行的能力
 - 项目连接:  < 网站正在装修中, 带项目功能完善后将会上线 /> <a href="http://www.magicsli.com">我的站点</a>
 - 前端使用技术: `vue + vue-router + vuex + vant-ui + axios ` 
 - 后台使用技术: `node + express + mongodb` 
 - 开发人员: 
    - `MagicSLi` (个人项目)
 - 项目功能:
    - 前端: 
       - 极简式 登录 / 注册
       - 自动登录
       - 行程安排
       - 数据的 增 / 删 / 改 / 查
    - 后端:
        - 记录用户登录数据
        - 处理用户行程列表输出

- 难点: 没有任何辅助条件, 没有设计图, 没有素材 从 0 到 1. 小全栈项目 

## 开发一记
   - 在制作时碰见一个极为棘手的问题, 由于vant-ui的不完善, 在使用日期组件的时候.有一个致命性的bug, 当滑动到一个小于最小时间(这个应该属于ui组件设计的bug), 浏览器会崩溃. 
      - 解决办法: 为日期组件 以及 时间组件 取当前年份, 解决由于闰年带来的崩溃问题.  将取值判断放在点击按钮时来处理, 添加从可选的 0 到最大的 31 这个取值区间(只有在这两个临界点才不会出现崩溃的状况)
   - 日期格式与字符串格式之间的互相转化也是一个很棘手的问题, 花费一定时间摸清楚vant-ui中日期组件取值的奇怪的格式, 并且将其拼接转化. 暂时解决日期格式与组件格式带来的格式问题