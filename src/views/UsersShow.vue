<template>
  <div class="container">
    <h1>Profile</h1>
    <h2>{{ user.first_name }}</h2>
    <h2>{{ user.last_name }}</h2>
    <p>Email: {{ user.email }}</p>
    <p>Sent messages: {{ user.sent_messages }}</p>
    <p>Recieved messages: {{ user.recieved_messages }}</p>

    <router-link to="/users">Back to all users</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: {}
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      this.user = response.data;
    });
  },
  methods: {}
};
</script>
