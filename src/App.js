import { useRef } from "react";
import GlobalStyle from "./GlobalStyles";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Projetos from "./pages/Projetos/Projetos";


function App() {

  const inicio = useRef(null)
  const sobre = useRef(null)
  const projetos = useRef(null)
  const contato = useRef(null)

  return (
    <div className="App">
      <GlobalStyle />
      <Home ref={inicio} inicio={inicio} sobre={sobre} projetos={projetos} contato={contato} />
      <About ref={sobre} />
      <Projetos />
    </div>
  );
}

export default App;
