<template>
  <!-- Offcanvas Menu Section Begin -->
  <div>
    <div class="offcanvas-menu-overlay"></div>
    <div class="offcanvas-menu-wrapper">
      <div class="canvas-close">
        <i class="fa fa-close"></i>
      </div>
      <div class="canvas-search search-switch">
        <i class="fa fa-search"></i>
      </div>
      <nav class="canvas-menu mobile-menu">
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/about-us">About Us</RouterLink></li>
          <li><RouterLink to="/classes">Classes</RouterLink></li>
          <li><RouterLink to="/services">Services</RouterLink></li>
          <li><RouterLink to="/team">Our Team</RouterLink></li>
          <li>
            <a href="#">Pages</a>
            <ul class="dropdown">
              <li><RouterLink to="/about-us">About us</RouterLink></li>
              <li><RouterLink to="/class-timetable">Classes timetable</RouterLink></li>
              <li><RouterLink to="/bmi-calculator">Bmi calculate</RouterLink></li>
              <li><RouterLink to="/team">Our team</RouterLink></li>
              <li><RouterLink to="/gallery">Gallery</RouterLink></li>
              <li><RouterLink to="/blog">Our blog</RouterLink></li>
              <li><RouterLink to="/404">404</RouterLink></li>
            </ul>
          </li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
        </ul>
      </nav>
      <div id="mobile-menu-wrap"></div>
      <div class="canvas-social">
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-youtube-play"></i></a>
        <a href="#"><i class="fa fa-instagram"></i></a>
      </div>
    </div>
  </div>
  <!-- Offcanvas Menu Section End -->
</template>

<script setup>
// Aucun JS requis pour le moment
</script>

<style scoped>
/* Tu peux ajouter ici tes styles personnalisés ou étendre le CSS global */
</style>