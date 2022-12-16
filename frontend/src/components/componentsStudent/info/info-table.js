import {useState} from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid, Table, TableBody, TableCell, TableContainer, TableRow,
    TextField
} from '@mui/material';
import React from 'react';
import Paper from "@mui/material/Paper";

export const InfoTable = (props) => {

    console.log(props.items)
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableBody>
                    {Object.keys(props.items).map(item => (
                        <TableRow
                            key={item}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {item}
                            </TableCell>
                            <TableCell align="right">{props.items[item]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    );
};
