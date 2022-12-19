import {useState} from 'react';
import {
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid, Table, TableBody, TableCell, TableContainer, TableRow,
    TextField, Typography
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

    const items = props.items
    Object.keys(items).forEach(function (key, index) {
        if (this[key] == null)
            this[key] = "";
        else if (typeof this[key] === 'object')
            this[key] = this[key].toString()
    }, items);

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableBody stripedRows>
                    {Object.entries(items).map(([key, value]) => (
                        <StyledTableRow
                            key={key}
                            color="green"
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                <Typography sx={{fontSize: 20, fontWeight: 'medium'}}>
                                    {key}
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography sx={{fontSize: 20}}>
                                    {value}
                                </Typography>
                            </TableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    );
};
