import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SwapDrawer from './SwapDrawer';
import Notes from './notes/Notes';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import Archives from './archive/Archives';
import DeleteNotes from './deleteNotes/DeleteNotes';
import Hello from './Hello';

const Home = () => {
    return (
        <>
            <Box style={{ display: 'flex', width: '100%' }}>

                <Router>
                    <SwapDrawer />
                    {/* <Notes /> */}
                    <Routes>
                        <Route path="/" element={<Notes />}></Route>
                        <Route path="/archive" element={<Archives />}></Route>
                        <Route path="/delete" element={<DeleteNotes />}></Route>
                       
                        
                    </Routes>
                </Router>
            </Box>

        </>

    )
}

export default Home