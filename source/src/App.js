import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import NavBar from './modules/layout/component/NavBar.component';
import Footer from './modules/layout/component/Footer';
import {HashRouter, Switch, Route} from 'react-router-dom';
import News from './modules/app/component/News.component';
import Experience from './modules/app/component/Experience';
import DailyUI from './modules/app/component/DailyUI';
import Home from './modules/app/component/Home.component';

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
                <Route path="/experience">
                    <Experience />
                </Route>
                <Route path="/">
                    <Home />
                    {/* <div className="app-content">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div> */}
                </Route>
            </Switch>
            <Footer />
        </div>
    </HashRouter>;
}

export default App;
