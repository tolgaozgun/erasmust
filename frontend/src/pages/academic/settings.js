import { Box, Container, Typography } from "@mui/material";
import { SettingsNotifications } from "../../components/componentsStaff/settings/settings-notifications";
import { SettingsPassword } from "../../components/componentsStaff/settings/settings-password";
import { DashboardNavbar } from "../../components/componentsStaff/dashboard-navbar";
import { DashboardSidebar } from "../../components/componentsStaff/dashboard-sidebar";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";

const DashboardLayoutRoot = styled("div")(({ theme }) => ({
    display: "flex",
    flex: "1 1 auto",
    maxWidth: "100%",
    paddingTop: 64,
    [theme.breakpoints.up("lg")]: {
        paddingLeft: 280,
    },
}));

const Settings = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    return (
        <>
            <title>Settings | Material Kit</title>
            <DashboardLayoutRoot>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        py: 8,
                    }}
                >
                    <Container maxWidth="lg">
                        <Typography sx={{ mb: 3 }} variant="h4">
                            Settings
                        </Typography>
                        <Box sx={{ pt: 3 }}>
                            <SettingsPassword />
                        </Box>
                    </Container>
                </Box>
            </DashboardLayoutRoot>
            <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
            <DashboardSidebar
                onClose={() => setSidebarOpen(false)}
                open={isSidebarOpen}
            />
        </>
    );
};

export default Settings;
