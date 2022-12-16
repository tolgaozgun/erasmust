import { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { routeItems } from "../../routeConfig.tsx";

const SearchBar = ({ setSearchQuery }) => {
    const navigate = useNavigate();
    var navList = routeItems;
    // var navListTitles = $.map(navList, function (value) {
    //     return {
    //         title: value.title,
    //     };
    // });
    var navListTitles = navList.map((val) => {
        return {
            title: val.title.toString().toLowerCase(),
        };
    });
    function handleSubmit(e) {
        e.preventDefault();
        console.log("You clicked submit.");
        // console.log({ navListTitles });

        const val = JSON.stringify(
            document.getElementById("search-bar").value.toLowerCase()
        );
        // const v = JSON.stringify(navListTitles[38].title).toLowerCase();

        console.log(val);
        console.log(navListTitles);
        // console.log(val === v);
        // const objectTitles = { ...navListTitles };
        // console.log(val);
        // console.log(navListTitles.includes(val));
    }
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                id="search-bar"
                className="text"
                // onInput={(e) => {
                //     setSearchQuery(e.target.value);
                // }}
                label=""
                variant="outlined"
                placeholder="Search"
                size="small"
            />
            <IconButton type="submit" aria-label="search">
                <SearchIcon />
            </IconButton>
        </form>
    );
};
export default SearchBar;
