<template>
  <div class="about">
    <Unstaking />
  </div>
</template>
<script lang="ts">
import Unstaking from "@/components/Unstaking/Unstaking.vue";
import { Options, Vue } from "vue-class-component";
@Options({
  components: {
    Unstaking,
  },
})
export default class Stake extends Vue {}
</script>

