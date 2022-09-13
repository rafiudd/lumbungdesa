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
            <v-row v-for="data in keterampilan" :key="data.title" class="mt-5">
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
        keterampilan: [
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
}
</script>