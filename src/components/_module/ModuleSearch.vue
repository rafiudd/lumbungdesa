<template>
  <div>
    <v-row>
      <v-col md="6">
        <v-autocomplete
          v-model="select"
          :loading="loading"
          :items="items"
          :search-input.sync="search"
          class="mr-3"
          color="#29291e"
          hide-no-data
          hide-details
          label="Cari produk disini..."
        ></v-autocomplete>
      </v-col>
    </v-row>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        loading: false,
        items: [],
        search: null,
        select: null,
        states: [
          'Bantal Batik Banyumasn',
          'Gerabah Tangan Kediri',
          'Keranjang Anyam Bambu',
          'Keranjang Rotan Anyam 5',
          'Keranjang Rotan Bulat',
          'Keranjang Rotan Tinggi',
          'Kursi Rotan Nyaman Empuk',
          'Layangan Batik Lamongan',
          'Mangko Mini Cantik',
          'Mangkok Ikal Banyumas',
          'Mangkok Meliuk Panjang',
          'Meja Ukir Batak',
          'Piring Cantik Mengkilap',
          'Pot Bunga Anyam',
          'Sapu Lidi Ekslusif Estetik',
          'Piring Lidi Unik Banyumas'
        ]
      }
    },
    watch: {
      search (val) {
        val && val !== this.select && this.querySelections(val)
      }
    },
    methods: {
      querySelections (v) {
        this.loading = true
        // Simulated ajax query
        setTimeout(() => {
          this.items = this.states.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
      }
    }
  }
</script>