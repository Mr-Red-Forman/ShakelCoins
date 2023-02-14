import { contactService } from '@/services/contact.service.js';
import { showErrorMsg, showSuccessMsg } from '../services/eventBus.service.js'

export const contactStore = {
    // strict: true,
    state: {
        contacts: null,
        contact:null,
        lastRemovedContact: null

    },
    getters: {
        getAllContacts: state => state.contacts
    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },
        removeContact(state, { contactId }) {
            const idx = state.contacts.findIndex(c => c._id === contactId)
            state.lastRemovedContact = state.contacts[idx]
            state.contacts.splice(idx, 1)
        },
        clearRemoveContact(state) {
            state.lastRemovedContact = null
        },
        undoRemoveContact(state) {
            state.contacts.unshift(state.lastRemovedContact)
            state.lastRemovedContact = null
        },
        // saveContact(state, { contact }) {
        //     state.contacts.push(contact)
        // }

    },
    actions: {
        async loadContacts({ commit }, { filterBy }) {
            try {
                const contacts = await contactService.getContacts(filterBy)
                commit({ type: 'setContacts', contacts })
            } catch (err) {
                showErrorMsg('Having issues loading contacts')
            }
        },
        async removeContact({ commit }, { contactId }) {
            try {
                commit({ type: 'removeContact', contactId })
                await contactService.deleteContact(contactId)
                commit({ type: 'clearRemoveContact' })
                showSuccessMsg(`Contact ${contactId} was removed.`)
            } catch (err) {
                showErrorMsg('Having issues removing contact')
                commit({ type: 'undoRemoveContact' })
            }
        },
        async saveContact({ commit }, { contact }) {
            try {
                await contactService.saveContact(contact)
                // commit({ type: 'saveContact' , contact })
                showSuccessMsg(`Contact was save.`)
            } catch (err) {
                showErrorMsg('User could not be added')
            }
        },
        async updateContact({ commit }, { contactId }) {
            try {
                if (contactId) {
                    return await contactService.getContactById(contactId)
                } else {
                    return contactService.getEmptyContact()
                }
            } catch (err) {
                showErrorMsg('Have issue loading data')
            }
        }

    },
    modules: {

    }
}

