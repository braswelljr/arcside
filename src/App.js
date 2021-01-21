import router from "./router/index";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  const appname = `arcside`;

  return (
    <div className="font-mulish">
      <Navbar appname={appname} />
      <Switch>
        {router.map((route, index) => (
          <Route
            path={route.path}
            exact={route.isExact}
            render={() => (
              <route.component
                style={{}}
                className={`transition-transform transform translate-x-0 duration-200`}
                appname={appname}
              />
            )}
            key={index}
          />
        ))}
      </Switch>
    </div>
  );
};

export default App;
