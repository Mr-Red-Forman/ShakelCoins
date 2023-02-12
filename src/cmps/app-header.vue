<template>
    <header class="app-header">
        <div class="logo">
            <a href="/">
                <img src="../assets/img/logo.png" alt="logo" />
            </a>
        </div>
        <nav>
            <RouterLink to="/about">About</RouterLink>
        </nav>
    </header>
</template>

<script>
import { RouterLink} from 'vue-router'

export default {

}
</script>