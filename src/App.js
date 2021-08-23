import "./App.css";
import { Route, BrowserRouter as Router } from 'react-router-dom' 
import Logo from './component/Logo/Logo';
import Navbar from "./component/Navbar/Navbar";
import Body from "./component/Body/Body/Body";
import About from './component/About/About';
import Campaign from './component/Campaign/Campaign';
import Blogs from './component/Blogs/Blogs';
import Events from './component/Events/Events'
import Footer from './component/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
      <Logo/>
      <Navbar/>
      < Route exact path='/' component={Body}/>
      < Route exact path='/about' component={About}/>
      < Route exact path='/campaign' component={Campaign}/>
      < Route exact path='/blogs' component={Blogs}/>
      < Route exact path='/events' component={Events}/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
