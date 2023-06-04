import React, {createContext, useContext, useState, useEffect} from 'react';

interface DataLocalProviderProps {
    children: React.ReactNode;
}

const DataLocalContext = createContext({});

 export const DataLocalProvider: React.FC<DataLocalProviderProps> = ({ children }) => {
    return (
        <DataLocalContext.Provider value={{}}>
            {children}
        </DataLocalContext.Provider>
    )
 }

 export const useDataLocal = () => {
    const context = useContext(DataLocalContext);
    if(!context) throw new Error('useDataLocal must be used within a DataLocalProvider')

    return context;
}