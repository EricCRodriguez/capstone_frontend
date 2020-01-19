<template>
  <div class="container">
    <h1>Show Lost Pets</h1>
    <div v-for="lost_pet in lost_pets">
      <img v-bind:src="lost_pet.picture" alt="" />

      <h2>{{ lost_pet.name }}</h2>
      <h2>{{ lost_pet.address }}</h2>
      <h2>{{ lost_pet.age }}</h2>
      <h2>{{ lost_pet.search_area }}</h2>
      <h2>{{ lost_pet.breed }}</h2>
      <h2>{{ lost_pet.color }}</h2>
      <h2>{{ lost_pet.size }}</h2>
      <h2>{{ lost_pet.gender }}</h2>
      <h2>{{ lost_pet.behaviour_type }}</h2>
      <h2>{{ lost_pet.picture }}</h2>
      <router-link to="/lost_pets">Back to all lost_pets</router-link>
    </div>
    <button v-on:click="showMessage(message)">Show more</button>
    <div v-if="currentMessage === message">
      <p>Body: {{ message.body }}</p>
      <p>Picture: {{ message.picture }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message_bodies: [],
      currentMessage: {},
      newMessageBody: "",
      newPhotoPicture: ""
    };
  },
  created: function() {
    axios.get("/api/message_bodies/" + this.$route.params.id).then(response => {
      this.message_bodies = response.data;
    });
  },
  methods: {
    createMessage: function() {
      var params = {
        body: this.newMessageBody,
        picture: this.newMessagePicture
      };
      axios.post("/api/message_bodies", params).then(response => {
        this.message_bodies.push(response.data);
        this.newMessageBody = "";
        this.newMessagePicture = "";
      });
    },
    showMessage: function(message) {
      if (this.currentMessage === message) {
        this.currentMessage = {};
      } else {
        this.currentMessage = message;
      }
    }
  }
};
</script>
