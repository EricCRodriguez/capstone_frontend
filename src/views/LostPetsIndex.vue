<template>
  <div class="container">
    <h1>Add Your Lost Pet</h1>
    <p>
      Name:
      <input type="text" v-model="newLost_PetName" />
      Address:
      <input type="text" v-model="newLost_PetAddress" />
      Age:
      <input type="text" v-model="newLost_PetAge" />
      Breed:
      <input type="text" v-model="newLost_PetBreed" />
      Color:
      <input type="text" v-model="newLost_PetColor" />
      Size:
      <input type="text" v-model="newLost_PetSize" />
      Gender:
      <input type="text" v-model="newLost_PetGender" />
      Behaviour Type:
      <input type="text" v-model="newLost_PetBehaviourType" />
      Picture:
      <input type="text" v-model="newLost_PetPicture" />
      <button v-on:click="createLost_Pet()">Create Lost Pet</button>
    </p>

    <!-- Portfolio Section -->
    <section class="page-section portfolio" id="portfolio">
      <div class="container">
        <!-- Portfolio Section Heading -->
        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Lost Pets</h2>

        <!-- Icon Divider -->
        <div class="divider-custom">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-star"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>

        <!-- Portfolio Grid Items -->
        <div class="row">
          <!-- Portfolio Item 1 -->
          <div v-for="lost_pet in lost_pets" class="col-md-6 col-lg-4">
            <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
              <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div class="portfolio-item-caption-content text-center text-white">
                  <p>Pet Name: {{ lost_pet.name }}</p>
                  <p>Age: {{ lost_pet.age }}</p>
                  <p>Address:{{ lost_pet.address }}</p>
                  <p>Breed: {{ lost_pet.breed }}</p>
                  <p>Color: {{ lost_pet.color }}</p>
                  <p>Size: {{ lost_pet.size }}</p>
                  <p>Gender: {{ lost_pet.gender }}</p>
                  <p>Characteristics: {{ lost_pet.behaviour_type }}</p>
                </div>
              </div>
              <img class="img-fluid" v-bind:src="lost_pet.picture" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <h1>All Lost Pets</h1>
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
      <router-link v-bind:to="`/lost_pets/:id${lost_pet.id}`">More details</router-link>
    </div>
  </div>
</template>

<style>
.portfolio-item img.img-fluid {
  height: 300px;
  width: 100%;
  object-fit: cover;
}
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      lost_pets: [],
      newLost_PetName: "",
      newLost_PetAddress: "",
      newLost_PetAge: "",
      newLost_PetSearchArea: "",
      newLost_PetBreed: "",
      newLost_PetColor: "",
      newLost_PetSize: "",
      newLost_PetGender: "",
      newLost_PetBehaviourType: "",
      newLost_PetPicture: ""
    };
  },
  created: function() {
    axios.get("/api/lost_pets").then(response => {
      this.lost_pets = response.data;
    });
  },
  methods: {
    createLost_Pet: function() {
      var params = {
        name: this.newLost_PetName,
        address: this.newLost_PetAddress,
        age: this.newLost_PetAge,
        searche_area: this.newLost_PetSearchArea,
        breed: this.newLost_PetBreed,
        color: this.newLost_PetColor,
        size: this.newLost_PetSize,
        gender: this.newLost_PetGender,
        behaviour_type: this.newLost_PetBehaviourType,
        picture: this.newLost_PetPicture
      };
      axios.post("/api/lost_pets", params).then(response => {
        this.lost_pets.push(response.data);
        this.newLost_PetName = "";
        this.newLost_PetAddress = "";
        this.newLost_PetAge = "";
        this.newLost_PetSearchArea = "";
        this.newLost_PetBreed = "";
        this.newLost_PetColor = "";
        this.newLost_PetSize = "";
        this.newLost_PetGender = "";
        this.newLost_PetBehaviourType = "";
        this.newLost_PetPicture = "";
      });
    }
  }
};
</script>
