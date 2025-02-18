<template>
  <router-view></router-view>
</template>

<script>


import { cryptoApiMethods, authMethods } from "@/state/helpers";

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

    this.init()
    setInterval(() => {
      this.loadTokens()
    }, 10000);

  },
  methods: {
    ...cryptoApiMethods,
    ...authMethods
  },

};
</script>
