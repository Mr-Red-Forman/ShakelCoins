<template>
    <article class="preview-contact">
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