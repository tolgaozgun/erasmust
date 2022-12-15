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

const students = [
    {
        id: 1,
        name: "Tolga",
        surname: "Özgün",
        bilkentCourse: "CS319 - Object Oriented Software Engineering",
        coordinatorMessage: "Please provide syllabus link and project links. Lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum loremLorem ipsum lorem ipsum loremLorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum loremLorem ipsum lorem ipsum lorem",
        courseCoordinator: "Eray Tuzun",
        hostCourseName: "Statistics",
        hostCourseCode: "MATH234",
        hostUnivesity: "EPFL",
        academicYear: "2022-2023",
        semester: "FALL",
        description: "My syllabus: xx.com\nMy this: xx.com",
        createdAt: 1555016400000,
        files: [""],
    },
    {
        id: 2,
        name: "Tolga",
        surname: "Özgün",
        bilkentCourse: "CS319 - Object Oriented Software Engineering",
        coordinatorMessage: "Please provide syllabus link and project links. Lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum loremLorem ipsum lorem ipsum loremLorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum loremLorem ipsum lorem ipsum lorem",
        courseCoordinator: "Eray Tuzun",
        hostCourseName: "Statistics",
        hostCourseCode: "MATH234",
        hostUnivesity: "EPFL",
        academicYear: "2022-2023",
        semester: "FALL",
        description: "My syllabus: xx.com\nMy this: xx.com",
        createdAt: 1555016400000,
        files: [""],
    },
    {
        id: 3,
        name: "Tolga",
        surname: "Özgün",
        bilkentCourse: "CS319 - Object Oriented Software Engineering",
        coordinatorMessage: "Please provide syllabus link and project links. Lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum loremLorem ipsum lorem ipsum loremLorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum loremLorem ipsum lorem ipsum lorem",
        courseCoordinator: "Eray Tuzun",
        hostCourseName: "Statistics",
        hostCourseCode: "MATH234",
        hostUnivesity: "EPFL",
        academicYear: "2022-2023",
        semester: "FALL",
        description: "My syllabus: xx.com\nMy this: xx.com",
        createdAt: 1555016400000,
        files: [""],
    },
];

const CourseReviewList = (props) => {
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
                                        {student.name} {student.surname}
                                    </TableCell>
                                    <TableCell>
                                        {format(student.createdAt, 'dd/MM/yyyy')}
                                    </TableCell>
                                    <TableCell>
                                        {student.bilkentCourse}
                                    </TableCell>
                                    <TableCell>
                                        {student.hostCourseName}
                                    </TableCell>
                                    <TableCell>
                                        {student.academicYear}
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
                                                <IconButton>
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