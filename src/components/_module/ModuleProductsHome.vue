<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <v-flex xs6 sm3 md3 xl3 v-for="item in products" :key="item.product_name">
        <v-card>
          <v-img src="https://res.cloudinary.com/duh8crgew/image/upload/v1662881612/lumbungdesa/products/1618554350811_1_amqflu.png"></v-img>
          <v-row justify="center" align="center" class="mr-0 ml-0" :class="{ 'display-none': currentRouteName == 'landingPage' }">
            <v-col align="left" class="pb-0">
              <span class="v-landing-page__product-label u-fs-12">Mulai Dari</span>
              <p class="text-decoration-line-through">Rp. 6.000</p>
            </v-col>
            <v-col align="left" class="pb-0">
              <p class="v-landing-page__product-price u-fs-24">Rp. 4.499</p>
            </v-col>
          </v-row>
          <v-row justify="left" align="left" :class="{ 'display-none': currentRouteName == 'landingPage' }">
            <v-col align="left" class="mt-0 pt-0 ml-3">
              <h3>Produk Name</h3>
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
            product_name: 'Nama Produk',
            discount_price: 'Rp. 4.499',
            price: 'Rp. 6.000',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662881612/lumbungdesa/products/1618554350811_1_amqflu.png'
          },
          {
            product_name: 'Nama Produk',
            discount_price: 'Rp. 4.499',
            price: 'Rp. 6.000',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662881612/lumbungdesa/products/1618554350811_1_amqflu.png'
          },
          {
            product_name: 'Nama Produk',
            discount_price: 'Rp. 4.499',
            price: 'Rp. 6.000',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662881612/lumbungdesa/products/1618554350811_1_amqflu.png'
          },
          {
            product_name: 'Nama Produk',
            discount_price: 'Rp. 4.499',
            price: 'Rp. 6.000',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662881612/lumbungdesa/products/1618554350811_1_amqflu.png'
          },
          {
            product_name: 'Nama Produk',
            discount_price: 'Rp. 4.499',
            price: 'Rp. 6.000',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662881612/lumbungdesa/products/1618554350811_1_amqflu.png'
          },
          {
            product_name: 'Nama Produk',
            discount_price: 'Rp. 4.499',
            price: 'Rp. 6.000',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662881612/lumbungdesa/products/1618554350811_1_amqflu.png'
          },
          {
            product_name: 'Nama Produk',
            discount_price: 'Rp. 4.499',
            price: 'Rp. 6.000',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662881612/lumbungdesa/products/1618554350811_1_amqflu.png'
          },
          {
            product_name: 'Nama Produk',
            discount_price: 'Rp. 4.499',
            price: 'Rp. 6.000',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662881612/lumbungdesa/products/1618554350811_1_amqflu.png'
          },
          {
            product_name: 'Nama Produk',
            discount_price: 'Rp. 4.499',
            price: 'Rp. 6.000',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662881612/lumbungdesa/products/1618554350811_1_amqflu.png'
          },
          {
            product_name: 'Nama Produk',
            discount_price: 'Rp. 4.499',
            price: 'Rp. 6.000',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662881612/lumbungdesa/products/1618554350811_1_amqflu.png'
          },
          {
            product_name: 'Nama Produk',
            discount_price: 'Rp. 4.499',
            price: 'Rp. 6.000',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662881612/lumbungdesa/products/1618554350811_1_amqflu.png'
          },
          {
            product_name: 'Nama Produk',
            discount_price: 'Rp. 4.499',
            price: 'Rp. 6.000',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662881612/lumbungdesa/products/1618554350811_1_amqflu.png'
          },
          {
            product_name: 'Nama Produk',
            discount_price: 'Rp. 4.499',
            price: 'Rp. 6.000',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662881612/lumbungdesa/products/1618554350811_1_amqflu.png'
          },
          {
            product_name: 'Nama Produk',
            discount_price: 'Rp. 4.499',
            price: 'Rp. 6.000',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662881612/lumbungdesa/products/1618554350811_1_amqflu.png'
          },
          {
            product_name: 'Nama Produk',
            discount_price: 'Rp. 4.499',
            price: 'Rp. 6.000',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662881612/lumbungdesa/products/1618554350811_1_amqflu.png'
          },
          {
            product_name: 'Nama Produk',
            discount_price: 'Rp. 4.499',
            price: 'Rp. 6.000',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662881612/lumbungdesa/products/1618554350811_1_amqflu.png'
          },
        ],
      productsHome: [
          {
            product_name: 'Nama Produk',
            discount_price: 'Rp. 4.499',
            price: 'Rp. 6.000',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662881612/lumbungdesa/products/1618554350811_1_amqflu.png'
          },
          {
            product_name: 'Nama Produk',
            discount_price: 'Rp. 4.499',
            price: 'Rp. 6.000',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662881612/lumbungdesa/products/1618554350811_1_amqflu.png'
          },
          {
            product_name: 'Nama Produk',
            discount_price: 'Rp. 4.499',
            price: 'Rp. 6.000',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662881612/lumbungdesa/products/1618554350811_1_amqflu.png'
          },
          {
            product_name: 'Nama Produk',
            discount_price: 'Rp. 4.499',
            price: 'Rp. 6.000',
            img_url: 'https://res.cloudinary.com/duh8crgew/image/upload/v1662881612/lumbungdesa/products/1618554350811_1_amqflu.png'
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
