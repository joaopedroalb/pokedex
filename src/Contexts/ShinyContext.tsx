import { createContext, ReactNode, useState } from "react";

type Shiny = {
    isActive:boolean
    setIsActive:React.Dispatch<React.SetStateAction<boolean>>;
}

type ProviderProps = {
    children:ReactNode
}

export const ShinyContext = createContext({} as Shiny)


export default function ShinyProvider({children}:ProviderProps){
    const [isActive,setIsActive] = useState(false)


    return (
        <ShinyContext.Provider value={{isActive,setIsActive}}>
            {children}
        </ShinyContext.Provider>
    )
}

