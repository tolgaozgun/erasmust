import { format } from "date-fns";
import PerfectScrollbar from "react-perfect-scrollbar";
import React, { useState } from "react";
import {
    Box,
    Button,
    Card,
    CardHeader,
    Checkbox,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
    Tooltip,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { DashboardSidebar } from "../../components/componentsStaff/dashboard-sidebar";
import { DashboardNavbar } from "../../components/componentsStaff/dashboard-navbar";

import { ApplicationsList } from "../../components/componentsStudent/dashboard/applications";
import { PreapprovalsList } from "../../components/componentsStudent/dashboard/preapprovals-list";
import { LearningAgreementList } from "../../components/componentsStudent/dashboard/learning-agreement-list";
import { CTFormList } from "../../components/componentsStudent/dashboard/ctform-list";

const DashboardLayoutRoot = styled("div")(({ theme }) => ({
    display: "flex",
    flex: "1 1 auto",
    maxWidth: "100%",
    paddingTop: 64,
    [theme.breakpoints.up("lg")]: {
        paddingLeft: 280,
    },
}));
const innerstyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
};
const liststyle = {
    margin: "40px",
};
const divstyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
};
const Submissions = (props) => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    return (
        <DashboardLayoutRoot style={innerstyle}>
            <div style={divstyle}>
                <ApplicationsList style={liststyle} />
                <PreapprovalsList style={liststyle} />
            </div>
            <div style={divstyle}>
                <LearningAgreementList style={liststyle} />
                <CTFormList style={liststyle} />
            </div>

            <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
            <DashboardSidebar
                onClose={() => setSidebarOpen(false)}
                open={isSidebarOpen}
            />
        </DashboardLayoutRoot>
    );
};

export default Submissions;
