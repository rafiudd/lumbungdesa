<template>
  <v-container mt-0 pt-0>
    <v-container fluid grid-list-xl>
      <v-layout row wrap>
        <v-flex xs12 sm3 md3 xl3 v-for="data in donasi" :key="data.title">
          <v-card>
            <v-img src="https://res.cloudinary.com/duh8crgew/image/upload/v1663001331/lumbungdesa/images/landing-page/image_13_uyrrox.png"></v-img>
            <v-card-text class="pb-1"> {{data.village}} <br> {{data.districts}} </v-card-text>
            <v-card-title class="pb-1 pt-0"> {{data.title}} </v-card-title>
            <p class="mr-4 ml-4 pb-3 mt-0 pt-0 u-fs-12 u-color-798291 lh-18">{{data.description}}</p>
          </v-card>
        </v-flex>
      </v-layout>
      <v-row :class="{ 'display-none': currentRouteName != 'landingPage' }" class="mr-0 ml-0 mt-10" justify="center" align="center" >
        <v-btn color="#F58328" width="200" dark class="px-7 u-letter-spacing-0 u-fs-14 no-uppercase button-all u-radius-2">Bantu Sekarang</v-btn>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
        tab: null,
        items: [
          { tab: 'One', content: 'Tab 1 Content' },
          { tab: 'Two', content: 'Tab 2 Content' },
        ],
        donasi: [
          {
            title: 'Pelatihan Menjadi Barista',
            description: 'Mangkukan adalah simbol kerukunan. Tradisi ini selalu dilakukan oleh warga Kampung Budaya Piji Wetan.....',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662915710/lumbungdesa/pelatihan/pelatihan-1_xot6hf.png'
          },
          {
            title: 'Pelatihan Menjadi Barista',
            description: 'Mangkukan adalah simbol kerukunan. Tradisi ini selalu dilakukan oleh warga Kampung Budaya Piji Wetan.....',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662915710/lumbungdesa/pelatihan/pelatihan-1_xot6hf.png'
          },
          {
            title: 'Pelatihan Menjadi Barista',
            description: 'Mangkukan adalah simbol kerukunan. Tradisi ini selalu dilakukan oleh warga Kampung Budaya Piji Wetan.....',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662915710/lumbungdesa/pelatihan/pelatihan-1_xot6hf.png'
          },
          {
            title: 'Pelatihan Menjadi Barista',
            description: 'Mangkukan adalah simbol kerukunan. Tradisi ini selalu dilakukan oleh warga Kampung Budaya Piji Wetan.....',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662915710/lumbungdesa/pelatihan/pelatihan-1_xot6hf.png'
          },
          {
            title: 'Pelatihan Menjadi Barista',
            description: 'Mangkukan adalah simbol kerukunan. Tradisi ini selalu dilakukan oleh warga Kampung Budaya Piji Wetan.....',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662915710/lumbungdesa/pelatihan/pelatihan-1_xot6hf.png'
          },
          {
            title: 'Pelatihan Menjadi Barista',
            description: 'Mangkukan adalah simbol kerukunan. Tradisi ini selalu dilakukan oleh warga Kampung Budaya Piji Wetan.....',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662915710/lumbungdesa/pelatihan/pelatihan-1_xot6hf.png'
          },
          {
            title: 'Pelatihan Menjadi Barista',
            description: 'Mangkukan adalah simbol kerukunan. Tradisi ini selalu dilakukan oleh warga Kampung Budaya Piji Wetan.....',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662915710/lumbungdesa/pelatihan/pelatihan-1_xot6hf.png'
          },
          {
            title: 'Pelatihan Menjadi Barista',
            description: 'Mangkukan adalah simbol kerukunan. Tradisi ini selalu dilakukan oleh warga Kampung Budaya Piji Wetan.....',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662915710/lumbungdesa/pelatihan/pelatihan-1_xot6hf.png'
          },
          {
            title: 'Pelatihan Menjadi Barista',
            description: 'Mangkukan adalah simbol kerukunan. Tradisi ini selalu dilakukan oleh warga Kampung Budaya Piji Wetan.....',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662915710/lumbungdesa/pelatihan/pelatihan-1_xot6hf.png'
          },
          {
            title: 'Pelatihan Menjadi Barista',
            description: 'Mangkukan adalah simbol kerukunan. Tradisi ini selalu dilakukan oleh warga Kampung Budaya Piji Wetan.....',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662915710/lumbungdesa/pelatihan/pelatihan-1_xot6hf.png'
          },
          {
            title: 'Pelatihan Menjadi Barista',
            description: 'Mangkukan adalah simbol kerukunan. Tradisi ini selalu dilakukan oleh warga Kampung Budaya Piji Wetan.....',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662915710/lumbungdesa/pelatihan/pelatihan-1_xot6hf.png'
          },
          {
            title: 'Pelatihan Menjadi Barista',
            description: 'Mangkukan adalah simbol kerukunan. Tradisi ini selalu dilakukan oleh warga Kampung Budaya Piji Wetan.....',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662915710/lumbungdesa/pelatihan/pelatihan-1_xot6hf.png'
          },
        ]
    }
  }
}
</script>