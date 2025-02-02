import HomeView from "../components/Home/HomeView.vue";
import AboutView from "../components/About/AboutView.vue";
import ProjectView from "../components/Projects/ProjectView.vue";
import InstagramCode from "../components/hidden/InstagramCode.vue";
import UwuCode from "../components/hidden/uwu.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { title: "Karthikeyan J" },
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    meta: { title: "Karthikeyan J - About" },
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectView,
    meta: { title: "Karthikeyan J - Projects" },
  },
  { path: "/instagram-code", name: "instagram-code", component: InstagramCode },
  { path: "/uwu", name: "uwu", component: UwuCode },
];
