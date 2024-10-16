import "./App.css";

import Navbar from "./Navbar/Navbar";
import "./index.css";
import Footer from "./Footer/Footer";
import Home from "./home/home";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
