import React from "react";
import Login from "./features/Login";
import AdminDashboard from "./features/AdminDashboard";
import Welcome from "./OLDviews/Welcome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";


const App = () => {
    return (
            <Provider store={store}>
                <Router>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/adminDashboard" component={AdminDashboard} />
                </Router>
            </Provider>        
    );
};

export default App;
