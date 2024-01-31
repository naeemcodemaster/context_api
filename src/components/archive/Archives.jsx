import React, { useContext } from 'react'
import { DataContext } from '../../context/DataProvider';
import { Card, CardActions, CardContent, Grid, styled,Box } from '@mui/material';
import Archive from '@mui/icons-material/Archive';
import Delete from '@mui/icons-material/Delete';
const StyledCard = styled(Card)({
    width: '240px',
    margin: '8px 5px',
    boxShadow: 'none',
    border: '1px solid #f3f3f3',
    borderRadius: '8px',
    padding: '5px 10px'
})
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));
const Archives = () => {
    const { notes, setNotes, archiveNotes, setarchieNotes, setDeleteNotes } = useContext(DataContext);
    console.log(notes);

    // Archive note
    const archiveNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setarchieNotes(prev => [note, ...prev]);

    }
    const deleteNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setDeleteNotes(prev => [note, ...prev]);
    }

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    <Grid container>

                        {
                            archiveNotes.length > 0 ?
                                archiveNotes.map((note, index) => (
                                    <>
                                        <Grid item>
                                            <StyledCard>
                                                <p>{note.heading}</p>
                                                <p>{note.text}</p>

                                                <CardContent>
                                                </CardContent>
                                                <CardActions>

                                                    {/* <Archive fontSize='small' style={{ marginLeft: 'auto' }} onClick={() => archiveNote(note)} /> */}
                                                    {/* <Delete fontSize='small' onClick={() => deleteNote(note)} /> */}

                                                </CardActions>
                                            </StyledCard>
                                        </Grid>
                                    </>
                                )) : "No Archive"
                        }

                    </Grid>

                </Box>
            </Box>
        </>
    )
}

export default Archives