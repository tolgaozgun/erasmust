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
import { SeverityPill } from "../severity-pill";

const CTForms = [
    {
        id: 1,
        student: {
            id: 10,
            name: "Tolga Özgün",
        },
        assignee: {
            id: 5,
            name: "Can Alkan",
        },
        academicYear: "2022-2023",
        semester: "Fall",
        createdAt: 1555016400000,
        status: "approved",
    },
    {
        id: 2,
        student: {
            id: 10,
            name: "Tolga Özgün",
        },
        assignee: {
            id: 5,
            name: "Ayşegül Dündar",
        },
        academicYear: "2022-2023",
        semester: "Fall",
        createdAt: 1555016400000,
        status: "warning",
    },
    {
        id: 3,
        student: {
            id: 10,
            name: "Tolga Özgün",
        },
        assignee: {
            id: 5,
            name: "Ayşegül Dündar",
        },
        academicYear: "2022-2023",
        semester: "Fall",
        createdAt: 1555016400000,
        status: "error",
    },
    {
        id: 4,
        student: {
            id: 10,
            name: "Tolga Özgün",
        },
        assignee: {
            id: 5,
            name: "Can Alkan",
        },
        academicYear: "2022-2023",
        semester: "Fall",
        createdAt: 1555016400000,
        status: "disapproved",
    },
];

export const CTFormList = (props) => (
    <Card {...props}>
        <CardHeader title="Ongoing Course Transfer Forms" />
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
                            <TableCell>Course Transfer Form ID</TableCell>
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
                        {CTForms.map((CTForm) => (
                            <TableRow hover key={CTForm.id}>
                                <TableCell>{CTForm.id}</TableCell>
                                <TableCell>{CTForm.student.name}</TableCell>
                                <TableCell>
                                    {format(CTForm.createdAt, "dd/MM/yyyy")}
                                </TableCell>
                                <TableCell>{CTForm.assignee.name}</TableCell>
                                <TableCell>
                                    <SeverityPill
                                        color={
                                            (CTForm.status === "approved" &&
                                                "success") ||
                                            (CTForm.status === "disapproved" &&
                                                "error") ||
                                            "warning"
                                        }
                                    >
                                        {CTForm.status}
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
                endIcon={<ArrowRightIcon fontSize="small" />}
                size="small"
                variant="text"
            >
                View all
            </Button>
        </Box>
    </Card>
);
