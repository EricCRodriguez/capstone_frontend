import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import UsersShow from "../views/UsersShow.vue";
import LostPetsIndex from "../views/LostPetsIndex.vue";
import LostPetsShow from "../views/LostPetsShow.vue";
import FoundPetsIndex from "../views/FoundPetsIndex.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/lost_pets",
    name: "lost-pets-index",
    component: LostPetsIndex
  },
  {
    path: "/found_pets",
    name: "found-pets-index",
    component: FoundPetsIndex
  },
  {
    path: "/lost_pets/:id",
    name: "lost_pets-show",
    component: LostPetsShow
  },
  {
    path: "/users/:id",
    name: "users-show",
    component: UsersShow
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  },

  { path: "/signup", name: "signup", component: Signup },

  { path: "/login", name: "login", component: Login },

  { path: "/logout", name: "logout", component: Logout }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
