<template>
  <v-container mt-0 pt-0>
    <v-container fluid grid-list-xl>
      <v-layout row wrap>
        <v-flex xs12 sm3 md3 xl3 v-for="data in donasi" :key="data.title">
          <v-card>
            <v-img :src="data.img_url"></v-img>
            <v-card-text class="pb-1"> {{data.village}} <br> {{data.districts}} </v-card-text>
            <v-card-title style="word-break: break-word;" class="pb-1 pt-0 pr-0"> {{data.title}} </v-card-title>
            <p class="mr-4 ml-4 pb-3 mt-0 pt-0 u-fs-12 u-color-798291 lh-18">{{data.description}}</p>
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
        donasi: [
          {
            title: 'Kampung Budaya Piji Wetan',
            description: 'Mangkukan adalah simbol kerukunan. Tradisi ini selalu dilakukan oleh warga Kampung Budaya Piji Wetan.....',
            village: 'LAU',
            districts: 'KUDUS, JAWA TENGAH',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146659/lumbungdesa/desa-budaya/db-1_ezla6t.png'
          },
          {
            title: 'Cambai Creative Community',
            description: 'Cambai, menurut cerita tokoh masyarakat setempat berasal dari istilah “Cam” yang berarti proses pengecekan timah.....',
            village: 'CAMBAI',
            districts: 'KEPULAUAN BANGKA BELITUNG',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146660/lumbungdesa/desa-budaya/db-2_shdnb5.png'
          },
          {
            title: 'Sekaa Truna Murdha Citta',
            description: 'Pemuda merupakan garda terdepan dalam melestarikan dan mengembangkan budaya. Maka dari itu fokus kami....',
            village: 'DEMULIH',
            districts: 'BANGLI, BALI',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146660/lumbungdesa/desa-budaya/db-3_dkm9on.png'
          },
          {
            title: 'YoMungSiji Studio',
            description: 'Berkembangnya budaya wayang kulit tidak lepas dari nenek moyang dalang yang telah tersohor di dunia pedalangan.....',
            village: 'KEPUHSARI',
            districts: 'WONOGIRI, JAWA TENGAH',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146657/lumbungdesa/desa-budaya/db-4_df5oxi.png'
          },
          {
            title: 'Sanggar Rejo',
            description: 'Kesenian Barongan merupakan kesenian khas Jawa Tengah. Di Kabupaten Kendal kesenian barongan sangatlah populer......',
            village: 'PAGERUYUNG',
            districts: 'KENDAL, JAWA TENGAH',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146656/lumbungdesa/desa-budaya/db-5_shbfmb.png'
          },
          {
            title: 'Warga Laras',
            description: 'Wayang Kedu merupakan wayang yang tumbuh dan berkembang di wilayah Kedu, Temanggung.',
            village: 'SANGGRAHAN',
            districts: 'TEMANGGUNG, JAWA TENGAH',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146656/lumbungdesa/desa-budaya/db-6_gkjflg.png'
          },
          {
            title: 'Etnis Mountain Signature',
            description: 'Di ketinggian 1.600 mdpl, Didalam pegunungan Leauser tersembunyi dalam lembah, ragam budaya terbentuk di...',
            village: 'PAYA DEDEP',
            districts: 'ACEH TENGAH, ACEH',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146658/lumbungdesa/desa-budaya/db-7_namniz.png'
          },
          {
            title: 'Langit Biru Karimata',
            description: 'Kepulauan Karimata mempunyai sejarah panjang. Pulau terluar dari kepulauan Borneo ini menawarkan alam yang..',
            village: 'PADANG',
            districts: 'KAYONG UTARA, KALIMANTAN BARAT',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146656/lumbungdesa/desa-budaya/db-8_ajiutg.png'
          },
          {
            title: 'Komunitas Umah Kito',
            description: 'Kemantan Tinggi merupakan salah satu desa kecil yang ada di Kecamatan Air Hangat Timur, Kabupaten Kerinci......',
            village: 'KEMANTAN TINGGI',
            districts: 'KERINCI, JAMBI',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146658/lumbungdesa/desa-budaya/db-9_yrgpmh.png'
          },
          {
            title: 'Kelompok Tari Fampompar',
            description: 'Dari Timur Perbatasan NKRI kami memperkenalkan budaya desa kami tercinta Desa Sangliat Dol. Desa ini......',
            village: 'SANGLIAT DOL',
            districts: 'MALUKU TENGGARA BARAT, MALUKU',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146655/lumbungdesa/desa-budaya/db-10_s3pkps.png'
          },
          {
            title: 'Planker',
            description: 'Desa Gerbo merupakan desa terluas di Kabupaten Pasuruan. Desa kami terletak pada ketinggian kurang lebih 600 mdpl....',
            village: 'GERBO',
            districts: 'PASURUAN, JAWA TIMUR',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146655/lumbungdesa/desa-budaya/db-11_sudfxj.png'
          },
          {
            title: 'Manunggaling Kawula Gusti',
            description: 'Desa Kemiri Barat adalah salah satu desa di Kecamatan Subah, Kabupaten Batang, Provinsi Jawa Tengah yang terletak.....',
            village: 'KEMIRI BARAT',
            districts: 'BATANG, JAWA TENGAH',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663146654/lumbungdesa/desa-budaya/db-12_qzjtkp.png'
          },
        ]
    }
  }
}
</script>