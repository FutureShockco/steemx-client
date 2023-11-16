import { mapState } from 'vuex';
import numeral from 'numeral';
import store from "./state/store";
import { shorten } from '@/helpers/utils';

const modules = Object.entries(store.state).map(module => module[0]);

export default {
  computed: {
    ...mapState(modules)
  },
  methods: {
    _n(number, format = '(0.00a)') {
      return number > 0 ? numeral(number).format(format) : 0;
    },
    _shorten(str, key) {
      if (!str) return str;
      let limit = 6;
      if (typeof key === 'number') limit = key;
      if (key === 'symbol') limit = 4;
      if (key === 'name') limit = 32;
      if (key === 'choice') limit = 8;
      if (limit)
        return str.length > limit ? `${str.slice(0, limit).trim()}...` : str;
      return shorten(str);
    },
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
};
