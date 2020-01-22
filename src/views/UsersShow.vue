<template>
  <div class="container">
    <h1>Profile</h1>
    <p>{{ user.first_name }}</p>
    <p>{{ user.last_name }}</p>
    <p>Email: {{ user.email }}</p>
    <h2>Sent messages ({{ user.sent_messages.length }})</h2>
    <!-- v-for="sent_message in user.sent_messages" -->
    <div v-for="message in user.sent_messages">
      <p>{{ message.created_at }} {{ message.receiver_name }}: {{ message.body }}</p>
    </div>
    <h2>Recieved messages ({{ user.received_messages.length }})</h2>
    <!-- v-for="recieved_message in user.received_messages" -->
    <div v-for="message in user.received_messages">
      <p>{{ message.created_at }} {{ message.sender_name }}: {{ message.body }}</p>
    </div>
    <router-link to="/users">Back to all users</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: { sent_messages: [], received_messages: [] },
      sent_message: [],
      recieved_message: []
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      this.user = response.data;
    });
  },
  methods: {
    MessageButton: function() {
      console.log("create message");
    }
  }
};
</script>
