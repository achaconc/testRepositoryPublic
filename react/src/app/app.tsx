import * as React from 'react';
import { Header } from "./components/layout/header/header.component";
import { Navigation } from "./components/navigation/navigation.component";
import { Content } from "./components/layout/content/content.component";
import {
    BrowserRouter
} from "react-router-dom";

export const App: React.FunctionComponent = () => {

    return (

        <BrowserRouter>
            <Header />
            <Content>
                <Navigation />
            </Content>
        </BrowserRouter>
    );
}
