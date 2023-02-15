<template>
    <header class="full index-layout ">
        <section class="app-header">
            <div class="logo">
                <a href="/">
                    <img src="../assets/img/logo.png" alt="logo" />
                </a>
            </div>
            <!-- <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/contacts">Contacts</RouterLink>
            </nav> -->
            <div class="user-logged">
                <button v-if='!user' title="Add User" @:click.stop="onOpenModalStatus">
                    <v-icon name="hi-solid-user-add" />
                </button>
                <div class="user-details" v-if='user'>
                    <h3 title="user.name">Hi {{ user.name }}</h3>
                    <h6 title="user.name">You have {{ userBalance }} to spend</h6>
                    <user class="user-actions">
                        <button @:click="logoutUser">Logout</button>
                        <button @:click.stop="onOpenTransactionsModal">Make Transaction</button>
                    </user>
                </div>
            </div>
        </section>
        <Teleport to="body">
            <div v-if="isLoginModalOpen" class="modal">
                <form v-clickout="onCloseModalStatus" @submit="onLogin" class="loginSignOut">
                    <input type="text" placeholder="Name" autocomplete="false" ref='name' required>
                    <input type="password" placeholder="Password" ref='password' name="password">
                    <button>Login</button>
                    <h6>This is a trail out, only need to add name</h6>
                </form>
            </div>
        </Teleport>
        <Transaction />
    </header>
</template>

<script>
import { RouterLink } from 'vue-router'
import { OhVueIcon } from "oh-vue-icons"
import { clickout } from '@/directives/clickout.js'

import Transaction from '@/cmps/transaction-modal.vue'



import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {

    created() {
        this.setCurrUser()
    },
    methods: {
        ...mapMutations(['setCurrUser']),
        ...mapMutations(['setLogout']),
        ...mapMutations(['setOpenModal']),
        // ...mapActions(['login']),
        ...mapMutations(['setOpenModalTransaction']),
        ...mapActions(['transactions']),
        ...mapActions(['loginWithUserName']),

        // onAddUser() {
        //     this.login()
        // },
        logoutUser() {
            this.setLogout(null)
        },
        onTransactions() {
            this.transactions({ from: 'Me', to: 'Yarden', amount: 4000 })
        },
        onOpenModalStatus() {
            this.setOpenModal(true)
        },
        onCloseModalStatus() {
            this.setOpenModal(false)
        },
        onLogin() {
            const userName = this.$refs.name.value
            const password = this.$refs.password.value
            this.loginWithUserName({ userName, password })
            this.onCloseModalStatus()
        },
        onOpenTransactionsModal() {
            this.setOpenModalTransaction(true)
        }

    },
    computed: {
        ...mapGetters({ user: 'getLoginUser' }),
        ...mapGetters({ isLoginModalOpen: 'getLoginModalStatus' }),
        ...mapGetters({ userBalance: 'getUserBalance' }),
    },
    components: {
        "v-icon": OhVueIcon,
        clickout,
        Transaction,
    }
}

</script>