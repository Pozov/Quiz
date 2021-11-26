import React, {Component} from "react";
import Layout from "./hoc/Layout/Layout";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Quiz from "./containers/Quiz/Quiz";
import Auth from "./containers/Auth/Auth";
import QuizList from "./containers/QuizList/QuizList";
import QuizCreator from "./containers/QuizCreator/QuizCreator";

const App = () => (
            <Layout>
                <Router>
                    <Switch>
                        <Route path="/auth" > <Auth/> </Route>
                        <Route path="/quiz-creator" > <QuizCreator/> </Route>
                        <Route path="/quiz/:id" > <Quiz/> </Route>
                        <Route path="/" > <QuizList/> </Route>
                    </Switch>
                </Router>
             </Layout>
  )



export default App;
