// import client from '@/helpers/client';
import ws from '@/helpers/kbyte';

export const state = {
    currentUser: sessionStorage.getItem('authUser'),
}

export const mutations = {
    SET_CURRENT_USER(state, newValue) {
        state.currentUser = newValue
        saveState('auth.currentUser', newValue)
    },
    saveUsername(_state, payload) {
        _state.username = payload
    },
    saveAccount(_state, payload) {
        _state.account = payload
        state.currentUser = payload
        saveState('auth.currentUser', payload)
    },
    logout(_state) {
        _state.username = null
    }
}


export const getters = {
    // Whether the user is currently logged in.
    loggedIn(state) {
        return !!state.currentUser
    }
}

// async function loadaccount(commit, username) {
//     const account = await client.database.getAccounts([username]);
//     account[0].loggeduser = true
//     commit('saveAccount', account[0]);
// }


export const actions = {
    // This is automatically run in `src/state/store.js` when the app
    // starts, along with any other actions named `init` in other modules.
    // eslint-disable-next-line no-unused-vars
    init({ state, dispatch }) {
        console.log(state)
        dispatch('validate')
    },
    login: async ({ commit }, payload) =>
        new Promise((resolve, reject) => {
            console.log('jeyyy', payload)
            localStorage.removeItem('access_token');
            if (payload.loginType) {
                ws.requestAsync('login', payload).then((token) => {
                    commit('saveUsername', payload.username);
                    localStorage.setItem('access_token', token);
                    localStorage.setItem('user', payload.username);

                    window.location = '/';
                    resolve()
                }).catch(e => {
                    console.log(e);
                    localStorage.removeItem('access_token');
                    localStorage.removeItem('user');
                    reject(e);
                });
            }
            else {
                localStorage.removeItem('access_token');
                localStorage.removeItem('user');
                reject();
            }

            // const ltype = localStorage.getItem('login_type');
            // const token = localStorage.getItem('token');
            // ws.requestAsync('login', { username, message: "", type: ltype, token }).then((result) => {
            //     console.log(result)
            // }).catch((e) => {
            //     console.log(e)
            // });
        }),

    logout: () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('loggedIn');
        window.location = '/';
    },
    // Logs in the current user.
    logIn({ commit, dispatch, getters }) {
        if (getters.loggedIn) return dispatch('validate')
        const user = "e"
        commit('SET_CURRENT_USER', user)
        return user
        // return getFirebaseBackend().loginUser(email, password).then((response) => {
        //     const user = response
        //     commit('SET_CURRENT_USER', user)
        //     return user
        // });
    },

    // Logs out the current user.
    logOut({ commit }) {
        // eslint-disable-next-line no-unused-vars
        commit('SET_CURRENT_USER', null)
        return new Promise((resolve, reject) => {
            // eslint-disable-next-line no-unused-vars
            resolve(true)
            reject(true)
            // getFirebaseBackend().logout().then((response) => {
            //     resolve(true);
            // }).catch((error) => {
            //     reject(this._handleError(error));
            // })
        });
    },
    validate() {
        if (!localStorage.getItem('user')) return Promise.resolve(null)
        const token = localStorage.getItem('access_token');

        ws.requestAsync('init', {token:token}).then((result) => {
            console.log(result)
            localStorage.setItem('userId',result)
            return true
        })  
    },
    // async requestKeychain(fn, ...args) {
    //     return new Promise((resolve) => {
    //       if (window.hive_keychain) {
    //         window.hive_keychain[fn](...args, (r) => {
    //           if (r.error === 'user_cancel') {
    //             return resolve({ success: false, cancel: true, ...r });
    //           }
  
    //           if (r.success) {
    //             return resolve({ success: true, ...r });
    //           }
  
    //           return resolve({ success: false, ...r });
    //         });
    //       } else {
  
    //         return resolve({ success: false });
    //       }
    //     });
    //   },
  
    //   async requestBrodcastTransfer({ to, amount, currency, memo, eventName }) {
    //     emitter.emit('broadcast-awaiting');
  
    //     const useStore = useUserStore();
  
    //     const { success, result } = await this.requestKeychain(
    //       'requestTransfer',
    //       useStore.username,
    //       to,
    //       amount,
    //       memo,
    //       currency,
    //     );
  
    //     if (success) {
    //       if (!result.id) {
    //         result.id = result.tx_id;
    //       }
  

    //     }
  
    //   },
  
    //   async requestBroadcastJson({ key = 'Active', id, message, json, eventName = null, eventData = null }) {
    //     emitter.emit('broadcast-awaiting');
  
    //     const useStore = useUserStore();
  
    //     const { success, result } = await this.requestKeychain(
    //       'requestCustomJson',
    //       useStore.username,
    //       id || "main-ssx",
    //       key,
    //       JSON.stringify(json),
    //       message,
    //     );
  
    //     if (success) {
    //       if (!result.id) {
    //         result.id = result.tx_id;
    //       }
  
    //       const nTrx = json.length;
  
    //       const data = { ...result, ntrx: nTrx, eventData };
  

    //     }
  

    //   },
  
}


function saveState(key, state) {
    window.sessionStorage.setItem(key, JSON.stringify(state))
}
