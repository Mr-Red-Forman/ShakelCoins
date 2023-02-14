<template>
    <section>
        <ContactFilter @filter="onSetFilterBy" />
        <RouterLink title="Add a new contact" to="/contacts/edit/"><button>Add a contact</button></RouterLink>
        <ContactList v-if="contacts" :contacts="contacts" @remove="onRemoveContact" />
    </section>
</template>

<script>

import ContactList from '.././cmps/contact-list.vue'
import ContactFilter from '.././cmps/contact-filter.vue'

import { mapActions, mapGetters } from 'vuex'



export default {
    data() {
        return {
            filterBy: {}
        }
    },
    async created() {
        // this.$store.dispatch({type:'loadContacts'})
        this.loadContacts(this.filterBy)

    },
    mounted() {

    },
    methods: {
        ...mapActions(['removeContact']),
        ...mapActions(['loadContacts']),

        onRemoveContact(contactId){
            this.removeContact({contactId})
        },
        onSetFilterBy(filterBy) {
            this.filterBy = filterBy
            this.loadContacts({filterBy:this.filterBy})
        },
    },
    computed: {
        ...mapGetters({contacts:'getAllContacts'})
        // contacts() { return this.$store.getters.getAllContacts },
    },
    components: {
        ContactList,
        ContactFilter,
    }
}
</script>