 import Header from "./componts/1.heder/heder";
 import HiroSinction from "./componts/2.hiro-sinction/hiro-sinction";
 import Mine from "./componts/3.mine/mine";
 import ContactUs from "./componts/4.contact-us/contact-us";
 import Footer from "./componts/footer/footer";
import './App.css';
function App() {
  return (
    <div className="container" style={{ color: "#fff" }}>
    <Header />
    <HiroSinction />
    <hr />
    <Mine />
    <hr />
    <ContactUs />
    <hr />
    <Footer />
</div>
  );
}

export default App;