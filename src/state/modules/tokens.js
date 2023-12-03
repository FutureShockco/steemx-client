// import axios from "axios";
import ssc from '@/helpers/ssc';
import ws from '@/helpers/kbyte';

export const state = {
    top: [],
    steemxTop: [],
    steem: null,
    steemHistory: null,
    currentTokenHistory: null,
    loading: null,
    balances: []
};

export const mutations = {
    SET_STEEM(state, steem) {
        state.steem = steem;
    },
    SET_TOP(state, top) {
        state.top = top;
    },
    SET_STEEMX_TOP(state, steemxTop) {
        state.steemxTop = steemxTop;
    },
    SET_STEEM_HISTORY(state, steemHistory) {
        state.steemHistory = steemHistory;
    },
    SET_CURRENT_TOKEN_HISTORY(state, currentTokenHistory) {
        state.currentTokenHistory = currentTokenHistory;
    },
    SET_LOADING(state, loading) {
        state.loading = loading;
    },
    SET_BALANCE(state, payload) {
        state.balances = payload;
    }
};

export const actions = {
    async loadTokens({ commit }) {
        commit('SET_LOADING', true);
        ws.requestAsync('get_token_list', '').then((result) => {
            result.topCurrencies.forEach(element => {
                try {
                    element.img = require(`@/assets/images/svg/crypto-icons/${element.name.toLowerCase()}.svg`)
                } catch (e) {
                    //console.log(element.name, "sorry, file not found");
                }
            });


            commit('SET_STEEM', result.topCurrencies[0]);
            commit('SET_TOP', result.topCurrencies);
            commit('SET_STEEM_HISTORY', result.steemHistory);
        })

        // const topCurrencies = []
        // const price = await axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=STEEM&tsyms=USD`);
        // let steemPrice = price.data.RAW.STEEM.USD
        // steemPrice.UP = steemPrice.CHANGE24HOUR
        // steemPrice.name = "STEEM"
        // steemPrice.full = "Steem"
        // steemPrice.img = require(`@/assets/images/svg/crypto-icons/steem.svg`)
        // commit('SET_STEEM', steemPrice);
        // const type = "hour"
        // const date = Math.round(new Date().getTime() / 1000);
        // const limit = 24
        // const historyData = await axios.get(`https://min-api.cryptocompare.com/data/histo${type}`, {
        //     params: {
        //         fsym: 'STEEM',
        //         tsym: 'USD',
        //         toTs: date,
        //         limit,
        //     },
        // });
        // const dataSet = [];
        // historyData.data.Data.forEach(element => {
        //     dataSet.push({ x: element.time * 1000, y: [element.open, element.high, element.low, element.close] });
        // });
        // topCurrencies.push(steemPrice)

        // commit('SET_STEEM_HISTORY', dataSet);
        // const topVolumes = await axios.get(`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD`);
        // const topNames = []
        // const queryNames = []
        // topVolumes.data.Data.forEach(element => {
        //     topNames.push({ full: element.CoinInfo.FullName, name: element.CoinInfo.Name })
        //     queryNames.push(element.CoinInfo.Name)
        // });
        // const allPrices = await axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${queryNames}&tsyms=USD`);
        // topNames.forEach(element => {
        //     let price = allPrices.data.RAW[element.name].USD
        //     price.name = element.name
        //     price.full = element.full
        //     try {
        //         price.img = require(`@/assets/images/svg/crypto-icons/${element.name.toLowerCase()}.svg`)
        //         topCurrencies.push(price)
        //     } catch (e) {
        //         console.log(element.name, "sorry, file not found");
        //     }


        // });
        // commit('CHANGE_PRELOADER', 'disable');

        const steemCurrencies = []
        ssc.find('tokens', 'tokens', {}, 1000, 0, [], (err, result) => {
            console.log(err, result);
            if (result)
                result.forEach(element => {
                    element.full = element.name
                    element.name = element.symbol
                    steemCurrencies.push(element)
                });
            commit('SET_STEEMX_TOP', steemCurrencies);

        })
        ssc.findOne('tokens', 'balances', {  }, (err, result) => {
            console.log(err, result);


        })

        // ssc.find(
        //     'tokens',
        //     'balances',
        //     {
        //         account: 'future.witness'
        //     }, 1000, 0, [], (err, result) => {

        //         console.log(err, result);
        //         /*
        //         {
        //                 "account": "harpagon",
        //                 "symbol": "SSC",
        //                 "balance": 3.0005,
        //                 "$loki": 6
        //             }
        //         */
        //     })
        commit('SET_LOADING', false);
    },
};
