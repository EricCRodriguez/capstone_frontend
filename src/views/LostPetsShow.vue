<template>
  <div class="container">
    <h1>Show Lost Pet</h1>
    <img v-bind:src="lost_pet.picture" alt="" />

    <h2>{{ lost_pet.name }}</h2>
    <h4>Submitted by {{ lost_pet.user_name }}</h4>
    <p>{{ lost_pet.address }}</p>
    <p>{{ lost_pet.age }}</p>
    <p>{{ lost_pet.search_area }}</p>
    <p>{{ lost_pet.breed }}</p>
    <p>{{ lost_pet.color }}</p>
    <p>{{ lost_pet.size }}</p>
    <p>{{ lost_pet.gender }}</p>
    <p>{{ lost_pet.behaviour_type }}</p>
    <p>{{ lost_pet.picture }}</p>

    <div>
      <h2>Send a message</h2>
    </div>
    <div>
      Message:
      <input type="text" v-model="newMessage" />
      <button v-on:click="createMessage()">Send Message</button>
      <router-link to="/lost_pets">Back to all lost_pets</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      lost_pet: {},
      newMessage: "",
      newMessagePicture: ""
    };
  },
  created: function() {
    axios.get("/api/lost_pets/" + this.$route.params.id).then(response => {
      this.lost_pet = response.data;
    });
  },
  methods: {
    createMessage: function() {
      var params = {
        body: this.newMessage,
        picture: this.newMessagePicture,
        receiver_id: this.lost_pet.user_id
      };
      axios.post("/api/message_bodies", params).then(response => {
        this.message_bodies.push(response.data);
        this.newMessageBodies = "";
        this.newMessagePicture = "";
      });
    },
    showMessage: function(message) {
      if (this.currentMessage === message) {
        this.currentMessage = {};
      } else {
        this.currentMessage = message;
      }
      axios.post("/api/message", params).then(response => {
        this.message.push(response.data);
        this.newPhotoName = "";
      });
    }
  }
};
</script>
