import { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import SearchBar from "./search-bar";
// import { routeItems } from "../../routeConfig";

const data = [
    "paris",
    "london",
    "new York",
    "tokyo",
    "berlin",
    "buenos Aires",
    "cairo",
    "canberra",
    "rio de Janeiro",
    "dublin",
];
// const filterData = (query, data) => {
//     if (!query) {
//         return data;
//     } else {
//         return data.filter((d) => d.toLowerCase().includes(query));
//     }
// };

const DashboardNavbarComp = () => {
    const [searchQuery, setSearchQuery] = useState("");
    // const dataFiltered = filterData(searchQuery, data);

    return (
        <div
            style={{
                display: "flex",
                alignSelf: "center",
                justifyContent: "center",
                flexDirection: "column",
                padding: 20,
            }}
        >
            <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            {/* <div style={{ padding: 3 }}>
                {dataFiltered.map((d) => (
                    <div
                        className="text"
                        style={{
                            padding: 5,
                            justifyContent: "normal",
                            fontSize: 20,
                            color: "blue",
                            margin: 1,
                            width: "250px",
                            BorderColor: "green",
                            borderWidth: "10px",
                            // visibility: "hidden",
                        }}
                        key={d.id}
                    >
                        {d}
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default DashboardNavbarComp;
