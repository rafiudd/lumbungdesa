<template>
  <div class="v-landing-page" :class="{ 'u-overflow-y-hidden': isDialogOpen }">
    <ModuleNavbarLanding />
    <div class="v-landing-page__header" id="header">
      <v-container mt-0 pt-0>
        <div class="v-landing-page__header__content u-color-white u-w-md-full-width u-w-52per">
          <p data-aos="fade-right" data-aos-duration="500" class="u-fs-24 u-fs-md-16 mb-0 tagar "> #LumbungDesaLumbungNegara </p>
          <h1 data-aos="fade-right" data-aos-duration="1000" class="font-weight-bold u-fs-44"> Membangun Indonesia Dari Desa <br> Dimulai Dari Pemberdayaan Potensi Lokal Desa <br> Secara Maksimal </h1>
          <br>
          <hr data-aos="fade-right" data-aos-duration="1200">
        </div>
      </v-container>
    </div>
    <div class="v-landing-page__about">
      <v-container mt-0 pt-0>
        <div data-aos="fade-up-right" data-aos-duration="500" class="v-landing-page__about__content u-color-white u-w-md-full-width u-w-52per">
          <h1 data-aos="fade-right" data-aos-duration="1000" class="font-weight-bold u-fs-44"> Apa itu LumbungDesa? </h1>
          <p data-aos="fade-right" data-aos-duration="1000" class="mt-4 u-fs-18 u-line-height-30 u-fs-md-16 "> LumbungDesa adalah sebuah platform untuk menjembatani desa ke kancah dunia, dimana semua potensi lokal yang ada, baik produk maupun kebudayaan yang ada di desa bisa di ekspose melalui platform LumbungDesa. Harapanya dengan adanya LumbungDesa permintaan produksi semakin naik dan masyarakat desa bisa mendapat lebih banyak pendapatan. </p>
        </div>
      </v-container>
    </div>
    <div class="v-landing-page__product">
      <v-container mt-0 pt-0>
        <ModuleLihatSemua title="Produk Terbaik Desa" description="LumbungDesa mempromosikan produk desa terbaik dari seluruh desa di Indonesia kepada dunia sehingga bisa dikenal mayarakat luas" href="/produk" page="home" />
        <ModuleProductsHome page="home" />
        <v-flex mt-10>
          <h3 data-aos="zoom-in-right" data-aos-duration="400" class="u-fs-24 justify-center text-center">Kerajinan Lidi Khas Banyumas</h3>
          <v-row justify="center" align="center">
            <v-col cols="12" sm="8">
              <p data-aos="zoom-in-left" data-aos-duration="500" class="v-landing-page__product-description text-center mb-0">Terdapat sebuah kesan mendalam di setiap bagian nya, dengan lengkungan kriwil membuat kerajinan ini menjadi unik dan menarik.</p>
            </v-col>
          </v-row>
          <v-row justify="center" align="center">
            <v-col align="right">
              <span data-aos="zoom-in-right" class="v-landing-page__product-label u-fs-12">Mulai Dari</span>
              <p data-aos="zoom-in-right" class="text-decoration-line-through">Rp. 6.000</p>
            </v-col>
            <v-col>
              <p data-aos="zoom-in-left" class="v-landing-page__product-price u-fs-24">Rp. 4.499</p>
            </v-col>
          </v-row>
          <v-row justify="center" align="center">
            <v-btn data-aos="zoom-in" target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send/?phone=%2B6285741892603&text=Halo%20saya%20tertarik dengan produk kerajinan lidi&type=phone_number&app_absent=0" color="#F58328" width="300" dark class="px-7 u-letter-spacing-0 u-fs-14 no-uppercase button-all u-radius-2">Beli Sekarang</v-btn>
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
          <h1 data-aos="fade-right" data-aos-duration="1000" class="font-weight-bold u-fs-44 u-color-white"> Program 1 Desa 1 Produk </h1>
          <p data-aos="fade-left" data-aos-duration="1000" class="mt-4 u-fs-18 u-line-height-30 u-fs-md-16 u-color-white"> Program satu desa 1 produk adalah sebuah program dimana para penduduk lokal mengembangkan sebuah produk maupun jasa yang akan menjadi produk khas dan kebanggaan wilayah lokal mereka, sehingga memiliki nilai kompetitif baik di pasar nasional maupun global. Dengan program ini Indonesia akan maju dalam bidang ekonomi kreatif. </p>
        </div>
      </v-row>
      <v-row class="mr-0 ml-0" justify="center" align="center">
        <v-btn data-aos="fade-right" data-aos-duration="1000" @click="dukungProgram()" color="#F58328" width="200" dark class="px-7 u-letter-spacing-0 u-fs-14 no-uppercase button-all u-radius-2">Dukung Program </v-btn>
      </v-row>
    </div>
    <div class="v-landing-page__keterampilan">
      <v-container mt-0 pt-0>
        <ModuleLihatSemua title="Pelatihan Keterampilan" description="LumbungDesa menyediakan berbagai pelatihan keterampilan secara online maupun offline tanpa biaya 100% gratis." href="/pelatihan" page="home" />
        <ModulePelatihan page="home" />
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
            <h1 data-aos="fade-right" data-aos-duration="1500" class="font-weight-bold u-fs-44"> Desa Go Internasional </h1>
            <p data-aos="fade-right" data-aos-duration="1500" class="mt-4 u-fs-18 u-line-height-30 u-fs-md-16 "> Melalui program #desagointernational produk-produk terbaik desa akan dibantu untuk bisa ekspor ke luar negeri, sehingga suatu saat nanti produk lokal Indonesia akan menguasai pasar global. </p>
            <a data-aos="fade-right" data-aos-duration="1500" class="v-landing-page__desa-international-href" target="_blank" rel="noopener noreferrer" href="https://kemendesa.go.id/berita/view/detil/2370/go-internasional-produk-unggulan-bumdes-dipamerkan-di-malaysia">Lihat Selengkapnya</a>
          </v-flex>
          <v-flex xs12 md7 class="">
            <img data-aos="fade-left" data-aos-duration="1500" class="v-landing-page__desa-international-img" src="https://res.cloudinary.com/duh8crgew/image/upload/v1662952986/lumbungdesa/images/landing-page/image_9_1_n3wlej.png" alt="content_1" />
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div class="v-landing-page__desa-budaya mt-10" id="desa-budaya">
      <v-container>
        <v-layout align-center wrap>
          <v-flex xs12 md6>
            <img data-aos="fade-right" data-aos-duration="1500" src="https://res.cloudinary.com/duh8crgew/image/upload/v1662954541/lumbungdesa/images/landing-page/image_10_ljodgk.png" alt="content_1" class="u-full-width" />
          </v-flex>
          <v-flex xs12 md6 class="u-pl-md-0 u-pl-120 mt-6 mt-md-0">
            <h1 data-aos="fade-left" data-aos-duration="1200" class="font-weight-bold u-fs-44"> Mempersiapkan Desa Budaya yang Berdaya </h1>
            <p data-aos="fade-left" data-aos-duration="1700" class="mt-4 u-fs-18 u-line-height-30 u-fs-md-16 "> Pemajuan kebudayaan desa merupakan platform bersama membangun desa mandiri melalui peningkatan ketahanan budaya dan kontribusi budaya desa di tengah peradaban dunia. </p>
            <a data-aos="fade-left" data-aos-duration="1500" class="v-landing-page__desa-budaya-href"  target="_blank" rel="noopener noreferrer" href="https://www.kemdikbud.go.id/main/blog/2021/01/temu-kenali-potensi-budaya-untuk-desa-pemajuan-kebudayaan">Lihat Selengkapnya</a>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div class="v-landing-page__desa">
      <v-container mt-0 pt-0>
        <ModuleLihatSemua title="Desa Budaya" description="Desa Berdaya dengan Budaya yang ada. Jangan sampai budaya desa menghilang, sekarang semua terdokumentasi di LumbungDesa" href="/desa-budaya" page="home" />
      </v-container>
      <ModuleBackgroundDesaBudaya />
    </div>
    <div class="v-landing-page__donasi">
      <v-row class="mr-0 ml-0" justify="center" align="center">
        <div class="v-landing-page__donasi__content u-w-md-full-width u-w-52per text-center">
          <div class="mt-850" style="margin-top: 850px"></div>
          <h1 data-aos="fade-left" data-aos-duration="1200" class="font-weight-bold u-fs-44"> Untuk Desa Yang Lebih Baik </h1>
          <p  data-aos="fade-right" data-aos-duration="1200" class="mt-4 u-fs-18 u-line-height-30 u-fs-md-16"> Kami butuh bantuanmu, setiap rupiah yang kamu berikan sangat berarti untuk kami. Ayo bersama membantu pembangunan masyarakat desa</p>
        </div>
      </v-row>
      <ModuleDonasi page="home" />
    </div>
    <ModuleCSR />
    <ModuleFooter />
  </div>
</template>

<script>
import ModuleNavbarLanding from '@/components/_module/ModuleNavbarLanding'
import ModuleFooter from '@/components/_module/ModuleFooter'
import ModuleLihatSemua from '@/components/_module/ModuleLihatSemua.vue'
import ModuleProductsHome from '@/components/_module/ModuleProductsHome.vue'
import ModulePelatihan from '@/components/_module/ModulePelatihan.vue'
import ModuleBackgroundDesaBudaya from '@/components/_module/ModuleBackgroundDesaBudaya.vue'
import ModuleDonasi from '@/components/_module/ModuleDonasi.vue'
import ModuleCSR from '@/components/_module/ModuleCSR.vue'

export default {
  components: {
    ModuleNavbarLanding,
    ModuleFooter,
    ModuleLihatSemua,
    ModuleProductsHome,
    ModulePelatihan,
    ModuleBackgroundDesaBudaya,
    ModuleDonasi,
    ModuleCSR
  },
  data() {
    return {
      isDialogOpen: false
    }
  },
  methods: {
    dukungProgram() {
      this._toast = this.$snotify.success('Berhasil Mendukung Program');
    }
  }
}
</script>
