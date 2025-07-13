<template>
  <section class="hero-section">
    <div class="hs-slider owl-carousel">
      <div class="hs-item set-bg" :style="{ backgroundImage: 'url(/img/hero/hero-1.jpg)' }">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-6">
              <div class="hi-text">
                <span>Shape your body</span>
                <h1>Be <strong>strong</strong> training hard</h1>
                <a href="#" class="primary-btn">Get info</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hs-item set-bg" :style="{ backgroundImage: 'url(/img/hero/hero-2.jpg)' }">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-6">
              <div class="hi-text">
                <span>Shape your body</span>
                <h1>Be <strong>strong</strong> training hard</h1>
                <a href="#" class="primary-btn">Get info</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Note: Pour rendre le carrousel fonctionnel, tu dois intégrer OwlCarousel en tant que plugin JS ou utiliser une alternative Vue.
</script>

<style scoped>
.hero-section {
  position: relative;
}
.set-bg {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
