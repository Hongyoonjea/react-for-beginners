import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        {/* 한번에 Route 하나만 렌더링 되는것 */}
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// Link컴포넌트는 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜줌