import styled from "styled-components";
import banner from "./assets/banner.jpg";
import "./app.css";
import CashGames from "./components/CashGames/CashGames";
import Events from "./components/CashGames/Events";
import { Route, Routes } from "react-router-dom";
import SpringSeries from "./components/SpringSeries/SpringSeries";
import FinalStage from "./components/FinalStage/FinalStage";
import Header from "./Header";

function App() {
  return (
    <BigWrapper>
      <Main>
        <Header />
        <Headerpic src={banner} alt="" />
        <div style={{ padding: "0 1rem" }}>
          <h4 style={{ color: "whitesmoke" }}>
            მოიპოვე მრავალფეროვანი პრიზები და 10 საგზურიდან ერთ-ერთი
          </h4>
          <h5 style={{ color: "gray" }}>მოხვდი პოკერის ფესტივალზე მალტაში</h5>
        </div>
        <EventRoutes>
          <Events />
          <Routes>
            <Route path="/" element={<CashGames />} />
            <Route path="spring" element={<SpringSeries />} />
            <Route path="final" element={<FinalStage />} />
          </Routes>
        </EventRoutes>
        <Footer>
          <Btn>ითამაშე</Btn>
        </Footer>
      </Main>
    </BigWrapper>
  );
}

export default App;

const Btn = styled.button`
  background-color: #ef5a21;
  border: none;
  padding: 0.3rem 2rem;
  font-weight: bold;
  border-radius: 5px;
  color: whitesmoke;
  cursor: pointer;
`;
const Footer = styled.div`
  border-top: 3px solid #ef5a21;
  padding: 1rem;
  width: 100%;
  text-align: center;
  position: sticky;
  bottom: 0;
  background-color: #1c1d1e;
  z-index: 10;
`;
const EventRoutes = styled.div``;
const BigWrapper = styled.div`
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  width: 100%;
`;
const Main = styled.div`
  border-radius: 5px;
  width: 45rem;
  background-color: #1c1d1e;

  *::-webkit-scrollbar {
    width: 5px;
    height: 6rem;
  }

  *::-webkit-scrollbar-track {
    background: #2c3234;
  }

  *::-webkit-scrollbar-thumb {
    background: #ef5a21;
    border-radius: 5px;
    height: 2rem;
  }
`;
const Headerpic = styled.img`
  width: 100%;
  border-radius: 5px;
`;
