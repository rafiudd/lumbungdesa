<template>
  <div class="v-landing-page" :class="{ 'u-overflow-y-hidden': isDialogOpen }">
    <ModuleNavbarLanding />
    <div class="v-landing-page__header" id="header">
      <v-container mt-0 pt-0>
        <div class="v-landing-page__header__content u-color-white u-w-md-full-width u-w-52per">
          <p class="u-fs-24 u-fs-md-16 mb-0 tagar "> #LumbungDesaLumbungNegara </p>
          <h1 class="font-weight-bold u-fs-44"> Membangun Indonesia Dari Desa <br> Dimulai Dari Pemberdayaan Potensi Lokal Desa <br> Secara Maksimal </h1>
          <br>
          <hr>
        </div>
      </v-container>
    </div>
    <div class="v-landing-page__about">
      <v-container mt-0 pt-0>
        <div class="v-landing-page__about__content u-color-white u-w-md-full-width u-w-52per">
          <h1 class="font-weight-bold u-fs-44"> Apa itu LumbungDesa? </h1>
          <p class="mt-4 u-fs-18 u-line-height-30 u-fs-md-16 "> LumbungDesa adalah sebuah platform untuk menjembatani desa ke kancah dunia, dimana semua potensi lokal yang ada, baik produk maupun kebudayaan yang ada di desa bisa di ekspose melalui platform LumbungDesa. Harapanya dengan adanya LumbungDesa permintaan produksi semakin naik dan masyarakat desa bisa mendapat lebih banyak pendapatan. </p>
        </div>
      </v-container>
    </div>
    <div class="v-landing-page__product">
      <v-container mt-0 pt-0>
        <ModuleLihatSemua title="Produk Terbaik Desa" description="LumbungDesa mempromosikan produk desa terbaik dari seluruh desa di Indonesia kepada dunia sehingga bisa dikenal mayarakat luas" href="" />
        <ModuleProductsHome />
        <v-flex mt-10>
          <h3 class="u-fs-24 justify-center text-center">Kerajinan Lidi Khas Banyumas</h3>
          <v-row justify="center" align="center">
            <v-col cols="12" sm="8">
              <p class="v-landing-page__product-description text-center mb-0">Terdapat sebuah kesan mendalam di setiap bagian nya, dengan lengkungan kriwil membuat kerajinan ini menjadi unik dan menarik.</p>
            </v-col>
          </v-row>
          <v-row justify="center" align="center">
            <v-col align="right">
              <span class="v-landing-page__product-label u-fs-12">Mulai Dari</span>
              <p class="text-decoration-line-through">Rp. 6.000</p>
            </v-col>
            <v-col>
              <p class="v-landing-page__product-price u-fs-24">Rp. 4.499</p>
            </v-col>
          </v-row>
          <v-row justify="center" align="center">
            <v-btn color="#F58328" width="300" dark class="px-7 u-letter-spacing-0 u-fs-14 no-uppercase button-all u-radius-2">Beli Sekarang</v-btn>
          </v-row>
          <br>
          <br>
          <br>
          <br>
        </v-flex>
      </v-container>
    </div>
    <div class="v-landing-page__program">
      <v-row class="mr-0 ml-0" justify="center" align="center">
        <div class="v-landing-page__program__content u-w-md-full-width u-w-52per text-center">
          <h1 class="font-weight-bold u-fs-44 u-color-white"> Program 1 Desa 1 Produk </h1>
          <p class="mt-4 u-fs-18 u-line-height-30 u-fs-md-16 u-color-white"> Program satu desa 1 produk adalah sebuah program dimana para penduduk lokal mengembangkan sebuah produk maupun jasa yang akan menjadi produk khas dan kebanggaan wilayah lokal mereka, sehingga memiliki nilai kompetitif baik di pasar nasional maupun global. Dengan program ini Indonesia akan maju dalam bidang ekonomi kreatif. </p>
        </div>
      </v-row>
      <v-row class="mr-0 ml-0" justify="center" align="center">
        <v-btn color="#F58328" width="200" dark class="px-7 u-letter-spacing-0 u-fs-14 no-uppercase button-all u-radius-2">Dukung Program </v-btn>
      </v-row>
    </div>
    <div class="v-landing-page__keterampilan">
      <v-container mt-0 pt-0>
        <ModuleLihatSemua title="Pelatihan Keterampilan" description="LumbungDesa menyediakan berbagai pelatihan keterampilan secara online maupun offline tanpa biaya 100% gratis." href="" />
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
      </v-container>
    </div>
    <br>
    <br>
    <br>
    <br>
    <div class="v-landing-page__desa-international mt-10" id="desa-international">
      <v-container>
        <v-layout align-center wrap class="v-landing-page__desa-international-flex">
          <v-flex xs12 md5>
            <h1 class="font-weight-bold u-fs-44"> Desa Go Internasional </h1>
            <p class="mt-4 u-fs-18 u-line-height-30 u-fs-md-16 "> Melalui program #desagointernational produk-produk terbaik desa akan dibantu untuk bisa ekspor ke luar negeri, sehingga suatu saat nanti produk lokal Indonesia akan menguasai pasar global. </p>
            <a class="v-landing-page__desa-international-href" href="#">Lihat Selengkapnya</a>
          </v-flex>
          <v-flex xs12 md7 class="">
            <img class="v-landing-page__desa-international-img" src="https://res.cloudinary.com/duh8crgew/image/upload/v1662952986/lumbungdesa/images/landing-page/image_9_1_n3wlej.png" alt="content_1" />
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div class="v-landing-page__desa-budaya mt-10" id="desa-budaya">
      <v-container>
        <v-layout align-center wrap>
          <v-flex xs12 md6>
            <img src="https://res.cloudinary.com/duh8crgew/image/upload/v1662954541/lumbungdesa/images/landing-page/image_10_ljodgk.png" alt="content_1" class="u-full-width" />
          </v-flex>
          <v-flex xs12 md6 class="u-pl-md-0 u-pl-120 mt-6 mt-md-0">
            <h1 class="font-weight-bold u-fs-44"> Mempersiapkan Desa Budaya yang Berdaya </h1>
            <p class="mt-4 u-fs-18 u-line-height-30 u-fs-md-16 "> Pemajuan kebudayaan desa merupakan platform bersama membangun desa mandiri melalui peningkatan ketahanan budaya dan kontribusi budaya desa di tengah peradaban dunia. </p>
            <a class="v-landing-page__desa-budaya-href" href="#">Lihat Selengkapnya</a>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div class="v-landing-page__desa">
      <v-container mt-0 pt-0>
        <ModuleLihatSemua title="Desa Budaya" description="Desa Berdaya dengan Budaya yang ada. Jangan sampai budaya desa menghilang, sekarang semua terdokumentasi di LumbungDesa" href="" />
      </v-container>
      <v-layout>
        <img class="v-landing-page__desa-img" src="https://res.cloudinary.com/duh8crgew/image/upload/v1662958693/lumbungdesa/images/landing-page/image_12_hcixbh.png" alt="">
        <v-container class="relative">
          <h1 class="v-landing-page__desa-title">Waraney Buaya Warembungan Mihanasa, Sulawesi Utara</h1>
        </v-container>
      </v-layout>
    </div>
    <div class="v-landing-page__donasi">
      <v-row class="mr-0 ml-0" justify="center" align="center">
        <div class="v-landing-page__donasi__content u-w-md-full-width u-w-52per text-center">
          <h1 class="font-weight-bold u-fs-44"> Untuk Desa Yang Lebih Baik </h1>
          <p class="mt-4 u-fs-18 u-line-height-30 u-fs-md-16"> Kami butuh bantuanmu, setiap rupiah yang kamu berikan sangat berarti untuk kami. Ayo bersama membantu pembangunan masyarakat desa</p>
        </div>
      </v-row>
      <v-container mt-0 pt-0>
        <v-container fluid grid-list-xl>
          <v-layout row wrap>

            <v-flex xs12 sm3 md3 xl3>
              <v-card>
                <v-img src="https://res.cloudinary.com/duh8crgew/image/upload/v1663001331/lumbungdesa/images/landing-page/image_13_uyrrox.png"></v-img>
                <v-card-text> Desa Jatilawang, <br> Banyumas </v-card-text>
                <v-card-title> Dukung Mbok Inem Untuk Mengembangkan Produk Jamu Tradisional </v-card-title>
                <v-container>
                  <v-progress-linear
                    background-color="#DDDDDD"
                    color="#F58328"
                    height="6"
                    rounded
                    value="15"></v-progress-linear>
                  <v-layout align-center wrap>
                    <v-flex>
                      <p class="harga">Rp. 15.000.000</p>
                    </v-flex>
                    <v-flex class="text-right flex-days">
                      <p class="days">10 hari lagi</p>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-flex>

            <v-flex xs12 sm3 md3 xl3>
              <v-card>
                <v-img src="https://res.cloudinary.com/duh8crgew/image/upload/v1663001331/lumbungdesa/images/landing-page/image_13_uyrrox.png"></v-img>
                <v-card-text> Desa Jatilawang, <br> Banyumas </v-card-text>
                <v-card-title> Dukung Mbok Inem Untuk Mengembangkan Produk Jamu Tradisional </v-card-title>
                <v-container>
                  <v-progress-linear
                    background-color="#DDDDDD"
                    color="#F58328"
                    height="6"
                    rounded
                    value="15"></v-progress-linear>
                  <v-layout align-center wrap>
                    <v-flex>
                      <p class="harga">Rp. 15.000.000</p>
                    </v-flex>
                    <v-flex class="text-right flex-days">
                      <p class="days">10 hari lagi</p>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-flex>
            <v-flex xs12 sm3 md3 xl3>
              <v-card>
                <v-img src="https://res.cloudinary.com/duh8crgew/image/upload/v1663001331/lumbungdesa/images/landing-page/image_13_uyrrox.png"></v-img>
                <v-card-text> Desa Jatilawang, <br> Banyumas </v-card-text>
                <v-card-title> Dukung Mbok Inem Untuk Mengembangkan Produk Jamu Tradisional </v-card-title>
                <v-container>
                  <v-progress-linear
                    background-color="#DDDDDD"
                    color="#F58328"
                    height="6"
                    rounded
                    value="15"></v-progress-linear>
                  <v-layout align-center wrap>
                    <v-flex>
                      <p class="harga">Rp. 15.000.000</p>
                    </v-flex>
                    <v-flex class="text-right flex-days">
                      <p class="days">10 hari lagi</p>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-flex>
            <v-flex xs12 sm3 md3 xl3>
              <v-card>
                <v-img src="https://res.cloudinary.com/duh8crgew/image/upload/v1663001331/lumbungdesa/images/landing-page/image_13_uyrrox.png"></v-img>
                <v-card-text> Desa Jatilawang, <br> Banyumas </v-card-text>
                <v-card-title> Dukung Mbok Inem Untuk Mengembangkan Produk Jamu Tradisional </v-card-title>
                <v-container>
                  <v-progress-linear
                    background-color="#DDDDDD"
                    color="#F58328"
                    height="6"
                    rounded
                    value="15"></v-progress-linear>
                  <v-layout align-center wrap>
                    <v-flex>
                      <p class="harga">Rp. 15.000.000</p>
                    </v-flex>
                    <v-flex class="text-right flex-days">
                      <p class="days">10 hari lagi</p>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-flex>
          </v-layout>
          <v-row class="mr-0 ml-0 mt-10" justify="center" align="center">
            <v-btn color="#F58328" width="200" dark class="px-7 u-letter-spacing-0 u-fs-14 no-uppercase button-all u-radius-2">Bantu Sekarang</v-btn>
          </v-row>
        </v-container>
      </v-container>
    </div>
    <ModuleFooter />
  </div>
</template>

<script>
import ModuleNavbarLanding from '@/components/_module/ModuleNavbarLanding'
import ModuleFooter from '@/components/_module/ModuleFooter'
import ModuleLihatSemua from '@/components/_module/ModuleLihatSemua.vue'
import ModuleProductsHome from '@/components/_module/ModuleProductsHome.vue'

export default {
  components: {
    ModuleNavbarLanding,
    ModuleFooter,
    ModuleLihatSemua,
    ModuleProductsHome
  },

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

  methods: {
    startTour() {
      const el = document.getElementById('contact-us')
      el.scrollIntoView({ behavior: 'smooth' })
    },

    contactUs() {
      window.open(
        'https://api.whatsapp.com/send?phone=+6285869279182&text=Assalamualaikum, saya ingin mendaftar Labbaik Virtual Tour',
        '_blank', // <- This is what makes it open in a new window.
      )
    },
  },
}
</script>
