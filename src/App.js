import Header from "./components/Header/Header";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import New from "./components/New/New";
import List from "./components/List/List";

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route path="/new">
            <New />
          </Route>
          <Route path="/">
            <List />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div``;
