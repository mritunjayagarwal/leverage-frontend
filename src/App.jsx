import "./App.css";
import Home from './Home/Home';
import {Routes, Route} from 'react-router-dom';
import Swap from "./components/Swap";
import {useAccount} from 'wagmi';
import Trade from "./Trade/Trade";

function App() {
  const {address, isConnected} = useAccount();

  return <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/swap" element={<Swap  isConnected={isConnected} address={address} />}></Route>
          <Route path="/trade" element = {<Trade />}></Route>
        </Routes>
      </div>
  </div>;
}

export default App;
