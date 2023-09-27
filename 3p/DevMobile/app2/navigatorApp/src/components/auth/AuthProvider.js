import { createContext, useContext, useState } from "react";
import { useFonts } from 'expo-font';

const AuthContext = createContext();
const useAuth = () => {
    return useContext(AuthContext)
}
const AuthProvider = ({ children }) => {

    const [user, seTUser] = useState(null)

    const login = (login, senha) => {
        if (login == 'admin' && senha == '123') {
            seTUser({
                nome: "sese",
                login: 'admin',
                senha: '123',
                token: 'SHDAHSDAHSDSDHUAS18923causdh'
            })
            return true;

        } else {
            console.log("senha ou login incorretos");
        }



    }
    const logout = () => {
        seTUser(null)

    }
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>

    )
}

export { useAuth, AuthContext, AuthProvider}