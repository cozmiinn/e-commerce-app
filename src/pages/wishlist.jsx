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
import {deleteWish, getWishlist} from "../services/wishlistFunctions";

function Wishlist() {
    const wishlist = getWishlist();

    const handleDeleteFromWish=(product)=>{
        deleteWish(product);
    }

    return (
        <>
            <img className="back" src={background} alt="wish"/>
            <div className="centered">
                <p>Wishlist</p>
                <div className="a-text">
                    <a href="/home">Home</a>
                    <p> / </p>
                    <a href="/produse">Produse</a>
                </div>
            </div>
                <TableContainer component={Paper}>
                    <div className="container-13">
                    <Table className="center" sx={{ minWidth: 650 }} arial-labe="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell>ID</TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell>Product name</TableCell>
                                <TableCell>Unit price</TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {wishlist.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell></TableCell>
                                    <TableCell>{product.id}</TableCell>
                                    <TableCell>
                                        <img className="imagesTable" src={product.image} alt={product.title}/>
                                    </TableCell>
                                    <TableCell>{product.title}</TableCell>
                                    <TableCell>${product.price}</TableCell>
                                    <TableCell>
                                        <button className="buttonDelete" onClick={()=>handleDeleteFromWish(product)}>Delete</button>
                                    </TableCell>
                                </TableRow>
                            ))}
                            <TableRow>

                            </TableRow>
                        </TableBody>
                    </Table>
                    </div>
                </TableContainer>

        </>
    )
}

export default Wishlist;