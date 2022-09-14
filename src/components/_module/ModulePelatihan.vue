<template>
  <div>
    <v-card class="v-landing-page__keterampilan-card mt-5" flat>
      <v-tabs v-model="tab" background-color="white" color="#BA5300" center-active dark>
        <v-tab class="v-landing-page_keterampilan-tab no-uppercase">Online</v-tab>
        <v-tab class="no-uppercase">Offline</v-tab>
      </v-tabs>
    </v-card>
    <v-tabs-items v-model="tab" class="">
      <v-tab-item v-for="item in items" :key="item.tab">
        <v-card flat>
          <v-container class="v-landing-page_keterampilan-cardlist">
            <v-row v-for="data in keterampilans" :key="data.title" class="mt-5">
              <v-col sm="12" md="4" align="left" class="u-no-p v-landing-page_keterampilan-col">
                <img :src="data.img_url" :alt="data.title">
              </v-col>
              <v-col md="5" align="left" class="u-no-p mt-1 v-landing-page_keterampilan-col">
                <h5>{{ data.title }}</h5>
                <p class="v-landing-page_keterampilan-cardlist-desc">{{data.description}}</p>
                <a href="#">Daftar Sekarang</a>
              </v-col>
              <v-col class="v-landing-page_keterampilan-cardlist-none u-no-p mt-1" md="3" align="right">
                <h5>{{data.date}}</h5>
                <h4>{{data.village}}, <br> {{data.districts}}
                </h4>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
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
        keterampilans: [],
        keterampilanAll: [{
            title: 'Pelatihan Menjadi Barista',
            description: 'Pemerintah Desa Jatilawang bekerjasama dengan dinas tenaga kerja membuat sebuah untuk mengadakan workshop "Pelatihan Membuat Barista Kopi Kapal API Indonesia”....',
            date: '21 September 2022',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662915710/lumbungdesa/pelatihan/pelatihan-1_xot6hf.png'
          },
          {
            title: 'Pelatihan Membuat Gerabah',
            description: 'Gerabah merupakan karya seni terapan yang difungsikan untuk memenuhi kebutuhan masyarakat sehari-hari. Gerabah menghasilkan perkakas rumah tangga atau alat rumah tangga seperti  kendi...',
            date: '29 September 2022',
            village: 'DESA JATILAWANG',
            districts: 'BANYUMAS',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662951436/lumbungdesa/pelatihan/image_30_l7swpk.png'
          },
          {
            title: 'Pelatihan Membuat Kerajinan Lidi Expert',
            description: 'Lidi hanyalah limbah tak berharga tetapi dengan berbekal ilmu keterampilan menganyam, lidi yang tadinya limbah bisa disulap menjadi berbagai macam kerajinan yang bernilai ekonomi dengan daya jual yang tinggi.......',
            date: '18 Oktober 2022',
            village: 'DESA KEDUNGWRINGIN',
            districts: 'BANYUMAS',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662951410/lumbungdesa/pelatihan/1618465115515_1_xuypvd.png'
          },
          {
            title: 'Pelatihan Merajut Pakaian',
            description: 'Female Daily mengadakan workshop "Merajut Pakaian Dan Pelatihan Berjualan" di Desa Pekuncen, Purwoketo. Workshop ini bertujuan untuk melatih ibu ibu agar memi...',
            date: '5 Desember 2022',
            village: 'DESA BANJAR',
            districts: 'NUSA TENGGARA TIMUR',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663131749/lumbungdesa/pelatihan/1618465115515_1_3_ttyduq.png'
          },
          {
            title: 'Pelatihan Membuat Batik Pekalongan',
            description: 'Pemerintah Kabupaten Pekalongan mengadakan pelatihan membuat batik, acara dilaksanakan di balai kabupaten dengan jumlah peserta lebih dari 50 orang. Pelatihan ini diharapkan bisa ....',
            date: '20 Desember 2022',
            village: 'DESA PEKUNCEN',
            districts: 'PEKALONGAN',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663131747/lumbungdesa/pelatihan/1618465115515_1_2_qk6aw2.png'
          },
          {
            title: 'Pelatihan Budidaya Wortel',
            description: 'Permintaan sayur wortel yang semakin naik, membuat pemerintah desa kediri berinisiatif membuat pelatihan budidaya wortel. Dengan adanya pelatihan ini harapanya permintaan pasar yang tinggi bisa terpenuhi.',
            date: '1 Januari 2023',
            village: 'DESA KEDIRI',
            districts: 'JAWA TIMUR',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663131745/lumbungdesa/pelatihan/1618465115515_1_1_yt2m4o.png'
          }
        ],
        keterampilanHome: [
          {
            title: 'Pelatihan Menjadi Barista',
            description: 'Pemerintah Desa Jatilawang bekerjasama dengan dinas tenaga kerja membuat sebuah untuk mengadakan workshop "Pelatihan Membuat Barista Kopi Kapal API Indonesia”....',
            date: '21 September 2022',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662915710/lumbungdesa/pelatihan/pelatihan-1_xot6hf.png'
          },
          {
            title: 'Pelatihan Membuat Gerabah',
            description: 'Gerabah merupakan karya seni terapan yang difungsikan untuk memenuhi kebutuhan masyarakat sehari-hari. Gerabah menghasilkan perkakas rumah tangga atau alat rumah tangga seperti  kendi...',
            date: '29 September 2022',
            village: 'DESA JATILAWANG',
            districts: 'BANYUMAS',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662951436/lumbungdesa/pelatihan/image_30_l7swpk.png'
          },
          {
            title: 'Pelatihan Membuat Kerajinan Lidi Expert',
            description: 'Lidi hanyalah limbah tak berharga tetapi dengan berbekal ilmu keterampilan menganyam, lidi yang tadinya limbah bisa disulap menjadi berbagai macam kerajinan yang bernilai ekonomi dengan daya jual yang tinggi.......',
            date: '18 Oktober 2022',
            village: 'DESA KEDUNGWRINGIN',
            districts: 'BANYUMAS',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662951410/lumbungdesa/pelatihan/1618465115515_1_xuypvd.png'
          }
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
      this.keterampilans = this.keterampilanHome
    } else {
      this.keterampilans = this.keterampilanAll
    }
  },
}
</script>