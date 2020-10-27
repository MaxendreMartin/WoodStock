import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/menu";
import Jumbotron from "./components/jumbotron";
import About from "./components/about";
import Team from "./components/team";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
    return (
        <div className="App">
            <Menu />
            <Jumbotron />
            <About />
            <Team />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
