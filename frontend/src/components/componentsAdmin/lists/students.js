import { format } from 'date-fns';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { React, useState } from 'react';
import { useNavigate } from 'react-router';
import {
    Box,
    Card,
    CardHeader, Checkbox, IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
    Tooltip
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const Students = (props) => {
    const navigate = useNavigate();
    const { students } = props;
    const [selectedState, setSelected] = useState(
        new Array(students.length).fill(false)
    )
    const handleSelected = (position) => {
        const updatedCheckedState = selectedState.map((item, index) =>
            index === position ? !item : item
        );
        setSelected(updatedCheckedState)
    }

    const handleSelectAll = (value) => {
        const trueArray = new Array(students.length).fill(value)
        setSelected(trueArray)
    }

    console.log(students)
    return (
        <Card {...props}>
            <CardHeader title="Student List"/>
            <PerfectScrollbar>
                <Box sx={{
                    minWidth: 800,
                    height: 400
                }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Checkbox
                                        onChange={(e) => handleSelectAll(e.target.checked)}
                                    />
                                </TableCell>
                                <TableCell>
                                    Student ID
                                </TableCell>
                                <TableCell>
                                    Student First Name
                                </TableCell>
                                <TableCell sortDirection="desc">
                                    Student Last Name
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
                            <TableCell>
                                Actions
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students && students.map((student, index) => (
                            <TableRow
                                hover
                                key={student.id}
                                selected={selectedState[index]}
                            >
                                <TableCell>
                                    <Checkbox
                                        onChange={() => {
                                            handleSelected(index)
                                        }}
                                        checked={selectedState[index]}
                                    />
                                </TableCell>
                                <TableCell>
                                    {student.id}
                                </TableCell>
                                <TableCell>
                                    {student.firstName}
                                </TableCell>
                                <TableCell>
                                    {student.lastName}
                                </TableCell>
                                <TableCell>
                                    {student.starsId}
                                </TableCell>
                                <TableCell>
                                    {student.semester}
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
                                                onClick={() => {navigate(`/studentListAdmin/student/${student.id}`, {state: student})}}
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
        </Card>
    )
};
