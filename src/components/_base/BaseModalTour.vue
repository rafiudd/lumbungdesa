<template>
  <v-dialog :value="isOpen">
    <v-card>
      <v-container>
        <v-card-title></v-card-title>
        <v-layout align-center>
          <h1>{{ titleModal }}</h1>
          <v-layout justify-end align-center>
            <v-btn color="primary" class="mr-4" outlined @click="closeDialog">Cancel</v-btn>
            <v-btn color="primary" @click="handleForm">Save</v-btn>
          </v-layout>
        </v-layout>
        <v-form class="u-mt-70 u-mb-70" ref="formModal" @keyup.enter="handleForm">
          <v-layout>
            <v-flex xs12 md6>
              <v-text-field label="Id" v-model="payload.id" :rules="[validationRules.required]" outlined></v-text-field>
              <v-text-field
                label="Title"
                v-model="payload.title"
                :rules="[validationRules.required]"
                outlined
              ></v-text-field>
              <template v-if="type === 'detailTour'">
                <v-text-field
                  label="Audio"
                  v-model="payload.audio"
                  :rules="[validationRules.required]"
                  outlined
                ></v-text-field>
              </template>
              <template v-else>
                <v-text-field
                  label="URL"
                  v-model="payload.url"
                  :rules="[validationRules.required]"
                  outlined
                ></v-text-field>
                <v-select
                  :items="typeList"
                  label="Type"
                  :rules="[validationRules.required]"
                  v-model="payload.type"
                  outlined
                  validate-on-blur
                ></v-select>
              </template>
            </v-flex>
          </v-layout>
        </v-form>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
    closeDialog: {
      type: Function,
      default: () => {},
    },
    onClickSave: {
      type: Function,
      default: () => {},
    },
    type: {
      type: String,
      default: 'detailTour',
    },
    initialData: Object,
  },

  data() {
    return {
      payload: {
        id: '',
        title: '',
        audio: '',
      },
      typeList: [
        {
          text: 'Video',
          value: 'video',
        },
        {
          text: 'Photo',
          value: 'photo',
        },
        {
          text: 'Maps',
          value: 'maps',
        },
      ],
    }
  },

  created() {
    if (this.initialData) {
      this.payload = this.initialData
    }
  },

  computed: {
    titleModal() {
      if (this.type === 'detailTour') {
        return 'Detail Tour'
      }
      return 'Detail Subtour'
    },
  },

  methods: {
    handleForm() {
      if (this.$refs.formModal.validate()) {
        this.onClickSave(this.payload)
      }
    },
  },
}
</script>

<style></style>
