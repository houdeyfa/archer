
import React from "react";

import { Button } from 'react-native';

import {
  Route,
  NavLink,
  Routes,
  Link,
} from "react-router-dom";




const Menu = ({ navigation }) => {
  return (
    <div>
      <h1>
        Let's score
      </h1>
      <Link to="/archers" style={{ textDecoration: 'none' }}>
        <Button
        title="Score an archer"/>
        </Link>
        <p>{'\n\n\n'}</p>
       <p>{'\n\n\n'}</p>
       <p>{'\n\n\n'}</p>
       <p>{'\n\n\n'}</p>
      <Link to="/register" style={{ textDecoration: 'none' }}>
        <Button
        title="Add an archer"/>
        </Link>

       <p>{'\n\n\n'}</p>
       <p>{'\n\n\n'}</p>
       <p>{'\n\n\n'}</p>
       <p>{'\n\n\n'}</p>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button
        title="See the report"/>
        </Link>
        <p>{'\n\n\n'}</p>
       <p>{'\n\n\n'}</p>
       <p>{'\n\n\n'}</p>
       <p>{'\n\n\n'}</p>
      <Link to="/archersToUpdate" style={{ textDecoration: 'none' }}>
        <Button
        title="Update an archer"/>
        </Link>

    </div>
  );
};

export default Menu;