import {Autocomplete, TextField, Tooltip} from "@mui/material";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const SearchBar = (props) => {
    const [options, setOptions] = useState([])
    const role = localStorage.getItem("role")

    const navigate = useNavigate()

    useEffect(() => {
        if (role === "ADMIN") {
            setOptions(require("../adminRoutes.json"))
        } else if (role === "STUDENT") {
            setOptions(require("../studentRoutes.json"))
        } else if (role === "COURSE_COORDINATOR") {
            setOptions(require("../courseCoordinatorRoutes.json"))
        } else if (role === "ERASMUS_COORDINATOR") {
            setOptions(require("../erasmusCoordinatorRoutes.json"))
        } else {

        }
    }, [])
    return (
        <Tooltip title="Search">
            <Autocomplete
                disablePortal
                id="search-bar"
                options={options}
                sx={{width: 300}}
                onChange={(event, value) => {
                    navigate(value["route"])
                }}
                renderInput={(params) => <TextField {...params} label="Search"/>}
            />
        </Tooltip>
    )
}
export default SearchBar