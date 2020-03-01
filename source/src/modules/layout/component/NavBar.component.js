import {Button, Toolbar} from 'react-md';
import React from 'react';
import '../style/layout.scss';
import {Link} from 'react-router-dom';

const NavBar = () => <Toolbar className="app-toolbar" colored>
    <Link to="/"><Button className="app-toolbar__page-button" flat>Home</Button></Link>
    <Link to="/news"><Button className="app-toolbar__page-button" flat>News</Button></Link>
    <Link to="/"><Button className="app-toolbar__page-button" flat>Gallery</Button></Link>
    <Link to="/"><Button className="app-toolbar__page-button" flat>About</Button></Link>
</Toolbar>;

export default NavBar;