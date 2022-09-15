import React,{useState, userReducer, useContext} from 'react'

const initialState={
    isLoading:false,
    showAlert:false,
    alertType:'',
    alertText:''
}

const AppContext = React.createContext();

const AppProvider = ({children}) =>  {
    const [state, setState] = useState(initialState)

    return <AppContext.Provider value={{...state}}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () =>{
    return useContext(AppContext);
}

export {AppProvider, initialState, useAppContext}