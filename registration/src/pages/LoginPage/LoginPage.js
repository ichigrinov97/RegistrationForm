import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import style from './LoginPage.module.css';
import Header from '../../components/Header/Header.js';


function LoginPage() {

    const [value1, setValue1] = React.useState();
    const [value2, setValue2] = React.useState();
    
    function result1() {
        console.log(value1);
        console.log(value2);
        if(value2.length < 8){
            alert ('error')
        }else{
            alert ('pass is good')
        }
    }
    

   



    return (
        <div>
            <Header></Header>
            <div className={style.countainer}>
                <h1>LogIn</h1>
                <TextField onChange={(e) => setValue1(e.target.value)} id="standard-basic" label="Email" variant="standard" />
                <TextField onChange={(e) => setValue2(e.target.value)} id="standard-basic" label="Password" variant="standard" />
                <Button onClick={result1} variant="outlined">LogIn</Button>
                <div className={style.lowtext}>
                    <p>Already head an acoount?</p>
                    <a href="/registration">Sign In</a>
                </div>

            </div>
        </div>

    );
}

export default LoginPage;