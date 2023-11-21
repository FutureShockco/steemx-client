import { mapState, mapGetters, mapActions } from 'vuex';

export const authComputed = {
  ...mapState('auth', {
    currentUser: (state) => state.currentUser,
  }),
  ...mapGetters('auth', ['loggedIn']),
};

export const layoutComputed = {
  ...mapState('layout', {
    mode: (state) => state.mode,
    cardLayout: (state) => state.cardLayout,
    layoutWidth: (state) => state.layoutWidth,
    position: (state) => state.position,
    topbar: (state) => state.topbar,
    topbarImage: (state) => state.topbarImage,
    preloader: (state) => state.preloader,
  })
};

export const authMethods = mapActions('auth', ['login', 'logIn', 'logOut', 'register']);

export const layoutMethods = mapActions('layout',
  ['changeMode', 'changeCardLayout', 'changeLayoutWidth', 'changePosition', 'changeTopbar', 'changeTopbarImage', 'changePreloader']);

export const authFackMethods = mapActions('authfack', ['login', 'registeruser', 'logout']);

export const cryptoApiMethods = mapActions('tokens', ['loadTokens']);

export const notificationMethods = mapActions('notification', ['success', 'error', 'clear']);