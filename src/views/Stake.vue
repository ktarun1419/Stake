<template>
  <div class="about">
    <Staking/>
  </div>
  
</template>
<script lang="ts">
import Staking from "@/components/Staking/Staking.vue";
import { Options, Vue } from 'vue-class-component';
@Options({
  components:{
    Staking
  }
})
export default class Stake extends Vue{

}
</script>

