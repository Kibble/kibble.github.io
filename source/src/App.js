import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import NavBar from './modules/layout/component/NavBar.component';
import Footer from './modules/layout/component/Footer';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Experience from './modules/app/component/Experience';
import DailyUI from './modules/dailyui/DailyUI';
import Home from './modules/app/component/Home';

function App() {
    return <HashRouter baseName="/">
        <div className="App">
            <NavBar />
            <Switch>
                <Route path="/dailyui">
                    <DailyUI />
                </Route>
                <Route path="/experience">
                    <Experience />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </div>
    </HashRouter>;
}

export default App;
