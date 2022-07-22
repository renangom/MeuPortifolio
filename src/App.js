import { useRef } from "react";
import GlobalStyle from "./GlobalStyles";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";


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
    </div>
  );
}

export default App;
