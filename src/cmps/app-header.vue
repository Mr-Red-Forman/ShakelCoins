<template>
    <header class="app-header">
        <div class="logo">
            <a href="/">
                <img src="../assets/img/logo.png" alt="logo" />
            </a>
        </div>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/contacts">Contacts</RouterLink>
        </nav>
        <div class="user-logged">
            <button v-if='!user' title="Add User" @:click.stop="onOpenModalStatus">
                <v-icon name="hi-solid-user-add" />
            </button>
            <div class="user-details" v-if='user'>
                <h3 title="user.name">Hi {{ user.name }}</h3>
                <h6 title="user.name">You have {{ user.balance }} to spend</h6>
                <button @:click="logoutUser">Logout</button>
                <button>Make Transaction</button>
            </div>            
        </div>
        <Teleport to="body" >
            <div v-if="isLoginModalOpen" class="modal">
                <form v-clickout="onCloseModalStatus" @submit.prevent="onLogin" class="loginSignOut">
                    <input type="text" placeholder="name" autocomplete="false" ref='name' required>
                    <input type="password" placeholder="Password" ref='password' name="password">
                    <button>Login</button>
                </form>
            </div>
        </Teleport>
        <Teleport to="body" >
            <div v-if="isTransactionModalOpen" class="modal">
                <form v-clickout="onCloseModalStatus" @submit.prevent="onLogin" class="loginSignOut">
                    <fieldset>
                        <legend>From</legend>
                        <select v-model="selected">
                            <option>All good</option>
                            <option>Something nice</option>
                            <option>Anything goes</option>
                        </select>
                    </fieldset>
                    <button>Do Transaction</button>
                </form>
            </div>
        </Teleport>
    </header>
</template>

<script>
import { RouterLink } from 'vue-router'
import { OhVueIcon } from "oh-vue-icons"
import { clickout } from '@/directives/clickout.js'


import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
        }
    },
    created() {
        this.setCurrUser()
    },
    methods: {
        ...mapMutations(['setCurrUser']),
        ...mapMutations(['setLogout']),
        ...mapMutations(['setOpenModal']),
        ...mapActions(['login']),
        ...mapActions(['transactions']),
        ...mapActions(['loginWithUserName']),

        onAddUser() {
            this.login()
        },
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
        onLogin(){
           const userName= this.$refs.name.value
           const password= this.$refs.password.value
           this.loginWithUserName({userName, password})
           this.onCloseModalStatus()
            
        }

    },
    computed: {
        ...mapGetters({ user: 'getLoginUser' }),
        ...mapGetters({ isLoginModalOpen: 'getLoginModalStatus' }),
        ...mapGetters({ isTransactionModalOpen: 'getTransactionModalStatus' })
    },
    components: {
        "v-icon": OhVueIcon,
        clickout,   
    }
}

</script>