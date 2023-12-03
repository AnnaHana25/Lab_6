import React from "react";
import MenuItem from './MenuItem';
import './Menu.css';

const Menu = ({ list = [] }) => {
  return <ul className='menu'>
    {list.length && list.map((item, index) => {
        return <li key={index}>
          <MenuItem text={item.text}
                    keyItem={index}
                    url={item.url}/>
        </li>;
      }
    )}
  </ul>;
};

export default Menu;
