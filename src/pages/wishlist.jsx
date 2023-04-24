import React from 'react';
import background from "../pics/wishpage.jpg"
import "../design/styleWish.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const Wishlist= ()=>{
    return(
        <>
            <img
                className="back"
                src={background} alt="wish"/>
            <div className="centered">
                <p>Wishlist</p>
                <div className="a-text">
            <a href="/home">Home</a>
            <p> / </p>
            <a href="/produse">Produse</a>
                </div>
            </div>


            <div className="container-10">
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} arial-labe="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell>Product name</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>nu</TableCell>
                                <TableCell>ms</TableCell>
                                <TableCell>hello</TableCell>
                                <TableCell>e ok</TableCell>
                                <TableCell>sa zicem</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>nu</TableCell>
                                <TableCell>ms</TableCell>
                                <TableCell>hello</TableCell>
                                <TableCell>e ok</TableCell>
                                <TableCell>sa zicem</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>nu</TableCell>
                                <TableCell>ms</TableCell>
                                <TableCell>hello</TableCell>
                                <TableCell>e ok</TableCell>
                                <TableCell>sa zicem</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>nu</TableCell>
                                <TableCell>ms</TableCell>
                                <TableCell>hello</TableCell>
                                <TableCell>e ok</TableCell>
                                <TableCell>sa zicem</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
};

export default Wishlist;