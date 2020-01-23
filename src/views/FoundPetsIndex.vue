<template>
  <div class="container">
    <h1>Add A Found Pet</h1>
    <form v-on:submit.prevent="createFound_Pet()">
      <div class="form-group">
        Found Location:
        <input type="text" class="form-control" v-model="newFound_PetAddress" />
      </div>
      <div class="form-group">
        Breed:
        <input type="text" class="form-control" v-model="newFound_PetBreed" />
      </div>
      <div class="form-group">
        Color:
        <input type="text" class="form-control" v-model="newFound_PetColor" />
      </div>
      <div class="form-group">
        Size:
        <input type="text" class="form-control" v-model="newFound_PetSize" />
      </div>
      <div class="form-group">
        Gender:
        <input type="text" class="form-control" v-model="newFound_PetGender" />
      </div>
      <div class="form-group">
        Picture:
        <input type="text" class="form-control" v-model="newFound_PetPicture" />
      </div>
      <button type="submit">>Create Found Pet</button>
    </form>

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
                  <span>
                    <a v-bind:href="`/found_pets/${found_pet.id}`" style="color: white;">
                      Location Found:{{ found_pet.address }}
                    </a>
                  </span>
                  <br />
                  <div class="pet-info">
                    <span>Breed: {{ found_pet.breed }}</span>
                    <br />
                    <span>Color: {{ found_pet.color }}</span>
                    <br />
                    <span>Size: {{ found_pet.size }}</span>
                    <br />
                    <span>Gender: {{ found_pet.gender }}</span>
                    <br />
                    <span>Characteristics: {{ found_pet.behaviour_type }}</span>
                  </div>
                </div>
              </div>
              <img class="img-fluid" v-bind:src="found_pet.picture" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.portfolio-item img.img-fluid {
  height: 300px;
  width: 100%;
  object-fit: cover;
}
.pet-info {
  font-size: 0.7em;
}
</style>

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
