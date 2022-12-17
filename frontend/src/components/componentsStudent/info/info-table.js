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
import {styled} from "@mui/material/styles";

export const InfoTable = (props) => {

    const StyledTableRow = styled(TableRow)(({theme}) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));


    console.log(props.items)
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableBody stripedRows>
                    {Object.keys(props.items).map(item => (
                        <StyledTableRow
                            key={item}
                            color="green"
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {item}
                            </TableCell>
                            <TableCell align="right">{props.items[item]}</TableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    );
};
