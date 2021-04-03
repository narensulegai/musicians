import React, {useEffect, useState} from 'react';
import {Table, TableContainer, TableBody, TableRow, TableCell, Paper} from "@material-ui/core";

const Home = props => {

    const [requests, setRequests] = useState([]);

    useEffect(() => {
        (async function () {
            const res = await fetch(`${process.env.REACT_APP_API}/contactRequest`, {
                method: "GET",
                headers: {'Content-Type': 'application/json'},
            });
            setRequests(await res.json())
        })();
    }, []);
    return (
        <div>
            <h2>Requests from users</h2>
            {requests.length === 0 && <div>No requests yet</div>}
            <div className="small-margin-top">
                <TableContainer component={Paper}>
                    <Table>
                        <TableBody>
                            {requests.map((row) => (
                                <TableRow key={row._id}>
                                    <TableCell component="th" scope="row">{row.user.name}</TableCell>
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