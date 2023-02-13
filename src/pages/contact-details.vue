<template>
    <div v-if="contact" class="contact-details">
        <div class="contact-info">
            <div class="write-details">
                <h2>{{ contact.name }}</h2>
                <h3>{{ contact.phone }}</h3>
                <h3>{{ contact.email }}</h3>
            </div>
            <img :src="'https://robohash.org/' + contact.name + '?set=set4'">
        </div>
        <RouterLink to="/contacts">
            <button>Back</button>
        </RouterLink>
    </div>
</template>

<script>
import { contactService } from '@/services/contactService.js';

export default {
    data() {
        return {
            contact: null
        }
    },
    async created() {
        const contactId = this.$route.params._id
        this.contact = await contactService.getContactById(contactId)
    }

}
</script>