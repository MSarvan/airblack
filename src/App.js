import CertificateContainer from "./components/CertificateContainer";
import Form from "./components/Form";
import Header from "./components/Header";
import JoinContainer from "./components/JoinContainer";
import ProffesionalContainer from "./components/ProffesionalContainer";
import "./styles/App.scss";

function App() {
  return <div className="App">
    <Header />
    <ProffesionalContainer />
    <Form />
    <JoinContainer />
    <CertificateContainer />
  </div>;
}

export default App;
