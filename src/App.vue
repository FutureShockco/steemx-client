<template>
  <router-view></router-view>
</template>

<script>


import { cryptoApiMethods } from "@/state/helpers";

export default {
  name: 'App',
  data() {
    return {
      isLoading: this.$store.state.tokens.loading,

    };
  },
  components: {
  },
  mounted() {
    this.loadTokens()
    setInterval(() => {
      this.loadTokens()
    }, 3000);

  },
  methods: {
    ...cryptoApiMethods
  },

};
</script>
