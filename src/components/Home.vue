<template>
    <v-container fluid>
        <h2  class="text-xs-center">Welcome to BantuLab Technology Innovation Lab</h2>
        <br/>
        <div class="text-xs-center">
            <v-btn v-on:click="gotoSlack" target="_blank"  class="error">Join Tech Saavy Community</v-btn> 
            <!-- <div> -->
                <em class="text-xs-center">OR</em>
            <!-- </div> -->
            <v-btn :to="{name: 'register-member'}" class="primary">
                Register as a member
            </v-btn>
        </div>
        
    </v-container>
    
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
                // window.location.href = "http://bit.ly/BantuLabTechSlack"
                window.open('http://bit.ly/BantuLabTechSlack', '_blank')
            }
        }
    }
</script>

