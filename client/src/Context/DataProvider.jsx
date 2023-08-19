import { createContext, useState } from "react"

 

export const DataContext = createContext(null)

const DataProvider = ({ children })=>{
    const[account1,setAccount] = useState('');
    return(
   < DataContext.Provider value = {{
        account1,
        setAccount
       

    }}>
         { children }

    </DataContext.Provider>
    )

}
export default DataProvider;