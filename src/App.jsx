import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Get from "./components/Get/Get";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Work from "./components/Work/Work";

function App() {
  return (
    <div>
      <Header />
      <div className="main_div">
        <Home />
        <Get />
        <Work />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
