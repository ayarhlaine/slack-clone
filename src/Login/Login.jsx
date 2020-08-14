import React from 'react';
import './Login.scss';
import { Button } from '@material-ui/core';
import { auth, provider } from '../db';
import { useStateValue } from '../Provider';
import { actionTypes } from '../reducer';
function Login() {
    // eslint-disable-next-line 
    const [state, dispatch] = useStateValue();
    const onLogin = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch(error => alert(error));
    }
    return (
        <div className="Login">
            <div className="Login__Container">
                <img src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/2019-01_BrandRefresh_Old-to-New-Final.gif" alt=""/>
                <h1>Sigin to Ayar Hlaine WorkSpace</h1>
                <p>ayarhlaine.slack.com</p>
                <Button onClick={onLogin}>Sigin with Google</Button>
            </div>
        </div>
    )
}

export default Login
