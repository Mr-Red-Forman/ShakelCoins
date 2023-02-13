// import Vue from 'vue';
import Vuex from 'vuex';
import { contactStore } from './contacts.store.js'
import { userStore } from './user.store.js'

export const store = Vuex.createStore({
    strict: true,
    state() {

    },
    getter: {

    },
    mutations: {

    },
    actions: {

    },
    modules: {
        contactStore,
        userStore
    }
})

// store.subscribe((cmd, state) => {
//     console.log('**** Store state changed: ****')
//     console.log('Command:', cmd.payload)
//     console.log('storeState:\n', state)
//     console.log('*******************************')
// })