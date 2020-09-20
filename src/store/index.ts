/*
 * @Author: Damom
 * @Date: 2020-09-20 22:23:57
 * @LastEditors: Damom
 * @LastEditTime: 2020-09-20 23:06:02
 * @Description: file content
 */
import {createStore} from 'vuex'


interface State {
    userName:string,
    userInfo:object,
    isLogin:boolean
}

export default createStore({
    state():State {
        return {
            userName:"公虾米",
            userInfo:{
                name:'',
                phone:123456
            },
            isLogin:false
        }
    }
})