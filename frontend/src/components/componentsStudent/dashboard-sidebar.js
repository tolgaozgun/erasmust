import PropTypes from "prop-types";
import { Box, Divider, Drawer, Typography, useMediaQuery } from "@mui/material";
import { ChartBar as ChartBarIcon } from "../../icons/chart-bar";
import { Cog as CogIcon } from "../../icons/cog";
import { User as UserIcon } from "../../icons/user";
import { Logo } from "./logo";
import { NavItem } from "./nav-item";
import ImportExportOutlinedIcon from "@mui/icons-material/ImportExportOutlined";
import ApprovalOutlinedIcon from "@mui/icons-material/ApprovalOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { HiGlobeEuropeAfrica } from "react-icons/hi2";
import { HiGlobeAmericas } from "react-icons/hi2";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import React from "react";
const items = [
    {
        href: "/student/dashboard",
        icon: <ChartBarIcon fontSize="small" />,
        title: "Dashboard",
    },
    {
        href: "/student/erasmus/dashboard",
        icon: <HiGlobeEuropeAfrica fontSize="small"/>,
        title: "Erasmus Page",
        side: [
            {
                href: "/student/erasmus/application/list",
                icon: <AddOutlinedIcon fontSize="small"/>,
                title: "View Your Erasmus Application List",
            },
            {
                href: "/student/erasmus/application/create",
                icon: <AddOutlinedIcon fontSize="small"/>,
                title: "Create Erasmus Application",
            },
            {
                href: "/student/erasmus/application/view",
                icon: <AddOutlinedIcon fontSize="small"/>,
                title: "View Your Erasmus Applicaiton",
            },
            {
                href: "/student/erasmus/preapproval/list",
                icon: <AddOutlinedIcon fontSize="small"/>,
                title: "View Your Preapproval List",
            },
            {
                href: "/student/erasmus/preapproval/create",
                icon: <AddOutlinedIcon fontSize="small" />,
                title: "Create Preapproval Form",
            },
            {
                href: "/student/erasmus/preapproval/view",
                icon: <AddOutlinedIcon fontSize="small" />,
                title: "View Your Preapproval Form",
            },
        ],
    },
    {
        href: "/student/exchange/",
        icon: <HiGlobeAmericas fontSize="small" />,
        title: "Exchange Program",
    },
    {
        href: "/applications",
        icon: <ApprovalOutlinedIcon fontSize="small" />,
        title: "Applications",
    },
    {
        href: "/submissionsStudent",
        icon: <ImportExportOutlinedIcon fontSize="small" />,
        title: "Submissions",
    },
    {
        href: "/student/account",
        icon: <UserIcon fontSize="small" />,
        title: "Account",
    },
    {
        href: "/exchangeFaq",
        icon: <QuestionMarkIcon fontSize="small" />,
        title: "Exchange FAQ",
    },
    {
        href: "/student/settings",
        icon: <CogIcon fontSize="small" />,
        title: "Settings",
    },
];

export const DashboardSidebar = (props) => {
    const { open, onClose } = props;
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
        defaultMatches: true,
        noSsr: false,
    });

    const content = (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                }}
            >
                <div>
                    <Box sx={{ p: 3 }}>
                        <a href="/">
                            <Logo
                                sx={{
                                    height: 42,
                                    width: 42,
                                }}
                            />
                        </a>
                    </Box>
                    <Box sx={{ px: 2 }}>
                        <Typography sx={{ m: 1 }} variant="h4">
                            Erasmust
                        </Typography>
                    </Box>
                </div>
                <Divider
                    sx={{
                        borderColor: "#2D3748",
                        my: 3,
                    }}
                />
                <Box sx={{ flexGrow: 1 }}>
                    {items.map((item) => (
                        <NavItem
                            key={item.title}
                            icon={item.icon}
                            href={item.href}
                            title={item.title}
                            sideItems={item.side}
                        />
                    ))}
                </Box>
                <Divider sx={{ borderColor: "#2D3748" }} />
            </Box>
        </>
    );
    if (lgUp) {
        return (
            <Drawer
                anchor="left"
                open
                PaperProps={{
                    sx: {
                        backgroundColor: "neutral.900",
                        color: "#FFFFFF",
                        width: 280,
                    },
                }}
                variant="permanent"
            >
                {content}
            </Drawer>
        );
    }

    return (
        <Drawer
            anchor="left"
            onClose={onClose}
            open={open}
            PaperProps={{
                sx: {
                    backgroundColor: "neutral.900",
                    color: "#FFFFFF",
                    width: 280,
                },
            }}
            sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
            variant="temporary"
        >
            {content}
        </Drawer>
    );
};

DashboardSidebar.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool,
};
