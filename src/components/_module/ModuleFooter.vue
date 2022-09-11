<template>
  <div class="m-footer">
    <v-container>
      <v-layout align-center wrap>
        <v-flex xs12 md3>
          <img src="@/assets/images/logo.png" alt="logo" />
          <p class="mt-5">
            Jl. Bangka XI No.59A, Pela Mampang, Kec. Mampang Perapatan, Jakarta
            Selatan, DKI Jakarta 12720
          </p>
        </v-flex>
        <v-flex xs12 md6 class="m-footer__bottom-bar mt-8 mt-md-0">
          <v-layout class="list--bottom-bar">
            <p @click="goToSection('about-us')">ABOUT US</p>
            <p @click="goToSection('service')">SERVICE</p>
            <p @click="goToSection('testimonials')">TESTIMONIALS</p>
            <p @click="goToSection('contact-us')">CONTACT US</p>
          </v-layout>
        </v-flex>
        <v-flex xs12 md3 class="mt-8 mt-md-0">
          <v-layout align-center>
            <a href="https://www.facebook.com/LabbaikID/" target="_blank">
              <img src="@/assets/images/facebook.svg" alt="facebook" />
            </a>
            <a href="https://www.instagram.com/labbaik.id/" target="_blank">
              <img src="@/assets/images/instagram.svg" alt="instagram" class="ml-8" />
            </a>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>