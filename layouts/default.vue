<template>
  <v-app dark>
    <v-navigation-drawer permanent app>
      <v-list nav dense>
        <v-list-item> LOGO HERE </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-text-box</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Descriptions</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {}
  },
}
</script>
