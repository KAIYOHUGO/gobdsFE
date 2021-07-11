<template>
  <form
    @submit.prevent="login([varServerUrl, varLoginName, varLoginPassword])"
    class="p-10 bg-gray-50 rounded"
  >
    <h1 class="text-2xl mb-4">Login To Server</h1>
    <label for="server-url" class="inline-block mb-2 whitespace-nowrap"
      >Server Url</label
    >
    <input
      type="text"
      id="server-url"
      class="
        rounded
        bg-gray-200
        block
        mb-2
        focus:bg-gray-500
        focus:text-white
        transition-colors
        duration-500
      "
      v-model="varServerUrl"
    />
    <label for="login-user-name" class="inline-block mb-2 whitespace-nowrap"
      >Name</label
    >
    <input
      type="text"
      id="login-user-name"
      class="
        rounded
        bg-gray-200
        block
        mb-2
        focus:bg-gray-500
        focus:text-white
        transition-colors
        duration-500
      "
      v-model="varLoginName"
    />
    <label for="login-user-password" class="inline-block mb-2 whitespace-nowrap"
      >Password</label
    >
    <input
      type="password"
      id="login-user-password"
      class="
        rounded
        bg-gray-200
        block
        mb-2
        focus:bg-gray-500
        focus:text-white
        transition-colors
        duration-500
      "
      v-model="varLoginPassword"
    />
    <button
      class="
        rounded
        bg-gray-200
        block
        p-2
        hover:bg-gray-500
        hover:text-white
        transition-colors
        duration-500
        disabled:opacity-50
        disabled:pointer-events-none
      "
      type="submit"
      :disabled="!(varLoginName && varLoginPassword && varServerUrl)"
    >
      Login
    </button>
  </form>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "login",
  data() {
    return {
      varServerUrl: "",
      varLoginName: "",
      varLoginPassword: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
  },
};
</script>