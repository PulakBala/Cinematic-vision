// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import './header.scss'

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const usenavigate = useNavigate();
    const location = useLocation();

    useEffect(() =>{
      window.scroll(0, 0);
    },[location])

    const controlNavbar = () =>{
      console.log(window.scrollY);
      if(window.scrollY > 200){
        if(window.scrollY > lastScrollY && !mobileMenu){
          setShow("hide")
        }else{
          setShow("show")
        }
      }else{
        setShow("top");
      }
      setLastScrollY(window.screenY);
    }

    useEffect(() =>{
      window.addEventListener("scroll", controlNavbar);
      return () =>{
        window.removeEventListener("scroll", controlNavbar);
      }
    },[lastScrollY])

    const openSearch = () =>{
      setShowSearch(true)
      setMobileMenu(false)
    }

    const openMobileMenu = () =>{
      setMobileMenu(true);
      setShowSearch(false);
    }


    //search query
    const searchQueryHandler = (event) => {
      if (event.key === "Enter" && query.length > 0) {
        usenavigate(`/search/${query}`);
      }
    };


    //manu items navigation handeler
    const navigationHandler = (type) =>{
      if(type === 'movie'){
        usenavigate("/explore/movie")
      }else{
        usenavigate("/eplore/tv");
      }
    }

    return (
        <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
          <ContentWrapper>
          <div className="logo">
            <img src={logo} alt=""/>
          </div>
          <ul className="menuItems">
            <li className="menuItem" onClick={() =>navigationHandler('movie'
            )}>Movies</li>
            <li className="menuItem" onClick={() =>navigationHandler('tv'
            )}>TV Shows</li>
            <li className="menuItem">
              <HiOutlineSearch onClick={openSearch}/>
            </li>
          </ul>
          <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch}/>
          {mobileMenu? (
             <VscChromeClose onClick={() => setMobileMenu(false)}/> 
        ): (
           <SlMenu onClick={openMobileMenu}/>
          )}
          </div>
          </ContentWrapper>
        {showSearch && <div className="searchBar">
            <ContentWrapper>
            <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Search for a movie or tv show...."
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                        />
                        <VscChromeClose onClick={() => setShowSearch(false)}/>
                    </div>
            </ContentWrapper>
          </div>}
        </header>
    );
};

export default Header;
