import React from "react";
import "../CSS/header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";

import Avatar from "@material-ui/core/Avatar";
import { useStateValue } from "../stateManagement/stateProvider";

const Header = () => {
  const [{ user }, dispatch] = useStateValue();
  const UserName = user?.displayName.split(" ")[0];

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
  };
  return (
    <div className='header flex-spaceBetween'>
      <div className='header__left flex-center'>
        <div className='header__icon header__icon--active'>
          <HomeIcon />
          <p>Home</p>
        </div>
        <div className='header__icon'>
          <FlashOnIcon />
          <p>Trending</p>
        </div>
        <div className='header__icon'>
          <LiveTvIcon />
          <p>Verified</p>
        </div>
        <div className='header__icon'>
          <VideoLibraryIcon />
          <p>Collections</p>
        </div>

        <div className='header__icon'>
          <SearchIcon />
          <p>Search</p>
        </div>
        <div className='header__icon'>
          <Avatar className='header__avatar' src={user?.photoURL} />
          <p>{UserName}</p>
        </div>
        <p className='header__logout' onClick={handleLogout}>
          Log out
        </p>
      </div>
      <img
        src='https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png'
        alt='logo'
      />
    </div>
  );
};

export default Header;
