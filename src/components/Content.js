import React from "react";
import './Content.css'

const Content = ({ title }) => {
  return (
    <div className='content'>
      <h1>{title}</h1>
    </div>
  );
};

export default Content;
