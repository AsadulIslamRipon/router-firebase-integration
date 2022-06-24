import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Home = () => {

    const [user] = useAuthState(auth);
    return (
        <div>
            <h3>This is Home</h3>
            <h1>{user.displayName}</h1>
        </div>
    );
};

export default Home;