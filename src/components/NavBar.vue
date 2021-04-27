<template>
  <el-aside class="py-2">
    <el-tabs tab-position="left">
      <el-tab-pane v-for="el in NavBarList" :key="el.label" :label="el.label">
        {{ el.router }}
      </el-tab-pane>
    </el-tabs>
  </el-aside>
</template>
<script>
import NavBarList from "@/js/NavBarList.js";
export default {
  name: "nav-bar",
  data() {
    return { NavBarList };
  },
};
</script>
<style lang="sass" scoped>
</style>