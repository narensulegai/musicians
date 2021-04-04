import React, {useEffect, useState} from 'react';
import {Table, TableContainer, TableBody, TableRow, TableCell, Paper} from "@material-ui/core";

const Home = props => {

    const [requests, setRequests] = useState([]);

    useEffect(() => {
        // (async function () {
        //     const res = await fetch(`${process.env.REACT_APP_API}/contactRequest`, {
        //         method: "GET",
        //         headers: {'Content-Type': 'application/json'},
        //     });
        //     setRequests(await res.json())
        // })();
    }, []);
    return (
        <div>
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
            <div className="small-margin-top"/>
            <i className="small-margin-top roboto small">
                <li>This is a demo app meant to improvise&nbsp;
                    <a href="http://www.almadenyouthmusicians.org/">almadenyouthmusicians</a>
                </li>
                <li>This app works on modern <b>desktop browsers only</b></li>
                <li>ReactJS frontend repo https://github.com/narensulegai/musicians</li>
                <li>User should be able log in with a google account and submit a contact request</li>
                <li>Not all pages are functional</li>
            </i>
        </div>
    );
};

Home.propTypes = {};

export default Home;