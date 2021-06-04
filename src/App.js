import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import ScannerPage from "./pages/ScannerPage";
import SearchPage from "./pages/SearchPage";
import ViewBookPage from "./pages/ViewBookPage";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/view" component={ViewBookPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/scan" component={ScannerPage} />
        </Switch>
      </div>
    </Router>
  );
}
