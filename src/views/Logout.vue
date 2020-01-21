<template>
  <div class="logout"></div>
</template>
<script>
import axios from "axios";
export default {
  created: function() {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    localStorage.removeItem("user_id");
    this.$parent.user_id = null;
    this.$router.push("/");
  }
};
</script>
