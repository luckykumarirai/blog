import { BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./Navbar/navbar";
import Home from './Home/home';
import Login from './Login/login';
import Signup from './Signup/signup';
import Logout from "./Logout/logout";
import Footer from './Footer/footer';
import Createblog from "./Createblog/createblog";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login}  />
        <Route path="/logout" component={Logout} />
        <Route path="/createblog" component={Createblog} />
      </Switch>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
