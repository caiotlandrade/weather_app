import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import './index.css';
import Header_Nav from './Header_Nav';
import Precipitation from './Precipitation';
import Summary from './Summary';
import Temperature from './Temperature';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Router history={browserHistory}>
                    <Route path="/" component={Header_Nav}>
                        <IndexRoute component={Summary} />
                        <Route path="summary" component={Summary} />
                        <Route path="precipitation" component={Precipitation} />
                        <Route path="temperature" component={Temperature} />
                    </Route>
                </Router> , document.getElementById('app'));

registerServiceWorker();
