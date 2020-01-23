<template id="home-page">
  <div class="container">
    <h1>Quick Search All Pets</h1>
    <br />
    <input class="form-control" list="pets-list" type="text" v-model="titleFilter" placeholder="" />
    <datalist id="pets-list">
      <option v-for="pet in lost_pets">{{ pet.name }}</option>
    </datalist>
    <br />
    <button v-on:click="submitSearch()" class="btn btn-primary">Search</button>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
export default {
  data: function() {
    return {
      titleFilter: "",
      lost_pets: []
    };
  },
  created: function() {
    axios.get("/api/lost_pets").then(response => {
      this.lost_pets = response.data;
    });
  },
  methods: {
    submitSearch: function() {
      var id = this.lost_pets.filter(pet => pet.name === this.titleFilter)[0].id;
      this.$router.push("/lost_pets/" + id);
    }
  }
};
</script>
