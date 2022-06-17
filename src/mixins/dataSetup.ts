import store from "@/store";

import Web3 from 'web3/dist/web3.min.js'
import stakingabi from "@/utilis/stakingabi";
import tokenabi from "@/utilis/tokenabi";
import { Options,Vue} from 'vue-class-component';
import Component from 'vue-class-component'
@Options({
})

export default class dataSetup extends Vue {
  message:string='hello world';
  /**
   * tokenBalance
   */
  public tokenBalance() {
    let abi:object=tokenabi[0].contract.abi
      let web3:any= new Web3(store.state.provider)  
      let contract = new web3.eth.Contract(abi,tokenabi[0].contract.address)
      let values:any = contract.methods.balanceOf(store.state.walletAddress).call()
      values.then((result) => {
        console.log(result)
        store.commit('set_tokenBalance',result*1e-18)
      }
      ).catch((error)=>{
          console.log(error)
      })
  }
  /**
   * stakedAmount
   */
  public stakedAmount() {
    let abi:object=stakingabi[0].contract.abi
      let web3:any= new Web3(store.state.provider)  
      let contract = new web3.eth.Contract(abi,stakingabi[0].contract.address)
      let values:any = contract.methods.balanceOf(store.state.walletAddress).call()
      values.then((result) => {
        console.log(result)
        store.commit('set_amountStaked',result*1e-18)
      }
      ).catch((error)=>{
          console.log(error)
      })
  }
  
  } 
