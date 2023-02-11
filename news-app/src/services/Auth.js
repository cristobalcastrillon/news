import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Auth() {
    
    const navigate = useNavigate();

    const [authenticated, setAuthenticated] = useState(null);

    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");

        if (loggedInUser) {
            setAuthenticated(true);
            navigate("/home")            
        }

    }, [navigate]);

    if(!authenticated) {
        return <Navigate to="/login" replace={true}/>
    }
}

export default Auth