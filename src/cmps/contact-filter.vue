<template>
    <div class="contact-filter">
        <p>Search</p>
        <input @input="onFilter" v-model="filterBy.term" type="text">
    </div>
</template>

<script>
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
    }

}
</script>

