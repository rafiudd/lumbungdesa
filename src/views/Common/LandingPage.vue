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

export default {
  components: {
    ModuleNavbarLanding,
    ModuleFooter,
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
