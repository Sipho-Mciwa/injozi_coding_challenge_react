import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import VirtualizedList from "./VirtualizedList";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function generateYearList() {
    let Years = [];
    const currentYear = new Date().getFullYear();

    for (let i = currentYear; i >= 2005; i--) {
        Years.push(i);
    }

    return (Years);
}

export default function Appcontainer() {
    let yearList = generateYearList();
    let count = yearList.length

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" style={{paddingTop: '5%'}}>
                <Box sx={{ bgcolor: 'white', width: '100%', height: '100vh', padding: '15px'}} >
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                    <Typography style={{fontSize: '20px', color: 'black', textAlign: 'center', fontFamily: 'Rajdhani'}}>Select Year</Typography>
                        <Item style={{height: '25vh'}}>
                            <VirtualizedList yearList={yearList} count={count}/>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography style={{fontSize: '20px', color: 'black', textAlign: 'center', fontFamily: 'Rajdhani'}}>Select Race</Typography>
                        <Item style={{height: '25vh'}}>
                            <VirtualizedList />
                        </Item>
                    </Grid>
                    <Grid item xs={12}>
                        <Item style={{height: '67vh'}}>
                        <Typography style={{fontSize: '50px', color: 'black', textAlign: 'center', fontFamily: 'Rajdhani'}}>2022 RACE RESULTS</Typography>
                        </Item>
                    </Grid>
                </Grid>
                </Box>
            </Container>
        </React.Fragment>
    );
}