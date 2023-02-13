import { userService } from '@/services/user.service.js';
import { showErrorMsg, showSuccessMsg } from '../services/eventBus.service.js'


export const userStore={
    state:{
        user: null,
    },
    getters:{
        getLoginUser: state => state.user,

    },
    mutations: {
        setCurrUser(state){
            state.user=userService.loggedInUser()
        },
        setNewUser(state,payload) {
            state.user=payload
        },
        setLogout(state){
            userService.logoutUser()
            state.user=null
        }
    },
    actions: {
        async login({ commit }, {user}) {
            try{
                const user=userService.getUser()
                commit('setCurrUser',user)
            }catch (err){
                showErrorMsg('Failed to login')
            }
        },
        async transactions({ commit }, {from,to,amount}  ) {
            try{
                console.log('payload:', from)
                console.log('to:', to)
                console.log('amount:', amount)
            }catch (err){
                
            }
        },


         

    }
}