<template>
  <div>
    <div v-if="descriptions.length">
      <v-layout
        column
        v-for="description in descriptions"
        :key="description.id"
      >
        <v-textarea
          solo
          name="input-7-4"
          label="Solo textarea"
          :value="description.text"
          auto-grow
        ></v-textarea>
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
}
</script>

<style>
</style>