<template>
  <div class="col-12 col-md-6 col-lg-4 team-item">
    <div class="project-panel">
      <div class="project-panel-holder">
        <div class="project-img" style="border-radius: 0px">
          <img
            class="img-fluid"
            style="width: 100%; height: 350px; object-fit: cover; object-position: top"
            :src="image"
            alt=" item"
          />
          <div
            :style="`width: 100%;
              height: 100px;
              position: absolute;
              bottom: 0;
              z-index: 100;
              background-color:${color};`"
          >
            <h2
              class="text-center text-white"
              style="
                font-weight: bold;
                font-size: 20px;
                margin-top: 30px;
                letter-spacing: 1px;
              "
            >
              {{ title.toUpperCase() }}
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- all props & events -->
</template>

<script>
export default {
  name: "G-Card",

  props: ["image", "title", "color"],
};
</script>
