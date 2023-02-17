import React from 'react';
import HambergurMenu from '../assets/hamburgermenu_120234.png';
import YoutubeLogo from '../assets/YouTube-Logo.png';
import UserIcon from '../assets/user-icon.png';
import { useDispatch } from 'react-redux';
import { toggleMenu } from "../utils/appSlice"; 


const Head = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
        <div className="flex col-span-1">
            <img
                onClick={() => toggleMenuHandler()}
                className="h-8 mt-2 cursor-pointer"
                alt="menu"
                src={HambergurMenu}
            />
            <img
                className="h-12 mx-2"
                alt="youtube-logo"
                src={YoutubeLogo}
            />
        </div>
        <div className="col-span-10 px-10">
            <input className="w-1/2 border border-grey-400 p-2 rounded-l-full" type="text"/>
            <button className="border border-gray-400 px-5 p-2 rounded-r-full bg-gray-100">Search</button>
        </div>
        <div className="col-span-1">
            <img 
                className="h-8"
                alt="user"
                src={UserIcon}
            />
        </div>
    </div>
  )
}

export default Head;