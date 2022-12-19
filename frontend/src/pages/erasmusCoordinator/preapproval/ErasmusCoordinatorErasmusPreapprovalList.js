import React, {useEffect, useState} from 'react';
import {styled} from "@mui/material/styles";
import {DashboardNavbar} from "../../../components/componentsErasmusCoordinator/dashboard-navbar";
import {DashboardSidebar} from "../../../components/componentsErasmusCoordinator/dashboard-sidebar";
import {Box, Container, Grid} from "@mui/material";
import {Students} from "../../../components/componentsAdmin/lists/students";
import axios from 'axios';
import StudentPreapprovalList from "../../student/Preapproval/StudentErasmusPreapprovalList";
import PreapprovalsList
    from "../../../components/componentsErasmusCoordinator/info/erasmus/preapprovalForm/preapprovals-list";

const DashboardLayoutRoot = styled('div')(({theme}) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));

const ErasmusCoordinatorErasmusPreapprovalList = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [preapprovalList, setPreapprovalList] = useState([]);
    const [flag, setFlag] = useState(false);
    const [isApproved, setApproved] = useState()

    const token = localStorage.getItem("jwtToken");
    var array = []


    useEffect(() => {
        axios.get("http://92.205.25.135:4/pre-approval/erasmus/get-all/exchange-coordinator/pre-approval-forms", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => {
                if (res && res.data) {
                    var i;
                    for (i = 0; i < res.data.length; i++) {
                        console.log("Item fetched!")

                        array.push(res.data[i])

                        console.log(res.data);
                        console.log("Item placed on array!");
                    }
                    setPreapprovalList(array)
                    setFlag(true)
                }
            })
            .catch((err) => {
                if (err && err.response) {
                    console.log("Error: ", err)
                }
            })
    }, []);

    const handleApproval = (approvedBool, id) => {

        const url = "http://92.205.25.135:4/pre-approval/erasmus/evaluate/" + id;
        console.log(approvedBool, id)
        console.log(url)

        axios.post(url, JSON.stringify({
            "flag": approvedBool
        }), {
            headers: {
                "Authorization": `Bearer ${token}`,
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then((res) => {
                console.log(res)
                //setApproved(res.data)
            })
            .catch((err) => {
                console.log("Err: ", err)
            })
    }

    return (
        <>  <title>
            Preapprovals
        </title>
            <DashboardLayoutRoot>
                <Box
                    component="main"
                    sx={{
                        display: 'flex',
                        flex: '1 1 auto',
                        flexDirection: 'column',
                        width: '100%',
                        flexGrow: 1,
                        py: 8
                    }}
                >
                    <Container maxWidth={false}>
                        <Grid
                            container
                            spacing={3}
                        >
                            <Grid
                                item
                                lg={12}
                                md={12}
                                xl={15}
                                xs={12}
                            >
                                <PreapprovalsList handleApproval={handleApproval} preapprovals={preapprovalList}/>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </DashboardLayoutRoot>
            <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)}/>
            <DashboardSidebar
                onClose={() => setSidebarOpen(false)}
                open={isSidebarOpen}/>
        </>
    );
}

export default ErasmusCoordinatorErasmusPreapprovalList
