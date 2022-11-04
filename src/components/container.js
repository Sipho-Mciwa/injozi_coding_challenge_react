import React, { useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import VirtualizedList from "./VirtualizedList";
import { Typography } from "@mui/material";
import ResultsComponent from "./resultsComponent";
import { RaceDetails } from "../service/Service";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function generateYearList(currentYear) {
    let Years = [];
    
    for (let i = currentYear; i >= 2005; i--) {
        Years.push(i);
    }

    return (Years);
}

export default function Appcontainer() {
    const currentYear = new Date().getFullYear();
    const [resultData, setResultData] = useState();
    const getResultsData = (data, year) => {setResultData({'data': data, 'year': year});}

    let yearList = generateYearList(currentYear);
    let count = yearList.length;

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" style={{paddingTop: '5%'}}>
                <Box sx={{ bgcolor: 'white', width: '100%', height: '90vh', padding: '15px'}} >
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                    <Typography style={{fontSize: resultData ? '20px' : '50px', color: 'black', textAlign: 'center', fontFamily: 'Rajdhani'}}>Select Year</Typography>
                        <Item style={{height: resultData ? '25vh' : '85vh'}}>
                            <VirtualizedList yearList={yearList} count={count} getResultsData={getResultsData} resultData={resultData}/>
                        </Item>
                    </Grid>
                    {resultData ?
                        <Grid item xs={12}>
                            <Item style={{height: '61vh'}}>
                                <Typography style={{fontSize: '50px', color: 'black', textAlign: 'center', fontFamily: 'Rajdhani'}}>{`${resultData['year']} RACE RESULTS`}</Typography>
                                <ResultsComponent resultData={resultData}/>
                            </Item>
                        </Grid>
                    : <div></div>}
                </Grid>
                </Box>
            </Container>
        </React.Fragment>
    );
}