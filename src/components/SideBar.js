import React from "react";
import './SideBar.css';
import Menu from './Menu';

const SideBar = ({ title }) => {
  const list = [
    {text: 'MenuItem1', url: 'http://localhost:3000'},
    {text: 'MenuItem2', url: 'http://localhost:3000'},
    {text: 'MenuItem3', url: 'http://localhost:3000'},
    {text: 'MenuItem4', url: 'http://localhost:3000'},
    {text: 'MenuItem5', url: ''},
    {text: 'MenuItem6', url: ''},
  ];

  return (
    <div className='sidebar'>
      <h1>{title}</h1>
      <Menu list={list}/>
    </div>
  );
};

export default SideBar;
