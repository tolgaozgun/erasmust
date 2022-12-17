import { format } from "date-fns";
import PerfectScrollbar from "react-perfect-scrollbar";
import { DashboardSidebar } from "../../components/componentsStaff/dashboard-sidebar";
import { DashboardNavbar } from "../../components/componentsStaff/dashboard-navbar";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Box,
    Button,
    Card,
    CardHeader,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
    Tooltip,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
// import { SeverityPill } from "../severity-pill";

const DashboardLayoutRoot = styled("div")(({ theme }) => ({
    display: "flex",
    flex: "1 1 auto",
    maxWidth: "100%",
    paddingTop: 64,
    [theme.breakpoints.up("lg")]: {
        paddingLeft: 280,
    },
}));
const schools = [
    {
        name: "Kingston University",
        country: "UK",
        city: "London",
        quota: 4,
    },
    {
        name: "Kingston University",
        country: "AK",
        city: "London",
        quota: 4,
    },
    {
        name: "Kingston University",
        country: "BK",
        city: "London",
        quota: 4,
    },
    {
        name: "Kingston University",
        country: "CK",
        city: "London",
        quota: 4,
    },
];

const SchoolList = (props) => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const navigate = useNavigate();

    const goDash = () => {
        navigate("/dash");
    };
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <DashboardLayoutRoot>
                <Card
                    {...props}
                    sx={{
                        py: 8,
                    }}
                >
                    <CardHeader title="Schools" />
                    <PerfectScrollbar>
                        <Box
                            sx={{
                                minWidth: 800,
                                height: 400,
                                display: "flex",
                            }}
                        >
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Scool Name</TableCell>
                                        <TableCell sortDirection="desc">
                                            <Tooltip
                                                enterDelay={300}
                                                title="Sort"
                                            >
                                                <TableSortLabel
                                                    active
                                                    direction="desc"
                                                >
                                                    Country
                                                </TableSortLabel>
                                            </Tooltip>
                                        </TableCell>
                                        <TableCell sortDirection="desc">
                                            <Tooltip
                                                enterDelay={300}
                                                title="Sort"
                                            >
                                                <TableSortLabel
                                                    active
                                                    direction="desc"
                                                >
                                                    City
                                                </TableSortLabel>
                                            </Tooltip>
                                        </TableCell>
                                        <TableCell>Quota</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {schools.map((school) => (
                                        <TableRow hover key={school.name}>
                                            <TableCell>{school.name}</TableCell>
                                            <TableCell>
                                                {school.country}
                                            </TableCell>
                                            <TableCell>{school.city}</TableCell>
                                            <TableCell>
                                                {school.quota}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </PerfectScrollbar>
                    {/* <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        p: 2,
                    }}
                    >
                    <Button
                    color="primary"
                    endIcon={<ArrowRightIcon fontSize="small" />}
                    size="small"
                    variant="text"
                    >
                    View all
                    </Button>
                </Box> */}
                </Card>
                <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
                <DashboardSidebar
                    onClose={() => setSidebarOpen(false)}
                    open={isSidebarOpen}
                />
            </DashboardLayoutRoot>
        </div>
    );
};
export default SchoolList;
