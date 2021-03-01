import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import App from "./App"
import GetStarted from "./core/GetStarted"


const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/getstarted" component={GetStarted} />
                </Switch>
            </Router>
        </>
    )
}

export default Routes