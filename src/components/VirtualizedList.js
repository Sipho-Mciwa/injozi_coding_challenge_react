import React, {useState} from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';

function renderRow(props) {
    const { index, style, data} = props;

    return (
        <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton>
            <ListItemText primary={`${data[index]}`} onClick={()=>{console.log(`You clicked: ${data[index]}`)}}/>
        </ListItemButton>
        </ListItem>
    );
}



export default function VirtualizedList({yearList, count}) {

    return (
        <Box
        sx={{ width: '100%', height: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
        <FixedSizeList
            height={217}
            width={542}
            itemSize={46}
            itemData={yearList}
            itemCount={count}
            overscanCount={5}
        >
            {renderRow}
        </FixedSizeList>
        </Box>
    );
}
