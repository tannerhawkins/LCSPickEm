import React from 'react';
import { HashLink } from 'react-router-hash-link';

import Hamburger from './Hamburger';
import routes from '../../data/routes';
import Login from '../Authentication/Login';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => (
  <header id="header">
    <h1 className="index-link">
      {routes.filter((l) => l.index).map((l) => (
        <HashLink to={l.path}>{l.label}</HashLink>
      ))}
    </h1>
    <nav className="links">
      <ul>
        {routes.filter((l) => !l.index).map((l) => (
          <li key={l.label}>
            <HashLink to={l.path}>{l.label}</HashLink>
          </li>
        ))}
      </ul>
    </nav>
    <Login />
    <Hamburger />
  </header>
);

export default Navigation;
