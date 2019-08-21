/**
 * Created by uttam on 11/7/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './css/styles.scss';

const Root = () => (
    <main>
        <Switch>
            <Route
                path={'/'}
                exact
                render={(props) => {
                    return (
                        <div>Hello world</div>
                    );
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
