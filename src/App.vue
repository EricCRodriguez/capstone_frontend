<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">Fetch</a>
        <button
          class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/">Home</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/lost_pets">Lost Pets</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/found_pets">Found Pets</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/signup">Signup</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/login">Login</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/logout">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Masthead -->
    <header class="masthead bg-primary text-white text-center">
      <div class="container d-flex align-items-center flex-column">
        <!-- Masthead Avatar Image -->
        <img
          class="masthead-avatar mb-5"
          src="https://image.freepik.com/free-vector/dog-cat-logo-template-veterinary_56473-108.jpg"
          alt=""
        />

        <!-- Masthead Heading -->
        <h1 class="masthead-heading text-uppercase mb-0">Fetch</h1>

        <!-- Icon Divider -->
        <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-star"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>

        <!-- Masthead Subheading -->
        <p class="masthead-subheading font-weight-light mb-0">Find your missing pet</p>
      </div>
    </header>

    <router-link to="/">Home</router-link>
    |
    <router-link to="/lost_pets">Lost Pets</router-link>
    |
    <router-link to="/lost_pets/:id">Find A Lost Pet</router-link>
    |
    <router-link to="/found_pets">Found Pets</router-link>
    |
    <router-link to="/signup">Signup</router-link>
    |
    <router-link to="/login">Login</router-link>
    |
    <router-link to="/logout">Logout</router-link>

    <router-view />

    <footer class="footer text-center">
      <div class="container">
        <div class="row"></div>
      </div>

      <!-- Footer Location -->
      <div class="col-lg-4 mb-5 mb-lg-0">
        <h4 class="text-uppercase mb-4">Location</h4>
        <p class="lead mb-0">
          2215 John Daniel Drive
          <br />
          Clark, MO 65243
        </p>
      </div>

      <!-- Footer Social Icons -->
      <div class="col-lg-4 mb-5 mb-lg-0">
        <h4 class="text-uppercase mb-4">Around the Web</h4>
        <a class="btn btn-outline-light btn-social mx-1" href="#">
          <i class="fab fa-fw fa-facebook-f"></i>
        </a>
        <a class="btn btn-outline-light btn-social mx-1" href="#">
          <i class="fab fa-fw fa-twitter"></i>
        </a>
        <a class="btn btn-outline-light btn-social mx-1" href="#">
          <i class="fab fa-fw fa-linkedin-in"></i>
        </a>
        <a class="btn btn-outline-light btn-social mx-1" href="#">
          <i class="fab fa-fw fa-dribbble"></i>
        </a>
      </div>

      <!-- Footer About Text -->
      <div class="col-lg-4">
        <h4 class="text-uppercase mb-4">About Freelancer</h4>
        <p class="lead mb-0">
          Freelance is a free to use, MIT licensed Bootstrap theme created by
          <a href="http://startbootstrap.com">Start Bootstrap</a>
          .
        </p>
      </div>
    </footer>
  </div>
</template>

<style></style>
