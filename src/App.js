
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Main from "./components/Main";
import Template from "./components/Template";
import Works from "./components/Works";

function App() {
  return ( 
        <div className="App">
          <Template>
            <Header/>
            <Main/>
            <About/>
            <Works/>
            {/* <Contact/> */}
          </Template>
      </div>
  );
}

export default App;
