<template>
  <v-container mt-0 pt-0>
    <v-container fluid grid-list-xl>
      <v-layout row wrap>
        <v-flex xs12 sm3 md3 xl3 v-for="data in donasi" :key="data.title">
          <v-card @click="goHref(data.title)">
            <v-img :src="data.img_url"></v-img>
            <v-card-text> {{data.village}} <br> {{data.districts}} </v-card-text>
            <v-card-title class="mr-0" style="word-wrap: break-word; padding-right: 10px !important;"> {{data.title}}  </v-card-title>
            <v-container>
              <v-progress-linear background-color="#DDDDDD" color="#F58328" height="6" rounded v-model="data.progress" value="data.progress"></v-progress-linear>
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
        <v-btn target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send/?phone=%2B6285741892603&text=Halo%20saya%20ingin%20melakukan donasi&type=phone_number&app_absent=0" color="#F58328" width="200" dark class="px-7 u-letter-spacing-0 u-fs-14 no-uppercase button-all u-radius-2">Bantu Sekarang</v-btn>
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
            progress: "95",
            date: '1 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146435/lumbungdesa/donasi/d-1_pdug3d.png'
          },
          {
            title: 'Bantu Anak Desa Papua Untuk Belajar Membaca di Sekolah Dasar ',
            donation: 'Rp. 34.900.000',
            progress: "87",
            date: '2 Hari Lagi',
            village: 'Desa Ternate Selatan',
            districts: 'Papua Barat',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146171/lumbungdesa/donasi/d-2_suqfmf.png'
          },
          {
            title: 'Dukung Programs Semua Bisa Sekolah Dengan Donasi Biaya Sekolah',
            donation: 'Rp. 100.000.000',
            progress: "75",
            date: '5 Hari Lagi',
            village: 'DESA ADISARA',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146170/lumbungdesa/donasi/d-3_rae0vf.png'
          },
          {
            title: 'Bantu Lia Kembangkan dan Lestarikan Sate Klatak Yang Sudah Jarang Ditemui',
            donation: 'Rp. 50.000.000',
            progress: "55",
            date: '20 Hari Lagi',
            village: 'DESA PEKUNCEN',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146171/lumbungdesa/donasi/d-4_sqgj6t.png'
          },
          {
            title: 'Dukung Program Pemberdayaan bagi Gelandangan, Pengemis, dan Pemulung',
            donation: 'Rp 35.000.000',
            progress: "55",
            date: '30 Hari Lagi',
            village: 'DESA Margasana',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146170/lumbungdesa/donasi/d-5_ggoejj.png'
          },
          {
            title: 'Dukung Pengrajin Ate di Karangasem Bali agar Bangkit dan Maju',
            donation: 'Rp 42.000.000',
            progress: "85",
            date: '42 Hari Lagi',
            village: 'DESA Tinggarjaya',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146172/lumbungdesa/donasi/d-6_mynq1l.png'
          },
          {
            title: 'Bersama Womanpreneur Community Bantu Pedagang Kecil Perempuan',
            donation: 'Rp 21.000.000',
            progress: "55",
            date: '10 Hari Lagi',
            village: 'DESA Kediri',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146170/lumbungdesa/donasi/d-7_nceccc.png'
          },
          {
            title: 'Pertahankan Budaya dan Kuliner Khas Flores, Bangun Kembali Dapur Tara yang Terbakar',
            donation: 'Rp 94.000.000',
            progress: "45",
            date: '20 Hari Lagi',
            village: 'DESA Pekalongan',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146169/lumbungdesa/donasi/d-8_qdxb2d.png'
          },
          {
            title: 'Wujudkan Harapan Warga Kampung Loang, NTT Miliki Akses Listrik',
            donation: 'Rp 25.000.000',
            progress: "55",
            date: '10 Hari Lagi',
            village: 'DESA Amanra',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146169/lumbungdesa/donasi/d-9_fkegdm.png'
          },
          {
            title: 'Bantu Rumah Belajar Cendrawasih di Papua Barat Punya Bangunan Layak',
            donation: 'Rp 30.000.000',
            progress: "75",
            date: '22 Hari Lagi',
            village: 'DESA Gunung Wtan',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146169/lumbungdesa/donasi/d-10_yj859p.png'
          },
          {
            title: 'Demi Cari Nafkah, Warga Pasenan Sumatera Selatan Nekat Lewati Jembatan Rusak',
            donation: 'Rp 15.000.000',
            progress: "15",
            date: '30 Hari Lagi',
            village: 'DESA Tipar',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146168/lumbungdesa/donasi/d-11_kltfok.png'
          },
          {
            title: 'Wujudkan Pembangunan Kamar Santri Gratis bagi Teman-Teman Difabel',
            donation: 'Rp 45.000.000',
            progress: "85",
            date: '25 Hari Lagi',
            village: 'DESA Bandung',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146167/lumbungdesa/donasi/d-12_qivz9n.png'
          },
          {
            title: 'Berbagi Nasi Bungkus untuk Duafa, Mari Berkontribusi Untuk Kebaikan',
            donation: 'Rp 27.000.000',
            progress: "37",
            date: '10 Hari Lagi',
            village: 'DESA Kebon Dalem',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146168/lumbungdesa/donasi/d-13_ft0uo1.png'
          },
          {
            title: 'Berbagi Makanan Sehat untuk Lansia Tuna Karya Terdampak Corona',
            donation: 'Rp 717.000.000',
            progress: "17",
            date: '10 Hari Lagi',
            village: 'DESA Purwokerto',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146168/lumbungdesa/donasi/d-14_az6fmt.png'
          },
          {
            title: 'Ciptakan Rumah Nyaman dan Pendidikan Buat Anak-Anak Panti Bersinar Jakarta Timur',
            donation: 'Rp 47.000.000',
            progress: "57",
            date: '18 Hari Lagi',
            village: 'DESA Purbalingga',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146168/lumbungdesa/donasi/d-15_kjbcvy.png'
          },
          {
            title: 'Bantuan Kemanusiaan untuk Masyarakat Terdampak Gempa Bumi di Kepulauan Mentawai',
            donation: 'Rp 35.000.000',
            progress: "55",
            date: '20 Hari Lagi',
            village: 'DESA Batturaden',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146167/lumbungdesa/donasi/d-16_ier0fd.png'
          },
        ],
        donasiHome: [
          {
            title: 'Dukung Mbok Inem Untuk Mengembangkan Produk Jamu Tradisional',
            donation: 'Rp 15.000.000',
            progress: "95",
            date: '1 Hari Lagi',
            village: 'DESA GENTAWANGI',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146435/lumbungdesa/donasi/d-1_pdug3d.png'
          },
          {
            title: 'Bantu Anak Desa Papua Untuk Belajar Membaca di Sekolah Dasar ',
            donation: 'Rp. 34.900.000',
            progress: "87",
            date: '2 Hari Lagi',
            village: 'Desa Ternate Selatan',
            districts: 'Papua Barat',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146171/lumbungdesa/donasi/d-2_suqfmf.png'
          },
          {
            title: 'Dukung Programs Semua Bisa Sekolah Dengan Donasi Biaya Sekolah',
            donation: 'Rp. 100.000.000',
            progress: "75",
            date: '5 Hari Lagi',
            village: 'DESA ADISARA',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146170/lumbungdesa/donasi/d-3_rae0vf.png'
          },
          {
            title: 'Bantu Lia Kembangkan dan Lestarikan Sate Klatak Yang Sudah Jarang Ditemui',
            donation: 'Rp. 50.000.000',
            progress: "55",
            date: '20 Hari Lagi',
            village: 'DESA PEKUNCEN',
            districts: 'YOGYAKARTA',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146171/lumbungdesa/donasi/d-4_sqgj6t.png'
          },
        ],
    }
  },
  computed: {
    currentRouteName() {
        return this.$route.name;
    }
  },
  methods: {
    goHref(title) {
      window.open(
        `https://api.whatsapp.com/send/?phone=%2B6285741892603&text=Halo saya ingin donasi ${title} &type=phone_number&app_absent=0`,
        '_blank' // <- This is what makes it open in a new window.
      );
    },
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