<template>
    <div>
        <div class="container mt-5 mb-5">

            <div class="row">
                <div class="col-12 col-md-6 col-lg-4 team-item" v-for="(poster, index) in videos" :key="index">

                    <div class="project-panel">
                        <div class="project-panel-holder">
                            <div class="project-img" style="border-radius: 0px">
                                <div class="content-video">
                                    <iframe class="responsive-iframe" :src="poster" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import {scroller} from 'vue-scrollto/src/scrollTo';
export default {
    name:"videoComponent",

    data(){
        return{
            videos:[],
            src:''
        }
    }, 
    mounted() {
        this.viewPersonalization();
        console.log("source :" +this.src);
    },

    methods:{
        viewPersonalization() {
            this.$axios.get('admin/personnalisation/get')
                .then((result) => {
                    this.videos = result.data.personalisation.video_presentation
                    const secondScrollTo = scroller()
                    secondScrollTo('#navbar-spy');
                })
                .catch((err) => {
                    console.log(err);
                })
        },
    }
}
</script>
