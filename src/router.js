import React from "react";
import { Router, Route, browserHistory } from "react-router";
import { withAuth } from "./views/decorators";

import { Main, Login } from "./views/pages";

export default (
    <Router history={ browserHistory }>
        <Route path="/" component={ withAuth( Main ) } />
        <Route path="/login" component={ Login } />
    </Router>
);
