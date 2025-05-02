import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import style from './Registration.module.css';
import Header from '../../components/Header/Header.js'

function Registration() {


    return (
        <div>
            <Header></Header>
            <div className={style.countainer}>
                <h1>Registration</h1>
                <TextField id="standard-basic" label="Email" variant="standard" />
                <TextField id="standard-basic" label="Password" variant="standard" />
                <TextField id="standard-basic" label="Confirm Password" variant="standard" />
                <Button variant="outlined">Sign Up</Button>
                <div className={style.lowtext}>
                    <p>Already head an acoount?</p>
                    <a href="/login">Sign In</a>
                </div>

            </div>
        </div>

    );
}

export default Registration;