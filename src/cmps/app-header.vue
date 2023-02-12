<template>
    <header class="app-header">
        <div class="logo">
            <a href="/">
                <img src="../assets/img/logo.png" alt="logo" />
            </a>
        </div>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <!-- <RouterLink to="/about">About</RouterLink> -->
        </nav>
        <div class="user-logged">
            <button v-if='!user' title="Add User" @:click="addUser">+</button>
            <h3 v-if='user' title="">Hi {{user.name}}</h3>
        </div>
    </header>
</template>

<script>
import { RouterLink } from 'vue-router'
import {userService} from '../services/userService.js'



export default {
    data() {
        return {
            user: null
        }
    },
    methods: {
        addUser(){
            this.user = userService.getUser()
        }
    },
    components: {
    }
}





</script>