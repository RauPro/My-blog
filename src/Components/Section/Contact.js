import React from "react";
import Information from "./Containers/Information";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
export default function Contact(){
    return(
        <div className="pt-5 text-center container-sm w-50">
            <h1 className="h1 pt-4">Contact</h1>
            <form className="pt-4" noValidate autoComplete="off">
                <TextField id="name" label="Full Name" fullWidth="100" /><br/>
                <TextField id="subject" label="Subject" fullWidth="100" /><br/>
                <TextField id="email" label="Email" fullWidth="100" /><br/>
                <TextField
                    id="standard-multiline-static"
                    label="Message"
                    multiline
                    rows={8}
                    placeholder="Your message here"
                    fullWidth="100"
                />
                <Link to="/">
                <Button variant="contained" color="primary" className="mt-3">
                    Send
                </Button>
                </Link>
            </form>
        </div>
    );
}