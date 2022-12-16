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

const preapprovals = [
    {
        id: 1,
        courseHostNames: ["MATH111", "MATH112"],
        courseHostCredits: [1, 5],
        courseBilkentIds: [1, 4],
        student: {
            id: 4,
            name: "Tolga Özgün",
        },
        assignee: {
            id: 5,
            name: "Can Alkan",
        },
        studentId: 4,
        academicYear: "2022-2023",
        semester: "FALL",
        createdAt: 1555016400000,
        status: "approved",
    },
    {
        id: 2,
        courseHostNames: ["MATH111", "MATH112"],
        courseHostCredits: [1, 5],
        courseBilkentIds: [1, 4],
        student: {
            id: 4,
            name: "Tolga Özgün",
        },
        assignee: {
            id: 5,
            name: "Can Alkan",
        },
        studentId: 4,
        academicYear: "2022-2023",
        semester: "FALL",
        createdAt: 1555016400000,
        status: "success",
    },
    {
        id: 3,
        courseHostNames: ["MATH111", "MATH112"],
        courseHostCredits: [1, 5],
        courseBilkentIds: [1, 4],
        student: {
            id: 4,
            name: "Tolga Özgün",
        },
        assignee: {
            id: 5,
            name: "Ayşegül Dündar",
        },
        studentId: 4,
        academicYear: "2022-2023",
        semester: "FALL",
        createdAt: 1555016400000,
        status: "approved",
    },
];

export const PreapprovalsList = (props) => (
    <Card {...props}>
        <CardHeader title="Ongoing Preapprovals" />
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
                        {preapprovals.map((preapproval) => (
                            <TableRow hover key={preapproval.id}>
                                <TableCell>{preapproval.id}</TableCell>
                                <TableCell>
                                    {preapproval.student.name}
                                </TableCell>
                                <TableCell>
                                    {format(
                                        preapproval.createdAt,
                                        "dd/MM/yyyy"
                                    )}
                                </TableCell>
                                <TableCell>
                                    {preapproval.assignee.name}
                                </TableCell>
                                <TableCell>
                                    <SeverityPill
                                        color={
                                            (preapproval.status ===
                                                "approved" &&
                                                "success") ||
                                            (preapproval.status ===
                                                "disapproved" &&
                                                "error") ||
                                            "warning"
                                        }
                                    >
                                        {preapproval.status}
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
