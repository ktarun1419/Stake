import { createStore, Store, StoreOptions } from 'vuex'
import axios from "axios";



export default createStore({
  state: {
    users: [],
    ethereumPrice: null,
    bitcoinPrice: null,
    binancePrice: null,
    maticPrice: null,
    xrpPrice: null,
    chainId: null,
    walletAddress: '',
    ethBalance: 0.00,
    provider: null,
    gasPrice: null,
    topbarAcc: '0x000..000',
    network: 'Network',
    gasTime: '',
    blockTime: '',
    tokenBalance:0.0000,
    amountStaked:0,
    app:true,

  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users
    },
    SET_ETHEREUM_PRICE(state, payload) {
      state.ethereumPrice = payload.toFixed(2)
    },
    SET_BITCOIN_PRICE(state, payload) {
      state.bitcoinPrice = payload.toFixed(2)
    },
    SET_BINANCE_PRICE(state, payload) {
      state.binancePrice = payload.toFixed(2)
    },

    SET_MATIC_PRICE(state, payload) {
      state.maticPrice = payload.toFixed(2)
    }, SET_XRP_PRICE(state, payload) {
      state.xrpPrice = payload.toFixed(2)
    },
    set_ethBalance(state, payload) {
      state.ethBalance = payload.toFixed(3)
    },
    set_chaiId(state, payload) {
      state.chainId = payload
    },
    set_walletAddress(state, payload) {
      state.walletAddress = payload
    },
    set_provider(state, payload) {
      state.provider = payload
    },
    set_gasPrice(state, payload) {
      state.gasPrice = payload.toFixed(2)
    },
    set_topbarAcc(state, payload) {
      state.topbarAcc = payload
    },
    set_network(state, payload) {
      state.network = payload
    },
    set_blockTime(state, payload) {
      state.blockTime = payload.toFixed(2)
    },
    set_gasTime(state, payload) {
      state.gasTime = payload.toFixed(2)
    },
    set_tokenBalance(state,payload){
      state.tokenBalance=payload.toFixed(2)
    },
    set_amountStaked(state,payload){
      state.amountStaked=payload.toFixed(2)
    },
    set_app(state,payload){
      state.app=payload
    }
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const response = await axios.get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR,ETH,BNB,MATIC,XRP,POLYGON")
        const gasData = await axios.get("https://ethgasstation.info/api/ethgasAPI.json?")
        commit('SET_ETHEREUM_PRICE', response.data.USD)
        commit('SET_BITCOIN_PRICE', (response.data.USD / response.data.BTC))
        commit('SET_BINANCE_PRICE', (response.data.USD / response.data.BNB))
        commit('SET_MATIC_PRICE', (response.data.USD / response.data.MATIC))
        commit('SET_XRP_PRICE', (response.data.USD / response.data.XRP))
        commit('set_gasPrice', gasData.data.fast /10 )
        commit('set_gasTime', gasData.data.fastWait)
        commit('set_blockTime', gasData.data.block_time)
      } catch (error) {
        alert(error)
        console.log(error);
      }
    },
  },
  modules: {
  },
  getters: {
    getUsers: (state) => state.users,
    getEthereumPrice: (state) => state.ethereumPrice,
    getBitcoinPrice: (state) => state.bitcoinPrice
  }
})
//https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR,ETH