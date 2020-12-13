<template>
  <v-footer padless color="teal accent-3">
    <v-col
      class="text-center brown--text"
      cols="12"
    >
      Copyright (C) {{ thisYear }} <strong>Sung Geon Hee</strong> all rights reserved.
    </v-col>
  </v-footer>
</template>

<script>
export default {
  computed: {
    thisYear() {
        return new Date().getFullYear();
    }
  }
}
</script>

<style>

</style>