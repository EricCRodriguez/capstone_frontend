<template>
  <div class="container">
    <h1>Add Your Lost Pet</h1>
    <form v-on:submit.prevent="createLost_Pet()">
      <div class="form-group">
        Name:
        <input type="text" class="form-control" v-model="newLost_PetName" />
      </div>
      <div class="form-group">
        Address:
        <input type="text" class="form-control" v-model="newLost_PetAddress" />
      </div>
      <div class="form-group">
        Age:
        <input type="text" class="form-control" v-model="newLost_PetAge" />
      </div>
      <div class="form-group">
        Breed:
        <input type="text" class="form-control" v-model="newLost_PetBreed" />
      </div>
      <div class="form-group">
        Color:
        <input type="text" class="form-control" v-model="newLost_PetColor" />
      </div>
      <div class="form-group">
        Size:
        <input type="text" class="form-control" v-model="newLost_PetSize" />
      </div>
      <div class="form-group">
        Gender:
        <input type="text" class="form-control" v-model="newLost_PetGender" />
      </div>
      <div class="form-group">
        Behaviour Type:
        <input type="text" class="form-control" v-model="newLost_PetBehaviourType" />
      </div>
      <div class="form-group">
        Picture:
        <input type="text" class="form-control" v-model="newLost_PetPicture" />
      </div>
      <button type="submit">Create Lost Pet</button>
    </form>

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
                <div class="portfolio-item-caption-content text-white">
                  <span>
                    <a v-bind:href="`/lost_pets/${lost_pet.id}`" style="color: white;">Pet Name: {{ lost_pet.name }}</a>
                  </span>
                  <br />
                  <span>User: {{ lost_pet.user_name }}</span>
                  <br />
                  <span>Age: {{ lost_pet.age }}</span>
                  <br />
                  <span>Address:{{ lost_pet.address }}</span>
                  <br />
                  <span>Breed: {{ lost_pet.breed }}</span>
                  <br />
                  <span>Color: {{ lost_pet.color }}</span>
                  <br />
                  <span>Size: {{ lost_pet.size }}</span>
                  <br />
                  <span>Gender: {{ lost_pet.gender }}</span>
                  <br />
                  <span>Characteristics: {{ lost_pet.behaviour_type }}</span>
                  <br />
                </div>
              </div>
              <img class="img-fluid" v-bind:src="lost_pet.picture" alt="" />
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
