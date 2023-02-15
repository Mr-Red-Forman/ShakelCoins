<template>
    <Teleport to="body">
        <div v-if="isTransactionModalOpen" class="modal">
            <form class="loginSignOut" v-clickout.prevent="onCloseTransactionModalStatus"
                @submit.prevent="onTransactions">
                <fieldset>
                    <legend>You want to..</legend>
                    <input type="radio" value="Send" v-model="action"> Send
                    <input type="radio" value="Ask" v-model="action"> Ask
                </fieldset>
                <fieldset>
                    <legend>From who</legend>
                    <select v-model="contact">
                        <option v-for="item in Contacts" :value="item">{{ item.name }}</option>
                    </select>
                </fieldset>
                <label for="amount">Amount</label>
                <input type="number" name="amount" v-model="amount" />
                <button>Do Transaction</button>
            </form>
        </div>
    </Teleport>
</template>

<script>
import { showErrorMsg, showSuccessMsg } from '../services/eventBus.service.js'
import { clickout } from '@/directives/clickout.js'

import { mapMutations, mapGetters, mapActions } from 'vuex'


export default {

    data() {
        return {
            contact: null,
            action: null,
            amount: null
        }
    },
    created() {
    },
    methods: {
        ...mapMutations(['setOpenModal']),
        ...mapActions(['transactions']),
        ...mapActions(['loginWithUserName']),
        ...mapMutations(['setOpenModalTransaction']),

        onTransactions() {
            if (!this.action ||!this.contact ||!this.amount) {
                showErrorMsg('Please fill the whole form')
                return }
            this.transactions({
                action:this.action,
                contact: this.contact,
                amount: this.amount
            })
            this.setOpenModalTransaction(false)
            this.contact= null,
            this.action= null,
            this.amount= null
        },

        onCloseTransactionModalStatus() {
            this.setOpenModalTransaction(false)
        },
        onLogin() {
            const userName = this.$refs.name.value
            const password = this.$refs.password.value
            this.loginWithUserName({ userName, password })
            this.onCloseModalStatus()

        }
    },
    computed: {
        ...mapGetters({ isTransactionModalOpen: 'getTransactionModalStatus' }),
        ...mapGetters({ Contacts: 'getAllContacts' }),
        ...mapGetters({ user: 'getLoginUser' }),  
    },
    components: {
        clickout,
        
    }

}
</script>