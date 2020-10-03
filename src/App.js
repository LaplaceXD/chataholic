import React from "react";
import authService from "./services/authService";
import { useAuthState } from "react-firebase-hooks/auth";
import Button from "./components/common/Button";

function App() {
    const [user, loading, error] = useAuthState(authService.auth);

    return (
        <div className="App">
            <Button theme="google" label="Sign in with Google" icon={["fab", "google"]} />
            {user && <h1>{user.displayName}</h1>}
        </div>
    );
}

export default App;
