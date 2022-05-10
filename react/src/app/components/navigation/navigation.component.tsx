import React from "react";
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import {Home} from "./home/home.component";

export const Navigation: React.FunctionComponent = () => (
    <Routes>
        <Route
            path="/"
            element={<Home/>}
        />
        <Route
            path="*"
            element={<Navigate to="/" />}
        />
    </Routes>
)