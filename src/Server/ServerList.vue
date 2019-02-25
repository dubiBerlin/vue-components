<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li class="list-group-item" v-for="index in 5" v-bind:key="randomString">Server #{{ index }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    randomString() {
      return Math.random()
        .toString(36)
        .substring(7);
    }
  }
};
</script>

<style>
</style>
