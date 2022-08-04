import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
}
// render={() => (
//   <Page1 />
//   // <Switch>
//   //   <Route exact path="/page1">
//   //     <Page1 />
//   //   </Route>
//   //   <Route path="/page1/detailA">
//   //     <Page1DetailA />
//   //   </Route>
//   //   <Route path="/page1/detailB">
//   //     <Page1DetailB />
//   //   </Route>
//   // </Switch>
// )}
