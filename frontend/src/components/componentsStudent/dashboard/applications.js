import { format } from 'date-fns';
import PerfectScrollbar from 'react-perfect-scrollbar';
import React from 'react';
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
    Tooltip
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SeverityPill } from '../severity-pill';

const applications = [
    {
        id: 1,
        student:{
            id: 4,
            name: "Tolga Özgün",
        },
        assignee: {
            id: 5,
            name: "Can Alkan",
        },
        academicYear: "2022-2023",
        semester: "FALL",
        createdAt: 1555016400000,
        status: 'approved'
    },
    {
        id: 2,
        student:{
            id: 4,
            name: "Tolga Özgün",
        },
        assignee: {
            id: 5,
            name: "Can Alkan",
        },
        academicYear: "2022-2023",
        semester: "FALL",
        createdAt: 1555016400000,
        status: 'approved'
    },
    {
        id: 3,
        student:{
            id: 4,
            name: "Tolga Özgün",
        },
        assignee: {
            id: 5,
            name: "Can Alkan",
        },
        academicYear: "2022-2023",
        semester: "FALL",
        createdAt: 1555016400000,
        status: 'approved'
    },
    {
        id: 4,
        student:{
            id: 4,
            name: "Tolga Özgün",
        },
        assignee: {
            id: 5,
            name: "Can Alkan",
        },
        academicYear: "2022-2023",
        semester: "FALL",
        createdAt: 1555016400000,
        status: 'approved'
    },
];

export const ApplicationsList = (props) => (
    <Card {...props}>
        <CardHeader title="Ongoing Applications" />
        <PerfectScrollbar>
            <Box sx={{
                minWidth: 800,
                height: 400 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Application ID
                            </TableCell>
                            <TableCell>
                                Student Name
                            </TableCell>
                            <TableCell sortDirection="desc">
                                <Tooltip
                                    enterDelay={300}
                                    title="Sort"
                                >
                                    <TableSortLabel
                                        active
                                        direction="desc"
                                    >
                                        Date
                                    </TableSortLabel>
                                </Tooltip>
                            </TableCell>
                            <TableCell sortDirection="desc">
                                <Tooltip
                                    enterDelay={300}
                                    title="Sort"
                                >
                                    <TableSortLabel
                                        active
                                        direction="desc"
                                    >
                                        Assignee
                                    </TableSortLabel>
                                </Tooltip>
                            </TableCell>
                            <TableCell>
                                Status
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {applications.map((application) => (
                            <TableRow
                                hover
                                key={application.id}
                            >
                                <TableCell>
                                    {application.id}
                                </TableCell>
                                <TableCell>
                                    {application.student.name}
                                </TableCell>
                                <TableCell>
                                    {format(application.createdAt, 'dd/MM/yyyy')}
                                </TableCell>
                                <TableCell>
                                    {application.assignee.name}
                                </TableCell>
                                <TableCell>
                                    <SeverityPill
                                        color={(application.status === 'approved' && 'success')
                                            || (application.status === 'disapproved' && 'error')
                                            || 'warning'}
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
                display: 'flex',
                justifyContent: 'flex-end',
                p: 2
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
