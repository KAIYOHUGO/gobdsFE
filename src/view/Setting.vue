<template>
  <div class="w-full h-full gap-20 flex flex-wrap flex-row overflow-y-auto">
    <!-- signout -->
    <form @submit.prevent="loginout()">
      <h1 class="text-2xl mb-4">Account</h1>
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
        "
        type="submit"
        id="signout"
      >
        Signout <LogoutIcon class="inline-block h-7"></LogoutIcon>
      </button>
    </form>

    <!-- change password -->
    <form @submit.prevent="changeConfig(varOldPassword, varPassword)">
      <h1 class="text-2xl mb-4">Change Password</h1>
      <label for="password" class="inline-block mb-2 text-l whitespace-nowrapg"
        >Old Password</label
      >
      <input
        type="password"
        id="password"
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
        v-model="varOldPassword"
      />
      <label for="password" class="inline-block mb-2 text-l whitespace-nowrapg"
        >New Password</label
      >
      <input
        type="password"
        id="password"
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
        v-model="varPassword"
      />
      <label for="check-password" class="inline-block mb-2 whitespace-nowrap"
        >Type New Password Again</label
      >
      <input
        type="password"
        id="check-password"
        class="
          rounded
          bg-gray-200
          mb-2
          block
          focus:bg-gray-500
          focus:text-white
          transition-colors
          duration-500
        "
        v-model="varCheckPassword"
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
        :disabled="varPassword != varCheckPassword || varPassword == ''"
      >
        Change Password
      </button>
    </form>

    <!-- new server -->
    <form @submit.prevent="callNewServer">
      <h1 class="text-2xl mb-4">Create New Server</h1>
      <label for="server-name" class="inline-block mb-2 whitespace-nowrap"
        >New Server Name</label
      >
      <input
        type="text"
        id="server-name"
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
        v-model="varNewServerName"
      />
      <label for="server-path" class="inline-block mb-2 whitespace-nowrap"
        >New Server Path</label
      >
      <input
        type="text"
        id="server-path"
        class="
          rounded
          bg-gray-200
          mb-2
          block
          focus:bg-gray-500
          focus:text-white
          transition-colors
          duration-500
        "
        v-model="varNewServerPath"
      />

      <label for="server-command" class="inline-block mb-2 whitespace-nowrap"
        >New Server Command</label
      >
      <input
        type="text"
        id="server-command"
        class="
          rounded
          bg-gray-200
          mb-2
          block
          focus:bg-gray-500
          focus:text-white
          transition-colors
          duration-500
        "
        v-model="varNewServerCommand"
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
        :disabled="varNewServerName == '' || varNewServerPath == ''"
      >
        Add New Server
      </button>
    </form>

    <!-- new account -->
    <form
      @submit.prevent="
        createAccount(varNewAccountName, varNewAccountPassword);
        varNewAccountName =
          varNewAccountPassword =
          varNewAccountCheckPassword =
            '';
      "
    >
      <h1 class="text-2xl mb-4">Create New Account</h1>
      <label for="account-name" class="inline-block mb-2 whitespace-nowrap"
        >New Account Name</label
      >
      <input
        type="password"
        id="account-name"
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
        v-model="varNewAccountName"
      />
      <label for="account-password" class="inline-block mb-2 whitespace-nowrap"
        >New Account Password</label
      >
      <input
        type="password"
        id="account-password"
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
        v-model="varNewAccountPassword"
      />
      <label
        for="account-check-password"
        class="inline-block mb-2 whitespace-nowrap"
        >Type New Account Password Again</label
      >
      <input
        type="password"
        id="account-check-password"
        class="
          rounded
          bg-gray-200
          mb-2
          block
          focus:bg-gray-500
          focus:text-white
          transition-colors
          duration-500
        "
        v-model="varNewAccountCheckPassword"
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
        :disabled="
          varNewAccountPassword != varNewAccountCheckPassword ||
          varNewAccountPassword == '' ||
          varNewAccountName == ''
        "
      >
        Add New Account
      </button>
    </form>

    <!-- delete server -->
    <form @submit.prevent="callDeleteServer">
      <h1 class="text-2xl mb-4">Delete This Sevre</h1>
      <label
        for="delete-server-name"
        class="inline-block mb-2 whitespace-nowrap"
        >Retype This Server Name</label
      >
      <input
        type="text"
        id="delete-server-name"
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
        v-model="varDeleteServerName"
      />
      <button
        class="
          rounded
          bg-gray-200
          block
          p-2
          hover:bg-red-600
          hover:text-white
          transition-colors
          duration-500
          disabled:opacity-50
          disabled:pointer-events-none
        "
        type="submit"
        :disabled="varDeleteServerName != 'servername'"
      >
        Delete Server
      </button>
    </form>
  </div>
</template>

<script>
import { LogoutIcon } from "@heroicons/vue/solid";
import { mapActions } from "vuex";
export default {
  name: "setting",
  components: { LogoutIcon },
  data() {
    return {
      varOldPassword: "",
      varPassword: "",
      varCheckPassword: "",
      varNewAccountName: "",
      varNewAccountPassword: "",
      varNewAccountCheckPassword: "",
      varNewServerName: "",
      varNewServerPath: "",
      varNewServerCommand: "",
      varDeleteServerName: "",
    };
  },
  methods: {
    callNewPassword() {},
    callSignout() {},
    callNewAccount() {},
    callDeleteServer() {},
    ...mapActions(["loginout", "changeConfig", "createAccount"]),
  },
};
</script>

<style lang="sass" scoped>
// .waterfall
//   column-count: auto
//   & > *
    // break-inside: avoid-column
</style>