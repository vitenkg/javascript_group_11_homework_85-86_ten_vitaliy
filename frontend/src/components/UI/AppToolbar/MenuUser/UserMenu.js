import React from 'react';
import {Button, Menu, MenuItem} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {logoutUser} from "../../../../store/Actions/usersActions";
import {Link} from "react-router-dom";

const UserMenu = ({user}) => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Button component={Link} to="/track_history" color="inherit">History Track | </Button>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} color="inherit">
                Hello, {user.username}!
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem onClick={() => dispatch(logoutUser())}>Logout</MenuItem>
            </Menu>
        </>);
};

export default UserMenu;