import Vue from "vue";
import FormPage from "@/views/FormPage";
import PreviewPage from "@/views/PreviewPage";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: FormPage,
  },
  {
    path: "/preview",
    component: PreviewPage,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
