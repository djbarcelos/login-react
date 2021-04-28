import { Link, Typography } from '@material-ui/core';
import React from 'react';

interface ICopyright {
    defaultValue: String,
}

const Copyright: React.FC<ICopyright> = (props) => {
    return (
        <>
            <Typography variant="body2" color="textSecondary" align="center">
                <Link color="inherit" href="#">
                    {props.defaultValue}
                </Link>{' '}
                <b>{'Copyright © '}</b>
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </>
    );
}

export default Copyright;