<template>
  <transition name="loading">
    <div v-show="IsConnect">
      <nav-bar></nav-bar>
    </div>
  </transition>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  setup() {
    return { IsConnect: true };
  },
  data() {},
  components: {
    NavBar,
  },
};
</script>

<style lang="sass" scoped>
.loading-enter-active,.loading-leave-active
  transition: opacity .5s
.loading-enter
  opacity: 0
</style>