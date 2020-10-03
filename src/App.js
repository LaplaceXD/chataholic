import React from "react";
import styled from "styled-components";
import authService from "./services/authService";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
    const [user, loading, error] = useAuthState(authService.auth);

    return (
        <div className="App">
            <button onClick={() => authService.signInWithGoogle()}>Sign In With Google</button>
            {user && <h1>{user.displayName}</h1>}
        </div>
    );
}

export default App;
