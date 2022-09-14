<template>
  <v-container mt-0 pt-0>
    <v-container fluid grid-list-xl>
      <v-layout row wrap>
        <v-flex xs12 sm3 md3 xl3 v-for="data in donasi" :key="data.title">
          <v-card>
            <v-img :src="data.img_url"></v-img>
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
            title: 'Dukung Mbok Inem Untuk Mengembangkan Produk Jamu Tradisional',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146435/lumbungdesa/donasi/d-1_pdug3d.png'
          },
          {
            title: 'Dukung Mbok Inem Untuk Mengembangkan Produk Jamu Tradisional',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146171/lumbungdesa/donasi/d-2_suqfmf.png'
          },
          {
            title: 'Dukung Mbok Inem Untuk Mengembangkan Produk Jamu Tradisional',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146170/lumbungdesa/donasi/d-3_rae0vf.png'
          },
          {
            title: 'Dukung Mbok Inem Untuk Mengembangkan Produk Jamu Tradisional',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146171/lumbungdesa/donasi/d-4_sqgj6t.png'
          },
          {
            title: 'Dukung Mbok Inem Untuk Mengembangkan Produk Jamu Tradisional',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146170/lumbungdesa/donasi/d-5_ggoejj.png'
          },
          {
            title: 'Dukung Mbok Inem Untuk Mengembangkan Produk Jamu Tradisional',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146172/lumbungdesa/donasi/d-6_mynq1l.png'
          },
          {
            title: 'Dukung Mbok Inem Untuk Mengembangkan Produk Jamu Tradisional',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146170/lumbungdesa/donasi/d-7_nceccc.png'
          },
          {
            title: 'Dukung Mbok Inem Untuk Mengembangkan Produk Jamu Tradisional',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146169/lumbungdesa/donasi/d-8_qdxb2d.png'
          },
          {
            title: 'Dukung Mbok Inem Untuk Mengembangkan Produk Jamu Tradisional',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146169/lumbungdesa/donasi/d-9_fkegdm.png'
          },
          {
            title: 'Dukung Mbok Inem Untuk Mengembangkan Produk Jamu Tradisional',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146169/lumbungdesa/donasi/d-10_yj859p.png'
          },
          {
            title: 'Dukung Mbok Inem Untuk Mengembangkan Produk Jamu Tradisional',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146168/lumbungdesa/donasi/d-11_kltfok.png'
          },
          {
            title: 'Dukung Mbok Inem Untuk Mengembangkan Produk Jamu Tradisional',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146167/lumbungdesa/donasi/d-12_qivz9n.png'
          },
          {
            title: 'Dukung Mbok Inem Untuk Mengembangkan Produk Jamu Tradisional',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146168/lumbungdesa/donasi/d-13_ft0uo1.png'
          },
          {
            title: 'Dukung Mbok Inem Untuk Mengembangkan Produk Jamu Tradisional',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146168/lumbungdesa/donasi/d-14_az6fmt.png'
          },
          {
            title: 'Dukung Mbok Inem Untuk Mengembangkan Produk Jamu Tradisional',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146168/lumbungdesa/donasi/d-15_kjbcvy.png'
          },
          {
            title: 'Dukung Mbok Inem Untuk Mengembangkan Produk Jamu Tradisional',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '10 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146167/lumbungdesa/donasi/d-16_ier0fd.png'
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