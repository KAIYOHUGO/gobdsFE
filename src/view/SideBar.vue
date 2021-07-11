<template>
  <nav class="h-screen w-60 bg-gray-200 block">
    <!-- logo -->
    <h1 class="text-6xl text-center py-10">GOBDS</h1>
    <hr class="border-gray-500 w-52 my-2 mx-auto" />

    <ul class="text-lg text-gray-700 h-full">
      <li
        class="
          hover:bg-gray-500
          hover:text-white
          transition-colors
          duration-500
        "
      >
        <!-- collapes -->
        <button
          class="p-4 text-left outline-none w-full"
          @click="
            isOpen = !isOpen;
            getServers();
          "
        >
          <ServerIcon class="inline h-7"></ServerIcon> Server
          <ChevronDownIcon class="inline h-7 float-right"></ChevronDownIcon>
        </button>
      </li>
      <ul
        class="
          ml-4
          transition-max-height
          duration-1000
          ease-linear
          overflow-hidden
        "
        :class="isOpen ? 'max-h-56' : 'max-h-0'"
      >
        <li
          class="
            hover:bg-gray-500
            hover:text-white
            transition-colors
            duration-500
          "
          v-for="el in servers"
          :key="el.name"
        >
          <button class="p-4 w-full text-left">{{ el.name }}</button>
        </li>
      </ul>

      <li
        class="
          hover:bg-gray-500
          hover:text-white
          transition-colors
          duration-500
        "
      >
        <button class="w-full p-4 text-left" @click="setTabID('file')">
          <FolderIcon class="inline h-7"></FolderIcon> Files
        </button>
      </li>
      <li
        class="
          hover:bg-gray-500
          hover:text-white
          transition-colors
          duration-500
        "
      >
        <button class="w-full p-4 text-left" @click="setTabID('terminal')">
          <TerminalIcon class="inline h-7"></TerminalIcon> Terminal
        </button>
      </li>
      <li
        class="
          hover:bg-gray-500
          hover:text-white
          transition-colors
          duration-500
        "
      >
        <button class="w-full p-4 text-left" @click="setTabID('setting')">
          <CogIcon class="inline h-7"></CogIcon> Setting
        </button>
      </li>
    </ul>
  </nav>
</template>
<script>
import {
  TerminalIcon,
  ServerIcon,
  CogIcon,
  FolderIcon,
  ChevronDownIcon,
} from "@heroicons/vue/solid";
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "side-bar",
  components: {
    TerminalIcon,
    ServerIcon,
    CogIcon,
    FolderIcon,
    ChevronDownIcon,
  },
  data() {
    return { isOpen: false };
  },
  methods: {
    ...mapMutations(["setTabID"]),
    ...mapActions(["getServers"]),
  },
  computed: {
    ...mapState(["servers"]),
  },
};
</script>
