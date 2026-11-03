import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export function UserProvider({children}) {
    const [userName, setUserName] = useState('Viktor');
    const [avatar, setAvatar] = useState(() => {
        return localStorage.getItem("avatar") || "";
    });

    useEffect(() => {
        try {
            if (avatar) {
                localStorage.setItem("avatar", avatar);
            } else {
                localStorage.removeItem("avatar");
            }
        } catch (error) {
            console.error("Не удалось сохранить аватарку:", error)
        }
    }, [avatar]);

    return (
        <UserContext.Provider value={{ userName, setUserName, avatar, setAvatar }}>
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

