<template>
  <div class="row">
    <app-server-list></app-server-list>
    <app-server-details></app-server-details>
  </div>
</template>

<script>
import ServerList from "./ServerList.vue";
import ServerDetails from "./ServerDetails.vue";

export default {
  components: {
    "app-server-list": ServerList,
    "app-server-details": ServerDetails
  }
};
</script>

<style>
</style>
