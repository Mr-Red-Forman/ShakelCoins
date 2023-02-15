<script>
import AppHeader from '@/cmps/app-header.vue'
import AppIndex from '@/pages/app-index.vue'
import AppFooter from '@/cmps/app-footer.vue'

import {shakelService} from '@/services/shakel.service.js'
import UserMsg from '@/cmps/user-msg.vue'


export default {
  components: {
    AppIndex,
    AppHeader,
    AppFooter,
    UserMsg
  },

  data() {
    return {
      curr:null
    }
  },
  async created() {
    // this.curr=await shakelService.getRate()
  }
  
}
  
</script>

<template>
  <div class="index-layout">
    <AppHeader />
  
      <RouterView />
   
    <AppFooter />
    <UserMsg />
  </div>
</template>

<style scoped>

</style>
