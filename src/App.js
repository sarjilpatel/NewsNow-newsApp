import "./App.css";

import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App =()=> {


  const [progress, setProgress] = useState(0);
  

  
    let pageSize = 5;
    let apiKey=process.env.REACT_APP_NEWS_API;

    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            height = {3}
            color= "#f11946"
            progress={progress}          />
          <Switch>
            <Route exact path="/">
              <News setProgress={setProgress}
                key="/"
                pageSize={pageSize}
                apiKey={apiKey}
                country="In"
                category="general"
              />
            </Route>

            <Route exact path="/business">
              <News setProgress={setProgress}
                key="business"
                pageSize={pageSize}
                apiKey={apiKey}
                country="In"
                category="business"
              />
            </Route>

            <Route exact path="/entertainment">
              <News setProgress={setProgress}
                key="entertainment"
                pageSize={pageSize}
                apiKey={apiKey}
                country="In"
                category="entertainment"
              />
            </Route>

            <Route exact path="/health">
              <News setProgress={setProgress}
                key="health"
                pageSize={pageSize}
                apiKey={apiKey}
                country="In"
                category="health"
              />
            </Route>

            <Route exact path="/science">
              <News setProgress={setProgress}
                key="science"
                pageSize={pageSize}
                apiKey={apiKey}
                country="In"
                category="science"
              />
            </Route>

            <Route exact path="/sports">
              <News setProgress={setProgress}
                key="sports"
                pageSize={pageSize}
                apiKey={apiKey}
                country="In"
                category="sports"
              />
            </Route>

            <Route exact path="/technology">
              <News setProgress={setProgress}
                key="technology"
                pageSize={pageSize}
                apiKey={apiKey}
                country="In"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  
}

export default App;
