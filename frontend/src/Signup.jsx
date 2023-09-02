import { Card, Button, TextField, Typography } from '@mui/material';
import React from 'react';
function Signup() {

    const [email,setEmail]=React.useState("");
    const [pass,setPass]=React.useState("");

    return (
        <div style={{
            backgroundColor: "",
        }}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                paddingTop:"150px",
                paddingBottom:"20px"
            }}>
                <Typography variant="h6" component="h2">
                    Welcome to coursera sign up here 
                </Typography>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
            }}>
                <Card variant="outlined" style={{
                    width:"400px",
                    height:"auto",
                    padding:"30px"

                }}>

                    <TextField

                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        type='text'
                        fullWidth={true}
                        onChange={(e)=>{
                            setEmail(e.target.value);
                        }}

                    />

                    <br /><br />

                    <TextField

                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        type='password'
                        fullWidth={true}
                        onChange={(e)=>{
                            setPass(e.target.value);
                        }}

                    />

                    <br /><br />

                    <Button
                        size='large'
                        variant="contained"
                        onClick={()=>{
                            fetch('http://localhost:3000/admin/signup',{method:"POST",

                            body:JSON.stringify({
                                username:email,
                                password:pass
                            }),
                            headers:{
                                "Content-type":"application/json"
                            }
                        
                        }).then((resp)=>{
                            resp.json().then((data)=>{
                                localStorage.setItem("token",data.token);
                                window.location.reload();
                            })
                        })
                        }}
                    >Signup</Button>

                </Card>
            </div>
        </div>
    )
}

export default Signup;