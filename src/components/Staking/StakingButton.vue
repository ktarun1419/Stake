<template>
  <div>
       <button class="staking-button">Stake</button>
  </div>
</template>

<script lang="ts">

import { Vue ,Options} from "vue-class-component";

@Options({
    
    
})
export default class UnstakeButton extends Vue {

}
</script>

<style>
.staking-button{
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
</style>