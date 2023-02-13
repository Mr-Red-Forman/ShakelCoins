<template>
    <section>
        <ContactFilter @filter="onSetFilterBy" />
        <ContactList v-if="contacts" :contacts="filteredItems" @remove="removeContact" />
        <RouterLink to="/contacts/edit/"><button>Add a contact</button></RouterLink>
    </section>
</template>

<script>
import { contactService } from '@/services/contactService.js'
import { eventBus } from '@/services/eventBus.service.js'


import ContactList from '.././cmps/contact-list.vue'
import ContactFilter from '.././cmps/contact-filter.vue'


export default {
    data() {
        return {
            contacts: null,
            filterBy: {}
        }
    },
    async created() {
        this.contacts = await contactService.getContacts(thi)
    },
    methods: {
        async removeContact(contactId) {
            await contactService.deleteContact(contactId)
            this.contacts = this.contacts.filter(c => c._id !== contactId)
            const msg = {
                txt: `Contact ${contactId} was removed.`,
                type: 'success',
                timeout: 2500,
            }
            eventBus.emit('user-msg', msg)
        },
        onSetFilterBy(filterBy) {
            this.filterBy = filterBy
        },
    },
    computed: {
        filteredItems() {
            const regex = new RegExp(this.filterBy.txt, 'i')
            return this.contacts.filter(c => regex.test(c.name))
        },
    },
    components: {
        ContactList,
        ContactFilter,
    }

}
</script>