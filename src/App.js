import Nav from "./components/Nav";
import './App.css'
import { Routes, Route} from 'react-router-dom'
import About from "./components/About";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
        </Routes>
        <Home />
      </main>
    </div>
  );
}

export default App;
