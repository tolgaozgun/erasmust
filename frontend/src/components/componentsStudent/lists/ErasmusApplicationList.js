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
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const ErasmusApplicationList = (props) => {

    const navigate = useNavigate()

    const getCoordinator = (application) => {
        if (application.coordinator) {
            return application.coordinator.firstName + " " + application.coordinator.lastName;
        }
        return "Coordinator not assigned"
    }


    return (
        <Card {...props}>
            <CardHeader title="Erasmus Applications"/>
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
                                <TableCell>
                                    Actions
                                </TableCell>
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
                                    <TableCell>
                                        <>
                                            <Tooltip title="View">
                                                <IconButton
                                                    onClick={() => {
                                                        navigate(`/student/erasmus/application/view/${application.id}`)
                                                    }}
                                                >
                                                    <VisibilityIcon/>
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Edit">
                                                <IconButton
                                                    onClick={() => {
                                                        navigate(`/student/erasmus/application/edit/${application.id}`, {state: application})
                                                    }}
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
    );
}

export {ErasmusApplicationList}
