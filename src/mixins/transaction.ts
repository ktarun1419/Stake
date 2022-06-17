import { Vue } from "vue-class-component";
import Biconomy from "@biconomy/mexa/dist/mexa.js";
import store from "@/store";
import Web3 from 'web3/dist/web3.min.js'
import tokenabi from "@/utilis/tokenabi";
import stakingabi from "@/utilis/stakingabi";
import dataSetup from "@/mixins/dataSetup";

export default class transaction extends Vue {

    /**
  * stakingTransaction
  */
    public stakingTransaction(amount: string | number) {
        const biconomy = new Biconomy(store.state.provider, {
            apiKey: "XhhterezE.bb28be9e-a06e-48fd-8986-d62c8223add9",
            debug: true,
        });

        let web3 = new Web3(store.state.provider);
        // biconomy
        //     .onEvent(biconomy.READY, () => {
        //
        //import address from the utils
        //
        let tokencontractAddress: string = tokenabi[0].contract.address
        let stakingcontractAdress: string = stakingabi[0].contract.address
        //
        //creating the contract instances
        //
        let approveContract: any = new web3.eth.Contract(tokenabi[0].contract.abi, tokencontractAddress)
        let stakingContract: any = new web3.eth.Contract(stakingabi[0].contract.abi, stakingcontractAdress)


        //
        //crating transaction object
        //
        let txApprove: object = {
            from: store.state.walletAddress,
            to: tokencontractAddress,
            data: approveContract.methods.approve(stakingcontractAdress, amount).encodeABI()
        }
        let txStake: object = {
            from: store.state.walletAddress,
            to: stakingcontractAdress,
            data: stakingContract.methods.deposit(amount).encodeABI()
        }

        //
        //sending the transactions
        //
        let approve = web3.eth.sendTransaction(txApprove)
        console.log(approve)
        approve.then((result) => {
            alert(result.transactionHash)
        }
        ).catch((e) => {
            console.log(e)
        })
        approve.on('transactionHash', function (hash) {
            alert(hash)
        })
        let stake = web3.eth.sendTransaction(txStake)
        stake.then((result) => {
            alert(result.transactionHash)
            dataSetup.prototype.tokenBalance()
        }
        ).catch((e) => {
            alert(e.message)
        })
        // })
        // .onEvent(biconomy.ERROR, (error, message) => {
        //     alert(error.message);
        //     alert(error)
        // });
    }
    /**
     * unstaking
     */
    public unstakingTransaction(amount: number | string) {
        //
        //creating web3 instance
        let web3 = new Web3(store.state.provider)
        let stakingcontractAdress: string = stakingabi[0].contract.address
        //
        //creating contract instance
        let stakingContract: any = new web3.eth.Contract(stakingabi[0].contract.abi,stakingcontractAdress)
        //
        //creating transaction object
        //
        let txunStake: object = {
            from: store.state.walletAddress,
            to: stakingcontractAdress,
            data: stakingContract.methods.withdraw(amount).encodeABI()
        }
        //
        //sending transaction
        let unstake = web3.eth.sendTransaction(txunStake)
        unstake.then((result) => {
            console.log(result.transactionHash)
            dataSetup.prototype.stakedAmount()
            //result.transactionHash
            //
        }
        ).catch((e) => {
            console.log(e)
        })
    }
}