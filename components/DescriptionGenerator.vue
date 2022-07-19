<template>
  <v-form v-model="valid">
    <v-layout column>
      <label for="productTitle" class="mb-2">Product Title:</label>
      <v-text-field
        v-model="productTitle"
        id="productTitle"
        label="eg. JakoAI"
        solo
      ></v-text-field>
    </v-layout>
    <v-layout class="mb-5" column>
      <label for="productTitle" class="mb-2">Keywords:</label>
      <v-combobox
        v-model="productKeywords"
        multiple
        small-chips
        solo
        :items="keywords"
        persistent-hint
        hint="You can add your own by pressing enter"
      ></v-combobox>
    </v-layout>
    <v-layout column>
      <label for="productTitle" class="mb-2"
        >Describe you product: <small>Optional</small>
      </label>
      <v-textarea
        v-model="productDescription"
        auto-grow
        solo
        hint="Describe your product for more accurate results"
      >
      </v-textarea>
    </v-layout>

    <v-layout>
      <v-btn class="secondary" @click="generateDescriptions">Generate</v-btn>
    </v-layout>
  </v-form>
</template>

<script>
export default {
  name: 'DescriptionGenerator',
  data() {
    return {
      valid: false,
      keywords: ['Futuristic', 'Creative', 'Magical', 'Practical'],
      productTitle: '',
      productKeywords: [],
      productDescription: '',
    }
  },
  methods: {
    generateDescriptions() {
      const data = {
        title: this.productTitle,
        keywords: this.productKeywords,
        description: this.productDescription,
      }
      this.$store.dispatch('descriptions/generateDescriptions', data)
    },
  },
}
</script>

<style>
</style>