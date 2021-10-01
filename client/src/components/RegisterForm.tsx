import React, {FC, useContext, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {Avatar, Button, Checkbox, Grid, Link, Paper, TextField, Typography} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {LOGIN_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";
import useInput from "../hooks/useInput";

const RegisterForm: FC = () => {
    const email = useInput('')
    const password = useInput('')
    const {store} = useContext(Context);
    const history = useHistory();

    const paperStyle={padding :20,height:'70vh',width:380, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {store.registration(email.value, password.value)}
    }

    return (
        <Grid>
            <Paper elevation={5} style={paperStyle}>
                <Grid>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField
                    label='Email'
                    placeholder='Enter email'
                    onKeyPress={keyPressHandler}
                    {...email}
                    fullWidth
                    required
                />
                <TextField
                    label='Password'
                    placeholder='Enter password'
                    onKeyPress={keyPressHandler}
                    {...password}
                    type='password'
                    fullWidth
                    required
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button
                    type='submit'
                    color='primary'
                    variant="contained"
                    onClick={() => store.registration(email.value, password.value)}
                    style={btnstyle}
                    fullWidth
                >
                    Sign up
                </Button>
                <Typography > Already have an account?
                    <Link onClick={() => history.push(LOGIN_ROUTE)}>
                        Sign In
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    );
};

export default observer(RegisterForm);