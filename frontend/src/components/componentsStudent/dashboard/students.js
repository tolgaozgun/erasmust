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

const students = [
    {
        id: 1,
        name: "Tolga Özgün",
        starsId: "22003850",
        semester: 5,
        createdAt: 1555016400000,
    },
    {
        id: 2,
        name: "Tolga Özgün",
        starsId: "22003850",
        semester: 5,
        createdAt: 1555016400000,
    },
    {
        id: 3,
        name: "Tolga Özgün",
        starsId: "22003850",
        semester: 5,
        createdAt: 1555016400000,
    },
];

export const StudentsList = (props) => (
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
                                        Stars ID
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
                                        Semester
                                    </TableSortLabel>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((student) => (
                            <TableRow
                                hover
                                key={student.id}
                            >
                                <TableCell>
                                    {student.id}
                                </TableCell>
                                <TableCell>
                                    {student.name}
                                </TableCell>
                                <TableCell>
                                    {format(student.createdAt, 'dd/MM/yyyy')}
                                </TableCell>
                                <TableCell>
                                    {student.starsId}
                                </TableCell>
                                <TableCell>
                                    {student.semester}
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
