<template>
  <v-app >
    <v-toolbar app>
      <div class="container">
        <span></span><router-link to="/" class="brand-logo">
        BantuLabTech
        </router-link>
      </div>
    </v-toolbar>
     <v-content> 
        <v-container fluid>
          <router-view></router-view>
      </v-container> 
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from '@/components/Footer'
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'BantuLabTech'
    }
  },
  name: 'App',
  components: {
    Footer
  }
}
</script>

