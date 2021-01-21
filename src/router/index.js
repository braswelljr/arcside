import Home from "../views/Home";
import About from "../views/About";
import Houses from "../views/Houses";

const router = [
  {
    path: "/",
    name: "Home",
    component: Home,
    isExact: true
  },
  {
    path: "/houses",
    name: "Houses",
    component: Houses,
    isExact: true
  },
  {
    path: "/about",
    name: "About",
    component: About,
    isExact: true
  }
];

export default router;
