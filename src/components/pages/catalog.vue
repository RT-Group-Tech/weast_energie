<template>
<div>
    <section class="page-title page-title-9" id="page-title">
        
        <div class="col-md-12">
                <img :src="cover" class="img-fluid" alt="" style="width: 100%">
            </div>
        <div class="breadcrumb-wrap">
            <div class="container">
                <ol class="breadcrumb d-flex">
                    <li class="breadcrumb-item"><a href="">Accueil</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Catalogue</li>
                </ol>

            </div>
        </div>

    </section>


    <section class="projects projects-modern projects-modern-1 bg-overlay" id="projects-modern-1">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-6 offset-lg-3">
                    <div class="heading heading-5 text-center">
                        <p class="heading-subtitle">Innovation et qualités</p>
                        <h2 class="heading-title">Nos Produits KIT4AFRICA</h2>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4" v-for="(projet, index) in projects" :key="index">
                    <div>
                        <div class="project-panel" data-hover="">
                            <div class="project-panel-holder">
                                <div class="project-img">
                                    <a class="link" @click="show(projet.image, index)" href="javascript:void(0)"></a>
                                    <img :src="projet.image" alt="project image" class="img-fluid" style="height: 350px; width:100%" />
                                </div>

                                <div class="project-content">
                                    <div class="project-title">
                                        <h4>
                                            <router-link tag="a" to="/single/project">{{projet.titre}}</router-link>
                                        </h4>
                                    </div>
                                    <div class="project-desc">
                                        <p>{{projet.description}}</p>
                                    </div>
            
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <vue-easy-lightbox
                escDisabled
                moveDisabled
                :visible="gallery.visible"
                :imgs="gallery.img"
                :index="gallery.index"
                @hide="handleHide"
            ></vue-easy-lightbox>

        </div>

        <ul class="pagination">
            <li><a href="javascript:void(0)" aria-label="Prev" @click="prevProjectPage"><i class="carousel-arrow-left"></i></a></li>
            <li><a href="javascript:void(0)" aria-label="Next" @click="nextProjectPage"><i class="carousel-arrow-right"></i></a></li>
        </ul>

    </section>

</div>
</template>

<script>
import {scroller} from 'vue-scrollto/src/scrollTo';
import VueEasyLightbox from 'vue-easy-lightbox';
export default {
    name: 'catalogComponent',

    components: {
        VueEasyLightbox
    },

    data () {
        return{
            cover:'',
            gallery:{
                img:[],
                index:0,
                visible:false
            }
        }
    },
    computed: {
        projects() {
            return this.$store.getters.getProjects;
        },
    },
    mounted(){
        this.$store.dispatch("viewContent");
        this.viewPersonalization();
    },

    created(){
        const secondScrollTo = scroller()
        secondScrollTo('#navbar-spy');
    },

    methods : {
        viewPersonalization() {
            this.$axios.get('admin/personnalisation/get')
                .then((result) => {
                    this.cover = result.data.personalisation.gamme.image_couverture;
                })
                .catch((err) => {
                    console.log(err);
                })
        },

        show(img, index) {
            console.log("it log");
            this.gallery.visible = true;
            this.gallery.index = index;
            this.gallery.img = img;
        },

        nextProjectPage() {
            this.$store.dispatch("nextProjects");
            const secondScrollTo = scroller()
            secondScrollTo('#projects-modern-1');
        },
        prevProjectPage() {
            this.$store.dispatch("prevProjects");
            const secondScrollTo = scroller()
            secondScrollTo('#projects-modern-1');
        },

        handleHide() {
            this.gallery.visible = false
        }
    }
}
</script>
