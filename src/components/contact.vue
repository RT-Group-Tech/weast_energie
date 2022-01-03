<template>
  <div>
    <section class="contact contact-1" style="background-color: #f3b71b" id="contacts">
      <div class="container">
        <div class="contact-panel contact-panel-3">
          <div class="heading heading-light heading-6">
            <p class="heading-subtitle"><Strong>Weast Energie Solaire & eau</Strong></p>
            <h2 class="heading-title text-white">Contact</h2>
            <ul class="list-unstyled advantages-list">
              <li v-for="(data, index) in contacts" :key="index" class="text-white">
                <span>{{ data.de }} : {{ data.contact }}</span>
                <a class="text-white" :href="'tel:' + data.contact"
                  ><i class="m-4 fas fa-phone"></i
                ></a>
              </li>
            </ul>
            <div class="contact-quote">
              <img src="assets/images/icons/noteicon.png" alt="icon" />
              <p>Email : info@weast-energie.com</p>
            </div>
          </div>
          <div class="contact-card">
            <div class="contact-body">
              <h5 class="card-heading">Besoin d'information</h5>
              <form>
                <div class="row">
                  <div class="col-12 col-md-12">
                    <label class="form-label" for="select-1">Vous êtes ?</label>
                    <select class="form-control" v-model="message.type" id="select-1">
                      <option value="default">Individuel</option>
                      <option value="AL">Entreprise</option>
                    </select>
                  </div>

                  <div class="col-12 col-md-12">
                    <label class="form-label" for="select-3">Email de contact</label>
                    <input
                      type="email"
                      class="form-control"
                      v-model="message.email"
                      placeholder="Entrez votre email"
                      name="select-2"
                      id="select-2"
                    />
                  </div>

                  <div class="col-12">
                    <label class="form-label" for="message">Message</label>
                    <textarea
                      class="form-control"
                      id="message"
                      v-model="message.msg"
                      rows="4"
                      cols="4"
                      placeholder="Entrez votre message"
                    ></textarea>
                  </div>
                  <div class="col-12">
                    <button class="btn btn--secondary w-100" @click.prevent="sendMessage">
                      Envoyer <i class="energia-arrow-right"></i>
                    </button>
                  </div>
                  <div class="col-12">
                    <div class="contact-result"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "contactComponent",

  data() {
    return {
      contacts: [],
      message: {
        type: "",
        email: "",
        msg: "",
      },
    };
  },

  mounted() {
    this.viewAllContacts();
  },

  methods: {
    viewAllContacts() {
      try {
        this.$axios
          .get("/admin/contenus")
          .then((result) => {
            this.contacts = result.data.contenus.contacts;
          })
          .catch((err) => console.log(err));
      } catch (err) {
        console.log(err);
      }
    },

    sendMessage() {
      try {
        let formData = new FormData();
        formData.append("type", this.message.type);
        formData.append("email", this.message.email);
        formData.append("message", this.message.msg);
        this.$axios
          .post("admin/devis", formData)
          .then((res) => {
            console.log(JSON.stringify(res.data));
            let status = res.data.reponse.status;

            this.$swal({
              title: "",
              html: "Envoi en cours...",
              timer: 2000,
              allowOutsideClick: false,
              showConfirmButton: false,
              onBeforeOpen: () => {
                this.$swal.showLoading();
              },
            }).then(() => {
              if (status === "success") {
                this.$swal({
                  toast: true,
                  showConfirmButton: false,
                  position: "bottom-end",
                  timer: 2000,
                  timerProgressBar: false,
                  icon: "success",
                  title: "votre message nous a été envoyé avec succès!",
                });

                this.message.type = "";
                this.message.msg = "";
                this.message.email = "";
              } else return;
            });
          })
          .catch((err) => console.log(err));
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
