<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-xs-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon.value"
          v-bind:href="icon.url" 
          target="_blank"
          class="mx-3 white--text"
          icon
        >
          <v-icon size="24px">{{ icon.value }}</v-icon>
          <!-- <a v-bind:href="icon.url" target="_blank"></a> -->
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
               BantuLab is a Technology Innovation Lab, providing free access to Quick Start Innovation Toolkits(QSIT), Immersive Technology Bootcamps(ITB), co-working space, and access to technical mentor-ship with an immersive tech saavy community! <br/>
               We are passionate about what we do and belive in optimizing for productivity to the best fit of all your creative ideas and innovations! <br/><br/>
               <p>
                 <a href="https://bantulabtech.slack.com" target="_blank" class="white--text">Get creative and join us now!</a>
               </p>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;{{year}} — <strong>BantuLab, Inc.</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
/* eslint-disable */ 
  export default {
    data: () => ({
      icons: [
        { value: 'fab fa-github', url: 'https://github.com/orgs/BantuLab' },
        { value: 'fab fa-slack', url: 'http://bit.ly/BantuLabTechSlack' },
        { value: 'fab fa-facebook', url: 'https://www.facebook.com/bantulabtech' },
        { value: 'fab fa-youtube', url: 'https://www.youtube.com/channel/UCPPRevmNDyxmMshNIEgpodw' },
        { value: 'fab fa-instagram', url: 'https://www.instagram.com/bantulabtech' },
        { value: 'fab fa-twitter', url: 'https://www.twitter.com/bantulabtech' }
      ]
    }),
    methods: {

    },
    computed: {
        year: function() {
            return new Date().getFullYear()
        }
    }
  }
</script>