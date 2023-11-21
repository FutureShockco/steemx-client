<template>
  <div>{{ accessToken }}</div>
</template>
  
<script>
import { authMethods } from "@/state/helpers";

export default {
  data() {
    return {
      accessToken: this.$route.query.access_token,
      username: this.$route.query.username,
      error: null,
    };
  },
  created() {
    localStorage.setItem('access_token', this.accessToken);
    localStorage.setItem('username', this.username);
    localStorage.setItem('keychain', false);

    this.login(this.accessToken)
      .then(() => {
        window.location = '/';
      })
      .catch(e => {
        console.error('Your access token is not valid', e);
      });
  },
  methods: {
    ...authMethods,

  }
};
</script>
  