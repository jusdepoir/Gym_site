<template>
  <div>
    <Preloader />
    <OffCanvasMenu />
    <HeaderSection />

    <section class="breadcrumb-section set-bg" data-setbg="img/breadcrumb-bg.jpg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <div class="breadcrumb-text">
              <h2>Gallery</h2>
              <div class="bt-option">
                <RouterLink to="/">Home</RouterLink>
                <span>Gallery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <GallerySection />
    <GetInTouchSection />
    <FooterSection />
    <SearchModel />
  </div>
</template>

<script setup lang="ts">
import Preloader from '@/components/Preloader.vue'
import OffCanvasMenu from '@/components/OffCanvasMenu.vue'
import HeaderSection from '@/components/HeaderSection.vue'
import GallerySection from '@/components/GallerySection.vue'
import GetInTouchSection from '@/components/GetInTouchSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import SearchModel from '@/components/SearchModel.vue'
import { RouterLink } from 'vue-router'
</script>

<style scoped>
@import '@/assets/css/bootstrap.min.css';
@import '@/assets/css/font-awesome.min.css';
@import '@/assets/css/flaticon.css';
@import '@/assets/css/owl.carousel.min.css';
@import '@/assets/css/barfiller.css';
@import '@/assets/css/magnific-popup.css';
@import '@/assets/css/slicknav.min.css';
@import '@/assets/css/style.css';
</style>
