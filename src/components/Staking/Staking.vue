<template>
  <div>
    <div class="modal-stake">
      <div class="modal-stake-content">
        <div>
          <h2 class="heading">Stake</h2>
        </div>
        <div class="input-balance-box">
          <h5 class="input-text">Input</h5>
          <h5 class="balance-text">Bal:{{ tokenBalance }}</h5>
        </div>
        <div class="divi1">
          <input
            class="input-box-stake"
            placeholder="0.0"
            type="number"
            min="0"
            v-model="this.amount"
          />
          <button class="max-button-stake" v-on:click="maxfunction">MAX</button>
          
        </div>
        <h6 style="float: left; margin-left: 10px">
            You will be staking for x months
          </h6><br>
        <div class="stake-text-info">
          <h4>Info about APY</h4>
          <h5> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, magnam. Earum in soluta consequuntur libero laboriosam debitis officia, maxime veniam r eius aut asperiores ut eligendi.</h5>
        </div><br>
        <StakingButton v-on:click="transaction" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import GasTable from "@/components/Staking/gastable.vue";
import { Options, Vue } from "vue-class-component";
import StakingButton from "./StakingButton.vue";
import store from "@/store";
import transaction from "@/mixins/transaction";
@Options({
  data() {
    return {
      amount: null,
    };
  },
  components: {
    StakingButton,
    GasTable,
  },
  methods: {
    transaction() {
      let amt1 = (this.amount * 1e18).toString();
      console.log(amt1);
      transaction.prototype.stakingTransaction(amt1);
    },
    maxfunction(){
      this.amount=store.state.tokenBalance
    }
  },
})
export default class Staking extends Vue {
  public get tokenBalance(): number | null {
    return store.state.tokenBalance;
  }
}
</script>
<style lang="scss">
.stake-text-info{
   border: #99a3ba solid 1px;
  border-radius: 10px;
  width: 100%; 
  margin-top: 150px;
  background-color: rgba(75, 70, 70, 0.589);
}
.max-button-stake {
   border: #99A3BA solid 1px;
   border-radius: 0px 10px 10px 0px;
  background: rgba(199, 164, 199, 0.9);
  color: black;
  font-size: 20px;
  height: 61px;
  
  float: right;
  width: 20%;
}
.divi1 {
  margin-top: 10px;
  width: 100%;
}
.input-box-stake {
  padding: 15px;
  font-size: 25px;
  border-style: hidden;
  border: #99A3BA solid 1px;
  border-radius: 10px 0px 0px 10px;
  background: transparent;
  color: #99A3BA;
  width: 72.5%;
  float: left;
  
  
}

.input-text {
  float: left;
  margin-left: 10px;
}
.balance-text {
  float: right;
  margin-right: 10px;
}
.input-balance-box {
  border: #99a3ba solid 1px;
  border-radius: 10px;
  width: 100%;

  height: 50px;
}
.modal-stake {
  display: block;
  position: fixed; /* Stay in place */

  left: 0;
  width: 100%; /* Full width */
  height: 80%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
}

/* Modal Content/Box */
.modal-stake-content {
  border: 1px solid rgba(42,43,61,255);
  background-color: rgba(42,43,61,255); /* Black w/ opacity */
  color: white;
  margin: 2% auto; /* 15% from the top and centered */
  padding: 20px;
  border-radius: 20px;
  width: 30%; /* Could be more or less, depending on screen size */
  text-align: center;
  height: 520px;
  
}
.heading {
  color: rgb(199, 164, 199);
  font-family: "Inter var", sans-serif;
}
</style>