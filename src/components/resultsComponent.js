import React from "react";
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { Typography } from "@mui/material";
import Divider from '@mui/material/Divider'

function getResults(resultList) {
    let newList = [];

    for (let i = 0; i < resultList.length; i++) {
        let results = {
            'fullName': `${resultList[i]['Results'][0]['Driver']['givenName']} ${resultList[i]['Results'][0]['Driver']['familyName']}`,
            'Constructor': `${resultList[i]['Results'][0]['Constructor']['name']}`,
            'Status': `${resultList[i]['Results'][0]['status']}`,
            'raceName': `${resultList[i]['raceName']}`,
        };
        newList.push(results);
    }
    return (newList);
}

function filterResults(newList) {
    let  filteredList = [];
    let nameList = [];

    for (let i = 0; i < newList.length; i++) {
        let titleList = [];
        for (let j = 0; j < newList.length; j++) {
            if (newList[i]['fullName'] === newList[j]['fullName']) {
                titleList.push(newList[j]['raceName']);
            }
        }
        if (!nameList.includes(newList[i]['fullName'])) {
            nameList.push(newList[i]['fullName']);

            filteredList.push({
            'fullName': newList[i]['fullName'],
            'constructor': newList[i]['Constructor'],
            'status': newList[i]['Status'],
            'titles': titleList,
            'titleCount': titleList.length
            });
        }
    }
    return (filteredList);
}

function GenerateItem(item, i, handleClick, open) {
    return (
        <div >
            <ListItemButton key={i} onClick={handleClick} style={{background: i % 2 === 0 ? '#ededed' : 'white'}}>
                <ListItemText primary={
                    <div style={{display: 'flex', flexDirection: 'row',padding: 15,}}>
                        <Typography style={{paddingRight: '200px',fontSize: '20px', fontFamily: 'Rajdhani'}}>{item['fullName']}</Typography>
                        <Typography style={{paddingRight: '200px',fontSize: '20px', fontFamily: 'Rajdhani'}}>{item['constructor']}</Typography>
                        <Typography style={{paddingRight: '200px',fontSize: '20px', fontFamily: 'Rajdhani'}}>{item['status']}</Typography>
                        <Typography style={{paddingRight: '200px',fontSize: '20px', fontFamily: 'Rajdhani'}}>{item['titleCount']}</Typography>
                    </div>
                } 
                    primaryTypographyProps={{fontSize: '30px', fontFamily: 'Rajdhani'}}
                />
            </ListItemButton>
            <Collapse in={open} timeout={{enter: 1000, exit: 1000}} unmountOnExit>
                <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <Divider />
                    <ListItemText primary={`${item['titles']}`} />
                </ListItemButton>
                </List>
            </Collapse>
        </div>
    );
}

export default function ResultsComponent({resultData}) {
    let newList = getResults(resultData['data']);
    let filteredResults = filterResults(newList)
    const [open, setOpen] = React.useState(false);
    let randomKey = Math.random() * 10;
    let i = 0;

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div>
            <List
                key={randomKey.toString()}
                sx={{ width: '100%', bgcolor: 'background.paper', height: '100%'}}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        <div style={{display: 'flex', flexDirection: 'row',padding: 15,}}>
                            <Typography style={{paddingRight: '200px', fontFamily: 'Rajdhani', fontWeight: 'bold'}}>Name</Typography>
                            <Typography style={{paddingRight: '200px', fontFamily: 'Rajdhani', fontWeight: 'bold'}}>Constructor</Typography>
                            <Typography style={{paddingRight: '200px', fontFamily: 'Rajdhani', fontWeight: 'bold'}}>status</Typography>
                            <Typography style={{paddingRight: '200px', fontFamily: 'Rajdhani', fontWeight: 'bold'}}><span style={{color: 'red'}}>Grand Prix (s)</span></Typography>
                        </div>
                        <Divider />
                    </ListSubheader>
                }
            >
                <div style={{overflowY: 'scroll', height: '404px'}}>
                    {filteredResults.map((item) => (
                        GenerateItem(item, i++, handleClick, open)
                    ))}
                </div>
            </List>
        </div>
    );
}