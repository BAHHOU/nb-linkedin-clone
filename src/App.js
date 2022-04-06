import { BrowserRouter as Routes, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Routes>
          <Route exact path="/">
            <Login />
          </Route>
        </Routes>
      </Switch>
    </div>
  );
}

export default App;
