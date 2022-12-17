import {format} from "date-fns";
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

export const CourseReviewFormList = (props) => (
    <Card {...props}>
        <CardHeader title="Ongoing StudentPreapprovalList"/>
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
                            <TableCell>Preapproval ID</TableCell>
                            <TableCell>Student Name</TableCell>
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
                        {props.applications && props.applications.map((application) => (
                            <TableRow hover key={application.id}>
                                <TableCell>{application.id}</TableCell>
                                <TableCell>
                                    {application.student.firstName} {application.student.lastName}
                                </TableCell>
                                <TableCell>
                                    {/*{format(*/}
                                    {/*    preapproval.createdAt,*/}
                                    {/*    "dd/MM/yyyy"*/}
                                    {/*)}*/}
                                </TableCell>
                                <TableCell>
                                    {application.coordinator.firstName} {application.coordinator.lastName}
                                </TableCell>
                                <TableCell>
                                    <SeverityPill
                                        color={
                                            (application.status ===
                                                "approved" &&
                                                "success") ||
                                            (application.status ===
                                                "disapproved" &&
                                                "error") ||
                                            "warning"
                                        }
                                    >
                                        {application.status}
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
);
