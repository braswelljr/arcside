import Home from "../views/Home";
import About from "../views/About";
import Properties from "../views/Properties";

const router = [
  {
    path: "/",
    name: "Home",
    component: Home,
    isExact: true
  },
  {
    path: "/properties",
    name: "Properties",
    component: Properties,
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
