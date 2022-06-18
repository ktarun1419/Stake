<template>
  <div>
    <div class="modal-unstake">
      <div class="modal-unstake-content">
        <div>
          <h2 class="heading">Unstake</h2>
        </div>
        <!-- <div class="form-group">
    
    <input class="form-field" type="Number" placeholder="Enter Amount" >
    <span>MAX</span>
    <span>Balance-20000</span>
</div> -->
        <div class="input-balance-box">
          <h5 class="input-text">Input</h5>
          <h5 class="balance-text">Staked-{{ amountStaked }}</h5>
        </div>
        <div class="divi1">
          <input
            class="input-box"
            placeholder="0.0"
            type="number"
            min="0"
            v-model="this.amount_unstake"
          />
          <button class="max-button" @click="maxfunction">MAX</button>
        </div>
        <br />
        <h5 id="error-text-unstake">Please enter a valid amount</h5>
        <br />
        <div class="unstake-text-info">
          <h4>Warning</h4>
          <h5>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
            magnam. Earum in soluta consequuntur libero laboriosam debitis
            officia, maxime veniam r eius aut asperiores ut eligendi.
          </h5>
        </div>
        <br />
        <UnstakeButton @click="unstake" id="unstake-button" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import { Options, Vue } from "vue-class-component";
import transaction from "@/mixins/transaction";
@Options({
  data() {
    return {
      amount_unstake: null,
    };
  },
  watch: {
    amount_unstake(newvalue, oldvalue) {
      //watcher on the amount
      //
      //getting elemnts from html dom
      let error_text = document.getElementById("error-text-unstake");
      let button = document.getElementById("unstake-button");
      //
      //checking if the elements are not null
      if (error_text && button) {
        //
        //checking the condition
        if (newvalue == 0 || newvalue > store.state.amountStaked) {
          //
          //changingb the attributes of style as needed
          error_text.style.display = "block";
          button.style.cursor = "not-allowed";
        } else {
          error_text.style.display = "none";
          button.style.cursor = "pointer";
        }
      }
    },
  },
  methods: {
    unstake() {
      //
      //making element ready to send to the smart contract
      let amt = (this.amount_unstake * 1e18).toString();
      //
      //if the condition satisfy we will send the transaction else alert
      if (
        this.amount_unstake != 0 &&
        this.amount_unstake <= store.state.amountStaked
      ) {
        transaction.prototype.unstakingTransaction(amt);
      } else {
        alert("Please Enter a valid amount");
      }
    },
    //
    //function for setting the max
    maxfunction() {
      this.amount_unstake = store.state.amountStaked;
    },
  },
})
export default class Unstaking extends Vue {
  public get amountStaked(): string | number {
    return store.state.amountStaked;
  }
}
</script>

<style>
.unstaking-button {
  width: 100%;

  border-radius: 5px;
  font-family: "Inter var", sans-serif;
  color: black;
  font-size: 20px;
  background: rgba(199, 164, 199, 0.9);
  padding: 10px 10px 10px 10px;
  text-decoration: none;

  border: 0.5px solid rgb(148, 144, 144);
  cursor: pointer;
}
#error-text-unstake {
  float: left;
  color: red;
  display: none;
}
.unstake-text-info {
  border: #99a3ba solid 1px;
  border-radius: 10px;
  width: 100%;
  margin-top: 120px;
  background-color: rgba(241, 132, 132, 0.555);
}
.table3 {
  margin-top: 20px;
  width: 100%;
}
.divu1 {
  padding-top: 30px;
}
.modal-unstake {
  display: block;
  position: fixed; /* Stay in place */

  left: 0;
  width: 100%; /* Full width */
  height: 80%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
}

/* Modal Content/Box */
.modal-unstake-content {
  border: 1px solid rgba(42, 43, 61, 255);
  background-color: rgba(42, 43, 61, 255); /* Black w/ opacity */
  color: white;
  margin: 3% auto; /* 15% from the top and centered */
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
.max-button {
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
.input-box {
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
</style>