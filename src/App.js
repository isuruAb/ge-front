import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./util/configureStore.js";
import "./assets/styles/App.scss";
import ErrorBoundary from "./util/ErrorBoundary";
import Landing from "./components/Landing";
import { ROUTES } from "./util/routes";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Switch>
              <Route component={Landing} exact path={ROUTES.index} />
              <Route component={Login} exact path={ROUTES.login} />
              <Route component={Register} exact path={ROUTES.register} />
              <Route component={Dashboard} exact path={ROUTES.dashboard} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
