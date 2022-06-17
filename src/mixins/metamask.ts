import store from "@/store";
import Web3 from "web3/dist/web3.min.js";
import Web3Modal, { CHAIN_DATA_LIST, Provider } from "web3modal";
//import {Biconomy} from "@biconomy/mexa/common-js";
import Biconomy from "@biconomy/mexa/dist/mexa.js";
import { Vue, Options } from "vue-class-component";
import dataSetup from "@/mixins/dataSetup";
@Options({   
})
export default class metamask extends Vue{
   // public async provider() {
   //    let web3modal: any = new Web3Modal({
   //      network: "kovan",
   //      cacheProvider: true,
   //    });
   //    let provider: any = await web3modal.connect();
   //    const biconomy = new Biconomy(provider, {
   //      apiKey: "XhhterezE.bb28be9e-a06e-48fd-8986-d62c8223add9",
   //      debug: true,
   //    });
   //    let web3: any = new Web3(biconomy);
   //    store.commit("set_provider", biconomy);
   //    biconomy
   //      .onEvent(biconomy.READY, () => {
          
           
   //      })
   //      .onEvent(biconomy.ERROR, (error, message) => {
   //        alert(error.message);
   //      });
   //      /**
   //       * transaction
   //       */
        
   //  }
    /**
     * provider1
     */
    public async provider1() {
      let web3modal: any = new Web3Modal({
         network: "kovan",
         cacheProvider: true,
       });
       let provider: any = await web3modal.connect();
       store.commit("set_provider", provider);
       let web3: any = new Web3(provider);
       let account: any =  web3.eth.getAccounts();
          account
            .then((result: any) => {
              
               store.commit("set_walletAddress", result[0]);
               store.commit("SET_USERS", result);
              console.log(result);
              let account: string;
              let acc: string | null = store.state.walletAddress;
              if (acc != null) {
                let nim = acc.split("");
                account =
                  nim[0] +
                  nim[1] +
                  nim[2] +
                  nim[3] +
                  nim[4] +
                  "..." +
                  nim[37] +
                  nim[38] +
                  nim[39] +
                  nim[40] +
                  nim[41];
                store.commit("set_topbarAcc", account);
              }
              let balance = web3.eth.getBalance(result[0]);
              balance.then((result) => {
                store.commit("set_ethBalance", result * 1e-18);
              });
              let chain = web3.eth.getChainId();
              chain.then((result) => {
                console.log(result);
                if (result==42) {
                   
                   store.commit('set_',true)
                }
                else{
                  alert('Please connect to kovan test network')
                }
                store.commit("set_network", CHAIN_DATA_LIST[result].network);
              });
              dataSetup.prototype.stakedAmount()
              dataSetup.prototype.tokenBalance()
            })
            .catch((e) => {
              alert(e);
            });
          
              
    }
}