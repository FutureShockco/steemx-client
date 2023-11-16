export const state = {
  mode: 'dark',
  cardLayout: 'border',
  layoutWidth: 'boxed',
  position: 'fixed',
  topbar: 'dark',
  topbarImage: 'pattern-3',
  preloader: 'disable'
};

export const mutations = {
  CHANGE_MODE(state, mode) {
    state.mode = mode;
  },
  CHANGE_CARD_LAYOUT(state, cardLayout) {
    state.cardLayout = cardLayout;
  },
  CHANGE_LAYOUT_WIDTH(state, layoutWidth) {
    state.layoutWidth = layoutWidth;
  },
  CHANGE_POSITION(state, position) {
    state.position = position;
  },
  CHANGE_TOPBAR(state, topbar) {
    state.topbar = topbar;
  },
  CHANGE_TOPBAR_IMAGE(state, topbarImage) {
    state.topbarImage = topbarImage;
  },
  CHANGE_PRELOADER(state, preloader) {
    state.preloader = preloader;
  }
};

export const actions = {
  changeMode({ commit }, { mode }) {
    commit('CHANGE_MODE', mode);
  },

  changeCardLayout({ commit }, { cardLayout }) {
    commit('CHANGE_CARD_LAYOUT', cardLayout);
  },

  changeLayoutWidth({ commit }, { layoutWidth }) {
    commit('CHANGE_LAYOUT_WIDTH', layoutWidth);
  },
  changePosition({ commit }, { position }) {
    commit('CHANGE_POSITION', position);
  },

  changeTopbar({ commit }, { topbar }) {
    commit('CHANGE_TOPBAR', topbar);
  },

  changeTopbarImage({ commit }, { topbarImage }) {
    commit('CHANGE_TOPBAR_IMAGE', topbarImage);
  },

  changePreloader({ commit }, { preloader }) {
    commit('CHANGE_PRELOADER', preloader);
  }
};
