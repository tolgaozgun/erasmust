import { format } from "date-fns";
import PerfectScrollbar from "react-perfect-scrollbar";
import React from "react";
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
import {SeverityPill} from "../severity-pill";


export const LearningAgreementList = (props) => {


    const getAssigneeName = (application) => {
        return application["bilkentInformation"]["contactPersonFirstNameBilkent"] + " " +
            application["bilkentInformation"]["contactPersonLastNameBilkent"]
    }

    return (
        <Card {...props}>
            <CardHeader title="Ongoing Learning Agreements"/>
            <PerfectScrollbar>
                <Box
                    sx={{
                        minWidth: 800,
                        height: 400,
                    }}
                >
                    <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Learning Agreement ID</TableCell>
                            {/*<TableCell>Student Name</TableCell>*/}
                            <TableCell sortDirection="desc">
                                <Tooltip enterDelay={300} title="Sort">
                                    <TableSortLabel active direction="desc">
                                        Date
                                    </TableSortLabel>
                                </Tooltip>
                            </TableCell>
                            <TableCell sortDirection="desc">
                                <Tooltip enterDelay={300} title="Sort">
                                    <TableSortLabel active direction="desc">
                                        Assignee
                                    </TableSortLabel>
                                </Tooltip>
                            </TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.applications.map((learningAgreement) => (
                            <TableRow hover key={learningAgreement.id}>
                                <TableCell>{learningAgreement.id}</TableCell>
                                {/*<TableCell>*/}
                                {/*    {learningAgreement.student.name}*/}
                                {/*</TableCell>*/}
                                <TableCell>
                                    {format(
                                        learningAgreement["mobilityDetailList"][0]["startDate"],
                                        "dd/MM/yyyy"
                                    )}
                                </TableCell>
                                <TableCell>
                                    {getAssigneeName(learningAgreement)}
                                </TableCell>
                                <TableCell>
                                    <SeverityPill
                                        color={
                                            (learningAgreement.status ===
                                                "approved" &&
                                                "success") ||
                                            (learningAgreement.status ===
                                                "disapproved" &&
                                                "error") ||
                                            "warning"
                                        }
                                    >
                                        {learningAgreement.status}
                                    </SeverityPill>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </PerfectScrollbar>
        <Box
            sx={{
                display: "flex",
                justifyContent: "flex-end",
                p: 2,
            }}
        >
            <Button
                color="primary"
                endIcon={<ArrowRightIcon fontSize="small"/>}
                size="small"
                variant="text"
            >
                View all
            </Button>
        </Box>
        </Card>
    )
};
