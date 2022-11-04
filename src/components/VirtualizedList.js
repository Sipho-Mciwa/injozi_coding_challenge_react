import React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import {RaceDetails} from '../service/Service';

function renderRow(props)  {
    const { index, style, data} = props;
    let dataList = data['yearList']
    let getData = data['results']

    return (
        <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton>
            <ListItemText style={{textAlign: 'center'}} primary={`${dataList[index]}`} onClick={()=>{
                const response = RaceDetails(dataList[index]);
                response.then((res) => {
                    getData(res, dataList[index]);
                })
            }}
                primaryTypographyProps={{fontSize: '30px', fontFamily: 'Rajdhani'}}
            />
        </ListItemButton>
        </ListItem>
    );
}

export default function VirtualizedList({yearList, count, getResultsData, resultData}) {
    return (
        <Box
        sx={{ width: '100%', height: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
        <FixedSizeList
            height={resultData ? 217 : 750}
            width={1101}
            itemSize={46}
            itemData={{'yearList': yearList, 'results': getResultsData}}
            itemCount={count}
            overscanCount={5}
        >
            {renderRow}
        </FixedSizeList>
        </Box>
    );
}
