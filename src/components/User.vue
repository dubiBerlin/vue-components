<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change my name</button>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <!--  @nameWasReset: ist das event was im child definiert wurde
              name: name ist das eigene Data Property
              $event: enthält den übergebenen Wert von Child Component im event
        welches der zweite Parameter ist.-->
        <app-user-detail
          v-bind:myName="name"
          :resetFn="resetName"
          @nameWasReset="name = $event"
          :userAge="age"
        ></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit :userAge="age" @ageWasChanged="age = $event"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  data: function() {
    return { name: "Dubravko", age: 27 };
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  },
  methods: {
    changeName() {
      this.name = "Dubravka";
    },
    resetName() {
      this.name = "Name is reseted!";
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
