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
        getTransactionModalStatus: state => state.transactionModalOpen,
        getUserBalance: state => state.user.balance.toLocaleString("en-US", {style:"currency", currency:"USD",maximumFractionDigits: 0})

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
        setOpenModalTransaction(state ,payload) {
            state.transactionModalOpen = payload
            console.log('state.transactionModalOpen:',state.transactionModalOpen ) 
        },
        setUserAmount(state, currAmount){
            state.user.balance = currAmount
        }
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
        async transactions({ commit }, { action, contact, amount }) {
            try {
                const currAmount= await userService.addTransaction({action,contact,amount})
                commit('setUserAmount', currAmount)
            } catch (err) {
                showErrorMsg (err)
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