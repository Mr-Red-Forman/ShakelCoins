import { userService } from '@/services/user.service.js';
import { showErrorMsg, showSuccessMsg } from '../services/eventBus.service.js'


export const userStore = {
    state: {
        user: null,
        loginModalOpen: false,
        transactionModalOpen: false
    },
    getters: {
        getLoginUser: state => state.user,
        getLoginModalStatus: state => state.loginModalOpen,
        getTransactionModalStatus: state => state.transactionModalOpen
    },
    mutations: {
        setCurrUser(state) {
            state.user = userService.loggedInUser()
        },
        setNewUser(state, payload) {
            state.user = payload
        },
        setLogout(state) {
            userService.logoutUser()
            state.user = null
        },
        setOpenModal(state ,payload) {
            state.loginModalOpen = payload
        },
    },
    actions: {
        async login({ commit }) {
            try {
                const user = userService.getUser()
                commit('setCurrUser', user)
            } catch (err) {
                showErrorMsg('Failed to login')
            }
        },
        async transactions({ commit }, { from, to, amount }) {
            try {
                console.log('payload:', from)
                console.log('to:', to)
                console.log('amount:', amount)
            } catch (err) {

            }
        },
        async loginWithUserName({ commit }, { userName, password }) {
            try{
                const user=userService.checkIfUserReg({name:userName, password})
                commit('setCurrUser', user)
                user.firstTime? showSuccessMsg (`Welcome ${user.name}`) : showSuccessMsg(`Welcome back ${user.name}`)
            }catch(err){
                showErrorMsg('Failed to login')
            }

        }





    }
}