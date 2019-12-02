import React, {Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {Provider} from 'react-redux';
import { loadUser } from './actions/auth';
import './App.css';
import Login from './component/auth/Login';
import Register from './component/auth/Register';
import Landing from './component/layout/Landing';
import Alert from './component/layout/Alert';
import NavBar from './component/layout/NavBar';
import Welcome from './component/layout/Welcome';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import Instruction from './component/layout/Instruction';


if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {

    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
    <Provider store={store}>
        <Router>
            <Fragment>
                <NavBar/>
                <Route exact path='/' component={Landing}/>
                <section className='container'>
                    <Alert/>
                    <Switch>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/welcome' component = {Welcome}/>
                        <Route exact path='/register' component={Register}/>
                        <Route exact path='/instruction' component={Instruction}/>
                    </Switch>
                </section>
            </Fragment>
        </Router>
    </Provider>
    );
};

export default App;
