import React from 'react';
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";

const RegisteredUser = ({user}) => {
    return (
        <>
            <Button component={Link} to="/track_history" color="inherit">History Track | </Button>

            Hello, {user.username}

        </>
    );
};

export default RegisteredUser;