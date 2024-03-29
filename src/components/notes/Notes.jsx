import React from 'react'
import { Box } from '@mui/material'
import { styled } from '@mui/material';
import Form from './Form';
import ShowNotes from './ShowNotes';
import Archives from '../archive/Archives';
import DeleteNotes from '../deleteNotes/DeleteNotes';
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
const Notes = () => {
  return (
    <>
        <Box sx={{display:'flex'}}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader/>
            <Form/>
            <ShowNotes/>
            {/* <Archives/> */}
            {/* <DeleteNotes/> */}
        </Box>
        </Box>
    </>
  )
}

export default Notes