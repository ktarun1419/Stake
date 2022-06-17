<template>
  <div>
    <div class="modal-dashboard">
      <div class="modal-content-dashboard">
        <div>
          <h1 class="heading">
            Dashboard
            <button class="unstake-button" v-on:click="unstake">Unstake</button>
            <button class="stake-button" v-on:click="stake">Stake</button>
          </h1>
          <h2 class="tokenname">CPSTAKE</h2>
        </div>
        <div class="div2">
          <h3 class="heading">Balance</h3>
          <svg
            class="circle-container"
            viewBox="2 -2 28 36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              class="circle-container__background"
              r="16"
              cx="16"
              cy="16"
            ></circle>
            <circle
              class="circle-container__progress"
              r="16"
              cx="16"
              cy="16"
              style="stroke-dashoffset: 23"
            ></circle>
          </svg>
          <h3 class="heading">{{ tokenBalance }} CP</h3>
        </div>
        <div class="div1">
          <h3 class="heading">Amount Staked</h3>
          <svg
            class="circle-container"
            viewBox="2 -2 28 36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              class="circle-container__background"
              r="16"
              cx="16"
              cy="16"
            ></circle>
            <circle
              class="circle-container__progress"
              r="16"
              cx="16"
              cy="16"
              style="stroke-dashoffset: 32"
            ></circle>
          </svg>
          <h3 class="heading">{{ amountStaked }} CP</h3>
        </div>
        <div class="div4">
          <Pricetable />
        </div>
        <div class="div3">
          <table class="table1">
            <tr>
              <td>Total Supply</td>
              <td>1000000.00</td>
            </tr>
            <tr>
              <td>Balance</td>
              <td>{{ tokenBalance }}</td>
            </tr>
            <tr>
              <td>Staked Amount</td>
              <td>{{ amountStaked }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Pricetable from "@/components/Dashboard/Pricetable.vue";
import store from "@/store";
@Options({
  components: {
    Pricetable,
  },
  methods: {
    //
    //changing router on clicking on stake button
    //
    stake() {
      this.$router.replace({ name: "Stake" });
    },
    //
    //changing router on clicking on unstake button
    unstake() {
      this.$router.replace({ name: "Unstake" });
    },
     //
  //function for changing the circle stroke
  //
    change() {
      let circle = document.querySelectorAll("circle");
      if (circle) {
        let value: number = (store.state.tokenBalance / 1000000) * 100;
        let value2: number =
          (store.state.amountStaked / store.state.tokenBalance) * 100;
        if (value) {
          circle[1].style.strokeDashoffset = (100 - value).toString();
        } else {
          circle[1].style.strokeDashoffset = (100 - 0).toString();
        }
        if (value2) {
          circle[3].style.strokeDashoffset = (100 - value2).toString();
        } else {
          circle[3].style.strokeDashoffset = (100 - 0).toString();
        }
      }
    },
  },
  mounted() {
    this.change();
  },
})
export default class Dashboard extends Vue {
  //
  //getting token balance from store
  //
  public get tokenBalance(): number | null {
    return store.state.tokenBalance;
  }
  //
  //getting staked amount from store
  //
  public get amountStaked(): string | number {
    return store.state.amountStaked;
  }
}
</script>

<style>
.tokenname {
  text-align: center;
  color: rgb(199, 164, 199);
  font-family: "Inter var", sans-serif;
}
.stake-button {
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 5px;
  font-family: "Inter var", sans-serif;
  color: black;
  font-size: 15px;
  background: rgb(199, 164, 199);
  padding: 10px 5px 10px 5px;
  text-decoration: none;
  width: 120px;
  float: right;
  border: 0.5px solid rgb(148, 144, 144);
  cursor: pointer;
  margin: 5px;
}
.unstake-button {
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 5px;
  font-family: "Inter var", sans-serif;
  color: black;
  font-size: 15px;
  float: right;
  background: rgb(250, 250, 250);
  padding: 10px 5px 10px 5px;
  text-decoration: none;
  width: 120px;
  border: 0.5px solid rgb(148, 144, 144);
  cursor: pointer;
  margin: 5px;
}
.div4 {
  display: inline-block;
  padding: 1px;
  vertical-align: 180px;
  margin-left: 5%;
}
.div3 {
  display: inline-block;
  padding: 1px;
  margin-left: 8%;
  margin-top: -150px;
}
.div1 {
  display: inline-block;
  margin-left: 5%;
  text-align: center;
}
.div2 {
  display: inline-block;
  margin-left: 5%;
  text-align: center;
}
.modal-dashboard {
  display: block;
  position: fixed; /* Stay in place */

  left: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
}

/* Modal Content/Box */
.modal-content-dashboard {
  border: 1px solid rgba(42,43,61,255);
  background-color: rgba(42,43,61,255); /* Black w/ opacity */
  color: white;
  margin: 4% auto; /* 15% from the top and centered */
  padding: 20px;
  border-radius: 20px;
  width: 50%; /* Could be more or less, depending on screen size */
  text-align: left;
  align-content: center;
  height: auto;
}
.heading {
  color: rgb(199, 164, 199);
  font-family: "Inter var", sans-serif;
}

:root {
  --dot-diameter: 150px;
  --circle-border-width: 4px;
  --default-color: rgba(35,33,45,255);
  --completion-color: rgb(199, 164, 199);
}

.circle-container {
  width: var(--dot-diameter);
  height: var(--dot-diameter);
  transform: rotate(-90deg);
}

.circle-container__background {
  fill: none;
  stroke: var(--default-color);
  stroke-width: var(--circle-border-width);
}

.circle-container__progress {
  fill: none;
  stroke-linecap: round;
  stroke: var(--completion-color);
  stroke-dasharray: 100 100;
  stroke-linecap: round;
  stroke-width: var(--circle-border-width);
  transition: stroke-dashoffset 1s ease-in-out;
  will-change: transform;
}
.table1 {
  display: inline-block;
  height: 180px;
  overflow-y: scroll;
  margin-top: -60px;
}
</style>