/**
 * Created by uttam on 11/7/17.
 */
import React from 'react';
import { withRouter, Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Main from './Main';

const Root = () => (
    <main>
        <Switch>
            <Route
                path={'/'}
                exact
                render={(props) => {
                    return <Main />;
                }}
            />
        </Switch>
    </main>
);

function App() {
    return (
        <Router>
            <Root />
        </Router>
    );
}

export default App;
