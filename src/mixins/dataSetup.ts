import store from "@/store";

import Web3 from 'web3/dist/web3.min.js'
import stakingabi from "@/utilis/stakingabi";
import tokenabi from "@/utilis/tokenabi";
import { Options, Vue } from 'vue-class-component';
@Options({
})

export default class dataSetup extends Vue {
  message: string = 'hello world';
  /**
   * tokenBalance
   */
  public tokenBalance() {
    //
    //getting abi from utilis
    let abi: object = tokenabi[0].contract.abi
    //
    //intialising web3 instance
    let web3: any = new Web3(store.state.provider)
    //
    //initializing contract instance
    let contract = new web3.eth.Contract(abi, tokenabi[0].contract.address)
    //
    //calling comtract function
    let values: any = contract.methods.balanceOf(store.state.walletAddress).call()
    values.then((result :number) => {
      console.log(result)
      store.commit('set_tokenBalance', result * 1e-18)
    }
    ).catch((e) => {
      console.log(e)
    })
  }
  /**
   * stakedAmount
   */
  public stakedAmount() {
    //
    //getting abi from utilis
    let abi: object = stakingabi[0].contract.abi
    //
    //intialising web3 instance
    let web3: any = new Web3(store.state.provider)
     //
    //initializing contract instance
    let contract = new web3.eth.Contract(abi, stakingabi[0].contract.address)
    //
    //calling comtract function
    let values: any = contract.methods.balanceOf(store.state.walletAddress).call()
    values.then((result:number) => {
      console.log(result)
      store.commit('set_amountStaked', result * 1e-18)
    }
    ).catch((e) => {
      console.log(e)
    })
  }

} 
