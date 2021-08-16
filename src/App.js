import "./App.css";
import Logo from './component/Logo/Logo'
import Navbar from "./component/Navbar/Navbar";
import Join from "./component/Body/Join/JoinUs";
import Footer from './component/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Logo/>
      <Navbar/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
