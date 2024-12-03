
import About from "./components/About";
import Header from "./components/Header";
import Main from "./components/Main";
import Template from "./components/Template";

function App() {
  return ( 
        <div className="App">
          <Template>
            <Header/>
            <Main/>
            <About/>
          </Template>
      </div>
  );
}

export default App;
