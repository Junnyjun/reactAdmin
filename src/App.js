import Topbar from "./components/topbar/topbar";
import Sidebar from "./components/sidebar/sidebar";
import './App.css';
import Home from "./components/pages/home/home";
function App() {
  return (
      <div className='App'>
        <Topbar />
        <div className='container'>
          <Sidebar />
          <Home />
        </div>
      </div>
  )
}

export default App;
