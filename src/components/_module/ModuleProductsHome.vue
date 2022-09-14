<template>
  <v-container class="container-products" fluid grid-list-xl>
    <v-layout row wrap>
      <v-flex xs6 sm3 md3 xl3 v-for="item in products" :key="item.product_name">
        <v-card>
          <v-img :src="item.img_url"></v-img>
          <v-row justify="center" align="center" class="mr-0 ml-0" :class="{ 'display-none': currentRouteName == 'landingPage' }">
            <v-col align="left" class="pb-0">
              <span class="v-landing-page__product-label u-fs-12">Mulai Dari</span>
              <p class="text-decoration-line-through">{{item.price}}</p>
            </v-col>
            <v-col align="left" class="pb-0">
              <p class="v-landing-page__product-price u-fs-20">{{item.discount_price}}</p>
            </v-col>
          </v-row>
          <v-row justify="left" align="left" :class="{ 'display-none': currentRouteName == 'landingPage' }">
            <v-col align="left" class="mt-0 pt-0 ml-3">
              <h3>{{item.product_name}}</h3>
            </v-col>
          </v-row>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    data() {
    return {
        products: [],
        productsAll: [
          {
            product_name: 'Piring Lidi Unik Banyumas',
            discount_price: 'Rp. 4.499',
            price: 'Rp. 6.000',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662881612/lumbungdesa/products/1618554350811_1_amqflu.png'
          },
          {
            product_name: 'Mangkok Ikal Banyumas',
            discount_price: 'Rp. 11.000',
            price: 'Rp. 14.999',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663141464/lumbungdesa/products/produk-2_bujrve.png'
          },
          {
            product_name: 'Mangkok Meliuk Panjang',
            discount_price: 'Rp. 19.500',
            price: 'Rp. 26.000',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663141463/lumbungdesa/products/produk-3_a1x5vh.png'
          },
          {
            product_name: 'Mangko Mini Cantik',
            discount_price: 'Rp. 4.199',
            price: 'Rp. 5.000',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663141464/lumbungdesa/products/produk-4_pmuor5.png'
          },
          {
            product_name: 'Piring Lidi Unik Banyumas',
            discount_price: 'Rp. 4.499',
            price: 'Rp. 6.000',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663141465/lumbungdesa/products/produk-5_xvzcpo.png'
          },
          {
            product_name: 'Mangkok Ikal Banyumas',
            discount_price: 'Rp. 11.000',
            price: 'Rp. 14.999',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663141467/lumbungdesa/products/produk-6_une0r9.png'
          },
          {
            product_name: 'Mangkok Meliuk Panjang',
            discount_price: 'Rp. 19.500',
            price: 'Rp. 26.000',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663141466/lumbungdesa/products/produk-7_tfapfi.png'
          },
          {
            product_name: 'Mangko Mini Cantik',
            discount_price: 'Rp. 4.199',
            price: 'Rp. 5.000',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663141465/lumbungdesa/products/produk-8_rubtqh.png'
          },
          {
            product_name: 'Mangko Mini Cantik',
            discount_price: 'Rp. 4.199',
            price: 'Rp. 5.000',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663144062/lumbungdesa/products/p-9_e3atsh.png'
          },
          {
            product_name: 'Piring Lidi Unik Banyumas',
            discount_price: 'Rp. 4.499',
            price: 'Rp. 6.000',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663144065/lumbungdesa/products/p-10_mqxjpj.png'
          },
          {
            product_name: 'Mangkok Ikal Banyumas',
            discount_price: 'Rp. 11.000',
            price: 'Rp. 14.999',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663144063/lumbungdesa/products/p-11_y17nyg.png'
          },
          {
            product_name: 'Mangkok Meliuk Panjang',
            discount_price: 'Rp. 19.500',
            price: 'Rp. 26.000',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663144062/lumbungdesa/products/p-12_lmfo7t.png'
          },
          {
            product_name: 'Mangko Mini Cantik',
            discount_price: 'Rp. 4.199',
            price: 'Rp. 5.000',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663144062/lumbungdesa/products/p-13_wwteqv.png'
          },
          {
            product_name: 'Mangkok Ikal Banyumas',
            discount_price: 'Rp. 11.000',
            price: 'Rp. 14.999',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663144062/lumbungdesa/products/p-14_niptlq.png'
          },
          {
            product_name: 'Mangkok Meliuk Panjang',
            discount_price: 'Rp. 19.500',
            price: 'Rp. 26.000',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663144062/lumbungdesa/products/p-15_q1lw5v.png'
          },
          {
            product_name: 'Mangko Mini Cantik',
            discount_price: 'Rp. 4.199',
            price: 'Rp. 5.000',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663141465/lumbungdesa/products/produk-8_rubtqh.png'
          },
        ],
      productsHome: [
          {
            product_name: 'Piring Lidi Unik Banyumas',
            discount_price: 'Rp. 4.499',
            price: 'Rp. 6.000',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662881612/lumbungdesa/products/1618554350811_1_amqflu.png'
          },
          {
            product_name: 'Mangkok Ikal Banyumas',
            discount_price: 'Rp. 11.000',
            price: 'Rp. 14.999',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663141464/lumbungdesa/products/produk-2_bujrve.png'
          },
          {
            product_name: 'Mangkok Meliuk Panjang',
            discount_price: 'Rp. 19.500',
            price: 'Rp. 26.000',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663141463/lumbungdesa/products/produk-3_a1x5vh.png'
          },
          {
            product_name: 'Mangko Mini Cantik',
            discount_price: 'Rp. 4.199',
            price: 'Rp. 5.000',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1663141464/lumbungdesa/products/produk-4_pmuor5.png'
          },
      ]
    }
  },
  props: [
    'page'
  ],
  computed: {
    currentRouteName() {
        return this.$route.name;
    }
  },
  mounted() {
    if(this.currentRouteName === 'landingPage') {
      this.products = this.productsHome
    } else {
      this.products = this.productsAll
    }
  },
}
</script>
