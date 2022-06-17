<template>
  <div id="app">
    <img src="@/assets/black.jpeg" alt="" class="bg" />
    <Topbar/>
    <Sidebar/>
    <router-view/>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Topbar from "@/components/Topbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import {  mapActions } from "vuex";
import metamask from "@/mixins/metamask";
@Options({
  components:{
 Topbar,
Sidebar,
  },
  beforeCreate(){
    metamask.prototype.provider1()
  },
  mounted(){
 
  },
  created() {
      setInterval(() => {
       this.renderData();   
      }, 10000);
      this.renderData()
  },
  methods: {
    ...mapActions(["fetchUsers"]),
    async renderData() {
      await this.fetchUsers();
      
    },
    refresh() {
      this.renderData();
    },
  },
})
export default class App extends Vue{
 

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
 
}
#bg {
  position: fixed;
  top: 0;
  left: 0;

  /* Preserve aspet ratio */
  min-width: 100%;
  min-height: 100%;
}
img.bg {
  /* Set rules to fill background */
  min-height: 100%;
  min-width: 1024px;

  /* Set up proportionate scaling */
  width: 100%;
  height: auto;

  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
}


</style>
