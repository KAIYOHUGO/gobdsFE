<template>
  <alert
    v-for="(el, i) in alerts"
    :key="i"
    @close="popAlert()"
    :level="el.level"
  >
    <h1 class="text-2xl m-4">{{ el.status }}</h1>
    {{ el.message }}
  </alert>
  <div
    class="inline-flex w-screen h-screen overflow-hidden text-lg"
    :class="isLogin ? '' : 'hidden'"
  >
    <side-bar></side-bar>
    <div class="m-0 p-8 flex-1 h-full">
      <terminal v-show="tabID == 'terminal'"></terminal>
      <setting v-show="tabID == 'setting'"></setting>
      <file v-show="tabID == 'file'"></file>
    </div>
  </div>
  <div
    class="
      w-screen
      h-screen
      overflow-hidden
      text-lg
      flex
      justify-center
      items-center
      bg-blue-400
    "
    :class="isLogin ? 'hidden' : ''"
  >
    <login></login>
  </div>

  <!-- <transition name="loading">
    <div v-show="IsConnect">
      <nav-bar></nav-bar>
    </div>
  </transition> -->
</template>

<script>
import SideBar from "@/view/SideBar.vue";
import Terminal from "@/view/Terminal.vue";
import Setting from "@/view/Setting.vue";
import File from "@/view/File.vue";
import Login from "@/view/Login.vue";
import Alert from "@/components/Alert.vue";
import { mapMutations, mapState } from "vuex";
export default {
  setup() {},
  data() {},
  components: {
    SideBar,
    Terminal,
    Setting,
    File,
    Login,
    Alert,
  },
  methods: {
    ...mapMutations(["popAlert"]),
  },
  computed: {
    ...mapState(["tabID", "isLogin", "alerts"]),
  },
};
</script>

<style lang="sass" scoped>
</style>