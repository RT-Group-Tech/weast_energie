<template>
  <div>
    <section class="slider slider-3" id="slider-3">
      <div class="container-fluid pe-0 ps-0">
        <div
          class="slider-carousel owl-carousel carousel-navs carousel-dots"
          data-slide="1"
          data-slide-rs="1"
          data-autoplay="true"
          data-nav="true"
          data-dots="true"
          data-space="0"
          data-loop="true"
          data-speed="800"
        >
          <div
            class="slide bg-overlay bg-overlay-dark-slider"
            :style="`background-image: url(${personalization.banner_img1}); background-size: cover;`"
          >
            <div class="bg-section">
              <img :src="personalization.banner_img1" alt="Background" />
            </div>
            <div class="container">
              <div class="row">
                <div class="col-12 col-lg-7">
                  <div class="slide-content"></div>
                </div>
                <div class="col-12 col-lg-3 offset-lg-2 d-flex">
                  <div class="slider-panel-holder">
                    <div class="slider-panel">
                      <i class="panel-icon flaticon-028-greenhouse"></i>
                      <h5 class="panel-title">Notre Mission</h5>
                      <p class="panel-desc">{{ personalization.mission }}</p>
                      <a href="#"><i class="energia-arrow-right"> </i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="slide bg-overlay bg-overlay-dark-slider"
            :style="`background-image: url(${personalization.banner_img2}); background-size: cover;`"
          >
            <div class="bg-section">
              <img :src="personalization.banner_img2" alt="Background" />
            </div>
            <div class="container">
              <div class="row">
                <div class="col-12 col-lg-7">
                  <div class="slide-content"></div>
                </div>
                <div class="col-12 col-lg-3 offset-lg-2 d-flex">
                  <div class="slider-panel-holder">
                    <div class="slider-panel">
                      <i class="panel-icon flaticon-028-greenhouse"></i>
                      <h5 class="panel-title">notre mission</h5>
                      <p class="panel-desc">{{ personalization.mission }}</p>
                      <a href="#"><i class="energia-arrow-right"> </i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="slide bg-overlay bg-overlay-dark-slider"
            :style="`background-image: url(${personalization.banner_img3}); background-size: cover;`"
          >
            <div class="bg-section">
              <img :src="personalization.banner_img3" alt="Background" />
            </div>
            <div class="container">
              <div class="row">
                <div class="col-12 col-lg-7">
                  <div class="slide-content"></div>
                </div>
                <div class="col-12 col-lg-3 offset-lg-2 d-flex">
                  <div class="slider-panel-holder">
                    <div class="slider-panel">
                      <i class="panel-icon flaticon-019-electric-tower"></i>
                      <h5 class="panel-title">notre mission</h5>
                      <p class="panel-desc">{{ personalization.mission }}</p>
                      <a href="#"><i class="energia-arrow-right"> </i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--<section class="company-data" id="company-data-1">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-12 col-lg-3 col-sm-2">
            <div class="data">
              <div class="data-icon">
                <img
                  src="assets/images/logo/drc.png"
                  class="img-fluid"
                  height="80"
                  width="80"
                  alt=""
                />
              </div>
              <h6 style="font-size: 14px">Ministère de l'Energie</h6>
            </div>
          </div>

          <div class="col-12 col-lg-3 col-sm-2">
            <div class="data">
              <div class="data-icon">
                <img
                  src="assets/images/logo/bm.png"
                  class="img-fluid"
                  height="120"
                  width="120"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-3 col-sm-2">
            <div class="data">
              <div class="data-icon">
                <img
                  src="assets/images/logo/acerd.png"
                  class="img-fluid"
                  height="150"
                  width="200"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-3 col-sm-2">
            <div class="data">
              <div class="data-icon">
                <img
                  src="assets/images/logo/imga.jpeg"
                  class="img-fluid"
                  height="150"
                  width="200"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>-->

    <section class="about about-1 bg-grey" id="about-1">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-5">
            <div
              class="about-img"
              :style="`background-image: url(${personalization.client_satisfait_cover}); background-size: cover; border-radius: 10px;`"
            >
              <div class="about-img-holder bg-overlay"></div>
              <div>
                <div class="counter">
                  <div class="counter-icon">
                    <i class="flaticon-011-energy-1"></i>
                  </div>
                  <div class="counter-num">
                    <span
                      class="counting"
                      :data-counterup-nums="personalization.client_satisfait"
                      >{{ personalization.client_satisfait }}</span
                    >
                  </div>
                  <div class="counter-name">
                    <h6>clients satisfaits</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-7">
            <div class="heading heading-1">
              <h2 class="heading-title">
                Pionnier dans le secteur des Energies Renouvelables
              </h2>
            </div>
            <div class="about-block">
              <div class="row">
                <div class="col-12 col-lg-12 col-md-12">
                  <div class="block-left">
                    <div class="prief-set font-weight-normal">
                      <p class="text--just font-weight-normal">
                        <Strong>Weast Energie Solaire & Eau</Strong> est un bureau d’étude
                        d’ingénierie fondé en 2010, d’approvisionnement et de construction
                        spécialisé dans les solutions d’énergies renouvelables et les
                        solutions pour l’eau (pompage, adduction, traitement, irrigation).
                        <br />
                        L’énergie est profondément lié à l’Histoire de l’Humanité et à son
                        développement. Aujourd’hui la corrélation entre l’accès et
                        l’énergie et le développement est bien connue, pour des milliards
                        d’individu la possibilité de surmonter la fracture du
                        développement est fortement affectée par le manque d’accès à
                        l’énergie. <br />
                        La nécessité de combattre la pauvreté en augmentant et améliorant
                        l’accès à l’énergie est mondialement reconnue. L’Energie mène au
                        progrès humain et maintenant plus que jamais, la société doit
                        assurer que les bénéfices d’un service énergétique moderne soient
                        disponibles à tous et fournie de la manière la plus propre, sure
                        et efficace. La transition vers des systèmes d’énergie durable est
                        un des défis clé pour notre économie globalisée et est, en même
                        temps, l’opportunité de repenser nos modèles d’énergie basés sur
                        l’épuisement des ressources et les systèmes centralisés. <br />
                        Les Energies Renouvelables ont un rôle pivot et majeur à jouer
                        dans ce défi et <Strong>Weast Energie Solaire & Eau</Strong> est
                        le bureau d’étude et de réalisation de référence en RDC. <br />
                        Notre Vision est celle d'une amelioration du niveau et de la
                        qualité de vie de la population à travers le developpement durable
                        et l'utilisation des energies renouvelables.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="about about-2" id="about-2">
      <div class="container">
        <div class="about-wrapper">
          <div class="video-wrapper">
            <div class="video video-2" id="video-2">
              <div class="container" style="padding-left: 20px; padding-right: 20px">
                <iframe
                  class="responsive-iframe"
                  :src="poster"
                  title="Weast energie vidéo de présentation"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="blog blog-2 blog-grid bg-white solutions" id="blog-2">
      <div class="container">
        <div class="heading heading-2 heading-light heading-light2">
          <div class="row">
            <div class="col-12 col-lg-5">
              <p class="heading-subtitle"><Strong>Weast Energie Solaire & eau</Strong></p>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-lg-12">
              <h2 class="heading-title text-dark">Nos Solutions</h2>
              <p class="text--just" v-if="isExpanded1">
                <Strong>Weast Energie</Strong> est un des leaders de l'électrification
                hors-réseau et avec le réseau mais aussi rurale par systèmes solaires et
                hybrides de technologie renouvelables. Nos projets sont divers et variés :
                électrification de foyers, de zones de santé, hôpitaux, bureaux
                professionnels, écoles, maternités, de villages, éclairage publique,
                industries, antennes télécoms, chambre froide solaire pour conservation
                des médicaments et des aliments, pompage d'eau solaire(agriculture, eau
                potable, adduction, kits d'irrigation), traitement de l'eau,
                hydro-électricité, micro/mini-réseau, système de cartes à prépaiement.
                Grâce à nos solutions plusieurs millions de congolais bénéficient d'une
                amélioration dans la qualité de leurs soins de santé et de leurs
                approvisionnements en médicament mais aussi de leur confort de vie.<a
                  href="javascript:void(0)"
                  style="font-weight: 900"
                  @click="getExpanded1"
                  ><svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="13px"
                    height="7px"
                    viewBox="0 0 13 7"
                    enable-background="new 0 0 13 7"
                    xml:space="preserve"
                  >
                    <polygon
                      id="arrow_poly_1"
                      class="arrow_poly"
                      fill="#E09406"
                      points="13,3.5 9,0 9,3 0,3 0,4 9,4 9,7 "
                    />
                  </svg>
                  fermer</a
                >
              </p>

              <p class="text--just" v-else>
                <Strong>Weast Energie</Strong> est un des leaders de l'électrification
                hors-réseau et avec le réseau mais aussi rurale par systèmes solaires et
                hybrides de technologie renouvelables...
                <a
                  href="javascript:void(0)"
                  style="font-weight: 900"
                  @click="getExpanded1"
                  ><svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="13px"
                    height="7px"
                    viewBox="0 0 13 7"
                    enable-background="new 0 0 13 7"
                    xml:space="preserve"
                  >
                    <polygon
                      id="arrow_poly_1"
                      class="arrow_poly"
                      fill="#E09406"
                      points="13,3.5 9,0 9,3 0,3 0,4 9,4 9,7 "
                    />
                  </svg>
                  voir plus</a
                >
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-lg-4">
            <div class="blog-entry blog-entry1" data-hover="">
              <div class="entry-content">
                <div class="entry-img-wrap">
                  <div class="entry-img entry-img1" style="margin-left: 10px">
                    <a href="#"
                      ><img
                        src="assets/images/solutions/cap01.png"
                        class="img-responsive img"
                        alt=""
                    /></a>
                  </div>
                </div>
                <h4 style="font-size: 20px; font-weight: 600">Electrification</h4>

                <div class="entry-bio">
                  <p>
                    Electrification habitation, Entreprise, Commerces, Centre de santé,
                    Hôpitaux : Nous installons des micro et mini- réseaux basé sur les
                    énergies solaires et de micro-hydrauliques. De la production à la
                    distribution à l’utilisateur les solutions intelligentes de monitoring
                    et de facturation sont mis en place.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-4">
            <div class="blog-entry blog-entry1" data-hover="">
              <div class="entry-content">
                <div class="entry-img-wrap">
                  <div class="entry-img entry-img1" style="margin-left: 10px">
                    <a href="#"
                      ><img src="assets/images/solutions/adduction.jpeg" alt=""
                    /></a>
                  </div>
                </div>
                <h4 style="font-size: 20px; font-weight: 600">
                  Pompage et adduction d'eau
                </h4>

                <div class="entry-bio">
                  <p>
                    Car l’eau c’est la vie. L’accès à l’eau est lié à celui de l’énergie.
                    Les multiples bénéfices pour le développement la santé ne sont plus à
                    démontrer. Nous proposons de plus des solutions de distribution
                    intelligente avec cartes à prépaiement et le suivi à distance. Eau :
                    L’accès à l’eau st intimement lié à celui de l’énergie, car sans
                    énergie on ne peut pomper , stocker, transporter, traiter et
                    distribuer l’eau. Les solutions alternatives d’approvisionnement ne
                    permettent pas de pouvoir être utiliser pour le développement de
                    l’agriculture et pire encore l’eau consommée est souvent contaminée et
                    engendrent des problèmes de santé pour ceux qui la consomment. Parce
                    que simplement l’Eau c’est la Vie.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-4">
            <div class="blog-entry blog-entry1" data-hover="">
              <div class="entry-content">
                <div class="entry-img-wrap">
                  <div class="entry-img entry-img1" style="margin-left: 10px">
                    <a href="#"
                      ><img src="assets/images/solutions/eclairage.jpeg" alt=""
                    /></a>
                  </div>
                </div>
                <h4 style="font-size: 20px; font-weight: 600">Eclairage</h4>

                <div class="entry-bio">
                  <p>
                    L’éclairage des routes publiques ou privées mais aussi de lotissements
                    d’habitations permettent d’apporter la sécurité et le confort à la
                    population. Nous apportons aussi des solutions pour les besoins
                    professionnels (Entrepôts, Ports, Terrains, ….)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-4">
            <div class="blog-entry blog-entry1" data-hover="">
              <div class="entry-content">
                <div class="entry-img-wrap">
                  <div class="entry-img entry-img1">
                    <a href="#"
                      ><img src="assets/images/solutions/cap13.jpeg" alt=""
                    /></a>
                  </div>
                </div>
                <h4 style="font-size: 20px; font-weight: 600">Kit Solaire</h4>

                <div class="entry-bio">
                  <p>
                    Nous avons conçu des kit solaire a batterie Lithium à usage domestique
                    et professionnel. Afin de les rendre accessible à tous, nous proposons
                    des paiements échelonnés.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-4">
            <div class="blog-entry blog-entry1" data-hover="">
              <div class="entry-content">
                <div class="entry-img-wrap">
                  <div class="entry-img entry-img1" style="margin-left: 10px">
                    <a href="#"><img src="assets/images/solutions/cap05.png" alt="" /></a>
                  </div>
                </div>

                <h4 style="font-size: 20px; font-weight: 600">
                  électrification rurale & mini réseau
                </h4>

                <div class="entry-bio">
                  <p>
                    Nous installons des micro et mini- réseaux basé sur les énergies
                    solaires et de micro-hydrauliques. De la production à la distribution
                    à l’utilisateur les solutions intelligentes de monitoring et de
                    facturation sont mis en place.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-4">
            <div class="blog-entry blog-entry1" data-hover="">
              <div class="entry-content">
                <div class="entry-img-wrap">
                  <div class="entry-img entry-img1" style="margin-left: 10px">
                    <a href="#"
                      ><img src="assets/images/solutions/secours2.jpeg" alt=""
                    /></a>
                  </div>
                </div>
                <h4 style="font-size: 20px; font-weight: 600">Système de secours</h4>

                <div class="entry-bio">
                  <p>
                    Dans les milieux ou les délestages sont fréquents nous proposons des
                    solutions de Backup avec batteries Lithium dernière génération.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-4">
            <div class="blog-entry blog-entry1" data-hover="">
              <div class="entry-content">
                <div class="entry-img-wrap">
                  <div class="entry-img entry-img1" style="margin-left: 10px">
                    <a href="#"><img src="assets/images/solutions/cap07.png" alt="" /></a>
                  </div>
                </div>

                <h4 style="font-size: 20px; font-weight: 600">Chambre froide</h4>

                <div class="entry-bio">
                  <p>
                    Avec des Chambres froides solaires installées dans toutes les
                    provinces nous sommes spécialisé dans les solutions pour la chaine du
                    froid tant pour la conservation des médicaments que de la nourriture
                    mais également des machines à glace ou de morgues.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-4">
            <div class="blog-entry blog-entry1" data-hover="">
              <div class="entry-content">
                <div class="entry-img-wrap">
                  <div class="entry-img entry-img1" style="margin-left: 10px">
                    <a href="#"
                      ><img src="assets/images/solutions/hydro.jpeg" alt=""
                    /></a>
                  </div>
                </div>
                <h4 style="font-size: 20px; font-weight: 600">Micro Hydro Electricité</h4>

                <div class="entry-bio">
                  <p>
                    La RDC dispose de multiples cours d’eau qui peuvent être exploités
                    sans la nécessité de construire de grands barrages ou ouvrage de
                    construction civils.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-4">
            <div class="blog-entry blog-entry1" data-hover="">
              <div class="entry-content">
                <div class="entry-img-wrap">
                  <div class="entry-img entry-img1" style="margin-left: 10px">
                    <a href="#"><img src="assets/images/solutions/cap09.png" alt="" /></a>
                  </div>
                </div>

                <h4 style="font-size: 20px; font-weight: 600">Audit energétique</h4>

                <div class="entry-bio">
                  <p>
                    Parce que l’énergie la moins cher est celle que l’on ne consomme pas,
                    nous établissons des bilans énergétiques de vos consommations et vous
                    conseillons sur les remplacements à opérer au sein de vos équipements
                    ou autres conseils afin de diminuer votre facture énergétique.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-4">
            <div class="blog-entry blog-entry1" data-hover="">
              <div class="entry-content">
                <div class="entry-img-wrap">
                  <div class="entry-img entry-img1" style="margin-left: 10px">
                    <a href="#"><img src="assets/images/solutions/cap10.png" alt="" /></a>
                  </div>
                </div>

                <h4 style="font-size: 20px; font-weight: 600">solution-containerisée</h4>

                <div class="entry-bio">
                  <p>La plupart de nos solutions sont « containerisables »</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-4">
            <div class="blog-entry blog-entry1" data-hover="">
              <div class="entry-content">
                <div class="entry-img-wrap">
                  <div class="entry-img entry-img1" style="margin-left: 10px">
                    <a href="#"><img src="assets/images/solutions/cap11.png" alt="" /></a>
                  </div>
                </div>
                <h4 style="font-size: 20px; font-weight: 600">agriculture</h4>

                <div class="entry-bio">
                  <p>
                    En RDC plus de 70% des ménages des milieux ruraux vivent de
                    l’agriculture mais ne contribue que faiblement au Produit National
                    Brut du pays. Ceci démontre l’importance et la pertinence de
                    l’amélioration des pratiques agricoles pour le développement
                    socio-économique. De plus la sécurité alimentaire, la génération de
                    revenus et le développement rural dépendent hautement de la
                    productivité agricole. Une augmentation de l’utilisation des services
                    énergétiques modernes, contribue à ajouter de la valeur à tous les
                    composants de la chaine d’approvisionnement alimentaire (préparation
                    de terrain, culture, irrigation, récolte, transformation, stockage et
                    conservation et le transport d’intrants et des produits des cultures)
                    et de s’éloigner de la vision de l’agriculture de subsistance
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-4">
            <div class="blog-entry blog-entry1" data-hover="">
              <div class="entry-content">
                <div class="entry-img-wrap">
                  <div class="entry-img entry-img1" style="margin-left: 10px">
                    <a href="#"><img src="assets/images/solutions/cap12.jpg" alt="" /></a>
                  </div>
                </div>

                <h4 style="font-size: 20px; font-weight: 600">Chauffe eau solaire</h4>

                <div class="entry-bio">
                  <p>
                    Pour le confort ou pour les besoins professionnels, nous avons des
                    solutions de chauffe-eaux sol.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-4">
            <div class="blog-entry blog-entry1" data-hover="">
              <div class="entry-content">
                <div class="entry-img-wrap">
                  <div class="entry-img entry-img1" style="margin-left: 10px">
                    <a href="#"
                      ><img src="assets/images/solutions/reduction.jpeg" alt=""
                    /></a>
                  </div>
                </div>

                <h4 style="font-size: 20px; font-weight: 600">
                  Réduction de la Consommation en carburant
                </h4>

                <div class="entry-bio">
                  <p>
                    Sytème hybride et économique vous permettant de réduire jusqu'a 90% de
                    votre consommation en carburant.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-lg-5">
          <div class="col-12">
            <div class="more-blog"></div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="services"
      id="services-3"
      style="background-image: url('assets/images/background/wavy-pattern.png')"
    >
      <div class="container">
        <div class="heading heading-2 heading-light heading-light2">
          <div class="row">
            <div class="col-12 col-lg-5">
              <p class="heading-subtitle"><Strong>Weast Energie Solaire & eau</Strong></p>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-lg-12">
              <h2 class="heading-title text-dark">Mot sur L'Utilisation Productive</h2>
              <p class="text--just mt-3">
                Notre vision est celle d’un développement durable et le plus inclusif
                possible, c’est pourquoi notre panel de solutions sont orientée vers
                <Strong>les utilisations productives de l’énergie</Strong> . L’utilisation
                productive de l’énergie c’est l’utilisation de l’énergie afin de créer des
                revenus. Ce principe doit être renforcé afin de pourvoir casser le cycle
                vicieux des bas revenus qui mènent à un faible accès à l’énergie qui
                mettent des limitations drastiques sur la possibilité de générer des plus
                grands revenus. L’amélioration et l’augmentation de l’accès à l’énergie
                peut créer des nouveaux revenus de deux façons en créant de nouvelles
                opportunités pour les micro-, petites et moyennes entreprises dans le
                secteur manufacturier, agricole, commercial et des services. Les
                mécanismes qui lient l’accès à l’énergie aux activités génératrices de
                revenus sont les suivants : <br />
              </p>
              <div class="container">
                <p class="text--just">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="13px"
                    height="7px"
                    viewBox="0 0 13 7"
                    enable-background="new 0 0 13 7"
                    xml:space="preserve"
                  >
                    <polygon
                      id="arrow_poly_1"
                      class="arrow_poly"
                      fill="#1D1B1B"
                      points="13,3.5 9,0 9,3 0,3 0,4 9,4 9,7 "
                    />
                  </svg>
                  Créer des nouvelles sources de revenus qui n’auraient pas été possible
                  sans accès à l’énergie; <br /><svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="13px"
                    height="7px"
                    viewBox="0 0 13 7"
                    enable-background="new 0 0 13 7"
                    xml:space="preserve"
                  >
                    <polygon
                      id="arrow_poly_1"
                      class="arrow_poly"
                      fill="#292727"
                      points="13,3.5 9,0 9,3 0,3 0,4 9,4 9,7 "
                    />
                  </svg>
                  Améliorer les activités existantes en augmentant la productivité,
                  baissant les couts et améliore la qualité des produits et services;
                  <br /><svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="13px"
                    height="7px"
                    viewBox="0 0 13 7"
                    enable-background="new 0 0 13 7"
                    xml:space="preserve"
                  >
                    <polygon
                      id="arrow_poly_1"
                      class="arrow_poly"
                      fill="#222020"
                      points="13,3.5 9,0 9,3 0,3 0,4 9,4 9,7 "
                    />
                  </svg>
                  Réduit les couts d’opportunité, réduire les corvées et libérer du temps
                  pour d’autres activités génératrices de revenus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="services services-1" style="background-color: #146182" id="services">
      <div class="container">
        <div class="heading heading-2 heading-light heading-light2">
          <div class="row">
            <div class="col-12 col-lg-5">
              <p class="heading-subtitle text-white">
                <Strong>Weast Energie Solaire & eau</Strong>
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-lg-5">
              <h2 class="heading-title text-dark text-white">Nos Services</h2>
            </div>
            <div class="col-12 col-lg-6 offset-lg-1"></div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4" v-for="(service, index) in services" :key="index">
            <div>
              <div class="service-panel">
                <div class="service-icon">
                  <i
                    v-if="service.titre === 'Bureau d’Etudes en Energies Renouvelables'"
                    class="flaticon-040-green-energy"
                  ></i>
                  <i
                    v-else-if="service.titre === 'Installations Et Réalisations'"
                    class="flaticon-029-light"
                  ></i>

                  <i
                    v-else-if="service.titre === 'Procurement et Installations'"
                    class="fas fa-user-cog"
                  ></i>

                  <i
                    v-else-if="service.titre === 'Maintenance et Service Technique'"
                    class="fas fa-wrench"
                  ></i>

                  <i v-else class="flaticon-002-battery-2"></i>
                </div>
                <div class="service-content" style="overflow: hidden">
                  <h4>
                    <a href="#">{{ service.titre }}</a>
                  </h4>
                  <p style="height: 80px; overflow-y: scroll">
                    {{ service.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="projects projects-gallery bg-white" id="what_1">
      <div class="container">
        <div class="heading heading-2 heading-light heading-light2">
          <div class="row">
            <div class="col-12 col-lg-5">
              <p class="heading-subtitle"><Strong>Weast Energie Solaire & eau</Strong></p>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-lg-6">
              <h2 class="heading-title text-dark">Pourquoi travailler avec nous ?</h2>
            </div>
            <div class="col-12 col-lg-6 offset-lg-1"></div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-md-6 col-lg-3 team-item">
            <div class="project-panel">
              <div class="project-panel-holder">
                <div class="project-img bg-site" style="width: 100%; height: 200px">
                  <div
                    class="text--center"
                    style="margin-top: 40px; padding-right: 20px; padding-left: 20px"
                  >
                    <p><i class="fas fa-check-circle fa-3x text-white"></i></p>
                    <h4
                      style="font-size: 18px; letter-spacing: 1px"
                      class="mt-3 text-white"
                    >
                      PROFESSIONALISME & QUALITE
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-3 team-item">
            <div class="project-panel">
              <div class="project-panel-holder">
                <div class="project-img bg-site" style="width: 100%; height: 200px">
                  <div
                    class="text--center"
                    style="margin-top: 40px; padding-right: 20px; padding-left: 20px"
                  >
                    <p><i class="fas fa-check-circle fa-3x text-white"></i></p>
                    <h4
                      style="font-size: 18px; letter-spacing: 1px"
                      class="mt-3 text-white"
                    >
                      EXPERIENCE ET SAVOIR FAIRE
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-3 team-item">
            <div class="project-panel">
              <div class="project-panel-holder">
                <div class="project-img bg-site" style="width: 100%; height: 200px">
                  <div
                    class="text--center"
                    style="margin-top: 40px; padding-right: 20px; padding-left: 20px"
                  >
                    <p><i class="fas fa-check-circle fa-3x text-white"></i></p>
                    <h4
                      style="font-size: 18px; letter-spacing: 1px"
                      class="mt-3 text-white"
                    >
                      SERVICE APRES-VENTE & GARANTIES
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-3 team-item">
            <div class="project-panel">
              <div class="project-panel-holder">
                <div class="project-img bg-site" style="width: 100%; height: 200px">
                  <div
                    class="text--center"
                    style="margin-top: 40px; padding-right: 20px; padding-left: 20px"
                  >
                    <p><i class="fas fa-check-circle fa-3x text-white"></i></p>
                    <h4
                      style="font-size: 18px; letter-spacing: 1px"
                      class="mt-3 text-white"
                    >
                      LOGISTIQUE & GRANDS PROJETS
                    </h4>
                    <p class="text-white">Présence dans toutes la RDC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-3 team-item">
            <div class="project-panel">
              <div class="project-panel-holder">
                <div class="project-img bg-site" style="width: 100%; height: 200px">
                  <div
                    class="text--center"
                    style="margin-top: 40px; padding-right: 20px; padding-left: 20px"
                  >
                    <p><i class="fas fa-check-circle fa-3x text-white"></i></p>
                    <h4
                      style="font-size: 18px; letter-spacing: 1px"
                      class="mt-3 text-white"
                    >
                      MARQUES RECONNUES
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-3 team-item">
            <div class="project-panel">
              <div class="project-panel-holder">
                <div class="project-img bg-site" style="width: 100%; height: 200px">
                  <div
                    class="text--center"
                    style="margin-top: 40px; padding-right: 20px; padding-left: 20px"
                  >
                    <p><i class="fas fa-check-circle fa-3x text-white"></i></p>
                    <h4
                      style="font-size: 18px; letter-spacing: 1px"
                      class="mt-3 text-white"
                    >
                      PRESENCE DANS 26 PROVINCES
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-3 team-item">
            <div class="project-panel">
              <div class="project-panel-holder">
                <div class="project-img bg-site" style="width: 100%; height: 200px">
                  <div
                    class="text--center"
                    style="margin-top: 40px; padding-right: 20px; padding-left: 20px"
                  >
                    <p><i class="fas fa-check-circle fa-3x text-white"></i></p>
                    <h4
                      style="font-size: 18px; letter-spacing: 1px"
                      class="mt-3 text-white"
                    >
                      AGREMENT MINISTERE DE L'ENERGIE
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-3 team-item">
            <div class="project-panel">
              <div class="project-panel-holder">
                <div class="project-img bg-site" style="width: 100%; height: 200px">
                  <div
                    class="text--center"
                    style="margin-top: 40px; padding-right: 20px; padding-left: 20px"
                  >
                    <p><i class="fas fa-check-circle fa-3x text-white"></i></p>
                    <h4
                      style="font-size: 18px; letter-spacing: 1px"
                      class="mt-3 text-white"
                    >
                      MEMBRE ASSOCIATION CONGOLAISE DES ENERGIES RENOUVELABLES
                      DECENTRALISEES
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="features features-1 bg-sec" id="advantages_1">
      <div class="container">
        <div class="heading heading-2 heading-light heading-light2">
          <div class="row">
            <div class="col-12 col-lg-5">
              <p class="heading-subtitle text-white">
                <Strong>Weast Energie Solaire & eau</Strong>
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-lg-5">
              <h2 class="heading-title text-white">
                Avantages des Energies Renouvelables
              </h2>
            </div>
            <div class="col-12 col-lg-6 offset-lg-1"></div>
          </div>
        </div>

        <div class="row">
          <div
            class="col-12 col-md-6 col-lg-4"
            v-for="(av, index) in avantages"
            :key="index"
          >
            <div class="feature-panel-holder" data-hover="">
              <div class="feature-panel">
                <div class="feature-content" style="height: 200px">
                  <h4
                    class="text-uppercase"
                    style="
                      font-weight: bold;
                      color: #f3b71b;
                      font-size: 15px;
                      text-shadow: 1px #0000;
                    "
                  >
                    {{ av.titre }}
                  </h4>
                  <p style="height: 150px; overflow-y: scroll">{{ av.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="clients clients-carousel clients-1" id="clients-1">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="heading heading-1 w-100">
              <h4
                class="heading-title text-center text-decoration-underline text-lowercase mt-3"
              >
                <span class="text-capitalize">Ils</span> nous ont fait confiance
              </h4>
            </div>
          </div>
          <div class="col-12">
            <div
              class="carousel owl-carousel mt-3"
              data-slide="6"
              data-slide-rs="2"
              data-autoplay="true"
              data-nav="false"
              data-dots="false"
              data-space="0"
              data-loop="true"
              data-speed="3000"
            >
              <div class="client">
                <a href="javascript:void(0)"> </a
                ><img src="assets/images/logo/partener/part01.png" />
              </div>
              <div class="client">
                <a href="javascript:void(0)"> </a
                ><img src="assets/images/logo/partener/part02.png" />
              </div>
              <div class="client">
                <a href="javascript:void(0)"> </a
                ><img src="assets/images/logo/partener/part04.jpg" />
              </div>
              <div class="client">
                <a href="javascript:void(0)"> </a
                ><img src="assets/images/logo/partener/part05.png" />
              </div>
              <div class="client">
                <a href="javascript:void(0)"> </a
                ><img src="assets/images/logo/partener/part06.png" />
              </div>
              <div class="client">
                <a href="javascript:void(0)"> </a
                ><img src="assets/images/logo/partener/part07.jpg" />
              </div>
              <div class="client">
                <a href="javascript:void(0)"> </a
                ><img src="assets/images/logo/partener/part08.png" />
              </div>
              <div class="client">
                <a href="javascript:void(0)"> </a
                ><img src="assets/images/logo/partener/part09.png" />
              </div>

              <div class="client">
                <a href="javascript:void(0)"> </a
                ><img src="assets/images/logo/partener/acrd.png" />
              </div>

              <div class="client">
                <a href="javascript:void(0)"> </a
                ><img src="assets/images/logo/partener/advancebk.png" />
              </div>

              <div class="client">
                <a href="javascript:void(0)"> </a
                ><img src="assets/images/logo/partener/equity.png" />
              </div>

              <div class="client">
                <a href="javascript:void(0)"> </a
                ><img src="assets/images/logo/partener/fbnbank.png" />
              </div>

              <div class="client">
                <a href="javascript:void(0)"> </a
                ><img src="assets/images/logo/partener/fond_m.png" />
              </div>

              <div class="client">
                <a href="javascript:void(0)"> </a
                ><img src="assets/images/logo/partener/fnc.png" />
              </div>

              <div class="client">
                <a href="javascript:void(0)"> </a
                ><img src="assets/images/logo/partener/gavi.png" />
              </div>

              <div class="client">
                <a href="javascript:void(0)"> </a
                ><img src="assets/images/logo/partener/raw.png" />
              </div>

              <div class="client">
                <a href="javascript:void(0)"> </a
                ><img src="assets/images/logo/partener/sofibk.png" />
              </div>

              <div class="client">
                <a href="javascript:void(0)"> </a
                ><img src="assets/images/logo/partener/unhr.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="blog blog-2 blog-grid bg-light solutions" id="projects">
      <div style="background-color: #146182; margin-bottom: 10px; padding: 25px">
        <div class="row">
          <div class="col-12 col-lg-12">
            <div class="container">
              <div class="heading heading-5 text-center">
                <div class="row">
                  <div class="col-md-6">
                    <p class="heading-subtitle">Nous sommes partout en RDC</p>
                    <img
                      src="assets/images/logo/imgcd.png"
                      class="img-fluid"
                      alt="image"
                      width="300"
                      height="300"
                    />
                  </div>
                  <div class="col-md-6">
                    <h4 class="text-white">Nos projets et réalisations</h4>
                    <p
                      class="heading-desc text-white"
                      style="text-align: justify; text-justify: center"
                    >
                      dans toutes les provinces de la RDC: Kinshasa, Kongo Central,
                      Bas-Uele, Equateur, Haut-Katanga, Haut-Lomami, Haut-Uele, Ituri,
                      Kasaï, Kasaï central, Kasaï oriental, Kwango, Kwilu, Lomami,
                      Mai-Ndombe, Maniema, Mongala, Nord-Kivu, Nord-Ubangi, Sankuru,
                      Sud-Kivu, Sud-Ubangi, Tanganyika, Tshopo, Tshuapa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div
            class="col-12 col-lg-4 col-md-6"
            v-for="(rel, index) in realisations"
            :key="index"
          >
            <div class="blog-entry2 blog-entry" data-hover="">
              <div class="entry-content">
                <div class="entry-img-wrap">
                  <div class="entry-img" style="border-radius: 8px">
                    <a href="javascript:void(0)" @click="() => show(rel.images)"
                      ><img :src="rel.images[0]" alt=""
                    /></a>
                  </div>
                  <div
                    class="entry-category"
                    style="background-color: #146182; bottom: -45px"
                  >
                    <h4>{{ rel.texte }}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- all props & events -->
        <vue-easy-lightbox
          escDisabled
          moveDisabled
          :visible="gallery.visible"
          :imgs="gallery.imgs"
          :index="gallery.index"
          @hide="handleHide"
        ></vue-easy-lightbox>
      </div>
    </section>

    <section
      class="projects projects-gallery"
      id="products"
      style="
        background-image: url('assets/images/background/wavy-pattern.png');
        background-repeat: no-repeat;
      "
    >
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-12">
            <div class="heading heading-1">
              <h2 class="heading-title">Nos Produits / Kit4Africa</h2>

              <p v-if="isExpanded" class="text--just">
                <Strong>K4A Fort</Strong> de nos expériences en milieu rural, péri-urbain
                et urbain, nous avons cherché la meilleure solution pour donner accès à
                l'énergie à la population et directement. Nous avons alors conçus les kits
                solaires « Kit4Africa » qui possèdent la technologie de contrôle de
                paiement et sont adaptés(taille, budget, utilisation) aux besoins de la
                population. Nous avons participer à la création de crédit à l'énergie dans
                différentes banques : Finca, Rawbank, Sofibanque, Advans Banque, Equity
                Bank, FBN Bank; d'autres partenariats sont en cours de négociation et
                finalisation. Les premiers essais en milieu péri-urbain et dans les
                localités à plus fort pouvoir d’achat ont démontré un intérêt pour des
                kits de plus grande puissance pouvant alimenter des appareils d’utilité
                quotidienne et supporter des activités commerciales. Notre population
                cible est tant les ménages privés que les commerçants et travailleurs. Les
                économies engendrées par l’acquisition des Kit4Africa aux ménages privés
                permettent également de les placer dans d’autres secteurs et ainsi
                améliorer les conditions de vie des populations. Certaines améliorations
                visent principalement les femmes et les enfants à travers la
                réorganisation des tâches ménagères, l'occupation des enfants, l'étude des
                enfants. Les ménages verront également une amélioration du temps passé en
                famille, de l'accès à l’information et à la connaissance et de
                l'amélioration de la santé tout en diminuant les risques nocifs des
                solutions alternatives.
                <Strong
                  >Les kits solaires à échelonnement de paiement sont souvent l'unique
                  solution et espoir d'avoir accès à l'électricité et qui permettent un
                  développement social et économique, propre et durable de toutes les
                  populations de la RDC.</Strong
                ><a
                  href="javascript:void(0)"
                  style="font-weight: 900"
                  @click="getExpanded"
                  ><svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="13px"
                    height="7px"
                    viewBox="0 0 13 7"
                    enable-background="new 0 0 13 7"
                    xml:space="preserve"
                  >
                    <polygon
                      id="arrow_poly_1"
                      class="arrow_poly"
                      fill="#E09406"
                      points="13,3.5 9,0 9,3 0,3 0,4 9,4 9,7 "
                    />
                  </svg>
                  fermer</a
                >
              </p>
              <p v-else class="text--just">
                <Strong>K4A Fort</Strong> de nos expériences en milieu rural, péri-urbain
                et urbain, nous avons cherché la meilleure solution pour donner accès à
                l'énergie à la population et directement...
                <a href="javascript:void(0)" style="font-weight: 900" @click="getExpanded"
                  ><svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="13px"
                    height="7px"
                    viewBox="0 0 13 7"
                    enable-background="new 0 0 13 7"
                    xml:space="preserve"
                  >
                    <polygon
                      id="arrow_poly_1"
                      class="arrow_poly"
                      fill="#E09406"
                      points="13,3.5 9,0 9,3 0,3 0,4 9,4 9,7 "
                    />
                  </svg>
                  voir plus</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div
            class="col-12 col-md-6 col-lg-4 team-item"
            v-for="img in gamme.images"
            :key="img"
          >
            <div class="project-panel">
              <div class="project-panel-holder">
                <div class="project-img" style="border-radius: 0px">
                  <img
                    class="img-fluid"
                    style="
                      width: 100%;
                      height: 300px;
                      object-fit: cover;
                      object-position: bottom;
                    "
                    :src="img"
                    alt=" item"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="projects-load-more">
          <router-link
            class="btn btn--secondary m-2"
            style="font-size: 14px; width: 310px"
            tag="a"
            :to="{ name: 'catalog' }"
            >Découvrir notre gamme de produit
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="13px"
              height="7px"
              viewBox="0 0 13 7"
              enable-background="new 0 0 13 7"
              xml:space="preserve"
            >
              <polygon
                id="arrow_poly_1"
                class="arrow_poly"
                fill="#FFFFFF"
                points="13,3.5 9,0 9,3 0,3 0,4 9,4 9,7 "
              /></svg
          ></router-link>
          <a
            class="btn btn--secondary m-2"
            style="font-size: 14px; width: 310px"
            href="https://www.kit4africa.com"
            target="_blank"
            >Visitez le site Kit4Africa
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="13px"
              height="7px"
              viewBox="0 0 13 7"
              enable-background="new 0 0 13 7"
              xml:space="preserve"
            >
              <polygon
                id="arrow_poly_1"
                class="arrow_poly"
                fill="#FFFFFF"
                points="13,3.5 9,0 9,3 0,3 0,4 9,4 9,7 "
              /></svg
          ></a>
        </div>
      </div>
    </section>

    <section class="clients clients-carousel clients-1" id="clients-1">
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <div class="heading heading-1 w-100">
              <h4 class="heading-title text-center text-decoration-underline mt-3">
                Nos partenaires
              </h4>
            </div>
          </div>
          <div class="col-12">
            <div
              class="carousel owl-carousel"
              data-slide="6"
              data-slide-rs="2"
              data-autoplay="true"
              data-nav="false"
              data-dots="false"
              data-space="0"
              data-loop="true"
              data-speed="3000"
            >
              <div class="client">
                <a href="javascript:void(0)" class="font-weight-bold"> </a
                ><img
                  src="assets/images/logo/drc.png"
                  height="80"
                  width="80"
                  alt="client"
                />Ministère de l'energie
              </div>
              <div class="client">
                <a href="javascript:void(0)"> </a>
                <img
                  src="assets/images/logo/bm.png"
                  class="img-fluid"
                  height="120"
                  width="120"
                  alt=""
                />
              </div>
              <div class="client">
                <a href="javascript:void(0)"> </a
                ><img
                  src="assets/images/logo/acerd.png"
                  class="img-fluid"
                  height="150"
                  width="200"
                  alt=""
                />
              </div>
              <div class="client">
                <a href="javascript:void(0)"> </a
                ><img
                  src="assets/images/logo/imga.jpeg"
                  class="img-fluid"
                  height="150"
                  width="200"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <box-contact></box-contact>
  </div>
</template>

<script>
import { scroller } from "vue-scrollto/src/scrollTo";
import boxContact from "../contact.vue";
import VueEasyLightbox from "vue-easy-lightbox";
export default {
  name: "homeComponent",

  data() {
    return {
      personalization: {},
      gamme: {
        images: [],
        texte: "",
      },

      isExpanded: false,
      isExpanded1: false,

      realisations: [],

      avantages: [],

      gallery: {
        visible: false,
        imgs: [],
        index: 0,
      },

      poster: "",
    };
  },

  components: {
    boxContact,
    VueEasyLightbox,
  },

  computed: {
    projects() {
      return this.$store.getters.getProjects;
    },

    services() {
      return this.$store.getters.getServices;
    },
  },

  mounted() {
    this.$store.dispatch("viewContent");
    this.viewPersonalization();
    this.viewRealisations();
  },

  methods: {
    nextServicePage() {
      const secondScrollTo = scroller();
      secondScrollTo("#services-1");
      this.$store.dispatch("nextServices");
    },
    prevServicePage() {
      this.$store.dispatch("prevServices");
      const secondScrollTo = scroller();
      secondScrollTo("#services-1");
    },

    getExpanded() {
      this.isExpanded = !this.isExpanded;
    },

    getExpanded1() {
      this.isExpanded1 = !this.isExpanded1;
    },

    goToSingleProject() {
      this.$router.go(
        this.$router.push({
          name: "project",
        })
      );
    },

    goToSingleService() {
      this.$router.go(
        this.$router.push({
          name: "service",
        })
      );
    },

    playVideo() {
      this.$router.go(
        this.$router.push({
          name: "video",
          params: { src: this.personalization.video_presentation },
        })
      );
    },

    goToGallery() {
      this.$router.go(
        this.$router.push({
          name: "realisation",
        })
      );
    },

    goToCatalog() {
      this.$router.go(
        this.$router.push({
          name: "catalog",
        })
      );
    },

    viewPersonalization() {
      this.$axios
        .get("admin/personnalisation/get")
        .then((result) => {
          this.personalization = result.data.personalisation;
          this.gamme.texte = result.data.personalisation.gamme.texte;
          this.gamme.images = result.data.personalisation.gamme.images;
          this.avantages = result.data.personalisation.avantages;
          this.poster = result.data.personalisation.video_presentation[0];
        })
        .catch((err) => {
          console.log(err);
        });
    },

    viewRealisations() {
      this.$axios
        .get("admin/realisations/voir")
        .then((result) => {
          this.realisations = result.data.realisations;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    show(imgs) {
      this.gallery.visible = true;
      this.gallery.index = 0;
      this.gallery.imgs = imgs;
    },

    handleHide() {
      this.gallery.visible = false;
    },

    languageSelectedHandler(info) {
      console.log(info);
    },
  },
};
</script>

<style scoped></style>
