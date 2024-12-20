import "./App.css";
import Footer from "./common/footer/footer";
import Navbar from "./common/navbar/navbar";
import HomePage from "./pages/home/home.page";

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
