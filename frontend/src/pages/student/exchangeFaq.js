import { Box, Container, Grid } from "@mui/material";
import { LatestOrders } from "../../components/componentsStudent/dashboard/latest-orders";
import { Sales } from "../../components/componentsStudent/dashboard/sales";
import { DashboardNavbar } from "../../components/componentsStudent/dashboard-navbar";
import { DashboardSidebar } from "../../components/componentsStudent/dashboard-sidebar";
import React, { useState } from "react";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
        borderBottom: 0,
    },
    "&:before": {
        display: "none",
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, .05)"
            : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const DashboardLayoutRoot = styled("div")(({ theme }) => ({
    display: "flex",
    flex: "1 1 auto",
    maxWidth: "100%",
    paddingTop: 64,
    [theme.breakpoints.up("lg")]: {
        paddingLeft: 280,
    },
}));

const ExchangeFaq = (props) => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <>
            <title>Preapproval Form</title>
            <DashboardLayoutRoot>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        py: 14,
                        px: 14,
                    }}
                >
                    <Accordion
                        expanded={expanded === "panel1"}
                        onChange={handleChange("panel1")}
                    >
                        <AccordionSummary
                            aria-controls="panel1d-content"
                            id="panel1d-header"
                        >
                            <Typography>
                                Q.1. What is the student exchange program?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                An important component of university education
                                is to develop a better understanding of the
                                world, not just academically but also socially.
                                Student exchange is a means to achieve this goal
                                by enabling students study at an environment
                                different from their home country and
                                institution.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel2"}
                        onChange={handleChange("panel2")}
                    >
                        <AccordionSummary
                            aria-controls="panel2d-content"
                            id="panel2d-header"
                        >
                            <Typography>
                                Q.2. What are the financial issues involved for
                                an exchange student?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                The university tuition/scholarship situation
                                remains unchanged for the exchange student. The
                                student continues to receive his scholarship or
                                pay his tuition to his home institution (Bilkent
                                University) as he would do otherwise, of the
                                same amount. An exchange visit involves several
                                other costs as well, such as the travel,
                                accommodation, and living expenses. These
                                expenses can be expected roughly to be in the
                                order of 1000 USD/month, although this figure
                                may vary significantly depending on the place as
                                well as the person. Erasmus students receive an
                                EU support of 400 Euro/month to cover part of
                                their expenses.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel3"}
                        onChange={handleChange("panel3")}
                    >
                        <AccordionSummary
                            aria-controls="panel3d-content"
                            id="panel3d-header"
                        >
                            <Typography>
                                Q.3. Is housing provided to exchange students at
                                the host universities?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                This depends on the particular host institution
                                and their availability of on-campus housing.
                                Most universities provide some sort of housing
                                (mostly on-campus dormitories) for a certain
                                fee.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel4"}
                        onChange={handleChange("panel4")}
                    >
                        <AccordionSummary
                            aria-controls="panel4d-content"
                            id="panel4d-header"
                        >
                            <Typography>
                                Q.4. Who can apply for the exchange program?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Bilkent students who will have completed two
                                years of study at Bilkent by the time of the
                                exchange and who satisfy the minimum GPA
                                requirements (see question below) can apply.
                                Irregular students with an equivalent of 1.5
                                years of coursework may also be eligible
                                depending on the particular situation.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel5"}
                        onChange={handleChange("panel5")}
                    >
                        <AccordionSummary
                            aria-controls="panel5d-content"
                            id="panel5d-header"
                        >
                            <Typography>
                                Q.5. Can't I go to exchange on the 4th year?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                The ideal time for going to exchange is one's
                                3rd year in college, so that the student will
                                have a chance during his 4th year to complete
                                the courses he couldn't find at the host
                                institution and will be able to graduate in
                                time. (See the question below on the transfer of
                                courses.) A student who goes to exchange on his
                                4th year will most probably have to delay his
                                graduation for one or two semesters.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel6"}
                        onChange={handleChange("panel6")}
                    >
                        <AccordionSummary
                            aria-controls="panel6d-content"
                            id="panel6d-header"
                        >
                            <Typography>
                                Q.6. How can I apply for the exchange program?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Application for the Erasmus exchange is done
                                through the departmental coordinators; and
                                application for the other exchanges are done
                                through the Office of Student Affairs.
                                Applications for non-Erasmus exchanges are
                                typically received in mid Fall semester; Erasmus
                                applications are received in early Spring. The
                                exact application deadlines and the requirements
                                are announced each year by e-mail to the Bilkent
                                student body.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel7"}
                        onChange={handleChange("panel7")}
                    >
                        <AccordionSummary
                            aria-controls="panel7d-content"
                            id="panel7d-header"
                        >
                            <Typography>
                                Q.7. Is there a GPA requirement for exchange
                                applications?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Bilkent is very selective about the students it
                                sends for exchange. The minimum cumulative GPA
                                requirement is 2.5 for Erasmus and 3.0 for the
                                general exchange applications, although the
                                actual GPA of the selected students tends to be
                                much higher. Any possible changes that may occur
                                on this requirement will be specified in the
                                announcement e-mail. If the cGPA of a student
                                falls below 2.5 at any point before semester at
                                the host institution starts, the exchange will
                                be canceled; i.e. the student will lose his/her
                                spot for the Erasmus program.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel8"}
                        onChange={handleChange("panel8")}
                    >
                        <AccordionSummary
                            aria-controls="panel8d-content"
                            id="panel8d-header"
                        >
                            <Typography>
                                Q.8. How does the quality of education at
                                partner universities compare to that at Bilkent?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                As the Bilkent CS Department, we do exchange
                                agreements only with the best universities of
                                the world. All of our exchange partners are
                                among the most established universities of their
                                countries, and most of them have been listed
                                among the World's Top 200 Universities according
                                the Times Higher Education Supplement.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel9"}
                        onChange={handleChange("panel9")}
                    >
                        <AccordionSummary
                            aria-controls="panel9d-content"
                            id="panel9d-header"
                        >
                            <Typography>
                                Q.9. Can I study in English at the universities
                                of non-English speaking countries?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Most of our exchange partners have their
                                undergraduate education in the language of their
                                country, with the exception of some Northern
                                European universities which offer some of their
                                courses also in English for international
                                students. For the universities that offer
                                courses only in their native language,
                                proficiency in that language is a condition we
                                require for a student to be eligible.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel10"}
                        onChange={handleChange("panel10")}
                    >
                        <AccordionSummary
                            aria-controls="panel10d-content"
                            id="panel10d-header"
                        >
                            <Typography>
                                Q.10. How is the course program determined for
                                the exchange students?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Once the student is selected for exchange with a
                                particular university, he should go to that
                                university's course catalog webpage and identify
                                the courses that are suitable. These courses can
                                either be the equivalent of a Bilkent CS course,
                                or otherwise can be taken as a technical or
                                non-technical elective. (I encourage students to
                                take the exchange as an opportunity for taking
                                courses they find interesting which are not
                                offered at their home university.) The
                                departmental coordinator and the student then go
                                over the course list and finalize the courses
                                that will be taken.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel11"}
                        onChange={handleChange("panel11")}
                    >
                        <AccordionSummary
                            aria-controls="panel11d-content"
                            id="panel11d-header"
                        >
                            <Typography>
                                Q.11. Are the grades received in the exchange
                                included in my cumulative GPA at Bilkent?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                The credits of the courses taken in the exchange
                                are transfered towards the student's degree at
                                Bilkent, but their grades are not included in
                                the CGPA.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel12"}
                        onChange={handleChange("panel12")}
                    >
                        <AccordionSummary
                            aria-controls="panel12d-content"
                            id="panel12d-header"
                        >
                            <Typography>
                                Q.12. Is there a grade requirement for the
                                courses taken in the exchange?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                A passing grade is required for a course to be
                                accepted for the student's degree at Bilkent,
                                which usually means a grade C or higher.
                                Moreover, an Erasmus student is expected to pass
                                at least 80% of the courses taken in the
                                exchange. Otherwise, the student may be required
                                to return the Erasmus financial support he has
                                received.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel13"}
                        onChange={handleChange("panel13")}
                    >
                        <AccordionSummary
                            aria-controls="panel13d-content"
                            id="panel13d-header"
                        >
                            <Typography>
                                Q.13. What if I can't find some of my required
                                courses at the exchange university?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                It is very rare that the course offerings of two
                                departments agree exactly and the exchange
                                student can find all his required courses at the
                                host institution. Typically there will be
                                courses that are missing, in which case the
                                student will take other courses instead that can
                                be counted towards his 4th year electives, and
                                will take the missing courses upon his return to
                                Bilkent. Due to this kind of mismatches, the 4th
                                year program of an exchange student is likely to
                                be irregular. Nevertheless, most students see
                                this as a small inconvenience that is well
                                outweighed by the benefits of the exchange
                                experience.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel14"}
                        onChange={handleChange("panel14")}
                    >
                        <AccordionSummary
                            aria-controls="panel14d-content"
                            id="panel14d-header"
                        >
                            <Typography>
                                Q.14. Will going to exchange cause a delay in my
                                graduation?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                No, going to exchange typically does not cause a
                                delay in the student's graduation. As long as
                                the student goes to exchange in his 3rd year, he
                                will have another year after his return to
                                Bilkent to complete any courses he has missed.
                                An exception to this can happen if the student
                                chooses to go to exchange during his 4th year.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel15"}
                        onChange={handleChange("panel15")}
                    >
                        <AccordionSummary
                            aria-controls="panel15d-content"
                            id="panel15d-header"
                        >
                            <Typography>
                                Q.15. What happens if I am not placed. Will I be
                                able to go to exchange if somebody cancels?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                All students that applied to the Erasmus program
                                but not placed in the first round are
                                automatically placed in the waiting list. If a
                                placed student cancels their Erasmus
                                application, regardless of the initial school
                                choices, we will email and inform the next
                                student in the waiting list based on the cGPA
                                and English language scores as of the
                                application time (i.e, the scores will NOT BE
                                UPDATED). We will continue informing the next
                                student in line until the open position is
                                filled. THERE IS NO NEED FOR REAPPLICATION AND
                                NO NEED FOR THE STUDENTS TO CONTACT US TO ASK
                                ABOUT NEW POSITIONS. All such placements are
                                handled by the International Exchange Office for
                                the non-Erasmus bilateral exchange program.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
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

export default ExchangeFaq;
