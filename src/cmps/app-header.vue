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
            <button v-if='!user' title="Add User" @:click="addUser">
                 <v-icon name="hi-solid-user-add" />
            </button>
            <div class="user-details" v-if='user'>
                <h3 title="user.name">Hi {{user.name}}</h3>
                <h6 title="user.name">You have {{user.balance}} to spend</h6>
                <button @:click="logout">Logout</button>
            </div>

        </div>
    </header>
</template>

<script>
import { RouterLink } from 'vue-router'
import {userService} from '../services/user.service.js'
import {OhVueIcon} from "oh-vue-icons";


export default {
    data() {
        return {
            user: null
        }
    },
    created() {
        this.user=userService.loggedInUser()
    },
    methods: {
        addUser(){
            this.user = userService.getUser()
        },
        logout(){
            this.user=userService.logoutUser()
        }
    },
    components: {
        "v-icon": OhVueIcon
        
    }
}





</script>