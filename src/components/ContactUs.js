import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';

const ContactUs = props => {

    const [message, setMessage] = useState("");

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }

    return (
        <div>
            <h2>Contact Us</h2>
            <div className="small-margin-top">
                <TextField
                    label="Student name"
                    margin="normal"
                    variant="outlined"
                    fullWidth="true"
                />
                <TextField
                    label="Email"
                    margin="normal"
                    variant="outlined"
                    fullWidth="true"
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
                    fullWidth="true"
                />
            </div>
            <div className="small-margin-top center">
                <div className="button">Send</div>
            </div>
        </div>
    );
};

ContactUs.propTypes = {};

export default ContactUs;