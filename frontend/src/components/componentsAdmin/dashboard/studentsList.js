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
    TextField,
    Tooltip
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { DataGrid } from '@mui/x-data-grid';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import { display, width } from '@mui/system';

const columns = [
    {
        field: "id",
        headerName: "Application ID",
        width: 120
    },
    {
        field: "firstName",
        headerName: "Student's Name",
        width: 150,
        editable: true
    },
    {
        field: "lastName",
        headerName: "Student's Surname",
        width: 150,
        editable: true
    },
    {
        field: "createdAt",
        headerName: "Date",
        width: 110,
        type: "date",
        editable: false
    },
    {
        field: "starsId",
        headerName: "Stars ID",
        width: 110,
        editable: true
    },
    {
        field: "semester",
        headerName: "Semester",
        width: 110,
        type: "number",
        editable: true
    }
]

const students = [
    {
        id: 1,
        firstName: "Nisa",
        lastName: "Yılmaz",
        starsId: "22006487",
        semester: 5,
        createdAt: format(1555016400000,"dd/MM/yyyy"),
    },
    {
        id: 2,
        firstName: "Tolga",
        lastName: "Özgün",
        starsId: "22003850",
        semester: 5,
        createdAt: format(1555016400000,"dd/MM/yyyy"),
    },
    {
        id: 3,
        firstName: "Eylül",
        lastName: "Badem",
        starsId: "22008175",
        semester: 5,
        createdAt: format(1555016400000,"dd/MM/yyyy"),
    },
    {
        id: 4,
        firstName: "Barış",
        lastName: "Yıldırım",
        starsId: "22003175",
        semester: 5,
        createdAt: format(1555016400000,"dd/MM/yyyy"),
    },
];

export const StudentsList = (props) => (
    
        <>
            <Box
            sx={{
                width: "100%",
                height: 350,
                display: "flex",
                justifyContent: "flex-end",
                flexGrow: 1,
            }}
            >
                <DataGrid
                    rows={students}
                    columns={columns}
                    pageSize={20}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    sx={{
                        boxShadow: 2,
                        border: 2,
                        borderColor: "#5048E5",
                        '& .MuiDataGrid-cell:hover': {
                            color: '#828DF8',
                        },
                    }}                  
                />
            </Box>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: 2
            }}
        >
            <Button
                color="primary"
                size="small"
                variant="contained"
            >
                <EditIcon fontSize="small" />
            </Button>
        </Box>
    </>
);
