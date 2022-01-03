import Vue from 'vue';
import Router from 'vue-router';

//component
import index from '../components/main/index.vue';
import home from '../components/main/home.vue';
import video from '../components/pages/video.vue';
import realisationPage from "../components/pages/gallery.vue";
import catalogPage from '@/components/pages/catalog';

Vue.use(Router);

export default new Router({
    routes: [{
            path: "/",
            component: index,
            meta: {
                reload: true,
            },
            children: [{
                    path: "",
                    name: "home",
                    component: home,
                    meta: {
                        reload: true,
                    },
                },
                {
                    path: "/video/play/",
                    name: "video",
                    component: video,
                    meta: {
                        reload: true,
                    },
                },


                {
                    path: "/realisation/view",
                    name: "realisation",
                    component: realisationPage,
                    meta: {
                        reload: true,
                    },
                },

                {
                    path: "/catalog",
                    name: "catalog",
                    component: catalogPage,
                    meta: {
                        reload: true,
                    },
                }

            ]
        },
        //redirect to login
        { path: '*', redirect: '/' }
    ]
});