import router from "./router/index";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  const appname = `arcside`;
  const motto = `YOUR PROUD REAL ESTATE AND TOUR AGENT`;

  return (
    <div className="font-mulish">
      <Navbar appname={appname} />
      <Switch>
        {router.map((route, index) => (
          <Route
            path={route.path}
            exact={route.isExact}
            render={() => <route.component appname={appname} motto={motto} />}
            key={index}
          />
        ))}
      </Switch>
    </div>
  );
};

export default App;
