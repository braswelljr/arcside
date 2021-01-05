import Home from "../views/Home";
import About from "../views/About";
import Houses from "../views/Houses";

const router = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/houses",
    name: "Houses",
    component: Houses
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
];

export default router;
