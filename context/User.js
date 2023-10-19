import { createContext, useEffect, useState } from "react";
import api from '../config/api';

export const UserContext = createContext(null);
UserContext.displayName = 'UserContext';

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            const response = await api.get('/get-all');
            setUsers(response.data.data);
        } catch (err) {
            console.log(err);
        }
    }

    const userExists = async (user) => {
        try {
            const response = await api.post('/login', user)
                .then(res => {
                    console.log(res.status);
                    switch(res.status){
                        case 200:
                            return true;
                        case 400:
                            return false;
                    }
                });

            return response;
        } catch (err) {
            console.log(err.message);
            return false;
        }
    }

    const addUser = async (user) => {
        try {
            await api.post('/', user)
                .then(res => {
                    switch(res.status){
                        case 200:
                            console.log('cadastrado com sucesso');
                            break;
                        default:
                            console.log('erro');
                            break;
                    }
                });
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <UserContext.Provider
            value={{
                users,
                userExists,
                addUser
            }}
        >
            {children}
        </UserContext.Provider>
    )
}