<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li
        class="list-group-item"
        style="cursor: pointer"
        v-for="server in servers"
        @click="selectServer"
        v-bind:id="server.id-1"
      >Server #{{ server.id }} Status: {{server.status}}</li>
    </ul>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  data: function() {
    return {
      servers: [
        { id: 1, status: "Normal" },
        { id: 2, status: "Critical" },
        { id: 3, status: "Unknown" },
        { id: 4, status: "Critical" },
        { id: 5, status: "Pausing" },
        { id: 6, status: "Normal" }
      ]
    };
  },
  methods: {
    selectServer(event) {
      eventBus.selectServer(this.servers[event.target.id]);
    },
    randomString() {
      return Math.random()
        .toString(36)
        .substring(7);
    }
  },
  created() {
    eventBus.$on("statusChanged", server => {
      this.servers[server.id - 1].status = server.status;
    });
  }
};
</script>

<style>
</style>
