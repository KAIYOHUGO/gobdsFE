<template>
  <div
    class="w-full h-full bg-black rounded-xl text-white p-6 leading-8 relative"
  >
    <div class="absolute top-0 left-0 w-full h-full p-6 overflow-auto">
      <span>test output <br /></span>
      <span>test output <br /></span>
      <span
        >test output
        tooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo<br
      /></span>
    </div>
    <div class="w-full flex absolute bottom-6 left-0 px-4">
      <input type="text" class="w-full block rounded mr-2 px-2 text-black" />
      <button class="block">
        <PaperAirplaneIcon class="h-7 transform rotate-90"></PaperAirplaneIcon>
      </button>
    </div>
  </div>
</template>
<script>
import { PaperAirplaneIcon } from "@heroicons/vue/solid";

export default {
  name: "terminal",
  components: { PaperAirplaneIcon },
};
</script>