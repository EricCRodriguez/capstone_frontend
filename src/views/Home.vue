<template id="home-page">
  <div class="container">
    <h1>Quick Search All Pets</h1>
    <br />
    <input list="model" type="text" v-model="titleFilter" placeholder="" />
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data: function() {
    return {
      titleFilter: ""
    };
  }
};
</script>
