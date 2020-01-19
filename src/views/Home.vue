<template id="home-page">
  <div class="container">
    <h1>Quick Search All Pets</h1>
    <br>
    <input list="model" type="text" v-model="titleFilter" placeholder="">
    <datalist id="model">
      <option v-for="pet in pets"> {{ pet.breed }}</option>
    </datalist>
    <br>
    <div class="row" is="transition-group" name="fade">
    <br>
    <br>
    <br>
      <div class="col-md-4" v-for="pet in pets" v-if="isValidPet(pet)" v-bind:key="pet.id">
        <div class="card mb-2">
          <div class="card-body">
            <h4 class="card-breed"> Breed: {{ pet.breed }}</h4>
            <p class="card-text color "> Color: {{ pet.color }}</p>
            <p class="card-text size"> Size: {{ pet.size }}</p>
            <p class="card-text add_info">Add_info: {{ pet.add_info }}</p>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" v-on:click="setCurrentPet(pet)">
              View Photo
            </button>
          </div>
        </div>
      </div>
    </div>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{ currentPet.model }}
          <br>
            {{ currentBike.price }}
        </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <img width="400" height="400" v-bind:src="currentBike.photo"></img>     
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
