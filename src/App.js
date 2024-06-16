import './App.css';
import Header from "./components/header.jsx";
import Feed from "./components/feed.jsx";
import Navbar from "./components/navbar.jsx";
function App() {
  return (
    <div>
    <Navbar />
      <div className="App">
        <Header />
      </div>
      <div>
        <Feed />
      </div>
    </div>
  );
}

export default App;
