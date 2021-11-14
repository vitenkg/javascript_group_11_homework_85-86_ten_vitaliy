import React, {useState} from 'react';

const RegisteredUser = ({user}) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    console.log(user);
    return (
        <>
            Hello, {user.username}
        </>
    );
};

export default RegisteredUser;