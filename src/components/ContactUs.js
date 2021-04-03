import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {useAuth0} from "@auth0/auth0-react";

const ContactUs = props => {

    const [message, setMessage] = useState("");
    const [instrument, setInstrument] = useState("");
    const {user, isAuthenticated} = useAuth0();

    const handleInstrumentChange = (e) => {
        setInstrument(e.target.value);
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }
    const handleSend = async () => {
        const data = {instrument, message, user};
        const res = await fetch("http://localhost:3001/contactRequest", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        console.log(await res.json());
    }
    return (
        <div>
            <h2>Contact Us</h2>
            <div className="small-margin-top">
                <TextField
                    label="Instrument"
                    margin="normal"
                    variant="outlined"
                    fullWidth={true}
                    value={instrument}
                    onChange={handleInstrumentChange}
                />
            </div>

            <div className="small-margin-top">
                <TextField
                    label="Message"
                    multiline
                    rows={4}
                    value={message}
                    onChange={handleMessageChange}
                    variant="outlined"
                    fullWidth={true}
                />
            </div>
            <div className="small-margin-top center">
                {isAuthenticated
                    ? <div className="button" onClick={handleSend}>Send</div>
                    : <div><b>Please login to send this message</b></div>}
            </div>
        </div>
    );
};

ContactUs.propTypes = {};

export default ContactUs;