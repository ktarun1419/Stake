<template>
  <div>
    <table class="table2">
      <tr>
        <td style="width: 100%">GasPrice</td>
        <td>{{ gasPrice }}Gwei</td>
      </tr>
      <tr>
        <td>Waiting Time</td>
        <td>{{ gasTime }}min</td>
      </tr>
      <td>Block Time</td>
      <td>{{ blockTime }}sec</td>
    </table>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import store from '@/store';
@Options({})
export default class GasTable extends Vue {
    public get blockTime() : string {
    return store.state.blockTime
  }
   public get gasTime() : string {
    return store.state.gasTime
  } public get gasPrice() : string | null{
    return store.state.gasPrice
  }
}
</script>

<style>
.table2 {
 
  width: 100%;
   
}
</style>