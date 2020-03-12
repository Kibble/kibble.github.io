import {Button, Toolbar} from 'react-md';
import React from 'react';
import '../style/layout.scss';
import {Link} from 'react-router-dom';

const NavBar = () => <Toolbar className="app-toolbar" colored>
    <Link to="/"><Button className="app-toolbar__page-button" flat>Home</Button></Link>
    <Link to="/dailyui"><Button className="app-toolbar__page-button" flat>DailyUI</Button></Link>
    <Link to="/experience"><Button className="app-toolbar__page-button" flat>Experience</Button></Link>
</Toolbar>;

export default NavBar;