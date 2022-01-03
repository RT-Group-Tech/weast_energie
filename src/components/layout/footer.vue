<template>
  <div>
    <footer class="footer footer-1" style="background-color: #146182" id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-6 col-md-6 col-lg-4">
              <div class="footer-widget widget-links">
                <div class="footer-widget-title">
                  <h5>compagnie</h5>
                </div>
                <div class="widget-content">
                  <ul>
                    <li><a class="text-white" href="">Accueil</a></li>
                    <li><a class="text-white" href="#services">Services</a></li>
                    <li>
                      <a class="text-white" href="#products">Nos Produits / Kit4Africa</a>
                    </li>
                    <li>
                      <a class="text-white" href="#projects">Projets & Réalisations</a>
                    </li>
                    <li><a class="text-white" href="#about-2">Nos vidéos</a></li>
                    <li><a class="text-white" href="#contacts">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-md-6 col-lg-4">
              <div class="footer-widget widget-links">
                <div class="footer-widget-title">
                  <h5>Services</h5>
                </div>
                <div class="widget-content">
                  <ul>
                    <li v-for="(service, index) in services" :key="index">
                      <a class="text-white" href="#services">• {{ service.titre }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
              <div class="footer-widget widget-contact float-lg-right">
                <div class="widget-content">
                  <ul>
                    <li class="email">Email: <a href="#">info@weast-energie.com</a></li>
                    <li class="address">
                      <p class="text-white">
                        <i class="energia-location-Icon"></i> Avenue Colonel Ebeya 47 ,
                        Gombe, Kinshasa
                      </p>
                    </li>

                    <div>
                      <gmap-map
                        :center="center"
                        :zoom="18"
                        style="width: 100%; height: 250px"
                      >
                        <gmap-marker
                          :key="index"
                          :position="center"
                          @click="center = gmp"
                        >
                        </gmap-marker>
                      </gmap-map>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="footer-copyright">
                <div class="copyright">
                  <span>&copy; Tous droits reservé, Weast Energie Solaire & Eau </span>
                  <ul class="list-unstyled social-icons">
                    <li>
                      <a
                        class="share-facebook"
                        href="https://web.facebook.com/kit4africa"
                        target="_blank"
                        ><i class="energia-facebook"></i>facebook
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      center: {
        lat: -4.306821,
        lng: 15.306527,
      },
      map_markers: [],

      services: [],
    };
  },

  mounted() {
    this.$store.dispatch("viewContent");
    this.getAllServices();
  },

  methods: {
    getAllServices() {
      this.$axios
        .get("admin/contenus")
        .then((result) => {
          this.services = result.data.contenus.services;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
