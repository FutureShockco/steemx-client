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
    this.init()
    this.loadTokens()
    setInterval(() => {
      this.loadTokens()
    }, 3000);

  },
  methods: {
    ...cryptoApiMethods,
    ...authMethods
  },

};
</script>
