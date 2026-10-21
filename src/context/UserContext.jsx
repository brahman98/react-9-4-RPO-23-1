import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({children}) {
    const [userName, setUserName] = useState('Viktor');

    return (
        <UserContext.Provider value={{ userName, setUserName }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    const context = useContext(UserContext);

    if (context === null) {
        throw new Error("useUser должен использоваться внутри UserProvider");
    }

    return context;
}

