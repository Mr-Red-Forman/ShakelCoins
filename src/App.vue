<script>
import AppHeader from '@/cmps/app-header.vue'
import AppIndex from '@/pages/app-index.vue'
import AppFooter from '@/cmps/app-footer.vue'
export default {
  components: {
    AppIndex,
    AppHeader,
    AppFooter
  },
}
</script>

<template>
  <div class="index-layout">
    <AppHeader />
    <main>
      <AppIndex />
    </main>
    <AppFooter />
    
    


  </div>
</template>

<style scoped>

</style>
