import React, {useEffect, useState} from 'react';
import {Table, TableContainer, TableBody, TableRow, TableCell, Paper} from "@material-ui/core";

const Home = props => {

    const [requests, setRequests] = useState([]);

    useEffect(() => {
        (async function () {
            const res = await fetch("http://localhost:3001/contactRequest", {
                method: "GET",
                headers: {'Content-Type': 'application/json'},
            });
            setRequests(await res.json())
        })();
    }, []);
    return (
        <div>
            <h2>Requests from users</h2>
            <div className="small-margin-top">
                <TableContainer component={Paper}>
                    <Table>
                        <TableBody>
                            {requests.map((row) => (
                                <TableRow key={row._id}>
                                    <TableCell component="th" scope="row">{row.name}</TableCell>
                                    <TableCell align="right">{row.instrument}</TableCell>
                                    <TableCell align="right">{row.message}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

Home.propTypes = {};

export default Home;