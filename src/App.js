import "./App.css";
import Logo from './component/Logo/Logo';
import Navbar from "./component/Navbar/Navbar";
import Body from "./component/Body/Body/Body";
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Logo/>
      <Navbar/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
