<template>
  <div>
    <header class="header header-light header-topbar1 header-shadow" id="navbar-spy">
      <div class="top-bar" style="background-color: #146182">
        <div class="block-left">
          <div class="top-contact">
            <div class="contact-infos">
              <div class="contact-body">
                <div class="row">
                  <div class="col-sm-4 col-lg-12">
                    <p>
                      <i class="energia-phone-Icon"></i
                      ><a href="tel:+243 808 513 340" class="text-white"
                        >+243 808 513 340
                      </a>

                      <i class="energia-email--icon"></i
                      ><a href="mailto:info@weast-energie.com " class="text-white"
                        >info@weast-energie.com</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block-right">
          <div class="module-language">
            <v-google-translate
              :languages="languages"
              @select="languageSelectedHandler"
            ></v-google-translate>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg navbar-sticky" id="primary-menu">
        <a class="navbar-brand" href=""
          ><img
            class="logo logo-dark"
            :src="personalization.logo"
            alt="Weast energy logo" /><img
            class="logo logo-mobile"
            :src="personalization.logo"
            alt="Weast energy logo"
        /></a>
        <div class="module-holder module-holder-phone">
          <button
            class="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarContent">
          <ul class="navbar-nav me-auto">
            <li class="nav-item" id="home" data-hover="">
              <a href="" class="dropdown-toggle"><span>Acceuil</span></a>
            </li>
            <li class="nav-item" id="departments" data-hover="">
              <a class="dropdown-toggle" href="#services" data-toggle="dropdown"
                ><span>Services</span></a
              >
            </li>
            <li class="nav-item" data-hover="">
              <a class="dropdown-toggle" href="#products" data-toggle="dropdown"
                ><span>Produits / Kit4Africa</span></a
              >
            </li>

            <li class="nav-item" data-hover="">
              <a class="dropdown-toggle" href="#projects" data-toggle="dropdown"
                ><span>Projets & réalisations</span></a
              >
            </li>

            <li class="nav-item" data-hover="">
              <router-link
                to="/video/play/"
                class="dropdown-toggle"
                data-toggle="dropdown"
                ><span>Nos vidéos</span></router-link
              >
            </li>
            <li class="nav-item" id="contact" data-hover="">
              <a class="dropdown-toggle" href="#contacts"><span>Contact</span></a>
            </li>
          </ul>
          <div class="module-holder">
            <div class="module-contact">
              <a class="btn btn--primary" href="#contacts">
                Besoin d'information<i class="energia-arrow-right"></i
              ></a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "headerComponent",

  data() {
    return {
      personalization: {},
      languages: [
        {
          code: "fr",
          name: "Français",
          cname: "法语",
          ename: "FR",
        },
        {
          code: "en",
          name: "English",
          cname: "英语",
          ename: "EN",
        },
      ],
    };
  },

  mounted() {
    this.viewPersonalization();
  },

  methods: {
    viewPersonalization() {
      this.$axios
        .get("admin/personnalisation/get")
        .then((result) => {
          this.personalization = result.data.personalisation;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    playVideo() {
      this.$router.go(
        this.$router.push({
          name: "video",
          params: { src: this.personalization.video_presentation },
        })
      );
    },
    languageSelectedHandler(info) {
      console.log(info);
    },
  },
};
</script>
