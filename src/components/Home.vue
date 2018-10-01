<template>
    <v-container fluid>
        <h1>Welcome to BantuLab Technology Innovation Lab</h1>
        <v-btn :to="{name: 'register-member'}" class="primary">
            Register as a member!
        </v-btn>
        
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

        }
    }
</script>

