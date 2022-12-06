import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardNavbar } from "../../components/componentsStudent/dashboard-navbar";
import { DashboardSidebar } from "../../components/componentsStudent/dashboard-sidebar";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
    Box,
    Button,
    Checkbox,
    Container,
    FormHelperText,
    Link,
    TextField,
    Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { styled } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";

const DashboardLayoutRoot = styled("div")(({ theme }) => ({
    display: "flex",
    flex: "1 1 auto",
    maxWidth: "100%",
    paddingTop: 64,
    [theme.breakpoints.up("lg")]: {
        paddingLeft: 280,
    },
}));

const LearningAgreement = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const navigate = useNavigate();

    const goDash = () => {
        navigate("/dash");
    };

    const rows = {};

    const formik = useFormik({
        initialValues: {
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            policy: false,
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Must be a valid email")
                .max(255)
                .required("Email is required"),
            firstName: Yup.string().max(255).required("First name is required"),
            lastName: Yup.string().max(255).required("Last name is required"),
            password: Yup.string().max(255).required("Password is required"),
        }),
        onSubmit: () => {
            navigate("/loginStudent");
        },
    });

    return (
        <>
            <title>Learning Agreement Form</title>
            <DashboardLayoutRoot>
                <Box
                    component="main"
                    sx={{
                        alignItems: "center",
                        display: "flex",
                        flexGrow: 1,
                        minHeight: "100%",
                        paddingTop: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <form onSubmit={formik.handleSubmit}>
                            <Box sx={{ my: 2 }}>
                                <Typography color="textPrimary" variant="h4">
                                    Learning Agreement Form
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    gutterBottom
                                    variant="body2"
                                    marginTop={1}
                                >
                                    First Name: FIRST_NAME
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    gutterBottom
                                    variant="body2"
                                >
                                    Last Name: LAST_NAME
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    gutterBottom
                                    variant="body2"
                                >
                                    Date of Birth: DATE_OF_BIRTH
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    gutterBottom
                                    variant="body2"
                                >
                                    Nationality: NATIONALATY
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    gutterBottom
                                    variant="body2"
                                >
                                    Sex [M/F]: SEX
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    gutterBottom
                                    variant="body2"
                                >
                                    Academic Year : ACADEMIC_YEAR
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    gutterBottom
                                    variant="body2"
                                >
                                    Recieving Instution : RECIEVING_INSTUTITION
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    gutterBottom
                                    variant="body2"
                                >
                                    Faculty : FACULTY
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    gutterBottom
                                    variant="body2"
                                >
                                    Erasmus Code : ERASMUS_CODE
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    gutterBottom
                                    variant="body2"
                                >
                                    Department : DEPARTMENT
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    gutterBottom
                                    variant="body2"
                                >
                                    Address : ADDRESS
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    gutterBottom
                                    variant="body2"
                                >
                                    Country : COUNTRY
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    gutterBottom
                                    variant="body2"
                                >
                                    Contact Person : CONTACT PERSON
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    gutterBottom
                                    variant="body2"
                                >
                                    Contact Person Mail : CONTACT PERSON MAIL
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    gutterBottom
                                    variant="body2"
                                >
                                    Sending Instution : Bilkent University
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    gutterBottom
                                    variant="body2"
                                >
                                    Sending Instution Faculty : SENDING
                                    INSTITUTION FACULTY
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    gutterBottom
                                    variant="body2"
                                >
                                    Sending Instution Erasmus Code : SENDING
                                    INSTITUTION ERASMUS CODE
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    gutterBottom
                                    variant="body2"
                                >
                                    Sending Instution Department : SENDING
                                    INSTITUTION DEPARTMENT
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    gutterBottom
                                    variant="body2"
                                >
                                    Sending Instution Address : SENDING
                                    INSTITUTION ADDRESS
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    gutterBottom
                                    variant="body2"
                                >
                                    Sending Instution Country : SENDING
                                    INSTITUTION COUNTRY
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    gutterBottom
                                    variant="body2"
                                >
                                    Sending Instution Contact : SENDING
                                    INSTITUTION CONTACT
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    gutterBottom
                                    variant="body2"
                                >
                                    Sending Instution Contact Mail : SENDING
                                    INSTITUTION CONTACT MAIL
                                </Typography>
                            </Box>
                            <TextField
                                error={Boolean(
                                    formik.touched.firstName &&
                                        formik.errors.firstName
                                )}
                                fullWidth
                                helperText={
                                    formik.touched.firstName &&
                                    formik.errors.firstName
                                }
                                label="Study Cycle"
                                margin="normal"
                                name="firstName"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.firstName}
                                variant="outlined"
                            />
                            <TextField
                                error={Boolean(
                                    formik.touched.lastName &&
                                        formik.errors.lastName
                                )}
                                fullWidth
                                helperText={
                                    formik.touched.lastName &&
                                    formik.errors.lastName
                                }
                                label="Subject Area/Code"
                                margin="normal"
                                name="lastName"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.lastName}
                                variant="outlined"
                            />
                            <TextField
                                error={Boolean(
                                    formik.touched.email && formik.errors.email
                                )}
                                fullWidth
                                helperText={
                                    formik.touched.email && formik.errors.email
                                }
                                label="Semester"
                                margin="normal"
                                name="email"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="email"
                                value={formik.values.email}
                                variant="outlined"
                            />
                            <TextField
                                error={Boolean(
                                    formik.touched.password &&
                                        formik.errors.password
                                )}
                                fullWidth
                                helperText={
                                    formik.touched.password &&
                                    formik.errors.password
                                }
                                label="Password"
                                margin="normal"
                                name="password"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="password"
                                value={formik.values.password}
                                variant="outlined"
                            />
                            <Box
                                sx={{
                                    alignItems: "center",
                                    display: "flex",
                                    ml: -1,
                                }}
                            ></Box>
                            {Boolean(
                                formik.touched.policy && formik.errors.policy
                            ) && (
                                <FormHelperText error>
                                    {formik.errors.policy}
                                </FormHelperText>
                            )}
                            <Box sx={{ py: 2 }}>
                                <Button
                                    color="primary"
                                    disabled={formik.isSubmitting}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                >
                                    Submit Learning Agreement
                                </Button>
                            </Box>
                        </form>
                        <DataGrid
                            columns={[{ field: "name", editable: true }]}
                            rows={[{ id: 1, field: "aa", editable: true }]}
                        />
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

export default LearningAgreement;
