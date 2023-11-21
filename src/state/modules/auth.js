import { getFirebaseBackend } from '../../authUtils.js'
import client from '@/helpers/client';
import sc from '@/helpers/steemlogin';
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

async function loadaccount(commit, username) {
    const account = await client.database.getAccounts([username]);
    account[0].loggeduser = true
    commit('saveAccount', account[0]);
}


export const actions = {
    // This is automatically run in `src/state/store.js` when the app
    // starts, along with any other actions named `init` in other modules.
    // eslint-disable-next-line no-unused-vars
    init({ state, dispatch }) {
        dispatch('validate')
    },
    login: async ({ commit }, username, message, type) =>
        new Promise(resolve => {

            if (type === 'steemlogin') {
                sc.setAccessToken(token);
                ws.requestAsync('login', { username, message, type }).then((result) => {
                    console.log(result)
                })
                sc.me()
                    .then(result => {
                        commit('saveUsername', result.name);
                        loadaccount(commit, result.name);
                        resolve();
                    })
                    .catch(e => {
                        console.log(e);
                        localStorage.removeItem('access_token');
                        localStorage.removeItem('id_token');
                        localStorage.removeItem('loggedIn');
                        window.location = '/';
                        resolve(e);
                    });
            } else if (type === 'keychain') {
                console.log('no access token');
                resolve();
            }
            else {
                console.log('no access token');
                resolve();
            }

            const username = localStorage.getItem('username');
            const ltype = localStorage.getItem('login_type');
            const token = localStorage.getItem('token');
            ws.requestAsync('login', { username, message: "", type: ltype, token }).then((result) => {
                console.log(result)
            }).catch((e) => {
                console.log(e)
            });
        }),

    logout: () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('loggedIn');
        window.location = '/';
    },
    // Logs in the current user.
    logIn({ commit, dispatch, getters }, { email, password } = {}) {
        if (getters.loggedIn) return dispatch('validate')

        return getFirebaseBackend().loginUser(email, password).then((response) => {
            const user = response
            commit('SET_CURRENT_USER', user)
            return user
        });
    },

    // Logs out the current user.
    logOut({ commit }) {
        // eslint-disable-next-line no-unused-vars
        commit('SET_CURRENT_USER', null)
        return new Promise((resolve, reject) => {
            // eslint-disable-next-line no-unused-vars
            getFirebaseBackend().logout().then((response) => {
                resolve(true);
            }).catch((error) => {
                reject(this._handleError(error));
            })
        });
    },

    // register the user
    register({ commit, dispatch, getters }, { username, email, password } = {}) {
        if (getters.loggedIn) return dispatch('validate')

        return getFirebaseBackend().registerUser(username, email, password).then((response) => {
            const user = response
            commit('SET_CURRENT_USER', user)
            return user
        });
    },


    // Validates the current user's token and refreshes it
    // with new data from the API.
    // eslint-disable-next-line no-unused-vars
    validate({ commit, state }) {
        if (!state.currentUser) return Promise.resolve(null)
        const user = getFirebaseBackend().getAuthenticatedUser();
        commit('SET_CURRENT_USER', user)
        return user;
    },
}

// ===
// Private helpers
// ===

function saveState(key, state) {
    window.sessionStorage.setItem(key, JSON.stringify(state))
}
