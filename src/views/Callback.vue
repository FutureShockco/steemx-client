<template>
  <div></div>
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
  mounted() {
    console.log(this.username,this.accessToken)
    this.login({ username: this.username, token: this.accessToken, loginType: 'steemlogin' })
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
  