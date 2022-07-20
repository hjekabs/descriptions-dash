<template>
  <div>
    <div v-if="descriptions.length">
      <v-layout
        column
        v-for="description in descriptions"
        :key="description.id"
      >
        <v-card outlined class="mb-5">
          <v-card-text>
            <v-textarea
              solo
              counter
              name="input-7-4"
              label="Solo textarea"
              :value="description.text | cleanText"
              auto-grow
              background-color="grey darken-3"
            ></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  small
                  class="accent"
                  @click="copyClipboard(description.text)"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon small>mdi-content-copy</v-icon> Copy</v-btn
                >
              </template>
              <span>Click to copy</span>
            </v-tooltip>
          </v-card-actions>
        </v-card>
      </v-layout>
    </div>
    <div v-else class="d-flex flex-column justify-center align-center">
      <v-img
        src="/empty_descriptions.png"
        max-height="300"
        max-width="250"
      ></v-img>
      <p>No Descriptions Generated</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DescriptionsShow',
  props: {
    descriptions: {
      type: Array,
      required: true,
    },
  },
  filters: {
    cleanText(value) {
      return value.trim()
    },
  },
  methods: {
    copyClipboard(text) {
      navigator.clipboard.writeText(text.trim())
    },
  },
}
</script>

<style>
</style>