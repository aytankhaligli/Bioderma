import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
