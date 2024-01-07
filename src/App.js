import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Headers/Header';
import Body from './Components/Body/Body';

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Body></Body>

    <Routes>
        <Route path="/" element={Image} />
        <Route path="/text" />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
