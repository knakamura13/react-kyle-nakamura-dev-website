import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home, PeopleCounter, Error } from './screens';

/****************
 Component Class
*****************/

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/people-counter' component={PeopleCounter} />
            <Route component={Error} />
        </Switch>
    </BrowserRouter>
);

export default App;
