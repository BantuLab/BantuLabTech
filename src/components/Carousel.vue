<template>
    <!-- <v-container> -->
        <v-layout row wrap >
            <v-flex xs12 >
                <v-carousel hide-delimiters="true" interval="10000" id="carousel">
                    <v-carousel-item v-for="(item, i) in meetups" v-bind:src="item.imageUrl" :key="i" >
                        <div class="title">
                            {{ item.title }}
                        </div>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
        <!-- <v-layout row wrap>
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                <v-btn large router to="/meetups" class="success">Explore Meetups</v-btn>
            </v-flex>
            <v-flex xs12 sm6  class="text-xs-center text-sm-left">
                <v-btn large router to="/meetups/new" class="success">Organize Meetups</v-btn>
            </v-flex>
        </v-layout> -->
        
    <!-- </v-container> -->
</template>
<script>
    /* eslint-disable */ 
    export default {
        data() {
            return {
                meetups: [
                    {imageUrl: 'http://i84.fastpic.ru/big/2016/0909/41/eba8b9afbe694d24ed2d0ddab5c1c541.jpg', id: '123', title: 'Game Development Toolkit'},
                    {imageUrl: 'https://t2conline.com/wp-content/uploads/2017/04/Web-Tools-Cool.jpg', id: '456', title: 'Web Development Toolkits'},
                    {imageUrl: 'https://adsknews.autodesk.com/app/uploads/2017/09/IoT_ToolKit_IMG_3342-1024x768.jpg', id: '789', title: 'IoT Development Toolkit'},
                    {imageUrl: 'https://adsknews.autodesk.com/app/uploads/2017/09/PIP-1024x576.jpg', id: '789', title: '3D Printing and Additive Design Toolkit'},
                ]
            }
        }
    }
</script>

<style scoped>
    .title {
        position: absolute;
        bottom: 50px;
    }
    #carousel {
        height: 100px !important;
        width: 100%;
    }
   
</style>