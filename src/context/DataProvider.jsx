import React,{ ReactNode,createContext,useState } from "react";

export const DataContext = createContext(null);


const DataProvider = (props) => {
    
    const [notes,setNotes] = useState([]);
    const [archiveNotes,setarchieNotes] = useState([]);
    const [deleteNotes,setDeleteNotes] = useState([]);
    return (
        <DataContext.Provider value={{
            notes,
            setNotes,
            archiveNotes,
            setarchieNotes,
            deleteNotes,
            setDeleteNotes
        }}>
        {props.children}
        </DataContext.Provider>
    )
}
export default DataProvider;