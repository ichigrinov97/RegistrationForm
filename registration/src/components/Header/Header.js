import * as React from 'react';
import Button from '@mui/material/Button';
import style from '../Header/Header.module.css'

function Header() {




    return (

        <div className={style.headerCount}>
            <h1>This is Header</h1>
            <div className={style.buttons}>
                <Button variant="contained"><a href="/login">LogIn</a></Button>
                <Button variant="outlined"><a href="/registration">Registration</a></Button>
            </div>

        </div>

    );
}

export default Header;