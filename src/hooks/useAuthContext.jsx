import { useContext } from 'react';
import { AuthContext } from '../contexts/constants';

const useAuthContext = () => {
    return useContext(AuthContext);
};

export default useAuthContext;
