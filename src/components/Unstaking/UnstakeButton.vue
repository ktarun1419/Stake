<template>
  <div>
       <button class="unstaking-button">Unstake</button>
  </div>
</template>

<script>
import { Vue} from "vue-class-component";

export default class UnstakeButton extends Vue {

}
</script>

<style>
.unstaking-button{
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
</style>