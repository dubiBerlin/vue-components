<template>
  <div class="col-xs-12 col-sm-6 achso">
    <div  v-if="server.id!=''">
    <p>Selected Server</p>
      <span>Server id # {{this.server.id}}</span>
      <span>Status: {{this.server.status}} </span>
      <p><button @click="normalizeStatus">Normalize status</button></p>
    </div>
    <div v-else>
      <span >No server selected!</span>
    </div>
  </div>
</template>

<script>

import { eventBus } from "../main";


export default {
  data:()=>{
    return {
      server:{
        id:"",
        status:""
      }
    }
  },
  methods:{
    normalizeStatus(){
      this.server.status = "Normal";
      eventBus.changeServerStatus(this.server);
    }
  },
  created() {
    eventBus.$on("serverSelected", server => {
      this.server = server;
    });
  }
};
</script>

<style scoped>
div {
  
}
</style>
