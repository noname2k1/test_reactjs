import { useState } from 'react';
import { AuthContext } from './constants';

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('user_signed_in')) || {
            username: '',
        }
    );
    const [loading, setLoading] = useState(false);
    const handleSetUser = (user) => {
        setUser(user);
        localStorage.setItem('user_signed_in', JSON.stringify(user));
    };

    return (
        <AuthContext.Provider
            value={{ user, handleSetUser, loading, setLoading }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
