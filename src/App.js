import Campaign from "./components/Campaign";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderSection from "./components/HeaderSection";
import MobileAppBar from "./components/MobileAppBar";

function App() {
  return (
    <div>
      <Header />
      <HeaderSection />
      <Categories />
      <MobileAppBar />
      <Campaign />
      <Footer />
    </div>
  );
}

export default App;
