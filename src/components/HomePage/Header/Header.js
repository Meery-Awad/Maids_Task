import React from "react";
import { useSelector } from "react-redux";
import { useBetween } from "use-between";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';


import './Header.css'

const Header = () => {


    // <get the data from rducers>
    const state = useSelector((state) => state.data);
    const { searchBox, setSearchBox } = useBetween(state.useShareState);
    // </get the data from rducers>



    // <css>
    const style = {
        textDecoration: 'none',
        color: "#333",
        marginLeft: "-50px",
        paddingLeft: "50px"
    }
    // </css>


    const handleSearch = () => {
        const searchBox = document.querySelector(".search-box");
        const searchBtn = document.querySelector(".search-icon");
        const cancelBtn = document.querySelector(".cancel-icon");
        const searchInput = document.querySelector("input");
        const searchData = document.querySelector(".search-data");

        searchBox.classList.add("active");
        searchBtn.classList.add("active");
        searchInput.classList.add("active");
        cancelBtn.classList.add("active");
        searchInput.focus();
        if (searchInput.value != "") {
            var values = searchInput.value;
            searchData.classList.remove("active");
            searchData.innerHTML = "You just typed " + "<span style='font-weight: 500;'>" + values + "</span>";
        } else {
            searchData.textContent = "";
        }
    }
    const handleCancelSearch = () => {
        const searchBox = document.querySelector(".search-box");
        const searchBtn = document.querySelector(".search-icon");
        const cancelBtn = document.querySelector(".cancel-icon");
        const searchInput = document.querySelector("input");
        const searchData = document.querySelector(".search-data");
        searchBox.classList.remove("active");
        searchBtn.classList.remove("active");
        searchInput.classList.remove("active");
        cancelBtn.classList.remove("active");
        searchData.classList.toggle("active");
        searchInput.value = "";
    }
    const handeleInput = (e) => {

        setSearchBox(e.target.value);

    }

    return (

        <div className="Header" style={{ zIndex: 1 }}>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            <Navbar expand="lg" >

                <Container>
                    {/* ---------------------------------<LOGO >---------------------*/}
                    <Navbar.Brand href="#home">
                        <img src="https://www.maids.cc/assets/images/Get-a-full-time-maid-or-a-maid-visa.svg" className="logo"></img>

                    </Navbar.Brand>
                    {/* ---------------------------------</LOGO>---------------------*/}

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" style={{ textDecoration: 'none' }} >
                                <div className="nav-item home"> Home </div>
                            </NavLink>
                            <NavLink to="/" style={{ textDecoration: 'none' }}>
                               
                                    <div className="nav-item">    Services </div>
                                 
                            </NavLink>

                            <NavLink to="/" style={{ textDecoration: 'none' }}>
                                <div className="nav-item">   About </div>
                            </NavLink>

                        </Nav>


                        <div className="search-box">
                            <input type="text" placeholder="Type to search.."
                                onChange={handeleInput}
                                value={searchBox}
                            />
                            <div className="search-icon" onClick={handleSearch}>
                                <i className="fas fa-search"></i>
                            </div>
                            <div className="cancel-icon" onClick={handleCancelSearch}>
                                <i className="fas fa-times"></i>
                            </div>
                            <div className="search-data">
                            </div>
                        </div>


                    </Navbar.Collapse>

                </Container>

            </Navbar>
        </div >




    );
}

export default Header;