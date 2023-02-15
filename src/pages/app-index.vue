<template>
    <section class="full index-layout app-index">
        <section>
            <div class="app-index-txt">
                <div class="tisser">
                    The new and saver way to do your money transactions.
                </div>
                <div class="pages-links">
                    <div v-if="user" class="link-box" @:click.stop="onOpenTransactionsModal">
                        Do transactions
                    </div>
                    <div v-if="!user" class="link-box" @:click.stop="onOpenTransactionsModal">
                        Log In
                    </div>
                    <div class="link-box">
                        <RouterLink to="/contacts">
                            Search your contacts
                        </RouterLink>
                    </div>

                </div>
            </div>
            <div class="pig-img">
                <img src="assets/img/pig_hero-removebg-preview (2).png" alt="">
            </div>

        </section>
    </section>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
export default {
    methods: {
        ...mapMutations(['setOpenModalTransaction']),

        onOpenTransactionsModal() {
            console.log('show:')
            this.setOpenModalTransaction(true)
        },
    },
    computed: {
        ...mapGetters({ user: 'getLoginUser' }),
    }

}
</script>