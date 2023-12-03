import React from "react";
import './Footer.css';
import Menu from './Menu';
const Footer = ({ title }) => {
  const list = [
    {text: 'MenuItem1', url: 'http://localhost:3000'},
    {text: 'MenuItem2', url: 'http://localhost:3000'},
    {text: 'MenuItem3', url: 'http://localhost:3000'},
    {text: 'MenuItem4', url: 'http://localhost:3000'},
    {text: 'MenuItem5', url: ''},
    {text: 'MenuItem6', url: ''},
  ];

  return (
    <div className='footer'>
      <h1>{title}</h1>
      <Menu list={list}/>
    </div>
  );
};

export default Footer;
