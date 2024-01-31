import React, { useState, useRef, useContext } from 'react'
import { Box, TextField, ClickAwayListener } from '@mui/material'
import { styled } from '@mui/material'
import { DataContext } from '../../context/DataProvider';
import { v4 as uuid } from 'uuid';
const Container = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    width: '600px',
    boxShadow: '0 1px 2px 0 rgb(60 60 67/30%), 0 2p 6px 2px rga(60 64 67 / 15%)',
    padding: '10px 15px',
    borderRadius: '8px',
    border: '1px solid #e0e0e0',
    margin: 'auto',


})

const note = {
    id: uuid(),
    heading: '',
    text: ''
}

const Form = () => {
    
    const [showTextField, setShowTextField] = useState(false);
    const [addNote, setAddNotes] = useState(note);
    const { notes, setNotes } = useContext(DataContext);

    const containerRef = useRef();

    const onTextAreaClick = () => {
        setShowTextField(true);
        containerRef.current.style.minHeight = '70px'
    }
    const handleClickAway = () => {
        setShowTextField(false);
        containerRef.current.style.minHeight = '30px'
        setAddNotes({...note,id:uuid()});
        if(addNote.heading || addNote.text){
            setNotes(prevArr => [addNote,...prevArr]);
        }
        // console.log(notes);
    }
    const onTextChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        let changeNotes = {...addNote,[name]:value}
        setAddNotes(changeNotes);
    }
    return (
        <>
            <ClickAwayListener onClickAway={handleClickAway}>
                <Container ref={containerRef}>
                    {
                        showTextField && <TextField placeholder='Title' value={addNote.heading} variant='standard' InputProps={{ disableUnderline: true }} style={{ marginBottom: 10 }} name='heading' onChange={(e) => onTextChange(e)} />
                    }

                    <TextField placeholder='Take a note' onClick={onTextAreaClick} variant='standard' value={addNote.text} multiline InputProps={{ disableUnderline: true }} name='text' onChange={(e) => onTextChange(e)} />
                </Container>
            </ClickAwayListener>
        </>
    )
}

export default Form