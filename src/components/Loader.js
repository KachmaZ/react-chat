import React from 'react';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

const Loader = () => {
    return (
        <Container>
            <Grid container
                style={{ height: window.innerHeight - 50 }}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Grid container
                    alignItems={"center"}
                    direction={"column"}
                >
                    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;