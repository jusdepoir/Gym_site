<template>
  <!-- Header Section Begin -->
  <header class="header-section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3">
          <div class="logo">
            <RouterLink to="/">
              <img src="../assets/img/logo.png" alt="Logo">
            </RouterLink>
          </div>
        </div>
        <div class="col-lg-6">
          <nav class="nav-menu">
            <ul>
              <li class="active"><RouterLink to="/">Home</RouterLink></li>
              <li><RouterLink to="/about-us">About Us</RouterLink></li>
              <li><RouterLink to="/class-details">Classes</RouterLink></li>
              <li><RouterLink to="/services">Services</RouterLink></li>
              <li><RouterLink to="/team">Our Team</RouterLink></li>
              <li>
                <a href="#">Pages</a>
                <ul class="dropdown">
                  <li><RouterLink to="/about-us">About us</RouterLink></li>
                  <li><RouterLink to="/class-timetable">Classes timetable</RouterLink></li>
                  <li><RouterLink to="/bmi-calculator">Bmi calculator</RouterLink></li>
                  <li><RouterLink to="/team">Our team</RouterLink></li>
                  <li><RouterLink to="/gallery">Gallery</RouterLink></li>
                  <li><RouterLink to="/blog">Our blog</RouterLink></li>
                  <li><RouterLink to="/404">404</RouterLink></li>
                </ul>
              </li>
              <li><RouterLink to="/contact">Contact</RouterLink></li>
              <li><RouterLink to="/client">Client Space</RouterLink></li>
            </ul>
          </nav>
        </div>
        <div class="col-lg-3">
          <div class="top-option">
            <div class="to-search search-switch">
              <i class="fa fa-search"></i>
            </div>
            <div class="to-social">
              <a href="#"><i class="fa fa-facebook"></i></a>
              <a href="#"><i class="fa fa-twitter"></i></a>
              <a href="#"><i class="fa fa-youtube-play"></i></a>
              <a href="#"><i class="fa fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="canvas-open">
        <i class="fa fa-bars"></i>
      </div>
    </div>
  </header>
  <!-- Header Section End -->
</template>

<script setup>
// Pas de logique JS ici pour l’instant
</script>

<style scoped>
/* Tu peux ajouter des styles spécifiques ici si nécessaire */
</style>
