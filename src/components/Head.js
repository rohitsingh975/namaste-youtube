import React, { useEffect, useState } from 'react';
import HambergurMenu from '../assets/hamburgermenu_120234.png';
import YoutubeLogo from '../assets/YouTube-Logo.png';
import UserIcon from '../assets/user-icon.png';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from "../utils/appSlice"; 
import { YOTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';


const Head = () => {

  const [searchQuery,setSearchQuery] = useState("");
  const [suggestions,setSuggestions] = useState([]);
  const [showSuggestion,setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();


  /**
   * Make an API call on every key perss, if difference between two api call is <200 ms decline the api call
   */
  useEffect(() => {
    const timer = setTimeout(() => {
        if(searchCache[searchQuery]) {
            setSuggestions(searchCache[searchQuery]);
        } else {
            getSearchSuggestion()
        }
    },200);

    return  () => {
        clearTimeout(timer);
    };
  },[searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    //console.log(json);
    setSuggestions(json[1]);
    dispatch(
        cacheResults({
          [searchQuery]: json[1],
        })
      );
  }



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
            <div>
            <input 
                className="w-1/2 border border-grey-400 p-2 rounded-l-full" 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestion(true)}
                onBlur={() => setShowSuggestion(false)}
            />
            <button className="border border-gray-400 px-5 p-2 rounded-r-full bg-gray-100">🔍</button>
            </div>
            {showSuggestion && (<div className="fixed bg-white py-2 px-2 w-[27rem] shadow-lg rounded-lg border border-gray-100">
                <ul>
                    {suggestions.map((s)=><li key="{s}" className="py-2 shadow-sm hover:bg-gray-100">🔍 {s}</li>)}

                </ul>                
            </div>)}
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