<template>
  <v-card class="rounded-card pt-2 pb-2 pl-3 pr-3" color="accent">
    <v-card-title :class="{ 'pa-0': true, 'mt-3': screenSize.xlOnly, 'mt-1': screenSize.lgAndDown }">
      <p
        :class="{ 'font-weight-medium': true, 'headline': screenSize.xlOnly, 'subheading': screenSize.lgAndDown, 'ma-0': true }"
      >{{ info }}</p>
    </v-card-title>

    <v-card-text :class="{ 'pl-0 pr-0': true, 'pb-0': screenSize.lgAndDown }">
      <p :class="{ 'font-weight-medium': true, 'caption': screenSize.xlOnly, 'lg-font-size': screenSize.lgAndDown, 'text-uppercase': true, 'mb-0': true }"
      >{{ title }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    info: {
      type: [String, Number],
      default: ''
    }
  },
  computed: {
    screenSize () {
      return this.$vuetify.breakpoint
    }
  }
}
</script>

<style>
.lg-font-size {
  font-size: 0.7em;
}
</style>
