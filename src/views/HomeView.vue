<template>
  <div class="home">
    
    <Dashboard />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Dashboard from "@/components/Dashboard/Dashboard.vue";
import store from '@/store';
@Options({
  data(){
    return{
    }
  },
  components: {
  Dashboard
    
  },
})
export default class HomeView extends Vue {
  
}
</script>
