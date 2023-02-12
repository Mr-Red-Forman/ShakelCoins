<script>
import AppHeader from '@/cmps/app-header.vue'
import AppIndex from '@/pages/app-index.vue'
import AppFooter from '@/cmps/app-footer.vue'
import {shakelService} from '@/services/shakelService.js'
export default {
  components: {
    AppIndex,
    AppHeader,
    AppFooter
  },

  data() {
    return {
      curr:null
    }
  },
  async created() {
    this.curr=await shakelService.getRate()
  }
  
}
  
</script>

<template>
  <div class="index-layout">
    <AppHeader />
    <main>
      <AppIndex />
    </main>
    <AppFooter />
    <h3>
    </h3>
    
    


  </div>
</template>

<style scoped>

</style>
