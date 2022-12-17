import PerfectScrollbar from 'react-perfect-scrollbar';
import {React, useEffect, useState} from 'react';
import {useNavigate} from 'react-router';
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

export const Staffs = (props) => {
    const navigate = useNavigate();
    const {staffs} = props;
    const [selectedState, setSelected] = useState(
        new Array(staffs.length).fill(false)
    )
    const handleSelected = (position) => {
        const updatedCheckedState = selectedState.map((item, index) =>
            index === position ? !item : item
        );
        setSelected(updatedCheckedState)
    }

    const handleSelectAll = (value) => {
        const trueArray = new Array(staffs.length).fill(value)
        setSelected(trueArray)
    }

    return (
        <Card {...props}>
            <CardHeader title="Staff List"/>
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
                                    Staff Name
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
                                <TableCell>
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {staffs.map((staff, index) => (
                                <TableRow
                                    hover
                                    key={staff.id}
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
                                        {staff.id}
                                    </TableCell>
                                    <TableCell>
                                        {staff.firstName}
                                    </TableCell>
                                    <TableCell>
                                        {staff.lastName}
                                    </TableCell>
                                    <TableCell>
                                        {staff.starsId}
                                    </TableCell>
                                    <TableCell>
                                        {staff.semester}
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
                                                    onClick={() => {
                                                        navigate(`/staffListAdmin/staff/${staff.id}`, {state: staff})
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
        </Card>
    )
};
