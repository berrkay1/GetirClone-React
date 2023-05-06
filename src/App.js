import Campaign from "./components/Campaign";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderSection from "./components/HeaderSection";
import MobileAppBar from "./components/MobileAppBar";

function App() {
  return (
    <div className="relative">
      <Header />
      <HeaderSection />
      <Categories />
      <Campaign />
      <MobileAppBar />
      <Footer />
    </div>
  );
}

export default App;
