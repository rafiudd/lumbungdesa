<template>
  <v-container mt-0 pt-0>
    <v-container fluid grid-list-xl>
      <v-layout row wrap>
        <v-flex xs12 sm3 md3 xl3 v-for="data in donasi" :key="data.title">
          <v-card>
            <v-img src="https://res.cloudinary.com/duh8crgew/image/upload/v1663001331/lumbungdesa/images/landing-page/image_13_uyrrox.png"></v-img>
            <v-card-text> {{data.village}} <br> {{data.districts}} </v-card-text>
            <v-card-title> {{data.title}} </v-card-title>
            <v-container>
              <v-progress-linear background-color="#DDDDDD" color="#F58328" height="6" rounded v-model="data.progress" value="data.progress" v-bind="data.progress"></v-progress-linear>
              <v-layout align-center wrap>
                <v-flex>
                  <p class="harga">{{data.donation}}</p>
                </v-flex>
                <v-flex class="text-right flex-days">
                  <p class="days">{{data.date}}</p>
                </v-flex>
              </v-layout>
            </v-container>
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
        donasi: [],
        donasiAll: [
          {
            title: 'Pelatihan Menjadi Barista',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662915710/lumbungdesa/pelatihan/pelatihan-1_xot6hf.png'
          },
          {
            title: 'Pelatihan Menjadi Barista',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662915710/lumbungdesa/pelatihan/pelatihan-1_xot6hf.png'
          },
          {
            title: 'Pelatihan Menjadi Barista',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662915710/lumbungdesa/pelatihan/pelatihan-1_xot6hf.png'
          },
          {
            title: 'Pelatihan Menjadi Barista',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662915710/lumbungdesa/pelatihan/pelatihan-1_xot6hf.png'
          },
          {
            title: 'Pelatihan Menjadi Barista',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662915710/lumbungdesa/pelatihan/pelatihan-1_xot6hf.png'
          },
          {
            title: 'Pelatihan Menjadi Barista',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662915710/lumbungdesa/pelatihan/pelatihan-1_xot6hf.png'
          },
          {
            title: 'Pelatihan Menjadi Barista',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662915710/lumbungdesa/pelatihan/pelatihan-1_xot6hf.png'
          },
          {
            title: 'Pelatihan Menjadi Barista',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662915710/lumbungdesa/pelatihan/pelatihan-1_xot6hf.png'
          },
{
            title: 'Pelatihan Menjadi Barista',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662915710/lumbungdesa/pelatihan/pelatihan-1_xot6hf.png'
          },
          {
            title: 'Pelatihan Menjadi Barista',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662915710/lumbungdesa/pelatihan/pelatihan-1_xot6hf.png'
          },
          {
            title: 'Pelatihan Menjadi Barista',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662915710/lumbungdesa/pelatihan/pelatihan-1_xot6hf.png'
          },
          {
            title: 'Pelatihan Menjadi Barista',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662915710/lumbungdesa/pelatihan/pelatihan-1_xot6hf.png'
          },
{
            title: 'Pelatihan Menjadi Barista',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662915710/lumbungdesa/pelatihan/pelatihan-1_xot6hf.png'
          },
          {
            title: 'Pelatihan Menjadi Barista',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662915710/lumbungdesa/pelatihan/pelatihan-1_xot6hf.png'
          },
          {
            title: 'Pelatihan Menjadi Barista',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662915710/lumbungdesa/pelatihan/pelatihan-1_xot6hf.png'
          },
          {
            title: 'Pelatihan Menjadi Barista',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662915710/lumbungdesa/pelatihan/pelatihan-1_xot6hf.png'
          },
        ],
        donasiHome: [
          {
            title: 'Pelatihan Menjadi Barista',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662915710/lumbungdesa/pelatihan/pelatihan-1_xot6hf.png'
          },
          {
            title: 'Pelatihan Menjadi Barista',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662915710/lumbungdesa/pelatihan/pelatihan-1_xot6hf.png'
          },
          {
            title: 'Pelatihan Menjadi Barista',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662915710/lumbungdesa/pelatihan/pelatihan-1_xot6hf.png'
          },
          {
            title: 'Pelatihan Menjadi Barista',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662915710/lumbungdesa/pelatihan/pelatihan-1_xot6hf.png'
          },
        ],
        isDialogOpen: false,
    }
  },
  computed: {
    currentRouteName() {
        return this.$route.name;
    }
  },
  mounted() {
    if(this.currentRouteName === 'landingPage') {
      this.donasi = this.donasiHome
    } else {
      this.donasi = this.donasiAll
    }
  },
}
</script>