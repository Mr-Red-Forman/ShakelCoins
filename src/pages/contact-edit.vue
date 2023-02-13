<template>
    <form @submit.prevent="save" v-if="contact" class="contact-edit">
        <input type="text" v-model="contact.name" placeholder="Contact name">
        <input type="tel" v-model.number="contact.phone" placeholder="+XXX-XXX-XXXXXXX">
        <input type="email" v-model.number="contact.email" placeholder="email@gmail.com">
        <button>Save</button>
    </form>
</template>

<script>
import {contactService} from '@/services/contact.service.js';
import { eventBus } from '@/services/eventBus.service.js'

export default {
    data() {
        return {
            contact: null
        }
    },
    async created() {
        const contactId = this.$route.params._id
        if (contactId) {
            this.contact = await contactService.getContactById(contactId)
        }else{
            this.contact= contactService.getEmptyContact()
        }
    },
    methods: {
        async save() {
            await contactService.saveContact(this.contact)
            const msg = {
                txt: `Contact was added.`,
                type: 'success',
                timeout: 2500,
            }
            eventBus.emit('user-msg', msg)
            this.$router.push('/contacts')
        }
    }
}
</script>