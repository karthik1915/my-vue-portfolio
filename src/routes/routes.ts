import HomeView from "../components/Home/HomeView.vue";

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
    component: () => import("../components/About/AboutView.vue"),
    meta: { title: "Karthikeyan J - About" },
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("../components/Projects/ProjectView.vue"),
    meta: { title: "Karthikeyan J - Projects" },
  },
  {
    path: "/instagram-code",
    name: "instagram-code",
    component: () => import("../components/hidden/InstagramCode.vue"),
  },
  {
    path: "/uwu",
    name: "uwu",
    component: () => import("../components/hidden/uwu.vue"),
  },
];
