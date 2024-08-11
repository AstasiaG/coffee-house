import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/UI/Navbar/Navbar';
import './styles/styles.scss';
import { Home } from './pages/Home';
import { Footer } from './components/UI/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />}/>
      </Routes>
    	<Footer />
    </BrowserRouter>
  );
}

export default App;
