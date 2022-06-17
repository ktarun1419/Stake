<template>
  <div>
    <div class="sidenav">
  
  <a ><img src="@/assets/dashboard.png"  v-on:click="dashboard"></a>
  
  <a ><img src="@/assets/stable.png"  v-on:click="stake"></a>
  <a ><img src="@/assets/stake.png"  @click="unstake"></a>
  <a ><img src="@/assets/blockchain.png" @click="setting"></a>
  

        
        </div>
  </div>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component';


@Options({
  methods:{
    dashboard(){
      this.$router.replace({name:"Dashboard"})
      console.log('route')
    },
    stake(){
      this.$router.replace({name:"Stake"})
    },
    unstake(){
      this.$router.replace({name:"Unstake"})
    },
    setting(){
      this.$router.replace({name:"Unstake"})
    }
  }
})
export default class Sidebar extends Vue{

}
</script>

<style>
.sidenav {
  height:100%; /* Full-height: remove this if you want "auto" height */
  width: 7%; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: rgb(199, 164, 199); /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
  align-content: center;
  border-radius: 10px;
 

}

/* The navigation menu links */
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #fffbfb;
  display: block;
  margin-top: 100px;
  
  
}
.sidenav img {
  width: 50%;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
  
  
}

/* Style page content */
.main {
  margin-left: 160px; /* Same as the width of the sidebar */
  padding: 0px 10px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
@media screen and (max-width: 450px) {
  .sidenav {padding-top: 15px;
  width: 10%;
  }
  .sidenav a {font-size: 18px;}
  .sidenav img{
    width: 100%;
}
}

</style>