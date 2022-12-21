import {format} from 'date-fns';
import PerfectScrollbar from 'react-perfect-scrollbar';
import React, {useState} from 'react';
import {
    Box,
    Button,
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
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import {SeverityPill} from '../severity-pill';
import {useNavigate} from "react-router-dom";


const CourseReviewList = (props) => {
    const {students} = props


    const navigate = useNavigate()

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

    const getCourseName = (path, application) => {
        return application[path]["name"]
    }


    console.log("Selected: " + selectedState)

    return (
        <Card {...props}>
            <CardHeader title="Ongoing Applications"/>
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
                                    Application ID
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
                                            Bilkent Course
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
                                            Host Course Name
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
                                            Academic Year
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
                                {/*<TableCell>*/}
                                {/*    Status*/}
                                {/*</TableCell>*/}
                                <TableCell>
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {students.map((student, index) => (
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
                                        {getCourseName("courseBilkent", student)}
                                    </TableCell>
                                    <TableCell>
                                        {getCourseName("courseHost", student)}
                                    </TableCell>
                                    <TableCell>
                                        {student.academicYear}
                                    </TableCell>
                                    <TableCell>
                                        {student.semester}
                                    </TableCell>
                                    {/*<TableCell>*/}
                                    {/*    {student.status}*/}
                                    {/*</TableCell>*/}
                                    <TableCell>
                                        <>
                                            <Tooltip title="View">
                                                <IconButton
                                                    onClick={() => {
                                                        navigate(`/student/erasmus/coursereview/view/${student.id}`, {state: student})
                                                    }}>
                                                    <VisibilityIcon/>
                                                </IconButton>
                                            </Tooltip>
                                                <>
                                                    <Tooltip title="Edit">
                                                        <IconButton
                                                            onClick={() => {
                                                                navigate(`/student/erasmus/coursereview/edit/${student.id}`, {state: student})
                                                            }}>
                                                            <EditIcon/>
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip title="Delete">
                                                        <IconButton>
                                                            <DeleteIcon/>
                                                        </IconButton>
                                                    </Tooltip>
                                                </>
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
                    display: 'flex',
                    justifyContent: 'flex-end',
                    p: 2
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

export default CourseReviewList