import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./component/header";
import Footer from "./component/Fotter";
const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
      <Container>
      <Outlet/>
      </Container>
      </main>
      <Footer />
    </>
  );
}

export default App