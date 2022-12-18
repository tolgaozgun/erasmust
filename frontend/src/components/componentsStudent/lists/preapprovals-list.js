import {format} from "date-fns";
import PerfectScrollbar from "react-perfect-scrollbar";
import React from "react";
import {
    Box,
    Button,
    Card,
    CardHeader, IconButton,
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
import app from "../../../App";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";


const PreapprovalsList = (props) => {
    const getCoordinator = (preapproval) => {
        if (preapproval.coordinator) {
            return preapproval.coordinator.firstName + " " + preapproval.coordinator.lastName;
        }
        return "Coordinator not assigned"
    }

    return (
        <Card {...props}>
            <CardHeader title="Preapproval List"/>
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
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.preapprovals && props.preapprovals.map((preapproval) => (
                                <TableRow hover key={preapproval.id}>
                                    <TableCell>{preapproval.id}</TableCell>
                                    <TableCell>
                                        {preapproval.student.firstName} {preapproval.student.lastName}
                                    </TableCell>
                                    <TableCell>
                                        {format(
                                            preapproval.date,
                                            "dd/MM/yyyy"
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {getCoordinator(preapproval)}
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
                                    <TableCell>
                                        <>
                                            <Tooltip title="View">
                                                <IconButton>
                                                    <VisibilityIcon/>
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Edit">
                                                <IconButton
                                                    // onClick={() => {
                                                    //     navigate(`/studentListAdmin/student/${student.id}`, {state: student})
                                                    // {}
                                                >
                                                    <EditIcon/>
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Delete">
                                                <IconButton>
                                                    <DeleteIcon/>
                                                </IconButton>
                                            </Tooltip>
                                        </>
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

export default PreapprovalsList