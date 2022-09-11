<template>
  <div class="v-landing-page" :class="{ 'u-overflow-y-hidden': isDialogOpen }">
    <ModuleNavbarLanding />
    <div class="v-landing-page__header" id="header">
      <v-container mt-0 pt-0>
        <div class="v-landing-page__header__content u-color-white u-w-md-full-width u-w-52per">
          <p class="u-fs-24 u-fs-md-16 mb-0 tagar ">
            #LumbungDesaLumbungNegara
          </p>
          <h1 class="font-weight-bold u-fs-44">
            Membangun Indonesia Dari Desa <br> Dimulai Dari Pemberdayaan Potensi Lokal Desa <br> Secara Maksimal
          </h1>
          <br>
          <hr>
        </div>
      </v-container>
    </div>

    <div class="v-landing-page__about">
      <v-container mt-0 pt-0>
        <div class="v-landing-page__about__content u-color-white u-w-md-full-width u-w-52per">
          <h1 class="font-weight-bold u-fs-44">
            Apa itu LumbungDesa?
          </h1>
          <p class="mt-4 u-fs-18 u-line-height-30 u-fs-md-16 ">
            LumbungDesa adalah sebuah platform untuk menjembatani desa ke kancah dunia, dimana semua potensi lokal yang ada, baik produk maupun kebudayaan yang ada di desa bisa di ekspose melalui platform LumbungDesa. Harapanya dengan adanya LumbungDesa permintaan produksi semakin naik dan masyarakat desa bisa mendapat lebih banyak pendapatan.
          </p>
        </div>
      </v-container>
    </div>

    <div class="v-landing-page__product">
      <v-container mt-0 pt-0>
        <ModuleLihatSemua
          title="Produk Terbaik Desa"
          description="LumbungDesa mempromosikan produk desa terbaik dari seluruh desa di Indonesia kepada dunia sehingga bisa dikenal mayarakat luas"
          href=""
        />
        
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

          <v-row justify="center" align="center" >
            <v-btn
              color="#F58328"
              width="300"
              dark
              class="px-7 u-letter-spacing-0 u-fs-14 no-uppercase button-all u-radius-2"
              >Beli Sekarang</v-btn
            >
          </v-row>
          <br><br><br><br>
        </v-flex>
      </v-container>
    </div>

    <div class="v-landing-page__program">
      <v-row class="mr-0 ml-0" justify="center" align="center">
        <div class="v-landing-page__program__content u-w-md-full-width u-w-52per text-center">
          <h1 class="font-weight-bold u-fs-44 u-color-white">
            Program 1 Desa 1 Produk
          </h1>
          <p class="mt-4 u-fs-18 u-line-height-30 u-fs-md-16 u-color-white">
            Program satu desa 1 produk adalah sebuah program dimana para penduduk lokal mengembangkan sebuah produk maupun jasa yang akan menjadi produk khas dan kebanggaan wilayah lokal mereka, sehingga memiliki nilai kompetitif baik di pasar nasional maupun global. Dengan program ini Indonesia akan maju dalam bidang ekonomi kreatif.
          </p>
        </div>
      </v-row>
      <v-row class="mr-0 ml-0" justify="center" align="center" >
        <v-btn
          color="#F58328"
          width="200"
          dark
          class="px-7 u-letter-spacing-0 u-fs-14 no-uppercase button-all u-radius-2"
          >Dukung Program
        </v-btn>
      </v-row>
    </div>

    <div class="v-landing-page__keterampilan">
      <v-container mt-0 pt-0>
        <ModuleLihatSemua
          title="Pelatihan Keterampilan"
          description="LumbungDesa menyediakan berbagai pelatihan keterampilan secara online maupun offline tanpa biaya 100% gratis."
          href=""
        />
      <v-card>
        <v-tabs
          v-model="tab"
          background-color="white"
          color="#BA5300"
          center-active
          dark
        >
          <v-tab class="v-landing-page_keterampilan-tab">Pelatihan Online</v-tab>
          <v-tab>Pelatihan Offline</v-tab>
        </v-tabs>

      </v-card>
       
    <v-tabs-items v-model="tab" class="mt-5">
      <v-tab-item
        v-for="item in items"
        :key="item.tab"
      >
        <v-card flat>
          <v-container>
            <v-row>
              <v-col sm="12" xs="12" md="4" align="left" class="u-no-p">
                <img src="https://res.cloudinary.com/duh8crgew/image/upload/v1662915710/lumbungdesa/pelatihan/pelatihan-1_xot6hf.png" alt="">
              </v-col>
              <v-col sm="12" xs="12" md="6" align="left" class="u-no-p">
                <h5>Pelatihan Membuat Menjadi Barista</h5>
                <p>Pemerintah Desa Jatilawang bekerjasama dengan dinas tenaga kerja membuat sebuah untuk mengadakan workshop "Pelatihan Membuat Barista Kopi Kapal API Indonesia”....</p>
                <a href="">Daftar Sekarang</a>
              </v-col>
              <v-col sm="12" xs="12" md="2" class="u-no-p" align="right">
                <h5>21 September 2019</h5>
                <h4>Desa Jatilawang, <br> Banyumas</h4>
              </v-col>
            </v-row>
          </v-container>
          <v-card-text>{{ item.content }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>


      </v-container>
    </div>

      <v-container class="v-landing-page__desa-international" id="desa-international">
        <v-layout align-center wrap>
          <v-flex xs12 md6>
            <h1 class="font-weight-bold u-fs-44">
              Desa Go Internasional
            </h1>
            <p class="mt-4 u-fs-18 u-line-height-30 u-fs-md-16 ">
              Melalui program #desagointernational produk-produk terbaik desa akan dibantu untuk bisa ekspor ke luar negeri, sehingga suatu saat nanti produk lokal Indonesia akan menguasai pasar global.
            </p>
          </v-flex>
          <v-flex xs12 md6 class="u-pl-md-0 u-pl-120 mt-6 mt-md-0">
            <img src="@/assets/images/content_1.png" alt="content_1" class="u-full-width" />
          </v-flex>
        </v-layout>
      </v-container>
  
    <v-container class="v-landing-page__about-us" id="about-us">
      <v-layout align-center wrap>
        <v-flex xs12 md6>
          <img src="@/assets/images/content_1.png" alt="content_1" class="u-full-width" />
        </v-flex>
        <v-flex xs12 md6 class="u-pl-md-0 u-pl-120 mt-6 mt-md-0">
          <h1 class="font-weight-bold u-fs-44">
              Mempersiapkan Desa Budaya yang Berdaya
            </h1>
            <p class="mt-4 u-fs-18 u-line-height-30 u-fs-md-16 ">
              Pemajuan kebudayaan desa merupakan platform bersama membangun desa mandiri melalui peningkatan ketahanan budaya dan kontribusi budaya desa di tengah peradaban dunia.
            </p>
        </v-flex>
      </v-layout>
    </v-container>

    <div class="v-landing-page__program">
      <v-row class="mr-0 ml-0" justify="center" align="center">
        <div class="v-landing-page__program__content u-w-md-full-width u-w-52per text-center">
          <h1 class="font-weight-bold u-fs-44 u-color-white">
            Pencak Silat, Desa Gerbo, Pasuruan, Jawa Timur
          </h1>
        </div>
      </v-row>
    </div>

    <div class="v-landing-page__keterampilan">
      <v-container mt-0 pt-0>
        <ModuleLihatSemua
          title="Desa Budaya"
          description="Bersama LumbungDesa Desa Berdaya dengan Budaya yang ada. Jangan sampai budaya desa menghilang tanpa jejak. Sekarang semua terdokumentasi di LumbungDesa"
          href=""
        />
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
