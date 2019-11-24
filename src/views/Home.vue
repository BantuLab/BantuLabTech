<template>
    <v-card>
        <v-card-title primary-title class="justify-center">
            <div>
                <h1>Quick Start Technology Innovation Toolkits</h1>
            </div>
        </v-card-title>
        <v-card-actions class="justify-center">
            <v-btn v-on:click="gotoSlack" target="_blank"  class="error">Join Tech Saavy Community Now!</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
/* eslint-disable */
    export default {
        data() {
            return {
                title: 'Home'
            }
        },
        name: 'Home',
        components: {

        },
        methods: {
            gotoSlack(){
                window.open('http://bit.ly/BantuLabTechSlack', '_blank')
            }
        }
    }
</script>

