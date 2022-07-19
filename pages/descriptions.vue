<template>
  <v-container class="my-5">
    <v-row justify="center" align="center">
      <v-col cols="12" md="6">
        <DescriptionGenerator />
      </v-col>
      <v-col cols="12" md="6">
        <DescriptionsShow :descriptions="[]" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DescriptionGenerator from '~/components/DescriptionGenerator.vue'
import DescriptionsShow from '~/components/DescriptionsShow.vue'

export default {
  name: 'DescriptionsPage',
  components: {
    DescriptionGenerator,
    DescriptionsShow,
  },
}
</script>

<style>
</style>