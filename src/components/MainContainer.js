import React from 'react';
import { useSelector } from 'react-redux';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const marginLeft = isMenuOpen ? 'ml-[15rem]' : 'ml-[5rem]';

  return (
    <div className={` relative ${marginLeft} mt-10 bg-white z-20`}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
