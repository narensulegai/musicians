import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {useAuth0} from "@auth0/auth0-react";
import {CardContent, Typography} from "@material-ui/core";

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
        // await fetch(`${process.env.REACT_APP_API}/contactRequest`, {
        //     method: "POST",
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(data)
        // });
        alert(`Thank you ${user.name}, we will reach out to you soon!`);
        setMessage("");
        setInstrument("");
    }
    return (
        <div>
            <Typography variant="h6" component="h6">
                Contact us
            </Typography>
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
                    : <Typography variant="h6" component="h6">
                        Please log in to send us a message
                    </Typography>}
            </div>
        </div>
    );
};

ContactUs.propTypes = {};

export default ContactUs;