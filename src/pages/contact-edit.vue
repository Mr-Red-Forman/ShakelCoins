<template>
    <form @submit.prevent="onSave" v-if="contact" class="contact-edit">
        <input type="text" v-model="contact.name" placeholder="Contact name">
        <input type="tel" v-model.number="contact.phone" placeholder="+XXX-XXX-XXXXXXX">
        <input type="email" v-model.number="contact.email" placeholder="email@gmail.com">
        <button>Save</button>
    </form>
</template>

<script>
import {contactService} from '@/services/contact.service.js'
import { eventBus } from '@/services/eventBus.service.js'

import { mapActions, mapGetters } from 'vuex'


export default {
    data() {
        return {
            contact: null
        }
    },
    async created() {
        const contactId = this.$route.params._id
       this.contact= await this.updateContact({contactId})
    },
    methods: {
        ...mapActions(['saveContact']),
        ...mapActions(['updateContact']),

        onSave(){
            this.saveContact({contact:this.contact}) 
            this.$router.push('/contacts') 
        },
    }
}
</script>