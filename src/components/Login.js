import React from 'react';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'



const Login = () => {
    return (
        <Container>
            <Grid container
                style={{ height: window.innerHeight - 50 }}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Grid container
                    style={{width:400, background: 'lightgray'}}
                    alignItems={"center"}
                    direction={"column"}
                >
                    <Box p={5}>
                        <Button variant="outlined">
                            Войти с помощью Google
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;