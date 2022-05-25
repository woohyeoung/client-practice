import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/header/index";
import MainPage from "./pages/main/index";
import ErrorPage from "./pages/error/index";
import { Test } from "./test";
import { BoardList } from "./pages/board/list/boardList";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path={"/test"} component={Test} />
          <Route path={"/board/list"} component={BoardList} />
          <Route path={"/"} component={MainPage} exact />
          <Route path={"*"} component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
