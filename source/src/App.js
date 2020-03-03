import React from 'react';
import logo from './logo.svg';
import './App.scss';
import NavBar from './modules/layout/component/NavBar.component';
import {HashRouter, Switch, Route} from 'react-router-dom';
import News from './modules/app/component/News.component';
import DailyUI from './modules/app/component/DailyUI';

function App() {
    return <HashRouter baseName="/">
        <div className="App">
            <NavBar />
            <Switch>
                <Route path="/dailyui">
                    <DailyUI />
                </Route>
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
    </HashRouter>;
}

export default App;
