import {
    Box, Button,
    Container,
    Grid,
    Step, StepButton,
    StepConnector,
    stepConnectorClasses,
    StepLabel,
    Stepper,
    Typography
} from '@mui/material';
import {DashboardNavbar} from '../../../components/componentsStudent/dashboard-navbar';
import {DashboardSidebar} from '../../../components/componentsStudent/dashboard-sidebar';

import {styled} from '@mui/material/styles';
import React, {useEffect, useState} from 'react';
import {Check} from "@mui/icons-material";
import {useParams} from "react-router-dom";
import axios from "axios";
import BeforeMobility from "./BeforeMobility";
import EditBeforeMobility from "./EditBeforeMobility";

const DashboardLayoutRoot = styled('div')(({theme}) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));

const StudentEditErasmusPreapproval = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [mobilityType, setMobilityType] = useState("")
    const [info, setInfo] = useState({})

    const token = localStorage.getItem("jwtToken");

    const params = useParams();
    const appId = params.id
    const url = "http://92.205.25.135:4/learning-agreement-erasmus/get-by-id/" + appId;
    // application id => params.id => appId

    useEffect(() => {
        axios.get(url, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => {
                if (res && res.data) {
                    console.log(res)
                    setMobilityType(res.data["activeMobility"])
                    setInfo(res.data)
                }
            })
            .catch((err) => {
                if (err && err.response) {
                    console.log(err)
                }
            })
    }, [])

    return (
        <>
            <title>
                Edit Learning Agreement
            </title>
            <DashboardLayoutRoot>
                {mobilityType === "BEFOREMOBILITY" &&
                    <EditBeforeMobility appId={appId} edit={info}/>
                }
            </DashboardLayoutRoot>
            <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)}/>
            <DashboardSidebar
                onClose={() => setSidebarOpen(false)}
                open={isSidebarOpen}/>
        </>
    );
};

export default StudentEditErasmusPreapproval;
