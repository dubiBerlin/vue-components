import Vue from "vue";
import App from "./App.vue";
import Home from "./Home.vue";
import Header from "./Shared/Header.vue";
import Footer from "./Shared/Footer.vue";
import Main from "./Server/Main.vue";

Vue.component("app-servers", Home);
Vue.component("app-header", Header);
Vue.component("app-footer", Footer);
Vue.component("app-main", Main);

export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit("ageWasChanged", age);
    },
    selectServer(server){
      this.$emit("serverSelected", server);
    },
    changeServerStatus(status){
      this.$emit("statusChanged", status);
    }
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
