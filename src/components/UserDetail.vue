<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{myName}}</p>
    <p>Age: {{userAge}}</p>
    <p>
      <button @click="switchName">Switch Name</button>
    </p>
    <p>
      <button @click="resetFn()">Reset Name</button>
    </p>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  // props: ["myName"],
  props: {
    myName: {
      type: String,
      required: true
      // default:"Daniel"
    },
    resetFn: {
      type: Function,
      required: true
    },
    userAge: {
      type: Number
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
      this.myName = "Name is reseted!";
      // $emit gibt ein event an das Parent zurück
      // und den Wert als zweiten Param.
      this.$emit("nameWasReset", this.myName);
    }
  },
  created() {
    eventBus.$on("ageWasChanged", age => {
      this.userAge = age;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
