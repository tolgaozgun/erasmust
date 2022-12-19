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
    IconButton
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import {SeverityPill} from "../../severity-pill";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const PreapprovalsList = (props) => {

    return (
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
                            <TableCell>Approve/Reject</TableCell>
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
                                    {() => {
                                        if (preapproval.coordinator) {
                                            return preapproval.coordinator.firstName + preapproval.coordinator.lastName
                                        } else {
                                            return "Coordinator not assigned"
                                        }

                                    }}
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
                                    <Tooltip title="View">
                                        <IconButton>
                                            <VisibilityIcon/>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Approve">
                                        <IconButton
                                            onClick={() => props.handleApproval(true, preapproval.id)}
                                        >
                                            <DoneIcon/>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Reject">
                                        <IconButton
                                            onClick={() => props.handleApproval(false, preapproval.id)}
                                        >
                                            <CloseIcon/>
                                        </IconButton>
                                    </Tooltip>
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