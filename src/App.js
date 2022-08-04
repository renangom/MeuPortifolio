import { useRef } from "react";
import { Footer } from "./components/Footer/Footer";
import GlobalStyle from "./GlobalStyles";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Projetos from "./pages/Projetos/Projetos";
import {Link} from 'react-scroll'
import Navbar from "./components/Navbar/Navbar";


function App() {

  const inicio = useRef(null)
  const sobre = useRef(null)
  const projetos = useRef(null)
  const contato = useRef(null)

  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Home />
      <About />
      <Projetos />
      <Footer />
    </div>
  );
}

export default App;
