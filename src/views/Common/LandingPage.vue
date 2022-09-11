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
              >Dukung Program</v-btn
            >
          </v-row>
    </div>
  
    <v-container class="v-landing-page__about-us" id="about-us">
      <v-layout align-center wrap>
        <v-flex xs12 md6>
          <img src="@/assets/images/content_1.png" alt="content_1" class="u-full-width" />
        </v-flex>
        <v-flex xs12 md6 class="u-pl-md-0 u-pl-120 mt-6 mt-md-0">
          <h2 class="u-fs-34 u-font-nobile">
            Kenapa memilih Labbaik Virtual Tour ?
          </h2>
          <p class="mt-4 u-fs-18 u-line-height-30 u-fs-md-16 ">
            Labbaik Virtuar Tour hadir membawa solusi untuk masyarakat yang ingin mengunjungi Tempat-tempat bersejarah
            agama Islam tetapi terhalang oleh waktu dan keterbatasan lainnya. Dengan memanfaatkan kecanggihan teknologi
            sekarang ini anda hanya duduk diam di rumah dan dapat merasakan pengalaman ke luar negeri.
          </p>
        </v-flex>
      </v-layout>
    </v-container>

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
        listStep: [
        {
          id: 0,
          title: 'Daftarkan dirimu melalui Kontak Kami di bawah',
        },
        {
          id: 1,
          title: 'Tentukan Tour Kota mana yang kamu inginkan',
        },
        {
          id: 2,
          title: 'Lengkapi data dirimu',
        },
        {
          id: 3,
          title: 'Lakukan pembayaran sesuai tour yang kamu pilih',
        },
        {
          id: 4,
          title: 'Admin mengkonfirmasi pembayaran kamu',
        },
        {
          id: 5,
          title: 'Kamu akan diberikan link zoom untuk tour kota sesuai pilihanmu',
        },
        {
          id: 6,
          title: 'Selamat menikmati Labbaik Virtual Tour',
        },
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
