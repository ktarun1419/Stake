<template>
  <div>
    <div>
      <nav id="menu">
        <input
          type="checkbox"
          id="responsive-menu"
          onclick="updatemenu()"
        /><label></label>
        <ul>
          <li></li>
          <li>
            <a>{{ getWalletAdress }}</a>
          </li>
          <li>
            <a>{{ getNetwork }}</a>
          </li>
          <li>
            <a>{{ getethbalance }}:ETH </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang='ts'>
import { Options, setup, Vue } from "vue-class-component";
import store from "@/store";

@Options({
  mounted() {
    const handler = () => {
      window.location.reload();
    };
    window.ethereum.on("accountsChanged", handler);
    window.ethereum.on("chainChanged", handler);
  },
  methods: {},
})
export default class Topbar extends Vue {
  public get getWalletAdress(): string | null {
    return store.state.topbarAcc;
  }

  public get getethbalance(): number | null {
    return store.state.ethBalance;
  }
  public get getChainId(): string | null {
    return store.state.chainId;
  }

  public get getNetwork(): string | null {
    return store.state.network;
  }
  created() {}
  computed() {
    console.log("component loaded");
  }
}
</script>

<style>
#menu {
  background: transparent;
  color: #ffffff;
  height: 20px;
  padding-left: 18px;
  border-radius: 12px;
  border-bottom: 1px solid #000000;
  z-index: 7;
}
#menu ul,
#menu li {
  margin: 0 auto;
  padding: 0;
  list-style: none;
  z-index: 7;
}
#menu ul {
  width: 100%;
  z-index: 7;
}
#menu li {
  float: right;
  margin-right: 10px;
  display: inline;
  position: relative;
  margin-top: 20px;
  z-index: 7;
}
#menu a {
  cursor: pointer;
  display: block;
  line-height: 43px;
  padding: 5px 7px;
  text-decoration: none;
  font-weight: 500;
  color: black;
  font-size: 15px;
  background-color: rgb(199, 164, 199);

  border-radius: 20px;
  font-size: 15px;
  text-transform: capitalize;
  font-family: "Inter var", sans-serif;
  z-index: 7;
}
#menu a.dropdown-arrow:after {
  content: "\25BE";
  margin-left: 5px;
  z-index: 7;
}
#menu li a:hover {
  color: #000000;
  background: transparent;
  font-weight: 900;
  z-index: 7;
  background-color: white;
  opacity: 0.7;
  border-radius: 20px;
}
#menu input {
  display: none;
  margin: 0;
  padding: 0;
  height: 45px;
  width: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 7;
}
#menu label {
  display: none;
  line-height: 43px;
  text-align: center;
  position: absolute;
  left: 35px;
  z-index: 7;
}
#menu label:before {
  font-size: 1.6em;
  content: "\2261";
  margin-left: 20px;
  z-index: 7;
}
#menu ul.sub-menus {
  height: auto;
  overflow: hidden;
  width: 170px;
  background: transparent;
  position: absolute;
  z-index: 99;
  display: none;
  z-index: 7;
}
#menu ul.sub-menus li {
  display: block;
  width: 100%;
  z-index: 7;
}
#menu ul.sub-menus a {
  color: #575757;
  font-size: 16px;
  z-index: 7;
}
#menu li:hover ul.sub-menus {
  display: block;
}
#menu ul.sub-menus a:hover {
  background: #ffffff;
  color: #000000;
}
@media screen and (max-width: 800px) {
  #menu {
    position: relative;
  }
  #menu ul {
    background: #111;
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    z-index: 3;
    height: auto;
    display: none;
  }
  #menu ul.sub-menus {
    width: 100%;
    position: static;
  }
  #menu ul.sub-menus a {
    padding-left: 30px;
  }
  #menu li {
    display: block;
    float: none;
    width: auto;
  }
  #menu input,
  #menu label {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
  }
  #menu input {
    z-index: 4;
  }
  #menu input:checked + label {
    color: white;
  }
  #menu input:checked + label:before {
    content: "\00d7";
  }
  #menu input:checked ~ ul {
    display: block;
  }
}
</style>