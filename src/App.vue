<template>
  <v-app >
    <v-toolbar app>
      <!-- <div class="container" fluid> -->
       <!-- <v-layout column align-center> -->
        <!-- <v-toolbar-side-icon> -->
          <!-- <router-link to="/" class="brand-logo" >
            <img src="@/assets/bantulab_logo.png" class="mb-5">
          </router-link> -->
          <!-- <img src="@/assets/bantulab_logo.png"> -->
        <!-- </v-toolbar-side-icon> -->
        <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-icon large color="blue-grey darken-2">call_split</v-icon>
        <v-toolbar-title >BantuLabTech</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>apps</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>refresh</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
       <!-- </v-layout> -->
      <!-- </div> -->
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
import Footer from './views/Footer'
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
