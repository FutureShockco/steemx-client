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
    localStorage.setItem('login_type', "steemlogin");
    console.log(this.accessToken)
    this.login(this.username, this.accessToken, 'steemlogin')
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
  