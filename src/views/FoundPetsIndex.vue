<template>
  <div class="container">
    <h1>Add A Found Pet</h1>
    <div>
      Address:
      <input type="text" v-model="newFound_PetAddress" />
      Breed:
      <input type="text" v-model="newFound_PetBreed" />
      Color:
      <input type="text" v-model="newFound_PetColor" />
      Size:
      <input type="text" v-model="newFound_PetSize" />
      Gender:
      <input type="text" v-model="newFound_PetGender" />
      Picture:
      <input type="text" v-model="newFound_PetPicture" />
      Add_Info:
      <input type="text" v-model="newFound_PetAddInfo" />
      Shelter_Info:
      <input type="text" v-model="newFound_PetShelterInfo" />
      <button v-on:click="createFound_Pet()">Add Found Pet</button>

      <!-- Portfolio Section -->
      <section class="page-section portfolio" id="portfolio">
        <div class="container">
          <!-- Portfolio Section Heading -->
          <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Found Pets</h2>

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
            <div v-for="found_pet in found_pets" class="col-md-6 col-lg-4">
              <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div class="portfolio-item-caption-content text-center text-white">
                    <p>Pet Name: {{ found_pet.name }}</p>

                    <p>Address:{{ found_pet.address }}</p>
                    <p>Breed: {{ found_pet.breed }}</p>
                    <p>Color: {{ found_pet.color }}</p>
                    <p>Size: {{ found_pet.size }}</p>
                    <p>Gender: {{ found_pet.gender }}</p>
                    <button type="button" class=
                  </div>
                </div>
                <img class="img-fluid" v-bind:src="found_pet.picture" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <h1>All Found Pets</h1>
    <div v-for="found_pet in found_pets">
      <h2>{{ found_pet.address }}</h2>
      <h2>{{ found_pet.breed }}</h2>
      <h2>{{ found_pet.color }}</h2>
      <h2>{{ found_pet.size }}</h2>
      <h2>{{ found_pet.gender }}</h2>
      <h2>{{ found_pet.picture }}</h2>
      <h2>{{ found_pet.add_info }}</h2>
      <h2>{{ found_pet.shelter_info }}</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      found_pets: [],
      newFound_PetAddress: "",
      newFound_PetBreed: "",
      newFound_PetColor: "",
      newFound_PetSize: "",
      newFound_PetGender: "",
      newFound_PetPicture: "",
      newFound_PetAddInfo: "",
      newFound_PetShelterInfo: ""
    };
  },
  created: function() {
    axios.get("/api/found_pets").then(response => {
      this.found_pets = response.data;
    });
  },
  methods: {
    createFound_Pet: function() {
      var params = {
        address: this.newFound_PetAddress,
        breed: this.newFound_PetBreed,
        color: this.newFound_PetColor,
        size: this.newFound_PetSize,
        gender: this.newFound_PetGender,
        picture: this.newFound_PetPicture,
        add_info: this.newFound_PetAddInfo,
        shelter_info: this.newFound_PetShelterInfo
      };
      axios.post("/api/found_pets", params).then(response => {
        this.found_pets.push(response.data);
        this.newFound_PetAddress = "";
        this.newFound_PetBreed = "";
        this.newFound_PetColor = "";
        this.newFound_PetSize = "";
        this.newFound_PetGender = "";
        this.newFound_PetPicture = "";
        this.newFound_PetAddInfo = "";
        this.newFound_PetShelterInfo = "";
      });
    }
  }
};
</script>
