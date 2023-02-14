<template>
    <div class="contact-filter">
        <div class="search-bar">
            <input @input="onFilter" v-model="filterBy.term" type="text">
            <v-icon class="search-icon" name="bi-search-heart-fill" />
        </div>
    </div>
</template>

<script>
import { OhVueIcon } from "oh-vue-icons";

export default {
    data() {
        return {
            filterBy: {
                term: '',
            }
        }
    },
    methods: {
        onFilter() {
            this.$emit('filter', this.filterBy)
        }
    },
    components: {
        "v-icon": OhVueIcon
    }

}
</script>

