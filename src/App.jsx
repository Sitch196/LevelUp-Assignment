import styled from "styled-components";
import banner from "./assets/banner.jpg";
import CashGames from "./components/CashGames";
import "./app.css";
import Events from "./components/Events";
import { Route, Routes } from "react-router-dom";
import SpringSeries from "./components/SpringSeries";
import FinalStage from "./components/FinalStage";

function App() {
  return (
    <BigWrapper className="App">
      <Main>
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
      </Main>
    </BigWrapper>
  );
}

export default App;
const EventRoutes = styled.div``;
const BigWrapper = styled.div`
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  width: 100%;

  /* border: 2px solid green; */
`;
const Main = styled.div`
  border-radius: 5px;
  margin-top: 1rem;
  width: 40rem;
  /* border: 1px solid red; */
  background-color: #1c1d1e;
`;
const Headerpic = styled.img`
  width: 100%;
  border-radius: 5px;
`;
