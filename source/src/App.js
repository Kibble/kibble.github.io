import React from 'react';
import logo from './logo.svg';
import './App.scss';
import NavBar from './modules/layout/component/NavBar.component';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import News from './modules/app/component/News.component';

function App() {
    return <BrowserRouter>
        <div className="App">
            <NavBar />
            <Switch>
                <Route path="/news">
                    <News />
                </Route>
                <Route path="/">
                    <div className="app-content">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                </Route>
            </Switch>
        </div>
    </BrowserRouter>;
}

export default App;
