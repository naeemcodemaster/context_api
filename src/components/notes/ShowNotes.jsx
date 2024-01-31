import React, { useContext } from 'react'
import { DataContext } from '../../context/DataProvider';
import { Card, CardActions, CardContent, Grid, styled } from '@mui/material';
import Archive from '@mui/icons-material/Archive';
import Delete from '@mui/icons-material/Delete';
const StyledCard = styled(Card)({
    width: '240px',
    margin: '8px 5px',
    boxShadow: 'none',
    border: '1px solid #f3f3f3',
    borderRadius: '8px',
    padding:'5px 10px'
})
const ShowNotes = () => {
    const { notes,setNotes,archiveNotes,setarchieNotes,setDeleteNotes } = useContext(DataContext);
    console.log(notes);

    // Archive note
    const archiveNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setarchieNotes(prev => [note,...prev]);
        
    }
    const deleteNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setDeleteNotes(prev => [note,...prev]);
    }
    return (
        <>

            <Grid container>

                {
                    notes.length > 0 ?
                    notes.map((note, index) => (
                        <>
                            <Grid item>
                                <StyledCard>
                                    <p>{note.heading}</p>
                                    <p>{note.text}</p>
                                
                                <CardContent>
                                </CardContent>
                                <CardActions>

                                    <Archive fontSize='small' style={{marginLeft:'auto'}} onClick={() => archiveNote(note)}/>
                                    <Delete fontSize='small' onClick={() => deleteNote(note)}/>

                                </CardActions>
                                </StyledCard>
                            </Grid>
                        </>
                    )) : <p>No notes</p>
                }
 
        </Grid>


        </>
    )
}

export default ShowNotes