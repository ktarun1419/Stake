<template>
  <div>
    <table>
      <img src="@/assets/refresh.png" @click="refresh" />
      <tr>
        <th>Crypto</th>
        <th></th>
        <th>Price(USD)</th>
      </tr>
      <tr>
        <td style="">BTC  </td>
        <td><img src="@/assets/bitcoin1.png" /></td>
        <td>${{ getBitcoinPrice }}</td>
      </tr>
      <tr>
        <td>ETH  </td>
        <td><img src="@/assets/ethereum.png" /></td>
        <td>${{ getEthereumPrice }}</td>
      </tr>
      <tr>
        <td>BNB  </td>
        <td><img src="@/assets/binance.png" /></td>
        <td>${{ getBnbPrice }}</td>
      </tr>
      <tr>
        <td>MATIC</td>
        <td><img src="@/assets/polygon.png" /></td>
        <td>${{ getMaticPrice }}</td>
      </tr>
      <tr>
        <td>XRP </td>
        <td><img src="@/assets/xrp.png" /></td>
        <td>${{ getXrpPrice }}</td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import store from "@/store";
import { Options, Vue } from "vue-class-component";

@Options({
  
})
export default class Pricetable extends Vue {
  public get getEthereumPrice() {
    return store.state.ethereumPrice;
  }
  public get getBitcoinPrice() {
    return store.state.bitcoinPrice;
  }
  public get getBnbPrice() {
    return store.state.binancePrice;
  }
  public get getMaticPrice() {
    return store.state.maticPrice;
  }
  public get getXrpPrice() {
    return store.state.xrpPrice;
  }
}
</script>
<style>
th,
td {
  border-bottom: 0.5px solid rgba(199, 164, 199, 0.9);
 
  
  padding: 18px;
  text-align: left;
  color: white;
  font-family: "Inter var", sans-serif;
  font-weight: 600;
}
table {
  display: inline-block;
  
  
}
img {
  width: 27px;
  cursor: pointer;
}
</style>