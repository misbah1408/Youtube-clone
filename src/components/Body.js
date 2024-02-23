import React from 'react';
import SideBar from './SideBar';
import { Outlet, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchContainer from './SearchContainer';

const Body = () => {
  
  return (
    <div className='flex'>
        <SideBar />
        <Outlet /> 
    </div>
  );
};

export default Body;
