import React from "react";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import themeWSP from "./config/themeWSP";
import Main from "./pages/Main/Main";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import SignReset from "./pages/SignReset/SignReset";

const App = () => {
    return (
        <ThemeProvider theme={themeWSP}>
            <CssBaseline/>
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route path="/" exact>
                            <Main/>
                        </Route>
                        <Route path="/signin">
                            <SignIn/>
                        </Route>

                        <Route path="/signup">
                            <SignUp/>
                        </Route>

                        <Route path="/forgot">
                            <SignReset/>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
