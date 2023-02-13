<template>
    <section class="contact-list">
        <TransitionGroup name="list" tag="ul" class="contact-list">
            <li class="contact-preview" v-for="contact in contacts" :key="contact._id">
                <ContactPreview :contact="contact"/>
                <section class="contact-actions">
                    <RouterLink :to="`/contacts/${contact._id}`">
                        <button>Details</button>
                    </RouterLink>
                    <RouterLink :to="`/contacts/edit/${contact._id}`">
                        <button>Edit</button>
                    </RouterLink>
                    <button @click="onRemoveContact(contact._id)">x</button>
                </section>
            </li>

        </TransitionGroup>

    </section>
</template>

<script>
import ContactPreview from '@/cmps/contact-preview.vue'
import { RouterLink } from 'vue-router';
export default {
    props: {
        contacts: {
            type: Array,
            required: true
        }
    },
    methods: {
        onRemoveContact(ContactId){
            this.$emit('remove', ContactId)
        }
    
    },
    components: {
    ContactPreview,
    RouterLink
}

}
</script>