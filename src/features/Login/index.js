import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {loginStart} from './userSlice';
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { useHistory } from 'react-router-dom';
import jwtDecode from "jwt-decode";
import GlazedLogo from '../../assets/glazed.jpg'


const Login = (React.FC = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const history = useHistory();
    const [details, setDetails] = useState({
        email: "",
        password: "",
    });

    const loginHandler = (e) => {
        e.preventDefault();
        dispatch(loginStart(details));
    }

    let jwtToken = localStorage.getItem('jwt');
    console.log(jwtToken);
    if (jwtToken) {
        console.log('here');
        if (jwtDecode(jwtToken).role === 'admin'){
            history.push('/adminDashboard');
        } else {
            history.push('/random');
        }
    } 

    return (
        <div className="login">
            <Container component="main" maxWidth="xs">
                <form className="login_form">
                    <div className={"mt-3 mt-md-5"}>
                        <div className={"text-center"}>
                            <img 
                                src={GlazedLogo}
                                alt="Glazed Logo"
                            />
                            <Typography
                                className="mt-3 font-weight-normal"
                                component="h1"
                                variant="h6"
                            >
                                Login
                            </Typography>
                        </div>
    
                        <div className="mt-4">
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                type="email"
                                onChange={(e) =>
                                    setDetails({
                                        ...details,
                                        email: e.target.value,
                                    })
                                }
                            />
    
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                label="Password"
                                name="password"
                                type="password"
                                onChange={(e) =>
                                    setDetails({
                                        ...details,
                                        password: e.target.value,
                                    })
                                }
                            />
    
                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                color="primary"
                                size="large"
                                className="mb-3 mb-md-4 mt-4"
                                onClick= {(e) => loginHandler(e)}
                            >
                                Login
                            </Button>
                        </div>
                    </div>
                </form>
            </Container>
        </div>
    );
});


export default Login;