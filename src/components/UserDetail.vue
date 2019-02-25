<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{myName}}</p>
    <p>
      <button @click="switchName">Switch Name</button>
    </p>
    <p>
      <button @click="resetName">Reset Name</button>
    </p>
  </div>
</template>

<script>
export default {
  // props: ["myName"],
  props: {
    myName: {
      type: String,
      required: true
      // default:"Daniel"
    }
  },
  methods: {
    switchName() {
      this.myName = this.myName // greift auf das prop element zu
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      this.myName = "Alo";
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
