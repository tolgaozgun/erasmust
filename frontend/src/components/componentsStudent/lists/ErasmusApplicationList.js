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

const ErasmusApplicationList = (props) => {

    const getCoordinator = (application) => {
        if (application.coordinator) {
            return application.coordinator.firstName + " " + application.coordinator.lastName;
        }
        return "Coordinator not assigned"
    }


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
                                <TableCell>Erasmus Application ID</TableCell>
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
                            {props.applications && props.applications.map((application) => (
                                <TableRow hover key={application.id}>
                                    <TableCell>{application.id}</TableCell>
                                    {/*<TableCell>*/}
                                    {/*    {application.student.firstName} {application.student.lastName}*/}
                                    {/*</TableCell>*/}
                                    <TableCell>
                                        {format(
                                            application.date,
                                            "dd/MM/yyyy"
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {getCoordinator(application)}
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
}

export {ErasmusApplicationList}
