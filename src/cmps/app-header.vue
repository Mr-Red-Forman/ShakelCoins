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
            <button v-if='!user' title="Add User" @:click="onAddUser">
                <v-icon name="hi-solid-user-add" />
            </button>
            <div class="user-details" v-if='user'>
                <h3 title="user.name">Hi {{ user.name }}</h3>
                <h6 title="user.name">You have {{ user.balance }} to spend</h6>
                <button @:click="logoutUser">Logout</button>
            </div>
        </div>
    </header>
</template>

<script>
import { RouterLink } from 'vue-router'
import { OhVueIcon } from "oh-vue-icons";
 
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
        ...mapActions(['login']),
        ...mapActions(['transactions']),

        onAddUser() {
            this.login()
        },
        logoutUser() {
            this.setLogout(null)
        },
        onTransactions() {
            this.transactions({from:'Me', to:'Yarden', amount:4000})
        }
    },
    computed:{
        ...mapGetters({user:'getLoginUser'})
    },
    components: {
        "v-icon": OhVueIcon

    }
}





</script>