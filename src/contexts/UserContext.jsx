
import { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import {getAuth} from 'firebase/auth';

export const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = () => {

    const [user, setUser] = useState(null);

    const authInfo = {};

    return (
        <AuthContext.Provider value={authInfo}>
            
        </AuthContext.Provider>
    );
};

export default UserContext;