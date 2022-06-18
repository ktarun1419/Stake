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
        <h5 id="error-text">Please enter a valid amount</h5>
        <br />
        <h5 style="float: left; margin-left: 10px" id="staking-line">
          You will be staking for x months
        </h5>
        <br />

        <div class="stake-text-info">
          <h4>Info about APY</h4>
          <h5>
            After each new deposit, all staked CP are subject to a 24H lock-up
            period! No impermanent loss, no loss of governance rights.
          </h5>
        </div>
        <br />
        <button
          v-on:click="transaction"
          id="stake-button"
          class="staking-button"
        >
          STAKE
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import store from "@/store";
import transaction from "@/mixins/transaction";
@Options({
  data() {
    return {
      amount: null,
    };
  },
  watch: {
    amount(newvalue, oldvalue) {
      //watcher on the amount
      //
      //getting elemnts from html dom
      let error_text = document.getElementById("error-text");
      let staking_line = document.getElementById("staking-line");
      let button = document.getElementById("stake-button");
      //
      //checking if the elements are not null
      if (staking_line && error_text && button) {
        //
        //checking the condition
        if (newvalue == 0 || newvalue > store.state.tokenBalance) {
          error_text.style.display = "block";
          staking_line.style.display = "none";
          button.style.cursor = "not-allowed";
        } else {
          if (staking_line && error_text) {
            error_text.style.display = "none";
            staking_line.style.display = "block";
            button.style.cursor = "pointer";
          }
        }
      }
    },
  },
  methods: {
    transaction() {
      //
      //making element ready to send to the smart contract
      let amt1 = (this.amount * 1e18).toString();
      if (this.amount <= store.state.tokenBalance && this.amount > 0) {
        //
        //if the condition satisfy we will send the transaction else alert
        transaction.prototype.stakingTransaction(amt1);
      } else {
        alert("please enter a valid amount");
      }
    },
    maxfunction() {
      this.amount = store.state.tokenBalance;
    },
  },
})
export default class Staking extends Vue {
  public get tokenBalance(): number | null {
    return store.state.tokenBalance;
  }
}
</script>
<style lang="scss">
#error-text {
  float: left;
  color: red;
  display: none;
  margin-left: 10px;
}
.staking-button {
  width: 100%;

  border-radius: 5px;
  font-family: "Inter var", sans-serif;
  color: black;
  font-size: 20px;
  background: rgb(199, 164, 199);
  padding: 10px 10px 10px 10px;
  text-decoration: none;

  border: 0.5px solid rgb(148, 144, 144);
  cursor: pointer;
}
.staking-button:disabled,
.staking-button[disabled] {
  background-color: white;
  cursor: not-allowed;
}

.stake-text-info {
  border: #99a3ba solid 1px;
  border-radius: 10px;
  width: 100%;
  margin-top: 150px;
  background-color: rgba(35, 33, 45, 255);
}
.max-button-stake {
  border: #99a3ba solid 1px;
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
  border: #99a3ba solid 1px;
  border-radius: 10px 0px 0px 10px;
  background: transparent;
  color: #99a3ba;
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
  border: 1px solid rgba(42, 43, 61, 255);
  background-color: rgba(42, 43, 61, 255); /* Black w/ opacity */
  color: white;
  margin: 2% auto; /* 15% from the top and centered */
  padding: 20px;
  border-radius: 20px;
  width: 30%; /* Could be more or less, depending on screen size */
  text-align: center;
  height: auto;
}
.heading {
  color: rgb(199, 164, 199);
  font-family: "Inter var", sans-serif;
}
</style>