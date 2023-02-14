<template>
    <article class="preview-contact-details">
        <img :src="'https://robohash.org/' + contact.name + '?set=set4'">
        <h3>{{contact.name}}</h3>
    </article>
</template>

<script>
export default {
    props: {
        contact: {
            type: Object,
            required: true,
        }
    }
}
</script>