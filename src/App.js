import './App.css';
import Info from "./components/Info"
import About from "./components/About"
import Interest from "./components/Interest"
import Footer from "./components/Footer"

const App = () => {
  return(
    <div className="container">
      <div className="main-container">
        <Info />
        <About />
        <Interest />
        <Footer />
      </div>
    </div>
  )
}

export default App;
